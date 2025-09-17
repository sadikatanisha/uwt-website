"use client";

import React from "react";
import { FaUsers, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";

export default function OurGlobalCommunityCentered() {
  return (
    <section className="w-full bg-white text-gray-900 ">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 lg:py-16 border rounded-2xl bg-gray-100">
        {/* Centered Stack */}
        <div className="flex flex-col items-center text-center gap-8">
          {/* Title — same typographic style as the Mission/Vision component */}
          <div>
            <h1 className="leading-none">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                OUR
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl italic font-medium tracking-tight mt-1">
                GLOBAL COMMUNITY
              </span>
            </h1>

            {/* subtle rule with a tiny red accent */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="h-px w-48 bg-gray-200" />
            </div>
          </div>

          {/* Body text */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
            UWT is youth-led and volunteer-driven. With a diverse team spanning
            five countries, we connect local voices with global solidarity to
            inspire education, awareness, and change.
          </p>

          {/* Stats / Cards (centered) */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-100 rounded-lg px-4 py-6 shadow-sm hover:shadow-md transition">
              {/* icon badge */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center  bg-[#BC4749]"
                aria-hidden="true"
              >
                <FaUsers className="text-white w-4 h-4" />
              </div>

              <div className="text-sm text-left">
                <div className="text-gray-200 font-bold uppercase">
                  Youth-led
                </div>
                <div className="text-gray-300 text-xs">
                  Driven by young changemakers
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-100 rounded-lg px-4 py-6 shadow-sm hover:shadow-md transition">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center  bg-[#BC4749]"
                aria-hidden="true"
              >
                <FaHandsHelping className="text-white w-4 h-4" />
              </div>

              <div className="text-sm text-left">
                <div className="text-gray-200 font-medium">
                  Volunteer-driven
                </div>
                <div className="text-gray-300 text-xs">
                  Global volunteer network
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-3 bg-gray-900 border border-gray-100 rounded-lg px-4 py-6 shadow-sm hover:shadow-md transition">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#BC4749]"
                // style={{ backgroundColor: "#BC4749" }}
                aria-hidden="true"
              >
                <FaGlobeAmericas className="text-white w-4 h-4" />
              </div>

              <div className="text-sm text-left">
                <div className="text-gray-200 font-medium">5 Countries</div>
                <div className="text-gray-300 text-xs">
                  Connecting across borders
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="#get-involved"
              className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium  focus:outline-none focus-visible:ring-2 "
              aria-label="Join our global team"
            >
              Join our global team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
