"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Layout25() {
  return (
    <section 
      id="relume" 
      className="bg-neutral-darkest text-neutral-white px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          {/* Left Content */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.25}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary md:mb-6 font-inter">
              Innovate
            </p>
            
            <h2 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-6xl lg:text-7xl font-mochiy text-neutral-white">
              Discover the Future of Seamless Solutions
            </h2>
            
            <p className="mb-8 text-lg leading-relaxed md:text-xl text-neutral-lighter font-inter md:mb-10">
              Experience cutting-edge technology developed for your needs.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 mb-8 md:mb-10">
              <div className="group">
                <h3 className="mb-3 text-5xl font-bold md:text-6xl lg:text-7xl font-mochiy text-primary">
                  50%
                </h3>
                <p className="text-lg leading-relaxed text-neutral-lighter font-inter">
                  Efficiency
                </p>
              </div>
              <div className="group">
                <h3 className="mb-3 text-5xl font-bold md:text-6xl lg:text-7xl font-mochiy text-primary">
                  50%
                </h3>
                <p className="text-lg leading-relaxed text-neutral-lighter font-inter">
                  Security
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
              <div className="group">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-neutral-white font-semibold px-8 py-3 text-lg rounded-medium transition-all duration-300 shadow-lg hover:shadow-xl font-inter group-hover:scale-105 group-hover:-translate-y-0.5"
                >
                  Explore
                </Button>
              </div>
              
              <div className="group">
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="text-primary hover:text-primary-dark hover:bg-primary/10 font-semibold px-6 py-3 text-lg transition-all duration-300 font-inter flex items-center gap-2 group-hover:scale-105 group-hover:translate-x-1"
                >
                  Learn
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </AnimatedGroup>

          {/* Right Image */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.0}>
            <div className="group">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-large object-cover shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                alt="Future technology and seamless solutions"
              />
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}