"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHeart, FaUsers, FaEnvelope } from "react-icons/fa";

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  return (
    <section className="w-full bg-black text-white py-16 md:py-24 rounded-t-2xl mt-16">
      <div className="max-w-7xl mx-auto ">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="leading-none mb-6">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                BE PART OF THE
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-2">
                CHANGE
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            variants={itemVariants}
          >
            <div className="h-px w-32 bg-white/30" />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12"
            variants={itemVariants}
          >
            Join us in creating safer, more equitable communities. Your support
            helps us continue our mission to educate, eradicate, and empower.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/donate"
                className="group inline-flex items-center gap-3 bg-white text-[#BC4749] px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                <FaHeart className="w-5 h-5" />
                <span>Donate Now</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/team"
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all"
              >
                <FaUsers className="w-5 h-5" />
                <span>Join Our Team</span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>Get in Touch</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 pt-8 border-t border-white/20"
            variants={itemVariants}
          >
            <p className="text-sm text-white/70">
              Every contribution, big or small, helps us make a lasting impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
