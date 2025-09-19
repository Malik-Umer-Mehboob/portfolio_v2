import { SiExpress, SiNextdotjs, SiVercel, SiNetlify } from "react-icons/si";
import { FramerMotionIcon, ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import ViteSvg from "@/public/icons/vite.svg";
// Custom Animations / Scroll libraries (SVGs bana kar icons folder me dal do)
import GsapSvg from "@/public/icons/gsap.svg";
import LenisSvg from "@/public/icons/lenis.svg";
import LocomotiveSvg from "@/public/icons/locomotive.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Databases
import MongoDBSvg from "@/public/icons/mongodb.svg";

// Tools & Tech
import GitSvg from "@/public/icons/git.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CssSvg },
      { name: "JavaScript", icon: JavascriptSvg },
      { name: "TypeScript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },
    ],
  },
  {
    sectionName: "Libraries & Frameworks",
    skills: [
      { name: "React.js", icon: ReactjsSvg },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Router", icon: ReactRouterDomIcon },
      { name: "Redux", icon: ReduxSvg },
      { name: "Tailwind CSS", icon: TailwindcssSvg },
      { name: "Framer Motion", icon: FramerMotionIcon },
      { name: "GSAP", icon: GsapSvg },
      { name: "Lenis", icon: LenisSvg },
      { name: "Locomotive Scroll", icon: LocomotiveSvg },
      { name: "Vite", icon: ViteSvg },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Node.js", icon: NodejsSvg },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    sectionName: "Databases & ORMs",
    skills: [{ name: "MongoDB", icon: MongoDBSvg }],
  },
  {
    sectionName: "Tools & Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "Postman", icon: PostmanSvg },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
    ],
  },
];
