"use client";

import React from "react";

export default function AboutUs() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto py-16 md:py-24">
        {/* center wrapper */}
        <div className="flex items-center justify-center min-h-[55vh] px-6">
          <div className="w-full max-w-3xl text-center">
            {/* Text column (centered) */}
            <h2 className="leading-none">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                ABOUT
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl  font-medium tracking-tight mt-1">
                Us
              </span>
            </h2>

            <div className="mt-4 flex items-center justify-center">
              <div className="h-px w-34 bg-gray-200" />
            </div>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
              Unstitched Women’s Tapestry (UWT) is a non-profit organization
              dedicated to eradicating gender-based violence and dismantling
              rape culture based in Bangladesh. We create safe spaces for
              survivors, promote mental health awareness, and advance sexual and
              reproductive health rights (SRHR) through educational initiatives
              and community programs.
            </p>

            <div className="mt-8">
              <a
                href="#learn-more"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition mx-auto"
                aria-label="Learn more about UWT"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
