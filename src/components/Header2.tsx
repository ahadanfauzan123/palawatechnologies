"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { TypewriterEffect } from "./ui/typewriter-effect";
const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "better",
    },
    {
      text: "&",
    },
    {
      text: "faster.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
export function Header2() {
  return (
    <HeroHighlight>
      <div className="flex items-center justify-center flex-col space-y-6 sm:w-[80%] mx-auto lg:w-full h-full">
            <p className="text-7xl text-center sm:text-7xl font-bold relative z-20 dark:text-white text-gray-700">
                        Palawa Technologies
            </p>
            
            <motion.h1
            initial={{
            opacity: 0,
            y: 20,
            }}
            animate={{
            opacity: 1,
            y: [20, -5, 0],
            }}
            transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
                        <TypewriterEffect words={words} />
            </motion.h1>
            <div className="sm:w-[80%] mx-auto flex items-center justify-center space-x-5">
                  <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                        Projects
                        </span>
                  </button>
                  <button className=" px-6 py-2 bg-transparent border-2 border-gray-700 dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                        Contact Us
                  </button>

            </div>
      </div>
    </HeroHighlight>
  );
}
