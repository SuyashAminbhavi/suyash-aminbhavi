"use client";

import { Tillana, Press_Start_2P } from "next/font/google";
import { Tabs } from "../ui/tabs";
import Image from "next/image";
import ProjectAnim from "@/public/sectionAnimations/projectAnim.gif";
import { Tab, Technology } from "@/interfaces/interfaces";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoLogoElectron } from "react-icons/io5";
import { FaWindows } from "react-icons/fa6";

import {
  SiJavascript,
  SiTypescript,
  SiJest,
  SiCypress,
  SiLangchain,
  SiOllama,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMeta,
  SiPostgresql,
  SiSupabase,
  SiPrisma,
  SiFigma,
  SiFastapi,
  SiAmazonapigateway,
  SiZod,
  SiFlask,
  SiSelenium,
  SiDocker,
  SiLinux,
  SiHtml5,
  SiCsswizardry,
  SiTailwindcss,
  SiMysql,
  SiGraphql,
  SiPostman,
  SiVercel,
  SiCodementor,
} from "react-icons/si";
import {
  RiNextjsLine,
  RiRemixRunFill,
  RiGeminiFill,
  RiOpenaiFill,
  RiTwitterXFill,
} from "react-icons/ri";
import { DiRedis } from "react-icons/di";
import { VscAzure, VscTerminalPowershell } from "react-icons/vsc";
import SteamojiChampsPreview from "@/public/projects/steamojichamps/steamojichamps_preview.png";
import NixiePreview from "@/public/projects/nixie/nixie_preview.png";
import AzureSIEMPreview from "@/public/projects/azure-siem/azure_siem_preview.png";
import ClearJarPreview from "@/public/projects/clearjar/clearjar_preview.png";
import CoursePlannerPreview from "@/public/projects/courseplanner/courseplanner_preview.png";
import PineconeFill from "@/public/pineconeFill.svg";
import { use } from "react";
import { ThemeContext } from "@/contexts/themeContext";

