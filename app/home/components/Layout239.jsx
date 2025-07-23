"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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

export function Layout239() {
  const features = [
    {
      title: "User-Friendly Interface for Effortless Navigation",
      description: "Navigate with ease and enjoy a streamlined experience.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Robust Security Features for Your Peace of Mind", 
      description: "Your data is protected with state-of-the-art security.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Customizable Options to Fit Your Unique Needs",
      description: "Tailor the product to suit your preferences effortlessly.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section 
      id="relume" 
      className="bg-neutral-darker text-neutral-white px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {/* Header Content */}
          <div className="mb-12 text-center md:mb-16 lg:mb-20">
            <div className="w-full max-w-4xl">
              <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary md:mb-6 font-inter">
                  Innovative
                </p>
                
                <h2 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-6xl lg:text-7xl font-mochiy text-neutral-white">
                  Discover the Future of Modern Solutions
                </h2>
                
                <p className="text-lg leading-relaxed md:text-xl lg:text-2xl text-neutral-lighter font-inter max-w-3xl mx-auto">
                  Experience cutting-edge technology designed for your needs. Our
                  product seamlessly integrates into your lifestyle, enhancing
                  efficiency and convenience.
                </p>
              </AnimatedGroup>
            </div>
          </div>

          {/* Features Grid */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.25} className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12 mb-12 md:mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex w-full flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="mb-6 md:mb-8 w-full">
                  <img
                    src={feature.image}
                    alt={`${feature.title} illustration`}
                    className="w-full h-48 md:h-56 object-cover rounded-large shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                
                <h3 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl font-mochiy text-neutral-white">
                  {feature.title}
                </h3>
                
                <p className="text-lg leading-relaxed text-neutral-lighter font-inter">
                  {feature.description}
                </p>
              </div>
            ))}
          </AnimatedGroup>

          {/* CTA Buttons */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.2} className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
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