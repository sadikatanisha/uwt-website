"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Campaign = {
  id: string;
  name: string;
  year?: string;
  imageUrl?: string;
  description: React.ReactNode;
};

interface CampaignsClientProps {
  campaigns: Campaign[];
}

export default function CampaignsClient({ campaigns }: CampaignsClientProps) {
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as any },
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
        delay: 0.2 + index * 0.1,
      },
    }),
  };
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

  return (
    <section className="max-w-7xl mx-auto py-20">
      <motion.header
        className="mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={headerVariants}
      >
        <h2 className="leading-none">
          <span className="block text-3xl sm:text-4xl md:text-5xl font-light tracking-tight uppercase">
            Impact
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl  font-medium tracking-tight mt-1 uppercase">
            In Action
          </span>
        </h2>
        <div className="mt-4 flex items-center justify-start">
          <motion.div
            style={{ transformOrigin: "center" }}
            variants={divider}
            className="h-px w-48 bg-gray-200"
          />
        </div>
      </motion.header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((c, index) => (
          <motion.article
            key={c.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
            className="group rounded-xl overflow-hidden transition-shadow duration-200 bg-white border flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden rounded-2xl">
              {c.imageUrl ? (
                <Image
                  src={c.imageUrl}
                  alt={c.name}
                  loading="lazy"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl p-2"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                  No image
                </div>
              )}
            </div>

            {/* Main content grows so buttons stay at bottom */}
            <div className="p-4 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium">{c.name}</h3>
                  {c.year && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {c.year}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 text-sm text-muted-foreground">
                {c.description}
              </div>
            </div>

            {/* Buttons row — fixed to bottom of card */}
            <div className="p-4 pt-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#programs"
                  className="w-full inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition"
                  aria-label="See our programs"
                >
                  See our programs
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
