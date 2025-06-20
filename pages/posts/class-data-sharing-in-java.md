---
title: "Inbox, Handled – Building Weava.ai, an AI Email Assistant"
date: 2025-06-20
duration: 5min
lang: en
description: Building Weava.ai – an AI-powered multi-inbox assistant that reads, replies, and organizes your email while you focus on real work.
recording: false
type: blog
development: true
---

**Weava.ai** is a new kind of AI email assistant — not one that suggests drafts or filters spam — but one that actually **thinks, replies, and organizes your inbox** for you.

Inspired by real email burnout, the app introduces a calm, decision-free interface we call **Inbox Zen View**:  
📥 **To Read** | ✅ **Handled** | 🚫 **Ignored**  
Each section is powered by AI and updated in real time.

---

## 🧠 Why Weava.ai?

Because Gmail, Outlook, and iCloud all have “smart suggestions”…  
But no one **actually handles the inbox** for you.  
Weava does.

- It connects to all your email accounts
- Understands which emails are urgent, ignorable, or routine
- **Replies automatically** to known cases using your tone
- And sends you a **daily digest** of what it did (including updated calendars)

---

## 🔨 Phase 1 – Building the Brain

This first development phase is all about the backend logic:

- Ingesting raw email content
- Running AI summarization + classification
- Drafting or auto-sending replies
- Storing all data for UI rendering

---

## 🔁 What AI Does in Phase 1

1. **Reads** the email body + metadata
2. **Summarizes** the content
3. **Classifies** it as:
   - `To Read` – human should read
   - `Handled` – AI replied/archived
   - `Ignored` – newsletters, spam, FYIs
4. **Replies** with context-aware, tone-matched text
5. **Logs** the reply + updates your calendar if needed

---

## ✨ Sample Prompt Used in Phase 1

```txt
You are an AI email assistant.
Your job is to:
1. Classify this email into one of: To Read, Handled, Ignored
2. Provide a one-line summary
3. Suggest a short, polite reply

Email Subject: "Following up on the proposal"
Email Body: "Hi! Just checking in to see if you had a chance to review the pitch I sent last week."
```

## ✨ Sample Output in Phase 1

```json
{
  "category": "To Read",
  "summary": "Client is following up on last week's proposal.",
  "reply": "Thanks for the follow-up! I’ll take a look and get back to you by today."
}
```
