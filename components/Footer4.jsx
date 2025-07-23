"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart
} from "lucide-react";

export function Footer4() {
  // Framer Motion variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.6 + i * 0.1,
      },
    }),
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3 + i * 0.08,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        delay: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const navigationLinks = [
    { href: "#", label: "About Us" },
    { href: "#", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Support" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Careers" }
  ];

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook", color: "text-[#1877f2]" },
    { href: "#", icon: Instagram, label: "Instagram", color: "text-[#e4405f]" },
    { href: "#", icon: Twitter, label: "Twitter", color: "text-[#1da1f2]" },
    { href: "#", icon: Linkedin, label: "LinkedIn", color: "text-[#0077b5]" },
    { href: "#", icon: Youtube, label: "YouTube", color: "text-[#ff0000]" }
  ];

  const contactInfo = [
    { icon: Mail, text: "hello@company.com" },
    { icon: Phone, text: "+1 (555) 123-4567" },
    { icon: MapPin, text: "San Francisco, CA" }
  ];

  return (
    <footer 
      id="relume" 
      className="bg-neutral-darker text-neutral-white px-[5%] py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 pb-12 md:pb-16 lg:grid-cols-4 lg:gap-16 lg:pb-20">
          
          {/* Logo and Company Info */}
          <motion.div 
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2"
          >
            <motion.a 
              href="#" 
              variants={logoVariants}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-large flex items-center justify-center">
                  <span className="text-2xl font-bold font-mochiy text-neutral-white">L</span>
                </div>
                <span className="text-2xl font-bold font-mochiy text-neutral-white">Logo</span>
              </div>
            </motion.a>
            
            <p className="text-lg leading-relaxed text-neutral-lighter font-inter mb-8 max-w-md">
              Elevate your experience with our innovative solution. 
              Designed for the modern world, built for your success.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  custom={index + 1}
                  variants={fadeUpVariants}
                  className="flex items-center gap-3 text-neutral-lighter"
                >
                  <contact.icon className="w-5 h-5 text-primary" />
                  <span className="font-inter">{contact.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold font-mochiy text-neutral-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  variants={linkVariants}
                >
                  <a
                    href={link.href}
                    className="font-inter text-neutral-lighter hover:text-primary transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links and Newsletter */}
          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className="text-xl font-bold font-mochiy text-neutral-white mb-6">
              Follow Us
            </h3>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  custom={index}
                  variants={socialVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-neutral-darkest rounded-large hover:bg-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-neutral-lighter group-hover:text-neutral-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="p-6 bg-neutral-darkest rounded-large border border-neutral-dark w-fit lg:-translate-x-1/4">
              <h4 className="text-lg font-semibold font-inter text-neutral-white mb-3">
                Stay Updated
              </h4>
              <p className="text-sm text-neutral-lighter font-inter mb-4">
                Get the latest news and updates delivered to your inbox.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-neutral-darker border border-neutral-light rounded-medium text-neutral-white placeholder-neutral font-inter focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-neutral-white rounded-medium transition-colors duration-300 font-inter font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="h-px w-full bg-neutral-dark origin-left mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-neutral-lighter font-inter">
            <p className="flex items-center gap-2">
              © 2025 Logo. Made with 
              <Heart className="w-4 h-4 text-bittersweet fill-current" />
              All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-primary hover:bg-primary-dark text-neutral-white rounded-large transition-all duration-300 font-inter font-semibold"
          >
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}