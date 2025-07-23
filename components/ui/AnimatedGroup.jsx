import React from "react";
import { motion } from "framer-motion";

export const AnimatedGroup = ({ children, preset = "blur-slide", className = "", staggerDelay = 0.2 }) => {
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