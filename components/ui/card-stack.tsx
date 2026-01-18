"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Hanken_Grotesk, Orbitron } from "next/font/google";
import { Card } from "pixel-retroui";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

const hankeng_light = Hanken_Grotesk({ weight: "400", subsets: ["latin"] });
const orbitron_light = Orbitron({ weight: "400", subsets: ["latin"] });

export const CardStack = ({
  item,
  theme,
}: {
  item: Card;
  theme: string;
  offset?: number;
  scaleFactor?: number;
}) => {
  const [card, setCard] = useState<Card>(item);

  return (
    <div className="relative w-full">
      {theme === "MINIMALISTIC" && (
        <motion.div
          key={card.id}
          className={
            hankeng_light.className +
            " mt-8 dark:bg-black bg-white h-60 w-full rounded-3xl p-8 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
          }
          style={{
            transformOrigin: "top center",
          }}
        >
          <div className="text-[1.15rem] font-normal text-neutral-700 dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 font-medium dark:text-white">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
        </motion.div>
      )}
      {theme === "RETRO" && (
        <Card key={card.id} className="mt-8 flex flex-col gap-12 p-4">
          <div className="retroui-text text-[1.15rem] font-normal text-black dark:text-neutral-200">
            {card.content}
          </div>
          <div>
            <p className="text-neutral-500 font-medium dark:text-white">
              {card.name}
            </p>
            <p className="text-neutral-400 font-normal dark:text-neutral-200">
              {card.designation}
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};
