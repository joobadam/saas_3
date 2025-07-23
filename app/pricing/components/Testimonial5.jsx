"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Star } from "lucide-react";

export function Testimonial5() {
  // JSON adatok alapján
  const testimonials = [
    {
      text: "I can't imagine my daily routine without it!",
      author: "Jane Doe",
      position: "CEO, Tech Innovations",
      platform: "Webflow",
      rating: 5
    },
    {
      text: "A must-have for anyone looking to simplify their life.",
      author: "John Smith", 
      position: "Manager, Daily Solutions",
      platform: "Webflow",
      rating: 5
    }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="mb-6 flex md:mb-8">
        {[...Array(rating)].map((_, index) => (
          <Star 
            key={index} 
            className="w-6 h-6 fill-current text-primary" 
          />
        ))}
      </div>
    );
  };

  return (
    <section id="relume" className="bg-neutral-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-custom">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
          {/* Header */}
          <div className="mb-12 w-full md:mb-18 lg:mb-20">
            <h1 className="mb-5 text-5xl font-bold font-mochiy text-neutral-darkest md:mb-6 md:text-7xl lg:text-8xl">
              Customer Reviews
            </h1>
            <p className="text-neutral-dark font-inter md:text-lg">
              This product changed my life for the better!
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:gap-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex h-full max-w-lg flex-col items-start justify-start text-left hover-lift"
              >
                {/* Star Rating */}
                <StarRating rating={testimonial.rating} />
                
                {/* Quote */}
                <blockquote className="text-lg leading-[1.4] font-bold font-inter text-neutral-darkest md:text-xl">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author Info */}
                <div className="mt-6 flex w-full flex-col gap-3 md:mt-8 md:w-auto md:flex-row md:items-center md:gap-5">
                  {/* Avatar */}
                  <div>
                    <div className="w-14 h-14 min-h-14 min-w-14 rounded-full bg-neutral-light flex items-center justify-center">
                      <span className="text-lg font-bold font-mochiy text-neutral-dark">
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Name & Position */}
                  <div className="mb-4 md:mb-0">
                    <p className="font-semibold font-inter text-neutral-darkest">
                      {testimonial.author}
                    </p>
                    <p className="text-neutral-dark font-inter">
                      {testimonial.position}
                    </p>
                  </div>
                  
                  {/* Separator */}
                  <div className="hidden w-px self-stretch bg-neutral-light md:block" />
                  
                  {/* Platform Logo */}
                  <div>
                    <div className="bg-neutral-lighter px-3 py-2 rounded-medium">
                      <span className="text-sm font-semibold font-inter text-neutral-dark">
                        {testimonial.platform}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}