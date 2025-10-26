"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function AboutIntro() {
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as any,
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 },
    },
  } as any;

  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* LEFT: Headline + copy + CTAs */}
          <motion.div
            className="flex flex-col items-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            <motion.h1 className="leading-none" variants={headerVariants}>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                ABOUT
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                UWT
              </span>
            </motion.h1>

            <div className="mt-6 flex items-center gap-3">
              <motion.div
                style={{ transformOrigin: "center" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={dividerVariants}
                className="h-px w-40 bg-gray-200"
              />
            </div>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
              Unstitched Women's Tapestry (UWT) is a youth-led non-profit from
              Bangladesh working to eradicate gender-based violence and
              dismantle rape culture. We centre survivors, promote mental
              health, and advance sexual & reproductive health rights via
              workshops, advocacy, and community programmes — locally and
              internationally, with empathy and inclusion at the core.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <motion.a
                href="#programs"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition text-center"
                aria-label="Learn about our work"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn about our work
              </motion.a>

              <motion.a
                href="#get-involved"
                className="inline-block border border-gray-200 px-6 py-3 rounded-full text-sm text-gray-700 bg-white hover:bg-gray-50 transition text-center"
                aria-label="Get involved"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get involved
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT: Image with overlay card */}
          <motion.div
            className="relative order-first md:order-last"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative w-full h-96 md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/about-intro-image.jpg"
                alt="About UWT"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay card */}
            <motion.div
              className="absolute left-4 bottom-4 md:left-[-3rem] md:bottom-6 w-[calc(100%-2rem)] md:w-[60%] bg-white/75 backdrop-blur-sm border border-gray-200 rounded-xl p-4 md:p-5 shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <p className="text-sm md:text-base font-semibold text-gray-900">
                    Personal Enhancement Program
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 mt-1">
                    Creating safer futures through <strong>SRHR</strong>{" "}
                    education and awareness
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
