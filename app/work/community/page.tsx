import Campaigns from "@/components/home/Campaigns";

import React from "react";

export default function CommunityPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1  gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  COMMUNITY
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  DEVELOPMENT
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  & CARE
                </span>
              </h1>
              <div className="hidden md:block h-px w-48 bg-gray-200 mt-8" />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-[#BC4749] text-base md:text-lg leading-relaxed mb-8">
              Local projects (hygiene kits, clothes, toys) supporting
              marginalised groups.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p>
                Our community-based projects address the intersections of gender
                inequality, stigma, and health. With BODOL, we launched প্রজেক্ট
                প্রত্যাশা, supporting sex workers and their children by
                providing toys, winter clothes, and essential care.
              </p>
              <br />
              <p>
                In another collaboration, Project ঐক্য চক্র, we distributed over
                50 menstrual hygiene kits (reusable pads, medicines, hot water
                bags) to underprivileged menstruators and ran workshops to
                destigmatise menstruation and teach hygiene management.
              </p>
            </article>
          </div>
        </div>
        <Campaigns />
      </div>
    </section>
  );
}
