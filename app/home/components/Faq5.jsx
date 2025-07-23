"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, HelpCircle, MessageCircle } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";


export function Faq5() {
  const faqData = [
    {
      question: "What is the product?",
      answer:
        "Our product is designed to simplify your life. It offers innovative solutions tailored to your needs. Experience convenience like never before.",
      icon: "💡",
    },
    {
      question: "How to use it?",
      answer:
        "Using our product is straightforward. Simply follow the user guide included in the package. You'll be up and running in no time.",
      icon: "🚀",
    },
    {
      question: "Is there a warranty?",
      answer:
        "Yes, we offer a one-year warranty on all products. This ensures you have peace of mind with your purchase. Contact us for details.",
      icon: "🛡️",
    },
    {
      question: "What is the price?",
      answer:
        "Our product is competitively priced to offer great value. Check our pricing section for detailed tiers. We believe in transparent pricing.",
      icon: "💰",
    },
    {
      question: "Can I return it?",
      answer:
        "Absolutely! We have a hassle-free return policy. If you're not satisfied, you can return it within 30 days.",
      icon: "↩️",
    },
  ];

  return (
    <section
      id="relume"
      className="bg-neutral-lightest text-neutral-darkest px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedGroup staggerDelay={0.2} className="mb-12 max-w-3xl md:mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary bg-opacity-20 rounded-large">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary font-inter">
              Frequently Asked Questions
            </p>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-6xl lg:text-7xl font-mochiy text-neutral-darkest">
            FAQs
          </h2>

          <p className="text-lg leading-relaxed md:text-xl lg:text-2xl text-neutral-darker font-inter">
            Find answers to common questions about our product and its features.
          </p>
        </AnimatedGroup>

        {/* FAQ List */}
        <Accordion
          type="multiple"
          className="grid items-start justify-stretch gap-6 mb-16 md:mb-20"
        >
          <AnimatedGroup staggerDelay={0.15}>
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="bg-neutral-white border border-neutral-light rounded-large shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <AccordionItem value={`item-${index}`} className="border-none">
                    <AccordionTrigger className="px-6 py-6 hover:no-underline group md:px-8 md:py-7 [&[data-state=open]]:bg-neutral-lightest transition-colors duration-300">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="text-2xl">{faq.icon}</div>
                        <span className="text-left text-lg font-bold md:text-xl font-mochiy text-neutral-darkest group-hover:text-primary transition-colors duration-300">
                          {faq.question}
                        </span>
                      </div>
                      <div className="ml-4">
                        <Plus className="w-6 h-6 text-neutral-dark group-hover:text-primary transition-all duration-300 [&[data-state=open]]:rotate-45" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6 md:px-8 md:pb-8">
                      <div className="pl-12 pr-4">
                        <p className="text-lg leading-relaxed text-neutral-darker font-inter">
                          {faq.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              </motion.div>
            ))}
          </AnimatedGroup>
        </Accordion>

        {/* CTA */}
        <AnimatedGroup staggerDelay={0.2}>
          <div className="text-center bg-neutral-white rounded-large p-8 md:p-12 shadow-lg border border-neutral-light">
            <div className="mx-auto max-w-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary bg-opacity-20 rounded-large">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
              </div>

              <h4 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl font-mochiy text-neutral-darkest">
                Still have questions?
              </h4>

              <p className="mb-8 text-lg leading-relaxed md:text-xl text-neutral-darker font-inter">
                We're here to help! Our support team is available 24/7 to assist you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-neutral-white font-semibold px-8 py-3 text-lg rounded-medium transition-all duration-300 shadow-lg hover:shadow-xl font-inter"
                  >
                    Contact Support
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-neutral-light text-neutral-darkest hover:bg-neutral-lightest font-semibold px-8 py-3 text-lg rounded-medium transition-all duration-300 font-inter"
                  >
                    View Documentation
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedGroup>

        {/* Help Stats */}
        <AnimatedGroup staggerDelay={0.2} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-turquoise bg-opacity-10 rounded-large">
            <div className="text-3xl font-bold font-mochiy text-turquoise mb-2">24/7</div>
            <p className="text-neutral-darker font-inter">Support Available</p>
          </div>

          <div className="p-6 bg-buttercup bg-opacity-10 rounded-large">
            <div className="text-3xl font-bold font-mochiy text-buttercup mb-2">&lt;2min</div>
            <p className="text-neutral-darker font-inter">Average Response</p>
          </div>

          <div className="p-6 bg-bittersweet bg-opacity-10 rounded-large">
            <div className="text-3xl font-bold font-mochiy text-bittersweet mb-2">98%</div>
            <p className="text-neutral-darker font-inter">Satisfaction Rate</p>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}