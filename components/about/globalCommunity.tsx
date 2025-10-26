"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";
import Image from "next/image";

export default function OurGlobalCommunityCentered() {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
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

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.5,
      },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.6,
      },
    },
  };

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.8 + index * 0.1,
      },
    }),
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 1.1,
      },
    },
  };

  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 lg:py-16">
        {/* Title and Description - Outside the card */}
        <motion.div
          className="flex flex-col items-center text-center gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Title */}
          <motion.div variants={headerVariants}>
            <h1 className="leading-none">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
                OUR
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl italic font-medium tracking-tight mt-1 text-gray-900">
                GLOBAL COMMUNITY
              </span>
            </h1>

            {/* subtle rule with animation */}
            <motion.div
              className="mt-6 flex items-center justify-center gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                className="h-px w-48 bg-gray-200 to-transparent origin-center"
                variants={dividerVariants}
              />
            </motion.div>
          </motion.div>

          {/* Body text */}
          <motion.p
            className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl"
            variants={textVariants}
          >
            UWT is youth-led and volunteer-driven. With a diverse team spanning
            five countries, we connect local voices with global solidarity to
            inspire education, awareness, and change.
          </motion.p>
        </motion.div>

        {/* Card with Map Background - Contains stats and CTA */}
        <motion.div
          className="border rounded-2xl bg-black relative overflow-hidden py-12 px-6 md:px-10 min-h-[500px] flex flex-col justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={cardContainerVariants}
        >
          <Image
            src="/map.jpg"
            alt=""
            fill
            className="object-contain opacity-40"
          />

          {/* Stats and CTA */}
          <div className="flex flex-col items-center text-center gap-8 relative z-10 w-full pb-6">
            {/* Stats / Cards (centered) */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                {
                  icon: FaUsers,
                  title: "Youth-led",
                  desc: "Driven by young changemakers",
                },
                {
                  icon: FaHandsHelping,
                  title: "Volunteer-driven",
                  desc: "Global volunteer network",
                },
                {
                  icon: FaGlobeAmericas,
                  title: "5 Countries",
                  desc: "Connecting across borders",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={statCardVariants}
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-6 shadow-sm hover:shadow-md transition hover:bg-white/20"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#BC4749]"
                    aria-hidden="true"
                  >
                    <stat.icon className="text-white w-4 h-4" />
                  </div>

                  <div className="text-sm text-left">
                    <div
                      className={`text-white ${index === 0 ? "font-bold uppercase" : "font-medium"}`}
                    >
                      {stat.title}
                    </div>
                    <div className="text-gray-300 text-xs">{stat.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={ctaVariants}
            >
              <motion.a
                href="#get-involved"
                className="inline-block bg-[#BC4749] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#9d3a3c] transition focus:outline-none focus-visible:ring-2"
                aria-label="Join our global team"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join our global team
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
