"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

import { MaskContainer } from "./ui/svg-mask-effect";

export function Section3() {
  return (
    <div className="mt-[100px] h-[20rem] w-[80vw] mx-uto rounded-3xl bg-neutral-950 dark:bg-neutral-100 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl text-center font-sans font-bold text-white dark:text-gray-700">
            Join the waitlist
          </h1>
      </div>
      <BackgroundBeams />
    </div>
  );
}
