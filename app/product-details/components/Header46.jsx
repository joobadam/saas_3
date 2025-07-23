"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import DarkVeil from "@/components/ui/dark-veil";

export function Header46() {
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
        <div className="w-full max-w-4xl">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:mb-8 md:text-7xl lg:text-8xl xl:text-9xl font-mochiy text-neutral-white">
              Discover Your Solution
            </h1>
            
            <p className="text-lg leading-relaxed md:text-xl lg:text-2xl text-neutral-lighter font-inter max-w-3xl">
              Experience innovation and elegance with our cutting-edge product
              designed for modern living.
            </p>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}