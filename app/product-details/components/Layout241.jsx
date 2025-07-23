"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Button } from "@/components/ui/button";
import { ChevronRight, UserPlus, Settings, Zap } from "lucide-react";

export function Layout241() {
  const steps = [
    {
      icon: UserPlus,
      title: "Step 1: Sign Up for an Account",
      description: "Create your account and unlock the tools.",
      color: "text-primary"
    },
    {
      icon: Settings,
      title: "Step 2: Customize Your Preferences",
      description: "Tailor settings to suit your needs.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Step 3: Enjoy the Benefits",
      description: "Access the advantages of our product instantly.",
      color: "text-primary"
    }
  ];

  return (
    <section 
      id="relume" 
      className="bg-neutral-white text-neutral-darkest px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        <div className="flex flex-col">
          {/* Header Content */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="w-full max-w-4xl">
              <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary md:mb-6 font-inter">
                  Simple
                </p>
                
                <h2 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-6xl lg:text-7xl font-mochiy text-neutral-darkest">
                  Effortless Steps to Get Started
                </h2>
                
                <p className="text-lg leading-relaxed md:text-xl lg:text-2xl text-neutral-darker font-inter max-w-3xl">
                  Unlock the full potential of our product with ease. Follow these
                  simple steps to enhance your experience.
                </p>
              </AnimatedGroup>
            </div>
          </div>

          {/* Steps Grid */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.25} className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 mb-12 md:mb-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex w-full flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                {/* Icon with background circle */}
                <div className="mb-6 md:mb-8 relative">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-neutral-lighter flex items-center justify-center group-hover:bg-neutral-light transition-colors duration-300 shadow-lg">
                    <step.icon className={`w-10 h-10 md:w-12 md:h-12 ${step.color}`} />
                  </div>
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-neutral-white rounded-full flex items-center justify-center text-sm font-bold font-inter">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl font-mochiy text-neutral-darkest">
                  {step.title}
                </h3>
                
                <p className="text-lg leading-relaxed text-neutral-darker font-inter">
                  {step.description}
                </p>
              </div>
            ))}
          </AnimatedGroup>

          {/* CTA Buttons */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="group">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-neutral-white font-semibold px-8 py-3 text-lg rounded-medium transition-all duration-300 shadow-lg hover:shadow-xl font-inter group-hover:scale-105 group-hover:-translate-y-0.5"
              >
                Start
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
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}