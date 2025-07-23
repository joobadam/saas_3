"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

export function Cta45() {
  return (
    <section 
      id="relume" 
      className="bg-neutral-darker text-neutral-white px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.0}>
          <Card className="relative overflow-hidden bg-gradient-to-br from-neutral-darker via-neutral-darkest to-neutral-darker border border-neutral-dark shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10">
                <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              </div>
              <div className="absolute top-20 right-20">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" style={{animationDelay: '1s'}} />
              </div>
              <div className="absolute bottom-16 left-1/3">
                <Sparkles className="w-10 h-10 text-primary animate-pulse" style={{animationDelay: '2s'}} />
              </div>
              <div className="absolute bottom-10 right-16">
                <Sparkles className="w-7 h-7 text-primary animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
            </div>

            <div className="relative grid grid-cols-1 items-center justify-center gap-8 p-8 md:grid-cols-[1fr_max-content] md:gap-x-12 lg:gap-x-20 lg:p-12">
              {/* Left Content */}
              <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
                <div className="w-full max-w-3xl text-center md:text-left">
                  <h3 className="mb-4 text-4xl leading-tight font-bold md:mb-6 md:text-5xl lg:text-6xl xl:text-7xl font-mochiy text-neutral-white">
                    Ready to elevate your experience?
                  </h3>
                  
                  <p className="text-lg leading-relaxed md:text-xl lg:text-2xl text-neutral-lighter font-inter">
                    Join us and discover the difference today
                  </p>
                </div>
              </AnimatedGroup>

              {/* Right CTA */}
              <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
                <div className="flex w-full flex-col sm:flex-row items-center justify-center md:w-auto md:justify-end gap-4 md:gap-6">
                  <div className="group">
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary-dark text-neutral-white font-semibold px-8 py-4 text-lg rounded-medium transition-all duration-300 shadow-xl hover:shadow-2xl font-inter group-hover:scale-105 group-hover:-translate-y-1 flex items-center gap-2 min-w-[160px] justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                  
                  <div className="group">
                    <Button 
                      variant="outline"
                      size="lg"
                      className="border-2 border-neutral-light text-neutral-white hover:bg-neutral-white hover:text-neutral-darkest font-semibold px-8 py-4 text-lg rounded-medium transition-all duration-300 font-inter group-hover:scale-105 group-hover:-translate-y-1 min-w-[160px]"
                    >
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </AnimatedGroup>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
          </Card>
        </AnimatedGroup>

        {/* Trust Indicators */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.2} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-2xl md:text-3xl font-bold font-mochiy text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              50K+
            </div>
            <p className="text-sm text-neutral-lighter font-inter">Happy Users</p>
          </div>
          
          <div className="group">
            <div className="text-2xl md:text-3xl font-bold font-mochiy text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              99.9%
            </div>
            <p className="text-sm text-neutral-lighter font-inter">Uptime</p>
          </div>
          
          <div className="group">
            <div className="text-2xl md:text-3xl font-bold font-mochiy text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <p className="text-sm text-neutral-lighter font-inter">Support</p>
          </div>
          
          <div className="group">
            <div className="text-2xl md:text-3xl font-bold font-mochiy text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              30 Day
            </div>
            <p className="text-sm text-neutral-lighter font-inter">Money Back</p>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}