const tillana_medium = Tillana({ weight: "500", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const defaultTechnologyObject: Technology = {
  title: "SampleTech",
  icon: (
    <SiCodementor className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
  href: "#",
  iconStyle: "bg-gray-200",
};

// const sampleExtendedProjectDetails: Project = {
//   isProjectActive: false,
//   projectName: "Test",
//   projectDescription: "Test",
//   projectDuration: "8",
//   projectTeamSize: "4",
//   projectPreviewImg: ClearJarPreview,
//   projectLiveLink: "N/A",
//   projectDemoLink: "N/A",
//   technologiesUsed: [defaultTechnologyObject],
// };

const techologies: Technology[] = [
  {
    title: "Windows",
    icon: (
      <FaWindows className="h-full w-full text-sky-900 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-blue-100",
  },
  {
    title: "Powershell",
    icon: (
      <VscTerminalPowershell className="h-full w-full text-sky-500 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-blue-100",
  },
  {
    title: "Azure",
    icon: (
      <VscAzure className="h-full w-full text-sky-600 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-blue-100",
  },
  {
    title: "Electron",
    icon: (
      <IoLogoElectron className="h-full w-full text-sky-600 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-slate-700",
  },
  {
    title: "Python",
    icon: (
      <SiPython className="h-full w-full text-blue-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-blue-100",
  },
  {
    title: "Typescript",
    icon: (
      <SiTypescript className="h-full w-full text-blue-900 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-blue-100",
  },
  {
    title: "Javascript",
    icon: (
      <SiJavascript className="h-full w-full text-yellow-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-yellow-100",
  },
  {
    title: "React",
    icon: (
      <SiReact className="h-full w-full text-cyan-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-cyan-100",
  },
  {
    title: "NextJS",
    icon: (
      <RiNextjsLine className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-black",
  },
  {
    title: "RemixJS",
    icon: (
      <RiRemixRunFill className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-black",
  },
  {
    title: "NodeJS",
    icon: (
      <SiNodedotjs className="h-full w-full text-green-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-green-100",
  },
  {
    title: "Jest",
    icon: (
      <SiJest className="h-full w-full text-orange-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-orange-100",
  },
  {
    title: "Pinecone",
    icon: (
      <Image width={30} height={30} src={PineconeFill} alt="pinecone_fill" />
    ),
    href: "#",
    iconStyle: "bg-white",
  },
  {
    title: "Cypress",
    icon: (
      <SiCypress className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-emerald-100",
  },
  {
    title: "Redis",
    icon: (
      <DiRedis className="h-full w-full text-red-800 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-red-100",
  },
  {
    title: "Gemini",
    icon: (
      <RiGeminiFill className="h-full w-full text-indigo-800 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-indigo-100",
  },
  {
    title: "OpenAI",
    icon: (
      <RiOpenaiFill className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-white",
  },
  {
    title: "Grok AI",
    icon: (
      <RiTwitterXFill className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-white",
  },
  {
    title: "Langchain",
    icon: (
      <SiLangchain className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-emerald-950",
  },
  {
    title: "Meta FAISS",
    icon: (
      <SiMeta className="h-full w-full text-blue-800 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-blue-100",
  },
  {
    title: "Ollama",
    icon: (
      <SiOllama className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-white",
  },
  {
    title: "PostgreSQL",
    icon: (
      <SiPostgresql className="h-full w-full text-blue-900 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-blue-100",
  },
  {
    title: "Supabase",
    icon: (
      <SiSupabase className="h-full w-full text-emerald-900 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-emerald-100",
  },
  {
    title: "Prisma ORM",
    icon: (
      <SiPrisma className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-sky-950",
  },
  {
    title: "Figma",
    icon: (
      <SiFigma className="h-full w-full text-pink-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-pink-100",
  },
  {
    title: "Fast API",
    icon: (
      <SiFastapi className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-teal-600",
  },
  {
    title: "REST API",
    icon: (
      <SiAmazonapigateway className="h-full w-full text-sky-800 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-sky-100",
  },
  {
    title: "Zod",
    icon: <SiZod className="h-full w-full text-white dark:text-neutral-300" />,
    href: "#",
    iconStyle: "bg-sky-600",
  },
  {
    title: "Flask",
    icon: (
      <SiFlask className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-black",
  },
  {
    title: "Selenium",
    icon: (
      <SiSelenium className="h-full w-full text-white dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-green-500",
  },
  {
    title: "Docker",
    icon: (
      <SiDocker className="h-full w-full text-sky-800 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-sky-100",
  },
  {
    title: "Linux",
    icon: (
      <SiLinux className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-yellow-100",
  },
  {
    title: "HTML",
    icon: (
      <SiHtml5 className="h-full w-full text-orange-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-orange-100",
  },
  {
    title: "CSS",
    icon: (
      <SiCsswizardry className="h-full w-full text-blue-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-blue-100",
  },
  {
    title: "Tailwind CSS",
    icon: (
      <SiTailwindcss className="h-full w-full text-sky-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-sky-100",
  },
  {
    title: "MySQL",
    icon: (
      <SiMysql className="h-full w-full text-blue-900 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-blue-100",
  },
  {
    title: "GraphQL",
    icon: (
      <SiGraphql className="h-full w-full text-fuchsia-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-fuchsia-100",
  },
  {
    title: "Postman",
    icon: (
      <SiPostman className="h-full w-full text-orange-700 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-orange-100",
  },
  {
    title: "Vercel",
    icon: (
      <SiVercel className="h-full w-full text-black dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-white",
  },
  {
    title: "RAGAS",
    icon: (
      <TfiRulerAlt2 className="h-full w-full text-yellow-800 dark:text-neutral-300" />
    ),
    href: "#",
    iconStyle: "bg-yellow-100",
  },
];

const projectList: Tab[] = [
  {
    title: "AI/ML",
    value: "ai_ml",
    projectList: [
      {
        projectCategory: "ai_ml",
        projectTitle: "ClearJar",
        projectDescription: "AI Powered Personal Finance Management Platform",
        projectThumbnail: ClearJarPreview,
        extendedProjectDetails: {
          isProjectActive: true,
          projectName: "ClearJar",
          projectDescription:
            "An AI-Powered personal finance management platform helping users  of all ages struggling to manage their finances through a insightful and data-driven experience.",
          projectDuration: "8 months",
          projectTeamSize: "4 members",
          projectLiveLink:
            "https://cs499section3.ok.ubc.ca/transactions/group7/app",
          projectDemoLink: "/projects/clearjar/clearjar_demo.mp4",
          projectPreviewImg: ClearJarPreview,
          technologiesUsed: [
            techologies.find((technology) => technology.title === "Figma") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "React") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "NextJS") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Jest") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Cypress") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Pinecone") ||
              defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "PostgreSQL",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Prisma ORM",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Typescript",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Javascript",
            ) || defaultTechnologyObject,
            techologies.find((technology) => technology.title === "NodeJS") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Gemini") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "OpenAI") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Redis") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Zod") ||
              defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Tailwind CSS",
            ) || defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Docker") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Linux") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Postman") ||
              defaultTechnologyObject,
          ],
        },
      },
      {
        projectCategory: "ai_ml",
        projectTitle: "CoursePlanner Chatbot",
        projectDescription:
          "AI Powered chat application offering 24/7 support regarding course-specific questions to students at UBC Okanagan",
        projectThumbnail: CoursePlannerPreview,
        extendedProjectDetails: {
          isProjectActive: true,
          projectName: "CoursePlanner Chatbot",
          projectDescription:
            "A chat application offering 24/7 support regarding course-specific questions to students at UBC Okanagan providing faster resolution times and improving workload for advising staff implemented using RAG.",
          projectDuration: "4 months",
          projectTeamSize: "2 members",
          projectLiveLink: "N/A",
          projectDemoLink: "/projects/courseplanner/courseplanner_demo.mp4",
          projectPreviewImg: CoursePlannerPreview,
          technologiesUsed: [
            techologies.find((technology) => technology.title === "Ollama") ||
              defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Meta FAISS",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Langchain",
            ) || defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Jest") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "OpenAI") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Grok AI") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Pinecone") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Docker") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "NodeJS") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "RAGAS") ||
              defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Tailwind CSS",
            ) || defaultTechnologyObject,
            techologies.find((technology) => technology.title === "RemixJS") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "React") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Postman") ||
              defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Prisma ORM",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "PostgreSQL",
            ) || defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Flask") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "REST API") ||
              defaultTechnologyObject,
          ],
        },
      },
    ],
  },
  // {
  //   title: "DevOps",
  //   value: "devops",
  //   projectList: [
  //     {
  //       projectCategory: "devops",
  //       projectTitle: "Test",
  //       projectDescription: "Test",
  //       projectThumbnail: ClearJarPreview,
  //       extendedProjectDetails: sampleExtendedProjectDetails,
  //     },
  //   ],
  // },
  {
    title: "Cloud",
    value: "cloud",
    projectList: [
      {
        projectCategory: "cloud",
        projectTitle: "Azure Sentinel SIEM",
        projectDescription:
          "A cloud-native SIEM in Microsoft Azure that uses AI-driven analytics to detect and investigate security threats.",
        projectThumbnail: AzureSIEMPreview,
        extendedProjectDetails: {
          isProjectActive: true,
          projectName: "Azure Sentinel SIEM",
          projectDescription:
            "A Security Information and Event Management (SIEM) in Microsoft Azure. Azure Sentinel is a cloud-native SIEM that provides intelligent analytics, powered by AI. It offers a wide variety of tools and applications which allows for research and investigation of potential security threats in a virtual environment.",
          projectDuration: "1 month",
          projectTeamSize: "Individual",
          projectLiveLink:
            "https://medium.com/@suyash.aminbhavi/home-lab-setting-up-siem-in-microsoft-azure-sentinel-17778176c3e8",
          projectDemoLink: "N/A",
          projectPreviewImg: AzureSIEMPreview,
          technologiesUsed: [
            techologies.find((technology) => technology.title === "Azure") ||
              defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Powershell",
            ) || defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Windows") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "REST API") ||
              defaultTechnologyObject,
          ],
        },
      },
    ],
  },
  // {
  //   title: "Data Analysis",
  //   value: "data_analysis",
  //   projectList: [
  //     {
  //       projectCategory: "data_analysis",
  //       projectTitle: "Test",
  //       projectDescription: "Test",
  //       projectThumbnail: ClearJarPreview,
  //       extendedProjectDetails: sampleExtendedProjectDetails,
  //     },
  //   ],
  // },
  {
    title: "Web/Desktop",
    value: "web_desktop",
    projectList: [
      {
        projectCategory: "web_desktop",
        projectTitle: "Steamoji Champs",
        projectDescription:
          "Steamoji Champs is a collaborative platform where young makers and coders join STEM-focused hackathons to build, submit projects, and learn through gamified challenges.",
        projectThumbnail: SteamojiChampsPreview,
        extendedProjectDetails: {
          isProjectActive: true,
          projectName: "Steamoji Champs",
          projectDescription:
            "Steamoji Champs is a platform providing collaborative, innovation-driven environment where young makers, coders and creators who wish to participate in STEM-focused hackathons. This platform enables students to register, explore challenges, submit projects and gamify their experience.",
          projectDuration: "1 month",
          projectTeamSize: "Individual",
          projectLiveLink: "https://steamoji-champs.vercel.app/",
          projectDemoLink: "N/A",
          projectPreviewImg: SteamojiChampsPreview,
          technologiesUsed: [
            techologies.find((technology) => technology.title === "Figma") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Supabase") ||
              defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Typescript",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Javascript",
            ) || defaultTechnologyObject,
            techologies.find((technology) => technology.title === "HTML") ||
              defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Tailwind CSS",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Prisma ORM",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "PostgreSQL",
            ) || defaultTechnologyObject,
            techologies.find((technology) => technology.title === "React") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "NextJS") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Vercel") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Postman") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "REST API") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Zod") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Docker") ||
              defaultTechnologyObject,
          ],
        },
      },
      {
        projectCategory: "web_desktop",
        projectTitle: "Nixie",
        projectDescription:
          "A lightweight AI agent for Linux that uses natural language to help with everyday tasks, basic commands, and simple automations.",
        projectThumbnail: NixiePreview,
        extendedProjectDetails: {
          isProjectActive: false,
          projectName: "Nixe",
          projectDescription:
            "A lightweight AI Agent for Linux that helps with simple day-to-day tasks and basic automations. It can assist with common commands, file management, and quick system actions using natural language, making everyday workflows a bit easier and more approachable for Linux users.",
          projectDuration: "1 month",
          projectTeamSize: "Individual",
          projectLiveLink: "N/A",
          projectDemoLink: "N/A",
          projectPreviewImg: NixiePreview,
          technologiesUsed: [
            techologies.find((technology) => technology.title === "Linux") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Python") ||
              defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Typescript",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Javascript",
            ) || defaultTechnologyObject,
            techologies.find(
              (technology) => technology.title === "Tailwind CSS",
            ) || defaultTechnologyObject,
            techologies.find((technology) => technology.title === "React") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Docker") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "OpenAI") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Pinecone") ||
              defaultTechnologyObject,
            techologies.find((technology) => technology.title === "Electron") ||
              defaultTechnologyObject,
          ],
        },
      },
    ],
  },
];

export default function MyProject() {
  const { theme } = use(ThemeContext);
  return (
    <div>
      <div
        className={
          tillana_medium.className +
          " flex flex-row gap-4 justify-start items-center text-3xl min-[1260px]:text-5xl text-black underline underline-offset-4 decoration-[#f9e864]"
        }
      >
        <Image
          src={ProjectAnim}
          height={60}
          width={60}
          alt="project_animation"
          className="hidden lg:visible"
        />
        {theme === "MINIMALISTIC" && (
          <h2
            className={
              tillana_medium.className +
              " underline underline-2 underline-offset-4 decoration-yellow-400 text-3xl lg:text-5xl"
            }
          >
            Projects
          </h2>
        )}
        {theme === "RETRO" && (
          <h2 className={p2p_light.className + " text-3xl"}>Projects</h2>
        )}
      </div>
      <div className="h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto mt-8 items-start justify-start">
        <Tabs tabs={projectList} />
      </div>
    </div>
  );
}
