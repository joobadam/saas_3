"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Plus } from "lucide-react";

export function Faq2() {
  const faqData = [
    {
      question: "What is the product?",
      answer: "Our product is designed to simplify your life by providing innovative solutions tailored to your needs.",
      icon: "💡"
    },
    {
      question: "How do I set up?",
      answer: "Signing up is simple and convenient. Simply follow the in-app tutorial instructions, and you'll be set in no time.",
      icon: "🚀"
    },
    {
      question: "Is it user-friendly?",
      answer: "Yes, it's designed with ease of use in mind, supporting an intuitive experience. Whether you're a tech-savvy user or new to modern tools, it fits your flow.",
      icon: "👥"
    },
    {
      question: "What's the warranty?",
      answer: "We offer a satisfaction guarantee for our product, ensuring you are completely happy. Our satisfaction window is 30 days with full support during the trial period.",
      icon: "🛡️"
    },
    {
      question: "How do I contact support?",
      answer: "Use the contact form below or reach us at support@example.com. We aim to respond within 24 hours.",
      icon: "📞"
    }
  ];

  return (
    <section 
      id="relume" 
      className="bg-neutral-white text-neutral-darkest px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom max-w-4xl mx-auto">
        {/* Header Content */}
        <div className="mb-12 w-full max-w-3xl md:mb-16 lg:mb-20">
          <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary bg-opacity-20 rounded-large">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary font-inter">
                Frequently Asked Questions
              </p>
            </div>
            
            <h2 className="mb-6 text-4xl font-bold leading-tight md:mb-8 md:text-6xl lg:text-7xl font-mochiy text-neutral-darkest">
              FAQs
            </h2>
            
            <p className="text-lg leading-relaxed md:text-xl text-neutral-darker font-inter">
              Find answers to your most common questions about our product below.
            </p>
          </AnimatedGroup>
        </div>

        {/* FAQ Accordion */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.15} className="mb-16 md:mb-20">
          <Accordion type="multiple" className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-neutral-lightest border border-neutral-light rounded-large shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger 
                    className="px-6 py-6 hover:no-underline group md:px-8 md:py-7 [&[data-state=open]]:bg-neutral-lighter transition-colors duration-300"
                  >
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
              </div>
            ))}
          </Accordion>
        </AnimatedGroup>

        {/* CTA Section */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.0}>
          <div className="text-center bg-neutral-lightest rounded-large p-8 md:p-12 shadow-lg border border-neutral-light">
            <div className="mx-auto max-w-2xl">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary bg-opacity-20 rounded-large">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h4 className="mb-4 text-3xl font-bold md:mb-6 md:text-4xl font-mochiy text-neutral-darkest">
                Still have questions?
              </h4>
              
              <p className="mb-8 text-lg leading-relaxed md:text-xl text-neutral-darker font-inter">
                We're here to help! Our support team is available to assist you.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="group">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary-dark text-neutral-white font-semibold px-8 py-3 text-lg rounded-medium transition-all duration-300 shadow-lg hover:shadow-xl font-inter group-hover:scale-105 group-hover:-translate-y-0.5"
                  >
                    Contact
                  </Button>
                </div>
                
                <div className="group">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-neutral-light text-neutral-darkest hover:bg-neutral-lightest font-semibold px-8 py-3 text-lg rounded-medium transition-all duration-300 font-inter group-hover:scale-105"
                  >
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>

        {/* Help Stats */}
        <AnimatedGroup preset="blur-slide" staggerDelay={0.2} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-primary bg-opacity-10 rounded-large">
            <div className="text-3xl font-bold font-mochiy text-white mb-2">
              24h
            </div>
            <p className="text-neutral-darker font-inter">Response Time</p>
          </div>
          
          <div className="p-6 bg-primary bg-opacity-10 rounded-large">
            <div className="text-3xl font-bold font-mochiy text-white mb-2">
              99%
            </div>
            <p className="text-neutral-darker font-inter">Satisfaction Rate</p>
          </div>
          
          <div className="p-6 bg-primary bg-opacity-10 rounded-large">
            <div className="text-3xl font-bold font-mochiy text-white mb-2">
              24/7
            </div>
            <p className="text-neutral-darker font-inter">Support Available</p>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}