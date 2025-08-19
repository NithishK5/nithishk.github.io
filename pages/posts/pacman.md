---
title: "Pac-Man, Optimally — Heuristics, Search & Engineering Notes from FIT5047 A1"
date: 2025-08-19
duration: 8min
lang: en
description: What I built and learned while implementing A* search, heuristics, and score-maximizing strategies for the FIT5047 Pac-Man assignment (Q1a–Q1c).
recording: false
type: blog
development: true
---

I’ve been working through **FIT5047 — Assignment 1: Search**.  
It looks like a toy game; it isn’t. It’s a tight exercise in _problem modeling, admissible heuristics, and engineering discipline_ under timeouts.

Below is a engineering-oriented write-up of how I approached **Q1a (single dot)**, **Q1b (reach any one of many dots)**, and **Q1c (maximize score with many dots)** — plus what I learned.

---

## TL;DR

- **Optimal pathfinding:** A\* with **Manhattan** on unit grids + a clean stale-entry guard + `(f, h)` tie-break.
- **Reach any dot efficiently:** A\* with a **perfect nearest-food heuristic** from a **multi-source BFS** precompute (exact maze distance to the nearest dot for every cell).
- **Maximize score with many dots:** A layered planner:
  1. **Greedy with 3-step lookahead** (walls-aware distances),
  2. **Exact finisher** (Held–Karp DP over maze distances) when few dots remain,
  3. **Robust fallback**: state-space **A\*** using a **maze-distance MST heuristic**.

---

## Project Shape

The codebase separates **problem modeling** from **algorithms**:

- `problems/*.py` → `getStartState()`, `isGoalState(state)`, `getSuccessors(state)`
- `solvers/*.py` → returns a **list of Directions** (the plan)

This lets me iterate on heuristics and strategies without touching environment code.

---

## Core Ideas & How They Work

### 1) Optimal point-to-point paths (single target)

- **State:** `(x, y)`
- **Moves:** N/S/E/W, cost = 1
- **Heuristic:** `h = Manhattan` (admissible & consistent on unit grids)

**A\*** essentials

- Priority `f = g + h`
- **Stale-entry guard** so outdated PQ entries don’t cause extra expansions:
  ```python
  state, g = frontier.pop()
  if g != best_g.get(state, float("inf")):
      continue
  ```
- **Tie-break** with `(f, h)` so equal-`f` nodes with smaller `h` expand first (plateau trimming).

**Why it works:** Consistent `h` ⇒ the first goal popped is optimal; the tie-break quietly reduces expansions.

---

### 2) Reach any one of many dots with minimal expansions

Plain Manhattan to the **nearest** dot still expands too much on twisty maps. I precompute the **exact distance to the nearest dot for every cell**:

```python
# Multi-source BFS, seeded by all food cells at distance 0
dist = [[INF]*H for _ in range(W)]
Q = Queue()
for (fx, fy) in foods:
    dist[fx][fy] = 0
    Q.push((fx, fy))

while not Q.isEmpty():
    x, y = Q.pop()
    for nx, ny in neighbors((x, y)):
        if dist[nx][ny] > dist[x][y] + 1:
            dist[nx][ny] = dist[x][y] + 1
            Q.push((nx, ny))
```

**Heuristic query during A\*:**  
`h(state) = dist[state.x][state.y]` → exact nearest-food distance.

This `h` is **admissible, consistent, and exact** for “nearest food”. I keep the `(f, h)` tie-break to reduce plateaus further.

**Why it works:** Precomputation turns heuristic queries into **O(1)** exact answers; expansions drop sharply.

---

### 3) Maximize score across many dots (10 per dot, −1 per step)

This is a **sequencing** problem: eat lots of dots while avoiding long, low-yield treks. I use a **layered planner**:

#### 3.1 Midgame — Greedy with **3-step lookahead** (walls-aware)

- From the current position, run **BFS** → exact maze distances to all cells + parent map.
- Consider top **K₁** nearest dots; for each candidate `f₁`:
  - Estimate the best `f₂` and `f₃` using **cached BFS grids** from `f₁` and `f₂`.
  - **Score:**
    ```
    (10 - d1)_+ + (10 - d2)_+ + 0.8·(10 - d3)_+ + 0.05·local_density
    ```
    where `local_density` = #dots within Manhattan radius 3 around `f₁` (cluster bias).
