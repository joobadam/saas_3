"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";


export function Cta3() {
  return (
    <section
      id="relume"
      className="relative px-[5%] py-20 md:py-28 lg:py-32 overflow-hidden"
    >
      {/* Háttérkép és overlay */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 1.5,
              ease: [0.25, 0.4, 0.25, 1],
            },
          },
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop&crop=center"
          className="w-full h-full object-cover"
          alt="Team collaboration and success"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-darkest/90 via-neutral-darkest/70 to-neutral-darkest/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-darkest/80 via-transparent to-transparent" />
      </motion.div>

      {/* Szikrák */}
      <div className="absolute inset-0 z-5">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -180 },
              visible: (i) => ({
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.8 + i * 0.2,
                },
              }),
            }}
            className={`absolute text-primary opacity-30`}
            style={{
              top: `${20 + (index * 15) % 60}%`,
              left: `${10 + (index * 20) % 80}%`,
            }}
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8" />
          </motion.div>
        ))}
      </div>

      {/* Tartalom */}
      <div className="relative z-10 container-custom">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Bal oldal */}
          <div className="w-full max-w-2xl lg:max-w-3xl">
            <AnimatedGroup staggerDelay={0.15} className="mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary bg-opacity-20 rounded-large backdrop-blur-sm">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary font-inter">
                  Ready to Get Started?
                </p>
              </div>
            </AnimatedGroup>

            <AnimatedGroup staggerDelay={0.15}>
              <h2 className="mb-6 text-4xl font-bold leading-tight text-neutral-white md:mb-8 md:text-6xl lg:text-7xl xl:text-8xl font-mochiy">
                Take the Next Step
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-neutral-lighter md:text-xl lg:text-2xl font-inter max-w-2xl">
                Join countless satisfied customers and experience the difference
                today. Your transformative journey starts right here!
              </p>
            </AnimatedGroup>

            {/* CTA gombok */}
            <AnimatedGroup staggerDelay={0.15} className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12">
              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-neutral-white font-semibold px-8 py-4 text-lg rounded-medium transition-all duration-300 shadow-xl hover:shadow-2xl font-inter flex items-center gap-2"
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-neutral-white text-neutral-white hover:bg-neutral-white hover:text-neutral-darkest font-semibold px-8 py-4 text-lg rounded-medium transition-all duration-300 backdrop-blur-sm font-inter"
                >
                  Learn More
                </Button>
              </motion.div>
            </AnimatedGroup>

            {/* Statok */}
            <AnimatedGroup staggerDelay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "10K+", label: "Happy Customers", color: "text-primary" },
                { number: "99%", label: "Satisfaction", color: "text-primary" },
                { number: "24/7", label: "Support", color: "text-primary" },
                { number: "30 Day", label: "Guarantee", color: "text-primary" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold font-mochiy ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <p className="text-sm text-neutral-lighter font-inter">{stat.label}</p>
                </div>
              ))}
            </AnimatedGroup>
          </div>

          {/* Jobb oldal */}
          <AnimatedGroup staggerDelay={0.15} className="w-full max-w-md lg:max-w-lg">
            <div className="bg-neutral-darker bg-opacity-80 backdrop-blur-md rounded-large p-8 border border-neutral-light border-opacity-30 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-neutral-white font-mochiy">
                  Why Choose Us?
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  { icon: "🚀", title: "Lightning Fast", desc: "Get results in minutes" },
                  { icon: "🛡️", title: "Secure & Safe", desc: "Your data is protected" },
                  { icon: "💎", title: "Premium Quality", desc: "Best-in-class experience" },
                  { icon: "🎯", title: "Perfect Fit", desc: "Tailored to your needs" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-neutral-white font-inter">{feature.title}</h4>
                      <p className="text-sm text-neutral-lighter font-inter">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </div>

      {/* Alsó sötét átmenet */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-darkest to-transparent z-5" />
    </section>
  );
}