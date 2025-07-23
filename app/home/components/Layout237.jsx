"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, UserPlus, Settings, Zap } from "lucide-react";

// AnimatedGroup komponens
const AnimatedGroup = ({ children, preset = "blur-slide", className = "", staggerDelay = 0.2 }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  const presetVariants = {
    "blur-slide": {
      hidden: { opacity: 0, filter: 'blur(8px)', y: 40 },
      visible: { 
        opacity: 1, 
        filter: 'blur(0px)', 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.4, 0.25, 1],
        }
      },
    },
    "slide": {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.4, 0.25, 1],
        }
      },
    },
    "fade": {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: [0.25, 0.4, 0.25, 1],
        }
      },
    }
  };

  const itemVariants = presetVariants[preset] || presetVariants["blur-slide"];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export function Layout237() {
  const steps = [
    {
      icon: UserPlus,
      title: "Step 1: Set Up Your Account",
      description: "Create an account in just a few clicks and get started instantly.",
      color: "text-primary"
    },
    {
      icon: Settings,
      title: "Step 2: Customize Your Preferences", 
      description: "Tailor the settings to fit your unique needs and workflow.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Step 3: Start Enjoying the Benefits",
      description: "Experience the full potential of our product immediately.",
      color: "text-primary"
    }
  ];

  return (
    <section 
      id="relume" 
      className="bg-neutral-white text-neutral-darkest px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {/* Header Content */}
          <div className="mb-12 w-full max-w-4xl text-center md:mb-16 lg:mb-20">
            <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary md:mb-6 font-inter">
                Discover
              </p>
              
              <h2 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-6xl lg:text-7xl font-mochiy text-neutral-darkest">
                Experience the Ease of Our Product
              </h2>
              
              <p className="text-lg leading-relaxed md:text-xl lg:text-2xl text-neutral-darker font-inter max-w-3xl mx-auto">
                Our product simplifies your daily tasks. Enjoy a seamless
                experience that enhances productivity and transforms your workflow.
              </p>
            </AnimatedGroup>
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

          {/* Progress indicator */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.0} className="w-full max-w-md mb-8 md:mb-12">
            <div className="h-1 bg-neutral-light rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary w-full" />
            </div>
          </AnimatedGroup>

          {/* CTA Buttons */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2} className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <div className="group">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-dark text-neutral-white font-semibold px-8 py-3 text-lg rounded-medium transition-all duration-300 shadow-lg hover:shadow-xl font-inter group-hover:scale-105 group-hover:-translate-y-0.5"
              >
                Get Started
              </Button>
            </div>
            
            <div className="group">
              <Button 
                variant="ghost" 
                size="lg"
                className="text-primary hover:text-primary-dark hover:bg-primary/10 font-semibold px-6 py-3 text-lg transition-all duration-300 font-inter flex items-center gap-2 group-hover:scale-105 group-hover:translate-x-1"
              >
                Learn More
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}