"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import DarkVeil from "@/components/ui/dark-veil";

export function Header49() {
  return (
    <section 
      id="relume" 
      className="bg-black text-neutral-white px-[5%] py-16 md:py-24 lg:py-28"
    >
               {/* DarkVeil háttérként abszolút pozícióban */}
               <div className="absolute inset-0 z-0 pointer-events-none h-[90%] w-full">
        <DarkVeil 
         hueShift={300} 
         /* scanlineIntensity={0.3}  */
         /* scanlineFrequency={80}  */
         warpAmount={0.05}  
        />
      </div>
      <div className="container-custom">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-16 items-center">
            {/* Left - Main Heading */}
            <div className="max-w-fit break-words w-[520%]">
              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-mochiy text-neutral-white leading-tight">
                Affordable Pricing Plans
              </h1>
            </div>

            {/* Right - Description */}
            <div className="max-w-prose">
              <p className="text-base md:text-lg lg:text-xl text-neutral-lighter font-inter leading-relaxed">
                Explore our flexible pricing options designed to fit every budget.
                Choose the plan that best suits your needs and start enjoying the
                benefits today!
              </p>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}