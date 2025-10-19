import React from "react";
import { FaHeartbeat } from "react-icons/fa";

export default function MentalHealthPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  MENTAL HEALTH
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  SUPPORT
                </span>
              </h1>
              <div className="hidden md:block h-px w-48 bg-gray-200 mt-8" />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Safe spaces and expert-led sessions for trauma recovery, anxiety
              and stress management.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p>
                Mental health remains heavily stigmatized in Bangladesh, yet it
                is inseparable from the fight against gender-based violence. At
                UWT, we provide survivors and young people with safe spaces to
                heal, share, and connect. Through expert-led online therapy
                sessions, we have addressed topics such as stress management,
                trauma recovery, anxiety, and depression.
              </p>
              <br />
              <p>
                Our digital platforms regularly feature mental health awareness
                content and survivor storytelling. Feedback shows these safe
                spaces are meaningful parts of the healing process.
              </p>

              <div className="mt-8 not-prose">
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                    Our Approach
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>Expert-led online therapy sessions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>Trauma recovery and healing support</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>Stress and anxiety management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>Safe spaces for survivor storytelling</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
