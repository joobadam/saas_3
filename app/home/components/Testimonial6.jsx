"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

export function Testimonial6() {
  const testimonials = [
    {
      quote: "I can't imagine my routine without it!",
      name: "Jane Doe",
      position: "CEO, Tech Innovations",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      company: "Tech Innovations",
      accent: "text-primary"
    },
    {
      quote: "A must-have for anyone looking to improve efficiency.",
      name: "John Smith", 
      position: "Manager, Creative Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      company: "Creative Solutions",
      accent: "text-primary"
    },
    {
      quote: "Simply outstanding! Exceeded my expectations!",
      name: "Emily Johnson",
      position: "Designer, Artistry Co.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      company: "Artistry Co.",
      accent: "text-primary"
    }
  ];

  return (
    <section 
      id="relume" 
      className="bg-neutral-lightest text-neutral-darkest px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        {/* Header Content */}
        <div className="mb-12 w-full text-center md:mb-16 lg:mb-20">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-6xl lg:text-7xl font-mochiy text-neutral-darkest">
              Customer Testimonials
            </h1>
            
            <p className="text-lg leading-relaxed md:text-xl lg:text-2xl text-neutral-darker font-inter max-w-3xl mx-auto">
              This product changed my life for the better! See what our customers are saying.
            </p>
          </AnimatedGroup>
        </div>

        {/* Testimonials Grid */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.25} className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex h-full max-w-lg flex-col items-start justify-start text-left bg-neutral-white rounded-large p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-light group hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className={`w-8 h-8 ${testimonial.accent} opacity-60`} />
              </div>

              {/* Star Rating */}
              <div className="mb-6 flex gap-1 md:mb-8">
                {[...Array(5)].map((_, starIndex) => (
                  <div
                    key={starIndex}
                    className="group/star"
                  >
                    <Star 
                      className={`w-6 h-6 ${testimonial.accent} fill-current group-hover/star:scale-110 transition-transform duration-200`}
                    />
                  </div>
                ))}
              </div>
              
              {/* Testimonial Quote */}
              <blockquote className="text-xl leading-relaxed font-bold md:text-2xl mb-8 text-neutral-darkest font-inter flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Customer Info */}
              <div className="flex items-center gap-4 w-full pt-6 border-t border-neutral-light">
                <div className="relative">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} profile photo`}
                    className="w-16 h-16 rounded-full object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full border-2 border-neutral-white" />
                </div>
                
                <div className="flex-grow">
                  <p className="font-semibold text-lg text-neutral-darkest font-inter">
                    {testimonial.name}
                  </p>
                  <p className="text-neutral-darker font-inter">
                    {testimonial.position}
                  </p>
                </div>

                {/* Company Badge */}
                <div className="px-3 py-1 rounded-full bg-primary text-neutral-white text-sm font-medium">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </AnimatedGroup>

        {/* Trust Indicators */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.2} className="mt-16 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>
              <span className="text-neutral-darker font-inter font-semibold">5.0 Average Rating</span>
            </div>
            
            <div className="h-px w-16 bg-neutral-light sm:h-8 sm:w-px" />
            
            <div className="text-neutral-darker font-inter font-semibold">
              <span className="text-2xl text-primary">1,000+</span> Happy Customers
            </div>
            
            <div className="h-px w-16 bg-neutral-light sm:h-8 sm:w-px" />
            
            <div className="text-neutral-darker font-inter font-semibold">
              <span className="text-2xl text-primary">99%</span> Satisfaction Rate
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}