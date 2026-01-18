"use client";

import { use, useState } from "react";
import { FaDownload } from "react-icons/fa";
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

const bonbon_medium = Bonbon({ weight: "400", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const lexend_medium = Lexend({ weight: "400", subsets: ["latin"] });
const hankeng_light = Hanken_Grotesk({ weight: "600", subsets: ["latin"] });

export default function Header() {
  const [showContact, setShowContact] = useState<boolean>(false);
  const { theme } = use(ThemeContext);

  return (
    <header className="relative top-0 left-0 right-0 p-6 flex flex-row justify-between items-center text-5xl text-black">
      {theme === "MINIMALISTIC" && (
        <span className={bonbon_medium.className + " text-[2.5rem]"}>SA</span>
      )}
      {theme === "RETRO" && (
        <span className={p2p_light.className + " text-[2.5rem]"}>SA</span>
      )}
      <div
        className={
          lexend_medium.className + " flex flex-row gap-6 text-xl text-black"
        }
      >
        {theme === "MINIMALISTIC" && (
          <button
            onClick={() => setShowContact(!showContact)}
            className={
              hankeng_light.className +
              " text-[1rem] border-2 border-yellow-200 bg-yellow-100 text-yellow-900 hover:shadow-xl hover:shadow-[#f9e864]/50 px-4 py-2 rounded-lg"
            }
          >
            Contact Me
          </button>
        )}

        {theme === "RETRO" && (
          <Button
            onClick={() => setShowContact(!showContact)}
            bg="#f9e864"
            className="text-[1rem] flex flex-row gap-2"
          >
            Contact Me
          </Button>
        )}

        <AnimatePresence initial={false}>
          {showContact ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute flex flex-col gap-4 h-fit top-[6rem] right-[1.5rem] min-[1260px]:right-[10rem] text-black text-[1rem]"
            >
              {theme === "MINIMALISTIC" && (
                <div className="bg-yellow-100 p-4 border-black border-2 rounded-md">
                  <MdEmail size={30} className="inline" />{" "}
                  <a href="mailto:suyash.aminbhavi@gmail.com">
                    suyash.aminbhavi@gmail.com
                  </a>
                </div>
              )}
              {theme === "RETRO" && (
                <Card bg="#f7e077">
                  <MdEmail size={30} className="inline" />{" "}
                  <a href="mailto:suyash.aminbhavi@gmail.com">
                    suyash.aminbhavi@gmail.com
                  </a>
                </Card>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
        <a href="/Resume.pdf" download="Resume_Suyash_Aminbhavi">
          {theme === "MINIMALISTIC" && (
            <button
              className={
                hankeng_light.className +
                " text-[1rem] flex flex-row gap-3 items-center border-2 border-yellow-200 bg-yellow-100 text-yellow-900 hover:shadow-xl hover:shadow-[#f9e864]/50 px-4 py-2 rounded-lg"
              }
            >
              <FaDownload className="h-4 w-4 text-yellow-900" />
              Resume
            </button>
          )}
          {theme === "RETRO" && (
            <Button
              bg="#f9e864"
              className="text-[1rem] flex flex-row gap-2 items-center"
            >
              <FaDownload className="h-4 w-4" />
              Resume
            </Button>
          )}
        </a>
      </div>
    </header>
  );
}
