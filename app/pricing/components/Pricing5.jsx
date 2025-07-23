"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing5() {
  return (
    <section 
      id="relume" 
      className="bg-black px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
          {/* Header Section */}
          <div className="mb-8 w-full max-w-lg lg:mb-20">
            <p className="mb-3 font-semibold font-inter text-primary md:mb-4">
              Affordable
            </p>
            <h2 className="mb-5 text-5xl font-bold font-mochiy text-neutral-white md:mb-6 md:text-7xl lg:text-8xl">
              Pricing Plans
            </h2>
            <p className="text-neutral-lighter font-inter md:text-lg">
              Choose the plan that best fits your needs and unlock exclusive
              features today.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
            
            {/* Feature Tiers - Left Side */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <div className="w-8 h-8 bg-primary rounded-medium flex items-center justify-center">
                    <Check className="w-5 h-5 text-neutral-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-lg leading-[1.4] font-bold font-mochiy text-neutral-white md:mb-4 md:text-xl">
                    Basic Features
                  </h3>
                  <p className="text-neutral-lighter font-inter">
                    Get started with the core features.
                  </p>
                </div>
              </div>

              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <div className="w-8 h-8 bg-primary rounded-medium flex items-center justify-center">
                    <Check className="w-5 h-5 text-neutral-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-lg leading-[1.4] font-bold font-mochiy text-neutral-white md:mb-4 md:text-xl">
                    Premium Features
                  </h3>
                  <p className="text-neutral-lighter font-inter">
                    Enhance productivity and access to monitoring tools.
                  </p>
                </div>
              </div>

              <div className="flex self-start">
                <div className="mr-6 flex-none self-start">
                  <div className="w-8 h-8 bg-primary rounded-medium flex items-center justify-center">
                    <Check className="w-5 h-5 text-neutral-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 text-lg leading-[1.4] font-bold font-mochiy text-neutral-white md:mb-4 md:text-xl">
                    Ultimate Features
                  </h3>
                  <p className="text-neutral-lighter font-inter">
                    Access to every feature we offer, designed for advanced users.
                  </p>
                </div>
              </div>
            </div>

            {/* Basic Plan Card - Right Side */}
            <Card className="h-full bg-neutral-darkest border-neutral-dark hover-lift">
              <CardContent className="px-6 py-8 md:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="mb-2 text-xl font-bold font-mochiy text-neutral-white md:text-2xl">
                      Basic Plan
                    </h4>
                    <p className="text-neutral-lighter font-inter">Perfect for beginners</p>
                  </div>
                  <h5 className="justify-self-end text-6xl font-bold font-mochiy text-primary md:text-8xl lg:text-9xl">
                    $19<span className="text-2xl text-neutral-lighter">/mo</span>
                  </h5>
                </div>

                <div className="my-8 h-px w-full shrink-0 bg-neutral-dark" />
                
                <p className="text-neutral-white font-inter font-medium mb-4">Includes:</p>
                
                <div className="mt-4 mb-8 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
                  {[
                    "24/7 Customer Support",
                    "Secure Dashboard Access", 
                    "Essential Features",
                    "Feature point here",
                    "Feature point here",
                    "Feature point here"
                  ].map((feature, index) => (
                    <div key={index} className="flex self-start">
                      <div className="mr-4 flex-none self-start">
                        <Check className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-neutral-lighter font-inter">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="my-8 h-px w-full shrink-0 bg-neutral-dark" />
                
                <Button 
                  className="w-full bg-primary hover:bg-primary-dark text-neutral-white font-medium transition-all duration-200 hover:transform hover:scale-105"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}