"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Zap, Building2, Crown } from "lucide-react";

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
      hidden: { opacity: 0, filter: "blur(8px)", y: 40 },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.25, 0.4, 0.25, 1],
        },
      },
    },
  };

  const itemVariants = presetVariants[preset];

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

export function Pricing15() {
  const monthlyPlans = [
    {
      name: "Basic Plan",
      price: "$19",
      period: "/mo",
      icon: Zap,
      color: "text-turquoise",
      bgColor: "bg-turquoise-light",
      features: [
        "24/7 Customer Support",
        "Access to Resources",
        "Monthly Updates",
        "Basic Analytics",
        "Email Integration",
      ],
      popular: false,
    },
    {
      name: "Business Plan",
      price: "$29",
      period: "/mo",
      icon: Building2,
      color: "text-primary",
      bgColor: "bg-primary",
      features: [
        "All Basic Features",
        "Priority Support",
        "Advanced Analytics",
        "Custom Integrations",
        "Monthly Reports",
        "Team Collaboration",
        "API Access",
      ],
      popular: true,
    },
  ];

  const yearlyPlans = [
    {
      name: "Basic Plan",
      price: "$180",
      period: "/yr",
      originalPrice: "$228",
      savings: "Save 20%",
      icon: Zap,
      color: "text-turquoise",
      bgColor: "bg-turquoise-light",
      features: [
        "All Basic Features",
        "Access to Resources",
        "Monthly Updates",
        "Basic Analytics",
        "Email Integration",
      ],
      popular: false,
    },
    {
      name: "Business Plan",
      price: "$280",
      period: "/yr",
      originalPrice: "$348",
      savings: "Save 20%",
      icon: Building2,
      color: "text-primary",
      bgColor: "bg-primary",
      features: [
        "All Business Features",
        "Priority Support",
        "Advanced Analytics",
        "Custom Integrations",
        "Dedicated Account Manager",
        "Advanced Security",
        "Custom Branding",
      ],
      popular: true,
    },
  ];

  return (
    <section
      id="relume"
      className="bg-neutral-white text-neutral-darkest px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container max-w-6xl mx-auto">
        {/* Header */}
        <AnimatedGroup staggerDelay={0.25} className="mx-auto mb-12 max-w-4xl text-center md:mb-16 lg:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary md:mb-6 font-inter">
            Plans
          </p>
          <h2 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-6xl lg:text-7xl font-mochiy text-neutral-darkest">
            Pricing Options
          </h2>
          <p className="text-lg leading-relaxed md:text-xl lg:text-2xl text-neutral-darker font-inter">
            Choose the plan that fits your needs and budget perfectly.
          </p>
        </AnimatedGroup>

        <Tabs defaultValue="monthly" className="w-full">
          {/* Tabs Switcher */}
          <AnimatedGroup staggerDelay={0.1} className="mb-12">
            <TabsList className="mx-auto w-fit bg-neutral-lighter rounded-large p-1">
              <TabsTrigger
                value="monthly"
                className="rounded-medium px-6 py-3 font-inter font-semibold data-[state=active]:bg-primary data-[state=active]:text-neutral-white"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="yearly"
                className="rounded-medium px-6 py-3 font-inter font-semibold data-[state=active]:bg-primary data-[state=active]:text-neutral-white"
              >
                Yearly
              </TabsTrigger>
            </TabsList>
          </AnimatedGroup>

          {/* Monthly Plans */}
          <TabsContent value="monthly">
            <AnimatedGroup staggerDelay={0.2} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {monthlyPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`flex h-full flex-col justify-between p-8 border-2 ${
                      plan.popular ? "border-primary shadow-xl" : "border-neutral-light"
                    } rounded-large hover:shadow-xl transition-all duration-300`}
                  >
                    <div>
                      {plan.popular && (
                        <div className="mb-4 text-center">
                          <div className="bg-primary text-neutral-white px-6 py-2 rounded-large text-sm font-semibold font-inter flex items-center justify-center gap-2">
                            <Crown className="w-4 h-4" />
                            Most Popular
                          </div>
                        </div>
                      )}

                      <div className="mb-8 flex items-center justify-between">
                        <div className={`p-3 rounded-large ${plan.bgColor} bg-opacity-20`}>
                          <plan.icon className={`w-8 h-8 ${plan.color}`} />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold font-mochiy text-neutral-darkest mb-2">
                        {plan.name}
                      </h3>

                      <div className="flex items-baseline mb-2">
                        <h4 className="text-5xl font-bold font-mochiy text-neutral-darkest md:text-6xl">
                          {plan.price}
                        </h4>
                        <span className="text-xl text-neutral-darker font-inter ml-1">
                          {plan.period}
                        </span>
                      </div>

                      <div className="my-8 h-px w-full bg-neutral-light" />
                      <p className="mb-6 font-semibold text-neutral-darker font-inter">Includes:</p>

                      <ul className="mb-8 space-y-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className={`p-1 rounded-full ${plan.bgColor} bg-opacity-20`}>
                              <Check className={`w-4 h-4 ${plan.color}`} />
                            </div>
                            <p className="font-inter text-neutral-darker">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className={`w-full py-3 text-lg font-semibold rounded-medium transition-all duration-300 font-inter ${
                          plan.popular
                            ? "bg-primary hover:bg-primary-dark text-neutral-white shadow-lg hover:shadow-xl"
                            : "bg-neutral-darker hover:bg-neutral-darkest text-neutral-white"
                        }`}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </AnimatedGroup>
          </TabsContent>

          {/* Yearly Plans */}
          <TabsContent value="yearly">
            <AnimatedGroup staggerDelay={0.2} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
              {yearlyPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`flex h-full flex-col justify-between p-8 border-2 ${
                      plan.popular ? "border-primary shadow-xl" : "border-neutral-light"
                    } rounded-large hover:shadow-xl transition-all duration-300`}
                  >
                    <div>
                      {plan.popular && (
                        <div className="mb-4 text-center">
                          <div className="bg-primary text-neutral-white px-6 py-2 rounded-large text-sm font-semibold font-inter flex items-center justify-center gap-2">
                            <Crown className="w-4 h-4" />
                            Most Popular
                          </div>
                        </div>
                      )}

                      <div className="mb-8 flex items-center justify-between">
                        <div className={`p-3 rounded-large ${plan.bgColor} bg-opacity-20`}>
                          <plan.icon className={`w-8 h-8 ${plan.color}`} />
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold font-mochiy text-neutral-darkest mb-2">
                        {plan.name}
                      </h3>

                      <div className="flex items-baseline mb-2">
                        <h4 className="text-5xl font-bold font-mochiy text-neutral-darkest md:text-6xl">
                          {plan.price}
                        </h4>
                        <span className="text-xl text-neutral-darker font-inter ml-1">
                          {plan.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mb-6">
                        <span className="bg-bittersweet text-neutral-white px-3 py-1 rounded-large text-sm font-semibold font-inter">
                          {plan.savings}
                        </span>
                        <span className="text-neutral text-sm line-through font-inter">
                          {plan.originalPrice}
                        </span>
                      </div>

                      <div className="my-8 h-px w-full bg-neutral-light" />
                      <p className="mb-6 font-semibold text-neutral-darker font-inter">Includes:</p>

                      <ul className="mb-8 space-y-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <div className={`p-1 rounded-full ${plan.bgColor} bg-opacity-20`}>
                              <Check className={`w-4 h-4 ${plan.color}`} />
                            </div>
                            <p className="font-inter text-neutral-darker">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className={`w-full py-3 text-lg font-semibold rounded-medium transition-all duration-300 font-inter ${
                          plan.popular
                            ? "bg-primary hover:bg-primary-dark text-neutral-white shadow-lg hover:shadow-xl"
                            : "bg-neutral-darker hover:bg-neutral-darkest text-neutral-white"
                        }`}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                  </Card>
                </motion.div>
              ))}
            </AnimatedGroup>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}