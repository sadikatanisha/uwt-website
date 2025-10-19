import React from "react";
import { FaHeartbeat } from "react-icons/fa";

export default function MentalHealthPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1  gap-8 items-start">
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
            <p className="text-[#BC4749] text-base md:text-lg leading-relaxed mb-8">
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
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
