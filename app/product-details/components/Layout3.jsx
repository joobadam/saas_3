"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";

export function Layout3() {
  return (
    <section 
      id="relume" 
      className="bg-neutral-darkest text-neutral-white px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          {/* Left Content */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-5xl lg:text-6xl xl:text-7xl font-mochiy text-neutral-white">
              Discover the innovative features that elevate your experience to the next level.
            </h1>
            
            <p className="text-lg leading-relaxed md:text-xl text-neutral-lighter font-inter">
              Our product combines user-friendly technology with strong security features to ensure efficiency and unmatched performance.
            </p>
          </AnimatedGroup>

          {/* Right Image */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.0}>
            <div className="group">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-large object-cover shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                alt="Innovative technology features showcase"
              />
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}