"use client";

import React from "react";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ImageIcon } from "lucide-react";

export function Contact14() {
  const formFields = [
    { type: "text", label: "Name" },
    { type: "email", label: "Email" },
    { type: "textarea", label: "Message" },
    { type: "checkbox", label: "I accept the Terms" },
  ];

  return (
    <section
      id="relume"
      className="bg-black px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container-custom">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
          <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[1fr_0.75fr] md:gap-x-20 md:gap-y-16">
            {/* Left Side - Illustration Placeholder */}
            <div className="order-2 md:order-1">
              <div className="w-full h-[400px] md:h-[600px] rounded-large overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80"
                  alt="Contact us illustration"
                  className="w-full h-full object-cover rounded-large"
                />
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="order-1 md:order-2">
              {/* Header */}
              <div className="mb-8">
                <p className="mb-3 font-semibold font-inter text-primary md:mb-4">
                  Connect
                </p>
                <h2 className="mb-5 text-4xl font-bold font-mochiy text-neutral-white md:mb-6 md:text-5xl lg:text-6xl">
                  Get in Touch
                </h2>
                <p className="text-neutral-white font-inter md:text-lg">
                  We'd love to hear from you!
                </p>
              </div>

              {/* Contact Form */}
              <form className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-neutral-white font-inter font-medium"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full border-neutral-dark focus:border-primary text-neutral-white bg-neutral-black"
                    placeholder=""
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-neutral-white font-inter font-medium"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full border-neutral-dark focus:border-primary text-neutral-white bg-neutral-black"
                    placeholder=""
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-neutral-white font-inter font-medium"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    className="w-full border-neutral-dark focus:border-primary text-neutral-white bg-neutral-black resize-none"
                    placeholder="Type your message..."
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    className="border-neutral-dark data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label
                    htmlFor="terms"
                    className="text-neutral-white font-inter text-sm cursor-pointer"
                  >
                    I accept the Terms
                  </Label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-neutral-black font-medium transition-all duration-200 hover:transform hover:scale-105"
                  size="lg"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}