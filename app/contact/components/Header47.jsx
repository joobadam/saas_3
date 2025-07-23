"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Button } from "@/components/ui/button";
import DarkVeil from "@/components/ui/dark-veil";

export function Header47() {
  return (
    <section 
      id="relume" 
      className="bg-black px-[5%] py-16 md:py-24 lg:py-28"
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
          <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
            {/* Left Side - Heading */}
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold font-inter text-primary md:mb-4">
                Connect
              </p>
              <h1 className="text-6xl font-bold font-mochiy text-neutral-white md:text-8xl lg:text-9xl">
                Get in Touch
              </h1>
            </div>
            
            {/* Right Side - Description & Buttons */}
            <div className="w-full max-w-lg">
              <p className="text-neutral-lighter font-inter md:text-lg">
                We're here to help you with any questions or concerns. Reach out
                to us anytime, and we'll respond promptly.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                <Button 
                  className="bg-primary hover:bg-primary-dark text-neutral-white font-medium transition-all duration-200 hover:transform hover:scale-105"
                  size="lg"
                >
                  Support
                </Button>
                <Button 
                  variant="outline"
                  className="border-neutral-light text-neutral-white hover:bg-neutral-white hover:text-neutral-darkest transition-all duration-200"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}