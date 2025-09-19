import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Web Scraping Bot",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Playwright", "Typescript", "Vercel"],
    image: {
      LIGHT: "/images/projects/Lightscrapingbot.webp",
      DARK: "/images/projects/Lightscrapingbot.webp",
    },
  },
  {
    index: 1,
    title: "University-Website",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Vite", "React-router-dom", "Netlify"],
    image: {
      LIGHT: "/images/projects/university.webp",
      DARK: "/images/projects/university.webp",
    },
  },
  {
    index: 2,
    title: "GSAP Animated Website",
    href: "/projects",
    tags: ["Html", "Css", "Javascript", "Netlify", "GSAP"],
    image: {
      LIGHT: "/images/projects/gsapgolf.webp",
      DARK: "/images/projects/gsapgolf.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Web Scraping Bot",
    favicon: "/images/projects/logos/bot.ico",
    imageUrl: [
      "/images/projects/Lightscrapingbot.webp",
      "/images/projects/Lightscrapingbot.webp",
    ],
    description:
      "This project is a Next.js + Tailwind CSS + Playwright based web scraping tool that allows users to scrape website data with multiple modes of interaction. It provides authentication, DOM scraping, filtering, and element selection with an option to export results in CSV format.",
    sourceCodeHref: "https://github.com/Malik-Umer-Mehboob/webscraping-bot",
    liveWebsiteHref: "https://webscraping-bot-7kuw.vercel.app/",
  },
  {
    name: "University-Website",
    favicon: "/images/projects/logos/university.ico",
    imageUrl: [
      "/images/projects/university.webp",
      "/images/projects/university.webp",
      "/images/projects/university.webp",
    ],
    description:
      "This project is a simple university-level web application built using React.js. It demonstrates the core concepts of React such as components, props, state management, and event handling. The project includes a clean user interface, interactive elements, and responsive design. It was developed to practice front-end development skills and to showcase how React can be used to build dynamic single-page applications (SPAs).",
    sourceCodeHref:
      "https://github.com/Malik-Umer-Mehboob/University-Project-yt",
    liveWebsiteHref: "https://universityproject-yt.netlify.app/",
  },
  {
    name: "GSAP Animated Website",
    favicon: "/images/projects/logos/animated.ico",
    imageUrl: [
      "/images/projects/gsapgolf.webp",
      "/images/projects/gsapgolf.webp",
      "/images/projects/gsapgolf.webp",
    ],
    description:
      "This project is an animated website developed using GSAP along with HTML, CSS, and JavaScript. It showcases smooth transitions, scrolling effects, and interactive animations to enhance the user experience. The main focus of this project was to explore creative web animations and demonstrate how GSAP can make websites more engaging and visually appealing.",
    sourceCodeHref: "https://github.com/Malik-Umer-Mehboob/Website-GSAP",
    liveWebsiteHref: "https://website-gsap.netlify.app/",
  },
];
