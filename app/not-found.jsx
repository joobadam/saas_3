"use client";

import React from "react";
import Link from "next/link";
import { AnimatedGroup } from "@/components/ui/AnimatedGroup";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-black min-h-screen flex items-center justify-center px-[5%] py-16">
      <div className="container-custom">
        <AnimatedGroup preset="blur-slide" staggerDelay={0.3}>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 items-center">
            
            {/* Left Side - Content */}
            <div className="order-2 md:order-1 text-center md:text-left">
              {/* 404 Large Number */}
              <div className="mb-6">
                <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold font-mochiy text-primary leading-none">
                  404
                </h1>
              </div>
              
              {/* Error Message */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mochiy text-neutral-white mb-4">
                  Page Not Found
                </h2>
                <p className="text-lg md:text-xl text-neutral-lighter font-inter leading-relaxed max-w-lg">
                  Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or the URL might be incorrect.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/">
                  <Button 
                    className="bg-primary hover:bg-primary-dark text-neutral-white font-medium transition-all duration-200 hover:transform hover:scale-105 w-full sm:w-auto"
                    size="lg"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Go Home
                  </Button>
                </Link>
                
                <Button 
                  variant="outline"
                  className="border-neutral-light text-neutral-white hover:bg-neutral-white hover:text-neutral-darkest transition-all duration-200 w-full sm:w-auto"
                  size="lg"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </Button>
              </div>

              {/* Additional Help */}
              <div className="mt-8 pt-8 border-t border-neutral-dark">
                <p className="text-neutral-light font-inter mb-4">
                  Need help? Try these options:
                </p>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <Link 
                    href="/contact" 
                    className="text-primary hover:text-primary-dark transition-colors duration-200 font-inter"
                  >
                    Contact Support
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="text-primary hover:text-primary-dark transition-colors duration-200 font-inter"
                  >
                    View Pricing
                  </Link>
                  <Link 
                    href="/faq" 
                    className="text-primary hover:text-primary-dark transition-colors duration-200 font-inter"
                  >
                    Browse FAQ
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="order-1 md:order-2">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative">
                  {/* Image Container - Replace src with your image */}
                  <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-large overflow-hidden bg-neutral-darker flex items-center justify-center">
                    <img
                      src="/page-not-found.png" 
                      alt="404 illustration - Lost in space"
                      className="w-full h-full object-cover"
                    />
            
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60 animate-pulse"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </main>
  );
}