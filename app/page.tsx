"use client";

import React, { use } from "react";
import { useState, useEffect } from "react";
import { Inter, Press_Start_2P } from "next/font/google";
import { SiRetroarch } from "react-icons/si";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { NextFont } from "next/dist/compiled/@next/font";
import { LuTentTree } from "react-icons/lu";
import { ThemeContext } from "@/contexts/themeContext";
import Main from "@/components/main";

const inter_light = Inter({ weight: "300", subsets: ["latin"] });
const inter_heavy = Inter({ weight: "500", subsets: ["latin"] });
const p2p_light = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export default function Home() {
  const [animationStage, setAnimationStage] = useState<
    "intro" | "transition" | "main"
  >("intro");
  const { theme } = use(ThemeContext);

  const runAnimation = async () => {
    // Scene 1: Handwriting animation (2.5 seconds)
    // Wait for the signature to complete
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // Small hold before transition
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Scene 2: Transition
    setAnimationStage("transition");

    // Wait for background fade and scale out (1.2 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1400));

    // Scene 3: Main page
    setAnimationStage("main");
  };

  const Card = ({
    title,
    titleStyle,
    icon,
    children,
  }: {
    title: "WELCOME" | "MINIMALISTIC" | "RETRO";
    titleStyle: NextFont;
    icon: React.ReactNode;
    children?: React.ReactNode;
  }) => {
    const [hovered, setHovered] = React.useState(false);
    const { setTheme } = use(ThemeContext);
    return (
      <div
        onClick={() => {
          setTheme(title);
          setAnimationStage("intro");
          runAnimation();
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-2 p-4 relative h-[20rem]"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2
            className={
              titleStyle.className +
              " dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
            }
          >
            {title.toString()}
          </h2>
        </div>
      </div>
    );
  };

  const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };

  useEffect(() => {
    runAnimation();
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background layer with color transition */}
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundColor: "#f9e864" }}
        animate={{
          backgroundColor: animationStage === "intro" ? "#f9e864" : "#FFFFFF",
        }}
        transition={{
          duration: animationStage === "transition" ? 1.2 : 0,
          ease: "easeInOut",
        }}
      />

      {/* Text Animation Layer */}
      {animationStage !== "main" && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: animationStage === "transition" ? 0 : 1,
            scale: animationStage === "transition" ? 0.9 : 1,
          }}
          transition={{
            duration: animationStage === "transition" ? 1.2 : 0,
            ease: "easeInOut",
          }}
        >
          <svg
            width="800"
            height="200"
            viewBox="0 0 800 200"
            className="overflow-visible"
          >
            <defs>
              <style>
                {`
                  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
                  .welcome-text {
                    font-family: 'Poppins', serif;
                    font-size: 100px;
                    fill: none;
                    stroke: #000000;
                    stroke-width: 2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                  }
                `}
              </style>
            </defs>

            {/* Animated stroke text */}
            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="welcome-text"
              style={{
                fontFamily: "'Poppins', serif",
                fontSize: "clamp(50px, 10vw, 100px)",
              }}
              initial={{
                strokeDasharray: 1000,
                strokeDashoffset: 1000,
                opacity: 0,
              }}
              animate={{
                strokeDashoffset: 0,
                opacity: 1,
              }}
              transition={{
                strokeDashoffset: {
                  duration: 2.5,
                  ease: "easeInOut",
                },
                opacity: { duration: 0.2, ease: "easeInOut" },
              }}
            >
              {theme}
            </motion.text>

            {/* Filled text that appears after stroke */}
            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontFamily: "'Poppins', serif",
                fontSize: "clamp(50px, 10vw, 100px)",
                fill: "#000000",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 2.3,
                ease: "easeInOut",
              }}
            >
              {theme}
            </motion.text>
          </svg>
        </motion.div>
      )}

      {/* Main Page Content */}
      {animationStage === "main" && theme === "WELCOME" && (
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {
            <main className="flex flex-col gap-8 justify-center items-center h-screen">
              <h1 className={inter_heavy.className + " text-black text-4xl"}>
                Choose an experience
              </h1>
              <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
                <Card
                  title="MINIMALISTIC"
                  titleStyle={inter_light}
                  icon={<LuTentTree className="w-14 h-14" />}
                >
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-yellow-600"
                    colors={[[255, 217, 0]]}
                  />
                </Card>
                <Card
                  title="RETRO"
                  titleStyle={p2p_light}
                  icon={<SiRetroarch className="w-14 h-14" />}
                >
                  <CanvasRevealEffect
                    animationSpeed={3}
                    containerClassName="bg-emerald-600"
                    colors={[[26, 255, 0]]}
                  />
                  {/* Radial gradient for the cute fade */}
                  <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                </Card>
              </div>
            </main>
          }
        </motion.div>
      )}
      {animationStage === "main" &&
        (theme === "MINIMALISTIC" || theme === "RETRO") && <Main />}
    </div>
  );
}
