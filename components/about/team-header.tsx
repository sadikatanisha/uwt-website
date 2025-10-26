"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TeamHeader() {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any, delay: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any, delay: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any, delay: 0.4 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
        <motion.div variants={headerVariants}>
          <h1 className="leading-none">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              OUR
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
              TEAM
            </span>
          </h1>
          <motion.div
            className="h-px w-48 bg-gray-200 mt-8 origin-left"
            variants={dividerVariants}
          />
        </motion.div>
        <motion.div variants={linkVariants}>
          <Link
            href="/team"
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            View All →
          </Link>
        </motion.div>
      </div>

      <motion.p
        className="text-gray-600 max-w-2xl mb-8"
        variants={textVariants}
      >
        A youth-led team working across advocacy, mental health and community
        programs.
      </motion.p>
    </motion.div>
  );
}