- Reconstruct the **shortest path** via BFS parents; **consume dots encountered** along the way.

#### 3.2 Endgame — **Exact finisher** when few dots remain

- When remaining dots ≤ **12**, switch to **Held–Karp DP** over **maze distances**:
  - Build a pairwise distance matrix between remaining dots using cached BFS grids.
  - Run TSP-style **DP** to get the shortest tour; stitch edges back into actions via BFS.

#### 3.3 Safety net — Full state-space **A\*** over `(position, food_grid)`

On pathological layouts, the greedy seed can fail (e.g., tight “closed” mazes). I fall back to A\* with a **tight, admissible heuristic**:

- `h = nearest_maze_distance(position → any food) + MST(remaining foods)`  
  where the MST runs on **maze distances** (Prim’s), not Manhattan.
- **Neighbors** come from `Actions.getLegalNeighbors` (engine’s logic) for correctness in quirky passages.
- Maze distances between points are **cached**.

**Why it works:** Greedy + lookahead harvests dense clusters efficiently; the DP **finishes optimally** when small; the A\* fallback is **complete** and typically well within the time budget thanks to the tight MST heuristic.

---

## Code Snippets (Illustrative)

**A\* scaffold**

```python
class AStarData:
    def __init__(self):
        self.frontier = util.PriorityQueue()
        self.best_g   = {}               # state -> g
        self.parent   = {}               # state -> (prev, action)
        self.start    = None
        self.solved   = False
        self.solution = []
```

**Walls-aware BFS**

```python
def bfs_all(start):
    dist   = [[None]*H for _ in range(W)]
    parent = {}
    q = util.Queue()
    dist[start.x][start.y] = 0
    q.push(start)
    while not q.isEmpty():
        u = q.pop()
        for v, action in neighbors(u):   # engine-legal neighbors
            if dist[v.x][v.y] is None:
                dist[v.x][v.y] = dist[u.x][u.y] + 1
                parent[v] = (u, action)
                q.push(v)
    return dist, parent
```

**Held–Karp DP (exact endgame)**

```python
# dp[mask][j] = shortest cost to visit subset 'mask' ending at j
for mask in range(1<<n):
    for j in range(n):
        if mask & (1<<j):
            # transition to k not in mask using pairwise maze distances
```

**MST heuristic on maze distances (tight & admissible)**

```python
def mst_len_maze(points):
    # Prim's over points with edge weights = maze_dist(a, b) via cached BFS
    ...
```

---

## How I Run It

> Flags vary by template; check `python evaluator.py -h`.

**Single instances**

```bash
python pacman.py -l layouts/smallMaze.lay   -p SearchAgent -a fn=solverA,prob=problemA --timeout=1
python pacman.py -l layouts/someCorners.lay -p SearchAgent -a fn=solverB,prob=problemB --timeout=5
python pacman.py -l layouts/tinySearch.lay  -p SearchAgent -a fn=solverC,prob=problemC --timeout=10
```

**Local evaluator**

```bash
python evaluator.py --q1a --q1b --q1c
# Pretty tables need: pip install tabulate
```

---

## Troubleshooting

- **“layout file cannot be found”** → check name or `ls layouts`.
- **`util.raiseNotDefined()` crash** → a placeholder wasn’t replaced.
- **Slow or timeouts**
  - Enforce the **stale-entry guard** in A\*.
  - Cache BFS distance grids from frequently used anchors (food cells).
  - Keep lookahead **beam sizes** modest (`K1=12, K2=6, K3=3`).
- **Evaluator markdown ImportError** → `python -m pip install tabulate`.

---

## What I Learned

- **Heuristic design is a lever:** admissible + consistent yields correctness guarantees; tightness yields speed.
- **Tie-breaks matter:** `(f, h)` reduces expansions with zero risk.
- **Exploit static structure:** on fixed maps, **precompute** (multi-source BFS, cached grids).
- **Layered planning:** greedy for speed, DP for optimal finish, A\* as a safety net is a pragmatic “meta-planner”.
- **Determinism + caching** → predictable, fast runs that play nicely with timeouts.

---

## Notes on Publishing

- I keep course-provided starter code **private**.
- This README contains my own explanations and small illustrative snippets only.
