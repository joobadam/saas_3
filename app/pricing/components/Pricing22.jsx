"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Pricing22() {
  // JSON adatok alapján
  const plans = [
    { name: "Basic", price: "$19", period: "/mo" },
    { name: "Business", price: "$29", period: "/mo" },
    { name: "Enterprise", price: "$49", period: "/mo" }
  ];

  const categories = [
    {
      name: "Feature Category",
      features: [
        "Feature text goes here",
        "Feature text goes here", 
        "Feature text goes here",
        "Feature text goes here"
      ],
      values: {
        Basic: ["10", "✔", "✔", "✔"],
        Business: ["25", "✔", "✔", "✔"],
        Enterprise: ["Unlimited", "✔", "✔", "✔"]
      }
    },
    {
      name: "Feature Category",
      features: [
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here", 
        "Feature text goes here"
      ],
      values: {
        Basic: ["10", "✔", "✔", ""],
        Business: ["25", "✔", "✔", ""],
        Enterprise: ["Unlimited", "✔", "✔", "✔"]
      }
    },
    {
      name: "Feature Category", 
      features: [
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here",
        "Feature text goes here"
      ],
      values: {
        Basic: ["10", "✔", "", ""],
        Business: ["25", "✔", "✔", ""],
        Enterprise: ["Unlimited", "✔", "✔", "✔"]
      }
    }
  ];

  return (
    <section id="relume" className="bg-neutral-lightest px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-custom">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.2}>
          {/* Header */}
          <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold font-inter text-primary md:mb-4">
              Pricing Table
            </p>
            <h1 className="mb-5 text-5xl font-bold font-mochiy text-neutral-darkest md:mb-6 md:text-7xl lg:text-8xl">
              Pricing plan
            </h1>
            <p className="text-neutral-dark font-inter md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Pricing Table */}
          <div className="w-full">
            {/* Table Header with Plans */}
            <div className="grid grid-cols-3 gap-x-4 bg-neutral-white rounded-t-large p-6 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
              <div className="hidden md:block" />
              {plans.map((plan, index) => (
                <div key={index} className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-lg leading-[1.4] font-bold font-mochiy text-neutral-darkest md:text-xl">
                      {plan.name}
                    </h2>
                    <p className="my-3 text-4xl leading-[1.2] font-bold font-mochiy text-primary sm:text-5xl md:my-4 md:text-6xl lg:text-7xl">
                      {plan.price}
                      <span className="text-lg text-neutral-dark">{plan.period}</span>
                    </p>
                    <p className="text-neutral-dark font-inter">Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button 
                      className="w-full bg-primary hover:bg-primary-dark text-neutral-white font-medium transition-all duration-200 hover:transform hover:scale-105"
                      size="lg"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Categories */}
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                {/* Category Header */}
                <h3 className="mt-8 py-5 text-lg leading-[1.4] font-bold font-mochiy text-neutral-darkest md:text-xl bg-neutral-white px-6">
                  {category.name}
                </h3>
                
                {/* Category Features */}
                {category.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className={`grid grid-cols-3 md:grid-cols-[1.5fr_1fr_1fr_1fr] ${
                      featureIndex % 2 === 0 ? 'bg-neutral-white' : 'bg-neutral-lightest'
                    }`}
                  >
                    <p className="col-span-3 row-span-1 p-4 font-inter text-neutral-darkest md:col-span-1 md:px-6 md:py-4">
                      {feature}
                    </p>
                    {plans.map((plan, planIndex) => {
                      const value = category.values[plan.name][featureIndex];
                      return (
                        <div key={planIndex} className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                          {value === "✔" ? (
                            <Check className="w-6 h-6 text-primary" />
                          ) : value ? (
                            <span className="font-inter text-neutral-darkest">{value}</span>
                          ) : (
                            <span className="text-neutral-light">—</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            ))}

            {/* Bottom Buttons */}
            <div className="mt-8 grid grid-cols-3 gap-x-4 bg-neutral-white rounded-b-large p-6 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
              <div className="hidden md:block" />
              {plans.map((plan, index) => (
                <Button 
                  key={index}
                  className="w-full bg-primary hover:bg-primary-dark text-neutral-white font-medium transition-all duration-200 hover:transform hover:scale-105"
                  size="lg"
                >
                  Get started
                </Button>
              ))}
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}