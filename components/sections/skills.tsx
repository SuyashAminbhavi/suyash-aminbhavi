"use client";

import { Tillana, Lexend, Press_Start_2P } from "next/font/google";
import { motion } from "motion/react";
import Image from "next/image";
import SkillsAnim from "@/public/sectionAnimations/skillsAnim.gif";
import { use } from "react";
import { ThemeContext } from "@/contexts/themeContext";
import { Card } from "pixel-retroui";

const tillana_medium = Tillana({ weight: "500", subsets: ["latin"] });
const hankeng_light = Lexend({ weight: "300", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const skillSet = [
  {
    skillHeading: "Languages",
    skills: ["Java", "TypeScript", "Go", "Python", "CSS"],
  },
  {
    skillHeading: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Remix.js",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
  },
  {
    skillHeading: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "REST", "GraphQL"],
  },
  {
    skillHeading: "Data Pipelines",
    skills: ["Apache NIFI", "Apache Flink", "Temporal", "Kubernetes"],
  },
  {
    skillHeading: "Monitoring & Observability",
    skills: ["Grafana", "Prometheus"],
  },
  {
    skillHeading: "AI",
    skills: [
      "LangChain",
      "OpenAI API",
      "Gemini",
      "Grok",
      "Claude",
      "Ollama",
      "RAG",
    ],
  },
  {
    skillHeading: "Database",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "pgvector",
      "Pinecone",
      "Supabase",
      "MySQL",
    ],
  },
  {
    skillHeading: "Tools",
    skills: [
      "Cursor",
      "VSCode",
      "SQL Workbench",
      "ChatGPT",
      "Figma",
      "Notion",
      "Docker",
    ],
  },
];

export default function MySkills() {
  const { theme } = use(ThemeContext);
  return (
    <section className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-row items-center gap-4 text-black"
      >
        <Image
          src={SkillsAnim}
          height={60}
          width={60}
          alt="skills_animation"
          className="hidden lg:inline-block"
        />
        {theme === "MINIMALISTIC" && (
          <h2
            className={
              tillana_medium.className +
              " underline underline-2 underline-offset-4 decoration-yellow-400 text-3xl lg:text-5xl"
            }
          >
            Skills
          </h2>
        )}
        {theme === "RETRO" && (
          <h2 className={p2p_light.className + " text-2xl lg:text-3xl"}>
            Skills
          </h2>
        )}
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4 lg:p-4">
        {theme === "MINIMALISTIC" && (
          <>
            {skillSet.map((category, index) => (
              <motion.div
                key={index + "_minimalistic"}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="py-2 lg:p-4"
              >
                <h3
                  className={
                    hankeng_light.className +
                    " text-[1rem] mb-4 underline underline-2 underline-offset-4 decoration-[#f9e864]"
                  }
                >
                  {category.skillHeading}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill + "_minimalistic"}
                      className={
                        hankeng_light.className +
                        " text-sm bg-[#f9e864]/50 text-yellow-800 px-3 py-1 rounded-full shadow-sm hover:bg-[#f9e864] transition-all"
                      }
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </>
        )}
        {theme === "RETRO" && (
          <>
            {skillSet.map((category, index) => (
              <Card key={index + "_retro"} className="p-4">
                <h3
                  className={
                    p2p_light.className +
                    " text-[0.8rem] mb-4 underline underline-2 underline-offset-4 decoration-[#f9e864]"
                  }
                >
                  {category.skillHeading}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill + "_retro"}
                      className={
                        p2p_light.className +
                        " text-[0.7rem] bg-[#f9e864]/50 text-yellow-800 px-3 py-1 rounded-full shadow-sm hover:bg-[#f9e864] transition-all"
                      }
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </>
        )}
      </div>
    </section>
  );
}
