"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call - replace with your actual newsletter API
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

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
    <section className="w-full bg-black text-white py-16 md:py-24 rounded-md">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="leading-none mb-6">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                STAY CONNECTED
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2">
                WITH OUR MISSION
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
            className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10"
            variants={itemVariants}
          >
            Subscribe to our newsletter for updates on workshops, campaigns, and
            ways to get involved in creating safer communities.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-60 disabled:cursor-not-allowed"
              />
              <motion.button
                type="submit"
                disabled={status === "loading" || status === "success"}
                whileHover={{
                  scale: status === "idle" || status === "error" ? 1.05 : 1,
                }}
                whileTap={{
                  scale: status === "idle" || status === "error" ? 0.95 : 1,
                }}
                className="px-8 py-4 rounded-full bg-white text-[#BC4749] font-semibold hover:bg-gray-100 transition-colors disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === "loading" && "Subscribing..."}
                {status === "success" && "Subscribed! ✓"}
                {status === "error" && "Try Again"}
                {status === "idle" && "Subscribe"}
              </motion.button>
            </div>

            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-white/90"
              >
                Thank you for subscribing! Check your inbox for confirmation.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-white/90"
              >
                Something went wrong. Please try again.
              </motion.p>
            )}
          </motion.form>

          <motion.div
            className="mt-10 pt-8 border-t border-white/20"
            variants={itemVariants}
          >
            <p className="text-xs text-white/70">
              We respect your privacy. Unsubscribe at any time. No spam, just
              meaningful updates.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
