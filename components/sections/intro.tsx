import { Tillana, Press_Start_2P, Orbitron } from "next/font/google";
import Image from "next/image";
import HeyAnim from "@/public/Hey.gif";
import { PiLegoSmileyDuotone } from "react-icons/pi";
import { CardStack } from "../ui/card-stack";
import { use } from "react";
import { ThemeContext } from "@/contexts/themeContext";

const tillana_medium = Tillana({ weight: "400", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const orbitron_light = Orbitron({ weight: "400", subsets: ["latin"] });

const CARD = {
  id: 0,
  name: "Suyash Aminbhavi",
  designation: "Software Developer & AI Enthusiast",
  content: (
    <p>
      I am a Computer Science graduate from UBC, passionate about building
      AI-driven tools and applications that combine functionality with creative,
      user-focused designs. My goal is to craft innovative solutions that solve
      real-world problems and enhance everyday experiences{" "}
      <PiLegoSmileyDuotone className="inline-block w-6 h-6 text-yellow-500 align-text-bottom" />
    </p>
  ),
};

export default function MyIntro() {
  const { theme } = use(ThemeContext);
  return (
    <>
      {theme === "MINIMALISTIC" && (
        <>
          <h1
            className={
              tillana_medium.className +
              " flex flex-row gap-2 justify-start items-center text-7xl text-black underline underline-offset-4 decoration-[#f9e864]"
            }
          >
            Suyash Aminbhavi
            <Image src={HeyAnim} height={80} width={80} alt="hey_animation" />
          </h1>

          <div className="flex items-center justify-center w-full">
            <CardStack item={CARD} theme={theme} />
          </div>
        </>
      )}
      {theme === "RETRO" && (
        <>
          <h1
            className={
              p2p_light.className +
              " flex flex-row gap-2 justify-start items-center text-4xl text-black underline underline-offset-4 decoration-[#f9e864]"
            }
          >
            Suyash Aminbhavi
            <Image src={HeyAnim} height={80} width={80} alt="hey_animation" />
          </h1>

          <div className="flex items-center justify-center w-full">
            <CardStack item={CARD} theme={theme} />
          </div>
        </>
      )}
    </>
  );
}
