"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Button } from "@/components/ui/button";

export function Faq8() {
  // JSON adatok alapján
  const faqItems = [
    {
      question: "What are the prices?",
      answer: "Our pricing starts at $19 for the basic plan. We also offer annual plans for additional savings."
    },
    {
      question: "Is there a trial?",
      answer: "Yes! We offer a 14-day free trial to explore all features without any commitment."
    },
    {
      question: "Are there hidden fees?",
      answer: "No hidden charges. All features are clearly outlined in our pricing."
    },
    {
      question: "Can I change plans?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time."
    },
    {
      question: "What payment methods accepted?",
      answer: "We accept all major credit/debit cards. Your payment information is secured and encrypted."
    }
  ];

  return (
    <section id="relume" className="bg-neutral-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container-custom grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
          {/* Left Side - Header */}
          <div>
            <h2 className="mb-5 text-5xl font-bold font-mochiy text-neutral-darkest md:mb-6 md:text-7xl lg:text-8xl">
              FAQs
            </h2>
            <p className="text-neutral-dark font-inter md:text-lg">
              Find answers to your questions about our pricing plans and options
              below.
            </p>
            <div className="mt-6 md:mt-8">
              <Button 
                variant="outline"
                className="border-neutral-dark text-neutral-darkest hover:bg-neutral-lighter hover:border-primary hover:text-primary transition-all duration-200"
                size="lg"
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
            {faqItems.map((item, index) => (
              <div key={index} className="hover-lift">
                <h3 className="mb-3 text-base font-bold font-mochiy text-neutral-darkest md:mb-4 md:text-lg">
                  {item.question}
                </h3>
                <p className="text-neutral-dark font-inter leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}