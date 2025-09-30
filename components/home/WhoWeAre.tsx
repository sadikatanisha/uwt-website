"use client";
import React from "react";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text column */}
          <div className="flex-1">
            <h2 className="leading-none">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
                A TEAM OF
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl  font-medium tracking-tight mt-1">
                CHANGE-MAKERS
              </span>
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <div className="h-px w-88 bg-gray-200" />
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
              <a
                href="#programs"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition"
                aria-label="See our programs"
              >
                See our programs
              </a>

              <a
                href="#collaborate"
                className="inline-block border border-gray-200 px-6 py-3 rounded-full text-sm text-gray-700 bg-white hover:bg-gray-50 transition"
                aria-label="Collaborate with us"
              >
                Collaborate with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
