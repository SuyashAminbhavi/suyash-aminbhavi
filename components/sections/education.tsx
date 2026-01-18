"use client";

import { Tillana, Lexend, Press_Start_2P } from "next/font/google";
import { motion } from "motion/react";
import Image from "next/image";
import EduAnim from "@/public/sectionAnimations/educationAnim.gif";
import { GoTriangleRight } from "react-icons/go";
import { use } from "react";
import { ThemeContext } from "@/contexts/themeContext";

const tillana_medium = Tillana({ weight: "500", subsets: ["latin"] });
const lexend_medium = Lexend({ weight: "400", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export default function MyEducation() {
  const { theme } = use(ThemeContext);
  return (
    <div>
      {}
      <div className="flex flex-row items-center gap-4 text-black">
        <Image
          src={EduAnim}
          height={60}
          width={60}
          alt="education_animation"
          className="hidden lg:visible"
        />
        {theme === "MINIMALISTIC" && (
          <h2
            className={
              tillana_medium.className +
              " underline underline-2 underline-offset-4 decoration-yellow-400 text-3xl lg:text-5xl"
            }
          >
            Education
          </h2>
        )}
        {theme === "RETRO" && (
          <h2 className={p2p_light.className + " text-3xl"}>Education</h2>
        )}
      </div>
      <div className="flex flex-col gap-8 lg:p-4 hide-scrollbar">
        {theme === "MINIMALISTIC" && (
          <motion.div className="flex flex-row gap-8 justify-start items-center drop-shadow-xl rounded-md min-h-fit min-w-full py-6">
            <GoTriangleRight className="h-7 w-7 text-yellow-300 hidden lg:visible" />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col min-[1260px]:flex-row gap-4">
                <div
                  className={
                    tillana_medium.className +
                    " text-xl lg:text-3xl underline underline-offset-8 decoration-[#f9e864] lg:px-2 w-fit"
                  }
                >
                  The University of British Columbia
                </div>
                <div className="flex flex-row items-center gap-4">
                  <div
                    className={
                      tillana_medium.className +
                      " text-md text-white bg-black rounded-sm py-1 px-2 w-fit"
                    }
                  >
                    Bachelors in Computer Science
                  </div>
                </div>
              </div>
              <div
                className={
                  lexend_medium.className +
                  " flex flex-row justify-start items-center gap-2 text-gray-500 px-2"
                }
              >
                <span>September 2020</span>
                <span>-</span>
                <span>April 2025</span>
              </div>
            </div>
          </motion.div>
        )}
        {theme === "RETRO" && (
          <motion.div className="flex flex-row gap-8 justify-start items-center drop-shadow-xl rounded-md min-h-fit min-w-full py-6">
            <GoTriangleRight className="h-7 w-7 text-yellow-300" />
            <div className="flex flex-col gap-6">
              <div className="flex flex-row gap-4">
                <div
                  className={
                    p2p_light.className +
                    " text-sm underline underline-2 underline-offset-8 decoration-[#f9e864] w-fit leading-10"
                  }
                >
                  The University of British Columbia
                </div>
                <div className="flex flex-row items-center gap-4">
                  <div
                    className={
                      p2p_light.className +
                      " text-[0.7rem] text-white bg-black rounded-sm p-2 h-fit w-fit"
                    }
                  >
                    Bachelors in Computer Science
                  </div>
                </div>
              </div>
              <div
                className={
                  p2p_light.className +
                  " text-[0.7rem] flex flex-row justify-start items-center gap-2 text-gray-500 px-2"
                }
              >
                <span>September 2020</span>
                <span>-</span>
                <span>April 2025</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
