"use client";

import React from "react";

export default function AboutIntro() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-center">
        {/* Title in the same typographic style used before */}
        <h1 className="leading-none">
          <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            ABOUT
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl italic font-medium tracking-tight mt-1">
            UNSTITCHED WOMEN’S TAPESTRY
          </span>
        </h1>

        {/* subtle rule */}
        <div className="h-px w-36 bg-gray-200 mt-8 mx-auto" />

        {/* Expanded intro paragraph (use the expanded copy above) */}
        <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
          Unstitched Women’s Tapestry (UWT) is a youth-led non-profit based in
          Bangladesh dedicated to eradicating gender-based violence and
          dismantling rape culture. We create survivor-centred safe spaces,
          promote mental health awareness, and advance sexual and reproductive
          health rights through workshops, advocacy, and community programs. Our
          work reaches students, young adults, and marginalised communities
          locally and internationally — always grounded in empathy, inclusion,
          and lasting social impact.
        </p>

        {/* Impact chips (optional) */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <div className="bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm">
            <strong className="block text-gray-800">7+</strong>
            <span className="text-gray-500">Workshops (int'l)</span>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm">
            <strong className="block text-gray-800">50+</strong>
            <span className="text-gray-500">Hygiene kits</span>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-sm">
            <strong className="block text-gray-800">5</strong>
            <span className="text-gray-500">Countries</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#programs"
            className="inline-block bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-orange-700 focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            Learn about our work
          </a>

          <a
            href="#get-involved"
            className="inline-block border border-gray-200 px-6 py-2 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50"
          >
            Get involved
          </a>
        </div>
      </div>
    </section>
  );
}
