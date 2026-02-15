export const en = {
  layout: {
    titleHome:
      "Guillermo Teijeiro Portfolio - Software Developer with 15+ years of experience.",
    sections: {
      experience: "Work experience",
      projects: "Projects",
      about: "About me",
    },
  },
  nav: {
    experience: "Experience",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    ariaEs: "Switch to Spanish",
    ariaEn: "Switch to English",
  },
  hero: {
    badge: "Open to remote opportunities",
    intro: "15+ years of experience. ",
    role: "Software Developer",
    location: " from Cordoba, Argentina.",
    contact: "Contact me",
  },
  about: {
    paragraphs: [
      "My name is Guillermo Teijeiro and I have spent more than 15 years dedicated to software development. My first real contact with programming was at university, where I learned C++, and that is where I discovered that coding was not only interesting to me, but what I truly enjoyed. Over time, that choice became my profession.",
      "Today I work as a Senior Software Developer, mainly with .NET, participating in the design and development of complex systems that need to be stable, scalable, and easy to maintain. Throughout my career I have been part of real business projects, where the focus is not only that the code works, but that it is maintainable and delivers long term value.",
      "I am comfortable working both on backend and frontend, integrating APIs, improving existing architectures, and collaborating with multidisciplinary teams. I especially enjoy solving complex problems, optimizing processes, and turning business needs into clear technical solutions.",
      "I firmly believe in continuous learning and in writing software with judgment and responsibility. My goal is to keep growing as a professional, bring real value to the teams I work with, and build solid products that are worth being proud of.",
    ],
  },
  experience: {
    learnMore: "Learn more",
    items: [
      {
        date: "February 2024 - Present",
        title: "Senior Developer",
        company: "SHIFTA",
        description:
          "Work as a Senior Developer on large scale projects. Build strategic internal solutions for the YPF ecosystem and integrate into multidisciplinary agile teams for Galicia Seguros, driving technology evolution and modernization of their digital platforms.",
      },
      {
        date: "June 2018 - February 2024",
        title: ".NET Developer",
        company: "Bitsion",
        description:
          "Technical leadership on high impact projects: ecommerce for Neverland (balance top up and sales) and a full logistics tracking application. Implemented complex architectures using .NET, SQL, MongoDB, RabbitMQ, Neo4j, and Angular. Also participated in planning and building a white label virtual wallet.",
      },
      {
        date: "October 2017 - June 2018",
        title: ".NET Developer Analyst",
        company: "DICSYS",
        description:
          "Support and maintenance for critical applications for strategic clients such as QPlus, ensuring operational continuity and efficient incident resolution.",
      },
      {
        date: "March 2017 - September 2017",
        title: ".NET Developer",
        company: "Globadlity",
        description:
          "Maintenance and modernization of web application ecosystems using AngularJS, focusing on technology upgrades and code stability.",
      },
      {
        date: "April 2014 - September 2016",
        title: ".NET Developer Analyst",
        company: "Sofrecom Argentina SA",
        description:
          "Implemented critical new features for the massive 'Mi Cuenta' application for Personal and built the 'Club Personal Empresa' platform, applying a UX focused approach. Managed corrective maintenance and performance optimization.",
      },
      {
        date: "February 2013 - August 2013",
        title: "Developer",
        company: "GEMINUS IT",
        description:
          "Delivered the Single Window project for the Municipality of Cordoba. Built a real time quotes application using SignalR and KnockoutJS, pioneering SPA frameworks at the time.",
      },
      {
        date: "April 2011 - January 2013",
        title: "Developer",
        company: "Grupo Prominente",
        description:
          "Participated in the full software development lifecycle. Executed QA and testing processes to ensure delivery quality, along with maintenance and code refactoring tasks.",
      },
    ],
  },
  projects: {
    groups: {
      own: {
        title: "Personal projects",
        description: "Tools and products built from personal initiative.",
      },
      work: {
        title: "Work projects",
        description: "Work done in the context of companies and clients.",
      },
    },
    empty: "More projects will be added in this category soon.",
    details: "View details",
    close: "Close",
    tags: {
      NEXT: "Next.js",
      TAILWIND: "Tailwind CSS",
      PYTHON: "Python",
      CLI: "CLI",
      AUTOMATION: "Automatizacion",
      IA: "IA",
      SCRIPT: "Script",
      CSHARP: "C#",
      DOTNET9: ".NET 9",
      PLAYWRIGHT: "Playwright",
      AFIP: "AFIP",
      CONSOLA: "Consola",
      OPEN_SOURCE: "Open Source",
      OCR: "OCR",
      TESSERACT: "Tesseract",
      TELEGRAM: "Telegram",
      AZURE: "Azure",
      OPENAI: "OpenAI",
      STREAMLIT: "Streamlit",
      WEB_APP: "Web App",
      SCRAPING: "Scraping",
    },
    items: {
      filesTools: {
        title: "Files Tools",
        description:
          "Console utilities in Python to organize and sanitize large collections of media files (images, videos, and more). The project groups AI assisted tools that classify files, clean names, detect duplicates, and reorganize messy collections automatically and efficiently from the command line.",
      },
      arcaLpgScraper: {
        title: "ARCA LPG Scraper",
        description:
          "Command line tool in .NET 9 that automates downloading PDF vouchers from AFIP's LPG portal. It uses Playwright to reproduce the manual navigation and authentication steps, detects available records, and downloads the documents locally with sanitized filenames to avoid collisions.",
      },
      arcaLpgOcr: {
        title: "ARCA LPG OCR",
        description:
          "Python command line tool designed to process and extract structured information from LPG PDF settlements. It combines OCR with text block and table detection to produce outputs like CSV or JSON, normalizing key fields such as buyer, seller, totals, and agricultural details for each downloaded settlement.",
      },
      telegramBot: {
        title: "Telegram Bot",
        description:
          "Telegram bot built in Python that receives invoice images or PDFs, converts PDFs to images, and extracts key data using Azure OpenAI (vision + structured outputs). The bot replies with a structured JSON containing fields like invoice number, amounts, date, and seller/buyer details directly in Telegram chat.",
      },
      aiCodegen: {
        title: "AI Code Generator",
        description:
          "Python web app built with Streamlit that acts as an AI assisted code generator. It connects to Azure OpenAI models to apply prompts over custom templates, replace variables in static files, and download the generated code organized by files. Includes handling for different AI models and helpers to clean and structure input text.",
      },
      quini6Bot: {
        title: "Quini6 Bot",
        description:
          "Automated Python bot that fetches Quini 6 results from the web, runs periodic scraping, and notifies the user with the latest results. It includes HTTP requests handling, HTML parsing to extract winning numbers, and logic to compare and show changes since the last run.",
      },
      workDummy: {
        title: "Work project (dummy)",
        description:
          "Example project to show the work section. It will be replaced with real cases including technical details, impact, and responsibilities.",
      },
    },
  },
  footer: {
    rights: "Almost all rights reserved",
    about: "About me",
    contact: "Contact",
  },
  components: {
    badgeTitle: "<Badge />",
    badgeText: "Open to work",
    pillTitle: "<SocialPill />",
  },
} as const
