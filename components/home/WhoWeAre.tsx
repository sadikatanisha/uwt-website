"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function WhoWeAre() {
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
      <div className="max-w-7xl mx-auto  py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={textVariants}
          >
            <h2 className="leading-none">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                A TEAM OF
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-1">
                CHANGE-MAKERS
              </span>
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <motion.div
                style={{ transformOrigin: "center" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                variants={dividerVariants}
                className="h-px w-68 bg-gray-200"
              />
            </div>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
              We are a team of changemakers committed to empowering individuals
              and communities. Through workshops, awareness sessions, advocacy
              events, and collaborations, we provide support, education, and
              resources to students, young adults, and marginalized communities.
              Our work spans local and international initiatives, always
              grounded in empathy, inclusion, and lasting social impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#programs"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition"
                aria-label="See our programs"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                See our programs
              </motion.a>

              <motion.a
                href="/contact"
                className="inline-block border border-gray-200 px-6 py-3 rounded-full text-sm text-gray-700 bg-white hover:bg-gray-50 transition"
                aria-label="Collaborate with us"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Collaborate with us
              </motion.a>
            </div>
          </motion.div>

          {/* Image column (right on md+, full width below text on mobile) */}
          <motion.div
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="relative w-full h-56 sm:h-72 md:h-96 lg:h-[28rem] rounded-lg shadow-sm overflow-visible">
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src="/who-we-are.jpg"
                  alt="Who We Are"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overlay card */}
              <motion.div
                className="
                  absolute
                  left-1/3 -translate-x-1/3 -bottom-14
                  md:left-[-5rem] md:translate-x-0 md:bottom-8
                  w-[55%] md:w-[40%]
                  bg-white/80 backdrop-blur-sm
                  border border-gray-100
                  rounded-xl p-3 md:p-4
                  shadow-md z-10
                 
                "
                role="region"
                aria-label="Project summary"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={cardVariants}
              >
                <p className="text-xs md:text-sm font-semibold ">
                  Project Oikko Chokro
                </p>

                <p className="mt-2 text-xs text-gray-700 leading-snug">
                  Supported <strong>100 menstruators</strong> with hygiene kits
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
