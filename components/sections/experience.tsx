"use client";

import { Tillana, Lexend, Press_Start_2P } from "next/font/google";
import { motion } from "motion/react";
import Image from "next/image";
import WorkAnim from "@/public/sectionAnimations/workAnim.gif";
import { GoTriangleRight } from "react-icons/go";
import { use } from "react";
import { ThemeContext } from "@/contexts/themeContext";

const tillana_medium = Tillana({ weight: "500", subsets: ["latin"] });
const lexend_medium = Lexend({ weight: "400", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });

const experiences = [
  {
    company: "Zafin",
    companyTitleSize: "text-md",
    jobTitle: "Technical Consultant/Software Engineer",
    startDate: "July 2025",
    endDate: "Present",
  },
  {
    company: "ClearJar",
    companyTitleSize: "text-md",
    jobTitle: "Full Stack Developer",
    startDate: "September 2024",
    endDate: "April 2025",
  },
  {
    company: "The University of British Columbia",
    companyTitleSize: "text-sm",
    jobTitle: "AI Software Developer (Full Stack)",
    startDate: "September 2024",
    endDate: "December 2024",
  },
  {
    company: "Keystone Environmental Ltd.",
    companyTitleSize: "text-md",
    jobTitle: "IT Technician CO-OP",
    startDate: "May 2023",
    endDate: "August 2024",
  },
];
export default function MyExperience() {
  const { theme } = use(ThemeContext);
  return (
    <div>
      <div
        className={
          tillana_medium.className +
          " flex flex-row gap-4 justify-start items-center text-3xl min-[1260px]:text-5xl text-black"
        }
      >
        <Image
          src={WorkAnim}
          height={60}
          width={60}
          alt="work_animation"
          className="hidden lg:visible"
        />
        {theme === "MINIMALISTIC" && (
          <h2
            className={
              tillana_medium.className +
              " underline underline-2 underline-offset-4 decoration-yellow-400 text-3xl lg:text-5xl"
            }
          >
            Experience
          </h2>
        )}
        {theme === "RETRO" && (
          <h2 className={p2p_light.className + " text-3xl"}>Experience</h2>
        )}
      </div>
      <div className="flex flex-col gap-2 lg:gap-8 hide-scrollbar lg:p-4">
        {theme === "MINIMALISTIC" && (
          <>
            {experiences.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-row gap-8 justify-start items-center drop-shadow-xl rounded-md min-h-fit min-w-full py-6"
              >
                <GoTriangleRight className="h-7 w-7 text-yellow-300 hidden lg:visible" />
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col min-[1260px]:flex-row gap-4">
                    <h1
                      className={
                        tillana_medium.className +
                        " text-3xl underline underline-offset-8 decoration-[#f9e864] lg:px-2 w-fit"
                      }
                    >
                      {item.company}
                    </h1>
                    <div className="flex flex-row items-center gap-4">
                      <div
                        className={
                          tillana_medium.className +
                          " text-md text-white bg-black rounded-sm py-1 px-2 w-fit"
                        }
                      >
                        {item.jobTitle}
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      lexend_medium.className +
                      " flex flex-row justify-start items-center gap-2 text-gray-500 px-2"
                    }
                  >
                    <span>{item.startDate}</span>
                    <span>-</span>
                    <span>{item.endDate}</span>
                  </div>
                  {/* </div> */}
                </div>
              </motion.div>
            ))}
          </>
        )}
        {theme === "RETRO" && (
          <>
            {experiences.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-row gap-8 justify-start items-center drop-shadow-xl rounded-md min-h-fit min-w-full py-6"
              >
                <GoTriangleRight className="h-7 w-7 text-yellow-300" />
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-4">
                    <h1
                      className={
                        p2p_light.className +
                        " " +
                        item.companyTitleSize +
                        " underline underline-2 underline-offset-8 decoration-[#f9e864] w-fit leading-10"
                      }
                    >
                      {item.company}
                    </h1>
                    <div
                      className={
                        p2p_light.className +
                        " text-[0.7rem] text-white bg-black rounded-sm p-2 h-fit w-fit"
                      }
                    >
                      {item.jobTitle}
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-4">
                    <div
                      className={
                        p2p_light.className +
                        " text-[0.7rem] flex flex-row justify-start items-center gap-2 text-gray-500 px-2"
                      }
                    >
                      <span>{item.startDate}</span>
                      <span>-</span>
                      <span>{item.endDate}</span>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
