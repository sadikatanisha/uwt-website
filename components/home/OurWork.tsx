"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaHeartbeat,
  FaSchool,
  FaHandsHelping,
} from "react-icons/fa";

const ITEMS = [
  {
    id: "awareness",
    title: "Awareness & Advocacy",
    Icon: FaBullhorn,
    summary:
      "Short sessions on consent, boundaries, mental health and breaking rape-culture norms.",
    href: "/work/awareness",
    color: "from-[#BC4749] to-[#8B3538]",
  },
  {
    id: "mental",
    title: "Mental Health Support",
    Icon: FaHeartbeat,
    summary:
      "Safe spaces and expert-led sessions for trauma recovery and stress management.",
    href: "/work/mental-health",
    color: "from-gray-900 to-gray-700",
  },
  {
    id: "school",
    title: "Personal Enhancement Program",
    Icon: FaSchool,
    summary:
      "Workshops in schools & colleges covering puberty, boundaries and cyber safety.",
    href: "/work/pep",
    color: "from-[#BC4749] to-[#8B3538]",
  },
  {
    id: "community",
    title: "Community Development",
    Icon: FaHandsHelping,
    summary:
      "Local projects supporting marginalized communities with essential resources.",
    href: "/work/community",
    color: "from-gray-900 to-gray-700",
  },
];

export default function OurWorkCards() {
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
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
        duration: 0.6,
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
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as any,
        delay: 0.5 + index * 0.1,
      },
    }),
  };

  return (
    <section className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto py-20">
        <motion.header
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight"
            variants={headerVariants}
          >
            OUR WORK
          </motion.h2>
          <motion.div
            className="mt-4 flex items-center justify-center gap-3"
            variants={dividerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="h-px w-44 sm:w-54 bg-gray-200" />
          </motion.div>
          <motion.p
            className="mt-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
            variants={textVariants}
          >
            At Unstitched Women's Tapestry (UWT), we are committed to creating
            safer, more equitable communities by challenging gender-based
            violence, dismantling rape culture, promoting mental health
            awareness, advancing sexual and reproductive health rights (SRHR),
            and supporting underprivileged communities.
          </motion.p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              className={`${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 1
                    ? "md:col-span-2"
                    : index === 2
                      ? "md:col-span-1"
                      : "md:col-span-1"
              }`}
            >
              <Link
                href={item.href}
                className="group block h-full relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl"
                style={{
                  minHeight: index === 0 ? "500px" : "240px",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                />

                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />

                <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <div className={`flex-1 ${index === 0 ? "max-w-md" : ""}`}>
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                        <item.Icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                      </div>

                      <h3
                        className={`font-bold text-white mb-3 ${
                          index === 0
                            ? "text-3xl md:text-4xl lg:text-5xl leading-tight"
                            : "text-xl md:text-2xl"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`text-white/90 leading-relaxed ${
                          index === 0
                            ? "text-base md:text-lg"
                            : "text-sm md:text-base"
                        }`}
                      >
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-white/60 text-xs font-medium uppercase tracking-wider">
                      Learn More
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-gray-900 transition-all">
                      <span className="text-white group-hover:text-gray-900 group-hover:translate-x-1 transition-all">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
