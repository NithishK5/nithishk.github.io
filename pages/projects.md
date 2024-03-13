---
title: Projects - Nithish K Megarajan
display: Projects
description: List of projects that I am proud of
plum: true
wrapperClass: "text-center"
projects:
  Java Ecosystem:
    - name: "Boston Metro System"
      link: "https://github.com/NithishK5/BOSTON-METRO-SYSTEM"
      desc: "A Java-based simulation of the Boston Metro System, focusing on its functionalities, routes, and behavior, developed collaboratively."
      icon: "i-simple-icons-openjdk"

    - name: "Cryptograms"
      link: "https://github.com/NithishK5/Cryptograms"
      desc: "A Java project that generates and solves cryptograms with phrases, designed for collaborative learning in cryptography for educational purposes."
      icon: "i-simple-icons-openjdk"

    - name: "Movies-API"
      link: "https://github.com/NithishK5/Movies-API"
      desc: "A backend project providing an API for accessing and managing a vast database of movies, built using Java and designed for seamless integration into web and mobile applications."
      icon: "i-carbon-row-insert"

  Python Ecosystem:
    - name: "Algorithmic_Trading_ML"
      link: "https://github.com/NithishK5/Algorithmic_Trading_ML"
      desc: "Exploring financial market opportunities through innovative machine learning-driven algorithmic trading strategies, from unsupervised asset clustering and sentiment analysis to advanced volatility forecasting."
      icon: "i-simple-icons-jupyter"

    - name: "VirtualAssistant.ai"
      link: "https://github.com/NithishK5/VirtualAssistant.ai"
      desc: "This Python script establishes a basic voice-controlled assistant named Mia. Utilizing speech recognition, it processes voice commands to perform tasks like playing music on YouTube or informing about the current time."
      icon: "i-carbon-ibm-watsonx-code-assistant"

  JavaScript Ecosystem:
    - name: "Passkey"
      link: "https://github.com/NithishK5/passkeys-express"
      desc: "An innovative Express.js application showcasing the implementation of Web Authentication API (Webauthn) with Passkeys for secure, passwordless authentication in a Dockerized environment."
      icon: "i-simple-icons-express"

    - name: "Robofriends"
      link: "https://github.com/NithishK5/robofriends"
      desc: "A dynamic ReactJS web application RoboFriends, utilizing Create React App for streamlined development, testing, and deployment, within the modern JavaScript ecosystem."
      icon: "i-simple-icons-javascript"

    - name: "ChatBox"
      link: "https://github.com/NithishK5/ChatBox"
      desc: "A realtime chat app built with Node.js, Express, and Socket.io, featuring a simple Vanilla JS frontend."
      icon: "i-simple-icons-javascript"

    - name: "MultiplayerSnakeGame"
      link: "https://github.com/NithishK5/MultiplayerSnakeGame"
      desc: "A multiplayer Snake game utilizing socket.io for real-time, interactive gameplay across multiple players."
      icon: "i-simple-icons-javascript"

    # - name: "Url_Shortner_Service"
    #   link: "https://github.com/NithishK5/Url_Shortner_Service"
    #   desc: "A URL shortener project utilizing MongoDB, featuring configurable settings in default.json for development and production.json for production environments."
    #   icon: "i-simple-icons-javascript"

    - name: "Discord Bot"
      link: "https://github.com/NithishK5/DiscordBot"
      desc: "A customizable Discord Bot project, designed for easy setup and deployment. Install dependencies, then launch with npm start or npm run dev. Integrate the bot into your Discord server using a unique client ID and explore its capabilities through the comprehensive Discord.js documentation."
      icon: "i-simple-icons-javascript"

    - name: "PacMan"
      link: "https://github.com/NithishK5/PacMan"
      desc: "A Pac-Man game project, crafted for classic arcade enthusiasts. Install dependencies to dive into the nostalgic chase, navigating mazes and evading ghosts in this timeless pursuit."
      icon: "i-simple-icons-javascript"

  Utility Libraries:
    - name: "Url_Shortner_Service"
      link: "https://github.com/NithishK5/Url_Shortner_Service"
      desc: "A URL shortener project utilizing MongoDB, featuring configurable settings in default.json for development and production.json for production environments."
      icon: "i-simple-icons-javascript"

  Websites:
    - name: "BlackVox Website"
      link: "https://github.com/NithishK5/BlackVox.ai"
      desc: "BlackVox.ai company portfolio website, built with Vue.js and Vite, featuring a clean, responsive design and a variety of projects."
      icon: "i-simple-icons-vite"

    - name: "Portfolio"
      link: "https://github.com/NithishK5/nithishk.github.io"
      desc: "My personal portfolio website, built with Vue.js and Vite, featuring a clean, responsive design and a variety of projects."
      icon: "i-simple-icons-vite"

    - name: "ArtStore-Website"
      link: "https://github.com/NithishK5/ArtStore-Website"
      desc: "Art store project."
      icon: "i-simple-icons-php"

  Mobile Apps:
    - name: "LadyBug"
      link: "https://github.com/NithishK5/LadyBug"
      desc: "A React Native and Expo-powered Women Safety Application, offering real-time crime data to safeguard and empower women, promoting confidence and security in their daily lives."
      icon: "i-simple-icons-expo"

    - name: "CurrencyConverter"
      link: "https://github.com/NithishK5/Currency_Convertor_App"
      desc: "A JS Currency Converter Application, providing real-time exchange rates and currency conversion for seamless international transactions."
      icon: "i-simple-icons-javascript"

    - name: "DiceRoller"
      link: "https://github.com/NithishK5/Dice-App"
      desc: "A simple dice rolling application, built with JS, offering a fun and interactive way to roll dice for games and activities."
      icon: "i-simple-icons-javascript"

    - name: "UberClone"
      link: "https://github.com/NithishK5/uber-clone"
      desc: "A React Native and Expo-powered Uber Clone Application, offering a seamless, user-friendly experience for ride-sharing and transportation services."
      icon: "i-simple-icons-react"
---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
