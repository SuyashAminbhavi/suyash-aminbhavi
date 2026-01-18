"use client";

import { use, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { TbSwitch2 } from "react-icons/tb";
import { Button, Card } from "pixel-retroui";
import {
  Bonbon,
  Press_Start_2P,
  Lexend,
  Hanken_Grotesk,
} from "next/font/google";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";
import { ThemeContext } from "@/contexts/themeContext";
import { FaLinkedin } from "react-icons/fa6";

const bonbon_medium = Bonbon({ weight: "400", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const lexend_medium = Lexend({ weight: "400", subsets: ["latin"] });
const hankeng_light = Hanken_Grotesk({ weight: "600", subsets: ["latin"] });

export default function Header() {
  const [showContact, setShowContact] = useState<boolean>(false);
  const { theme, setTheme } = use(ThemeContext);

  return (
    <header className="relative top-0 left-0 right-0 p-6 flex flex-row justify-between items-center text-5xl text-black">
      {theme === "MINIMALISTIC" && (
        <span className={bonbon_medium.className + " text-[3.5rem]"}>SA</span>
      )}
      {theme === "RETRO" && (
        <span className={p2p_light.className + " text-[2.5rem]"}>SA</span>
      )}
      <div
        className={
          lexend_medium.className +
          " flex flex-row gap-2 lg:gap-6 text-xl text-black"
        }
      >
        {/* Switch Theme */}
        {theme === "MINIMALISTIC" && (
          <>
            <button
              onClick={() => setTheme("RETRO")}
              className={
                hankeng_light.className +
                " text-[1rem] hidden lg:inline-block border-2 border-yellow-200 bg-yellow-100 text-yellow-900 hover:shadow-xl hover:shadow-[#f9e864]/50 px-4 py-2 rounded-lg"
              }
            >
              Switch Theme
            </button>
            <button
              onClick={() => setTheme("RETRO")}
              className="lg:hidden flex flex-row gap-3 items-center border-2 border-yellow-200 bg-yellow-100 text-yellow-900 hover:shadow-xl hover:shadow-[#f9e864]/50 px-4 py-2 rounded-lg"
            >
              <TbSwitch2 className="h-6 w-6 text-yellow-900" />
            </button>
          </>
        )}

        {theme === "RETRO" && (
          <>
            <Button
              onClick={() => setTheme("MINIMALISTIC")}
              bg="#f9e864"
              className="text-[1rem] hidden lg:flex flex-row gap-2"
            >
              Switch Theme
            </Button>
            <Button
              onClick={() => setTheme("MINIMALISTIC")}
              bg="#f9e864"
              className="text-[1rem] lg:hidden flex flex-row gap-2"
            >
              <TbSwitch2 className="h-6 w-6 text-black" />
            </Button>
          </>
        )}

        {/* Contact Me */}
        {theme === "MINIMALISTIC" && (
          <>
            <button
              onClick={() => setShowContact(!showContact)}
              className={
                hankeng_light.className +
                " text-[1rem] hidden lg:inline-block border-2 border-yellow-200 bg-yellow-100 text-yellow-900 hover:shadow-xl hover:shadow-[#f9e864]/50 px-4 py-2 rounded-lg"
              }
            >
              Contact Me
            </button>
            <button
              onClick={() => setShowContact(!showContact)}
              className="lg:hidden flex flex-row gap-3 items-center border-2 border-yellow-200 bg-yellow-100 text-yellow-900 hover:shadow-xl hover:shadow-[#f9e864]/50 px-4 py-2 rounded-lg"
            >
              <IoIosCall className="h-6 w-6 text-yellow-900" />
            </button>
          </>
        )}

        {theme === "RETRO" && (
          <>
            <Button
              onClick={() => setShowContact(!showContact)}
              bg="#f9e864"
              className="text-[1rem] hidden lg:flex flex-row gap-2"
            >
              Contact Me
            </Button>
            <Button
              onClick={() => setShowContact(!showContact)}
              bg="#f9e864"
              className="text-[1rem] lg:hidden flex flex-row gap-2"
            >
              <IoIosCall className="h-6 w-6 text-black" />
            </Button>
          </>
        )}

        <AnimatePresence initial={false}>
          {showContact ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute flex flex-col gap-4 h-fit top-[6rem] right-[1.5rem] text-black text-[1rem]"
            >
              {theme === "MINIMALISTIC" && (
                <div className="flex flex-col gap-2 bg-yellow-100 p-4 border-black border-2 rounded-md">
                  <div>
                    {" "}
                    <MdEmail size={30} className="inline" />{" "}
                    <a href="mailto:suyash.aminbhavi@gmail.com">
                      suyash.aminbhavi@gmail.com
                    </a>
                  </div>
                  <div>
                    <FaLinkedin size={30} className="inline" />{" "}
                    <a
                      href="https://www.linkedin.com/in/suyash-aminbhavi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      suyash-aminbhavi
                    </a>
                  </div>
                </div>
              )}
              {theme === "RETRO" && (
                <Card bg="#f7e077" className="flex flex-col gap-2">
                  <div>
                    <MdEmail size={30} className="inline" />{" "}
                    <a href="mailto:suyash.aminbhavi@gmail.com">
                      suyash.aminbhavi@gmail.com
                    </a>
                  </div>
                  <div>
                    <FaLinkedin size={30} className="inline" />{" "}
                    <a
                      href="https://www.linkedin.com/in/suyash-aminbhavi/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      suyash-aminbhavi
                    </a>
                  </div>
                </Card>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
        <a href="/Resume.pdf" download="Resume_Suyash_Aminbhavi">
          {/* Resume */}
          {theme === "MINIMALISTIC" && (
            <>
              <button
                className={
                  hankeng_light.className +
                  " hidden lg:flex text-[1rem] flex-row gap-4 items-center border-2 border-yellow-200 bg-yellow-100 text-yellow-900 hover:shadow-xl hover:shadow-[#f9e864]/50 px-4 py-2 rounded-lg"
                }
              >
                <FaDownload className="h-4 w-4 text-yellow-900" />
                Resume
              </button>
              <button className="lg:hidden flex flex-row gap-3 items-center border-2 border-yellow-200 bg-yellow-100 text-yellow-900 hover:shadow-xl hover:shadow-[#f9e864]/50 px-4 py-2 rounded-lg">
                <FaDownload className="h-6 w-6 text-yellow-900" />
              </button>
            </>
          )}
          {theme === "RETRO" && (
            <>
              <Button
                bg="#f9e864"
                className="text-[1rem] hidden lg:flex flex-row gap-2 items-center"
              >
                <FaDownload className="h-4 w-4" />
                Resume
              </Button>
              <Button
                bg="#f9e864"
                className="text-[1rem] lg:hidden flex flex-row gap-2 items-center"
              >
                <FaDownload className="h-6 w-6 text-black" />
              </Button>
            </>
          )}
        </a>
      </div>
    </header>
  );
}
