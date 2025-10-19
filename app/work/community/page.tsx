import React from "react";
import { FaHandsHelping } from "react-icons/fa";

export default function CommunityPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
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
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
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

              <div className="mt-8 not-prose">
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                    Community Projects
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>
                        প্রজেক্ট প্রত্যাশা: Supporting sex workers and their
                        children
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>
                        Project ঐক্য চক্র: Menstrual hygiene kits distribution
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>
                        Winter clothing drives for marginalized communities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>Workshops on menstrual health and hygiene</span>
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
