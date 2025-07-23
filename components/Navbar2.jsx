"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animation variants
  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  };

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/product-details", label: "Product Details" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ];

  const dropdownLinks = [
    { href: "/support", label: "Support" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      variants={navVariants}
      initial="initial"
      animate="animate"
      className="nav-transition fixed top-1 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl mx-auto px-4"
    >
      <motion.div 
        className={`relative rounded-large shadow-xl border transition-all duration-300 ${
          scrolled 
            ? 'bg-neutral-darkest/95 backdrop-blur-md border-neutral-dark shadow-2xl' 
            : 'bg-neutral-darker/90 backdrop-blur-sm border-neutral-dark'
        }`}
        whileHover={{ 
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
          transition: { duration: 0.3 }
        }}
      >
        <div className="flex items-center justify-between px-6 py-2">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/" className="flex items-center gap-3" onClick={handleLinkClick}>
              <div className="relative w-10 h-10 bg-primary rounded-large flex items-center justify-center group">
                <Sparkles className="w-5 h-5 text-neutral-white group-hover:animate-pulse" />
                <div className="absolute inset-0 bg-primary rounded-large opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold font-mochiy text-neutral-white">
                Logo
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 0, 199, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-stone-400 hover:text-primary hover:bg-neutral-dark rounded-medium transition-all duration-300 font-inter"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            {/* Desktop Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={toggleDropdown}
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-stone-400 hover:text-neutral-white hover:bg-neutral-dark rounded-medium transition-all duration-300 font-inter"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 0, 199, 0.1)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                More
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute right-0 mt-2 w-48 bg-neutral-darkest rounded-large shadow-xl border border-neutral-dark py-2"
                  >
                    {dropdownLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 4 }}
                      >
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm text-neutral-lighter hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-all duration-300 font-inter"
                          onClick={handleLinkClick}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: 0.8, duration: 0.6 }
            }}
          >
            <Link href="/get-started">
              <Button 
                className="bg-primary hover:bg-primary-dark text-neutral-white font-semibold px-6 py-2 rounded-medium transition-all duration-300 shadow-lg hover:shadow-xl font-inter"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-neutral-lighter hover:text-neutral-white hover:bg-neutral-dark rounded-medium transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden border-t border-neutral-dark"
            >
              <div className="px-6 py-4 space-y-2">
                {[...navigationLinks, ...dropdownLinks].map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.1, duration: 0.4 }
                    }}
                    whileHover={{ x: 8 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-sm font-medium text-stone-400 hover:bg-primary hover:bg-opacity-10 hover:text-primary rounded-medium transition-all duration-300 font-inter"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.6, duration: 0.4 }
                  }}
                  className="pt-4"
                >
                  <Link href="/get-started">
                    <Button 
                      className="w-full bg-primary hover:bg-primary-dark text-neutral-white font-semibold py-3 rounded-medium transition-all duration-300 shadow-lg font-inter"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar2;