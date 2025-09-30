"use client";

import React from "react";
import { FaUsers, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";

export default function AboutIntro() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        <div className="bg-gray-100 rounded-2xl border p-8 lg:p-12 grid gap-8 md:grid-cols-2 items-center">
          {/* LEFT: Headline + copy + CTAs */}
          <div className="order-2 md:order-1 flex flex-col items-start text-left">
            <h1 className="leading-none">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                ABOUT
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl italic font-medium tracking-tight mt-1">
                UNSTITCHED WOMEN’S TAPESTRY
              </span>
            </h1>

            {/* subtle rule with tiny red accent */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px w-40 bg-gray-200" />
            </div>

            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
              Unstitched Women’s Tapestry (UWT) is a youth-led non-profit from
              Bangladesh working to eradicate gender-based violence and
              dismantle rape culture. We centre survivors, promote mental
              health, and advance sexual & reproductive health rights via
              workshops, advocacy, and community programmes — locally and
              internationally, with empathy and inclusion at the core.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full">
              <a
                href="#programs"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition"
                aria-label="Learn about our work"
              >
                Learn about our work
              </a>

              <a
                href="#get-involved"
                className="inline-block border border-gray-200 px-6 py-3 rounded-full text-sm text-gray-700 bg-white hover:bg-gray-50 transition"
                aria-label="Get involved"
              >
                Get involved
              </a>
            </div>
          </div>

          {/* RIGHT: Visual stats / cards (stacked) */}
          <div className="order-1 md:order-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-gray-900 text-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#BC4749" }}
                  aria-hidden
                >
                  <FaUsers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-200 font-bold">
                    Youth-led
                  </div>
                  <div className="text-sm text-gray-300">
                    Driven by young changemakers
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50"
                  aria-hidden
                >
                  <FaHandsHelping className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-800 font-medium">
                    Volunteer-driven
                  </div>
                  <div className="text-sm text-gray-500">
                    Global volunteer network
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-gray-900 text-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#BC4749" }}
                  aria-hidden
                >
                  <FaGlobeAmericas className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-200 font-medium">
                    5 Countries
                  </div>
                  <div className="text-sm text-gray-300">
                    Connecting across borders
                  </div>
                </div>
              </div>

              {/* Big impact stat */}
              <div className="mt-2 rounded-lg p-4 bg-gradient-to-r from-white to-gray-50 border border-gray-100">
                <div className="flex items-baseline gap-3">
                  <div className="text-3xl md:text-4xl font-extrabold text-gray-900">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">
                    Hygiene kits distributed
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  Across programmes and community drives
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
