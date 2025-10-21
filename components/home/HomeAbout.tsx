"use client";
import React from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  // parent container controls stagger for children
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // simple fade + slide up for children
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  // divider grows horizontally from center
  const divider = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.45,
      },
    },
  };

  // button pop-in
  const cta = {
    hidden: { opacity: 0, y: 8, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 10 },
    },
  };

  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto py-16 md:py-24">
        {/* center wrapper */}
        <div className="flex items-center justify-center min-h-[55vh] px-2">
          <motion.div
            className="w-full max-w-3xl text-center"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Text column (centered) */}
            <motion.h2
              className="leading-none"
              // make the h2 a parent so the two spans stagger
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <motion.span
                variants={item}
                className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-tight"
              >
                ABOUT
              </motion.span>

              <motion.span
                variants={item}
                className="block text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-1"
              >
                Us
              </motion.span>
            </motion.h2>

            <div className="mt-4 flex items-center justify-center">
              {/* divider */}
              <motion.div
                className="h-px w-36 bg-gray-200 origin-center"
                style={{ transformOrigin: "center" }}
                variants={divider}
              />
            </div>

            <motion.p
              className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed"
              variants={item}
            >
              Unstitched Women’s Tapestry (UWT) is a non-profit organization
              dedicated to eradicating gender-based violence and dismantling
              rape culture based in Bangladesh. We create safe spaces for
              survivors, promote mental health awareness, and advance sexual and
              reproductive health rights (SRHR) through educational initiatives
              and community programs.
            </motion.p>

            <motion.div className="mt-8" variants={cta}>
              <motion.a
                href="#learn-more"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition mx-auto"
                aria-label="Learn more about UWT"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn more
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
