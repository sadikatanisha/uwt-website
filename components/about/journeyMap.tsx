"use client";

import React from "react";
import { motion } from "framer-motion";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "UWT began as an online platform to give women a safe space to share their stories and raise awareness on consent, boundaries, and safety.",
  },
  {
    year: "2021",
    title: "Registered Non-Profit",
    description:
      "UWT grew into a fully operational non-profit organization, expanding work to workshops, awareness sessions, and mental health support.",
  },
  {
    year: "2022",
    title: "Community Projects Launch",
    description:
      "Launched Project প্রত্যাশা with BODOL and Project ঐক্য চক্র, distributing hygiene kits and supporting marginalized communities.",
  },
  {
    year: "2023",
    title: "Global Reach",
    description:
      "Conducted workshops in Bangladesh, UK, and USA. Hosted 'Dialogue: Dissecting Rape Culture' and reached students across multiple countries.",
  },
  {
    year: "2024",
    title: "Growing Impact",
    description:
      "Continued expansion with 7+ workshops, 1000+ students reached, and a diverse team spanning 5 countries working towards systemic change.",
  },
];

export default function JourneyMap() {
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
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.4,
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: {
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.3,
      },
    },
  };

  const milestoneVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.5 + index * 0.15,
      },
    }),
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.5 + index * 0.15,
      },
    }),
  };

  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-16">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1 className="leading-none" variants={headerVariants}>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              OUR
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl italic font-medium tracking-tight mt-1">
              JOURNEY
            </span>
          </motion.h1>

          {/* subtle rule with animation */}
          <motion.div
            className="mt-6 flex items-center justify-center gap-2 mb-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="h-px w-42 bg-gray-200 origin-center"
              variants={dividerVariants}
            />
          </motion.div>

          <motion.p
            className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto"
            variants={textVariants}
          >
            From a small online platform to a global movement working towards
            creating safer, more informed communities.
          </motion.p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line with animation */}
          <motion.div
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#BC4749] via-gray-200 to-gray-100 origin-top"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={timelineVariants}
          />

          {/* Timeline items */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:flex-row md:justify-start"
                    : "md:flex-row-reverse md:justify-start"
                }`}
              >
                {/* Content */}
                <motion.div
                  className="w-full md:w-[calc(50%-24px)] pl-16 md:pl-0"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={milestoneVariants}
                >
                  <div
                    className={`border border-gray-200 rounded-lg p-4 hover:border-[#BC4749] hover:shadow-md transition-all ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-[#BC4749] text-xs font-bold px-2 py-1 bg-[#BC4749]/10 rounded">
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>

                {/* Center dot with animation */}
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={dotVariants}
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#BC4749] border-2 border-white shadow z-10"
                  style={{
                    boxShadow: "0 0 8px rgba(188, 71, 73, 0.5)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
