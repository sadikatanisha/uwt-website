"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MissionAndVision() {
  const headerVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.3,
      },
    },
  };

  const topBorderVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.4 + index * 0.2,
      },
    }),
  };

  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* LEFT: large typographic title (no image) */}
          <motion.div
            className="flex flex-col items-start justify-center md:pr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={headerVariants}
          >
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  INSIDE
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl italic font-medium tracking-tight mt-1">
                  UWT
                </span>
              </h1>

              <motion.div
                className="hidden md:block h-px w-48 bg-gray-200 mt-8 origin-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={dividerVariants}
              />
            </div>
          </motion.div>

          {/* RIGHT: mission & vision */}
          <div className="md:col-span-2">
            <div className="divide-y divide-gray-100 relative">
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-black origin-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.9 }}
                variants={topBorderVariants}
              />

              {/* Mission */}
              <motion.article
                className="py-8 md:py-10 pt-10"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={itemVariants}
              >
                <div className="grid grid-cols-12 gap-6 items-start">
                  {/* small number */}
                  <div className="col-span-1 text-sm text-gray-400 tracking-wider">
                    <span>01</span>
                  </div>

                  {/* heading */}
                  <div className="col-span-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                      Our Mission
                    </h2>
                  </div>

                  {/* copy */}
                  <div className="col-span-11 md:col-span-7 col-start-2 md:col-start-6">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-prose">
                      To empower communities through education, advocacy, and
                      safe spaces, working to eliminate gender-based violence,
                      dismantle rape culture, promote mental health, and advance
                      sexual and reproductive health rights.
                    </p>
                  </div>
                </div>
              </motion.article>

              {/* Vision */}
              <motion.article
                className="py-8 md:py-10 relative"
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={itemVariants}
              >
                <div className="grid grid-cols-12 gap-6 items-start">
                  {/* small number */}
                  <div className="col-span-1 text-sm text-gray-400 tracking-wider">
                    <span>02</span>
                  </div>

                  {/* heading */}
                  <div className="col-span-4">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                      Our Vision
                    </h3>
                  </div>

                  {/* copy */}
                  <div className="col-span-11 md:col-span-7 col-start-2 md:col-start-6">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-prose">
                      A world where every child grows up free from violence,
                      discrimination, and stigma — with the knowledge,
                      confidence, and opportunities to thrive.
                    </p>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
