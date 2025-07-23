"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageIcon } from "lucide-react";

export function Contact30() {
  // JSON adatok alapján
  const locations = [
    {
      city: "Sydney",
      address: "123 Sample St, Sydney NSW 2000 AU",
      linkText: "View Office"
    },
    {
      city: "New York", 
      address: "123 Sample St, New York NY 10001 USA",
      linkText: "View Office"
    },
    {
      city: "London",
      address: "123 Sample St, London WC1E 7DC, United Kingdom",
      linkText: "View Office"
    }
  ];

  return (
    <section 
      id="relume" 
      className="bg-neutral-lightest px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
          {/* Header */}
          <div className="mb-12 flex max-w-lg flex-col justify-start md:mb-18 lg:mb-20">
            <p className="mb-3 font-semibold font-inter text-primary md:mb-4">
              Our
            </p>
            <h2 className="mb-5 text-5xl font-bold font-mochiy text-neutral-darkest md:mb-6 md:text-7xl lg:text-8xl">
              Locations
            </h2>
            <p className="text-neutral-dark font-inter md:text-lg">
              Find us in cities around the world.
            </p>
          </div>

          {/* Locations Tabs */}
          <Tabs
            defaultValue="tab-1"
            orientation="vertical"
            className="relative grid auto-cols-fr grid-cols-1 gap-12 md:grid-cols-[.5fr_1fr] md:gap-y-16 lg:gap-x-20 lg:gap-y-16"
          >
            {/* Tabs List - Left Side */}
            <TabsList className="relative grid h-full auto-cols-fr grid-cols-1 gap-x-4 gap-y-10 bg-transparent p-0">
              {locations.map((location, index) => (
                <TabsTrigger
                  key={index}
                  value={`tab-${index + 1}`}
                  className="items-start justify-start border-0 border-l-2 border-transparent px-0 py-0 pl-8 text-left bg-transparent hover:bg-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
                >
                  <div className="text-left hover-lift">
                    <h3 className="mb-3 text-xl font-bold font-mochiy text-neutral-darkest md:mb-4 md:text-2xl">
                      {location.city}
                    </h3>
                    <p className="inline-block whitespace-normal text-neutral-dark font-inter">
                      {location.address}
                    </p>
                    <div className="mt-5 font-semibold md:mt-6">
                      <p className="text-primary font-inter cursor-pointer hover:text-primary-dark transition-colors duration-200">
                        {location.linkText}
                      </p>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs Content - Right Side */}
            {locations.map((location, index) => {
              const cityImages = {
                "Sydney": "https://images.unsplash.com/photo-1590716209211-ea74d5f63573?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN5ZG5leXxlbnwwfHwwfHx8MA%3D%3D",
                "New York": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
                "London": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              };
              
              return (
                <TabsContent
                  key={index}
                  value={`tab-${index + 1}`}
                  className="data-[state=active]:animate-in data-[state=active]:fade-in-50 data-[state=active]:slide-in-from-right-2 duration-300"
                >
                  <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                    <img
                      src={cityImages[location.city]}
                      alt={`${location.city} cityscape`}
                      className="w-full h-full object-cover rounded-large"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-darkest/60 to-transparent rounded-large" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-bold font-mochiy mb-2">
                        {location.city}
                      </h4>
                      <p className="text-neutral-lightest font-inter">
                        Our {location.city} Office
                      </p>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </AnimatedGroup>
      </div>
    </section>
  );
}