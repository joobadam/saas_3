"use client"

import DarkVeil from "@/components/ui/dark-veil";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Header26() {
  return (
    <section 
      id="relume" 
      className="relative min-h-screen bg-black text-neutral-white px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* DarkVeil háttérként abszolút pozícióban */}
      <div className="absolute inset-0 z-0 pointer-events-none h-1/2 w-full">
        <DarkVeil 
         hueShift={300} 
         /* scanlineIntensity={0.3}  */
         /* scanlineFrequency={80}  */
         warpAmount={0.05}  
        />
      </div>

      {/* Tartalom */}
      <div className="relative z-10 container max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          {/* Header Content */}
          <div className="mb-12 text-center md:mb-16 lg:mb-20">
            <div className="w-full max-w-4xl">
              <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
                <h1 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-6xl lg:text-7xl xl:text-8xl font-mochiy text-neutral-white">
                  Elevate Your Experience with Our Innovative Solution
                </h1>
                
                <p className="mb-8 text-lg leading-relaxed md:text-xl lg:text-2xl text-neutral-lighter font-inter max-w-3xl mx-auto">
                  Discover the perfect blend of functionality and style. Our
                  product is designed to enhance your daily routine effortlessly.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      size="lg"
                      className="bg-primary hover:bg-primary-dark text-neutral-white font-semibold px-8 py-3 text-lg rounded-medium transition-all duration-300 shadow-lg hover:shadow-xl font-inter"
                    >
                      Get Started
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-neutral-light text-neutral-white hover:bg-primary hover:text-neutral-white hover:border-primary font-semibold px-8 py-3 text-lg rounded-medium transition-all duration-300 font-inter"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </AnimatedGroup>
            </div>
          </div>

          {/* Hero Image */}
          <AnimatedGroup preset="blur-slide" staggerDelay={0.4}>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-5xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&crop=center"
                className="w-full h-auto rounded-large object-cover shadow-2xl"
                alt="Team collaboration - modern workspace"
              />
            </motion.div>
          </AnimatedGroup>
        </div>
      </div>
    </section>
  );
}