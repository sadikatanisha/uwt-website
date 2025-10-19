import React from "react";
import { FaBullhorn } from "react-icons/fa";

export default function AwarenessPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  AWARENESS
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  & ADVOCACY
                </span>
              </h1>
              <div className="hidden md:block h-px w-48 bg-gray-200 mt-8" />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Short sessions on consent, boundaries, mental health and breaking
              rape-culture norms.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p>
                We believe that awareness is the first step toward change. UWT
                has hosted numerous online and offline awareness sessions
                tackling issues that range from common practices of rape
                culture, gender-based violence, ways of identifying and tackling
                harmful situations to mental health awareness and education —
                including topics such as consent, boundaries, cyber safety,
                self-acceptance, self-love, and breaking harmful generational
                cycles. These sessions have reached students, young adults, and
                teenagers across Bangladesh and beyond, encouraging them to
                reflect, unlearn harmful practices, and foster safer
                environments.
              </p>
              <br />
              <p>
                We also collaborate with like-minded organisations to amplify
                our impact. With Project Unity, we joined the Orange the World
                campaign, where experts highlighted pressing issues including
                women's rights and transgender rights. Most recently, we hosted
                Dialogue: Dissecting Rape Culture, which created space for
                critical conversations and practical solutions.
              </p>

              <div className="mt-8 not-prose">
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                    Key Focus Areas
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>Consent and boundaries education</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>Gender-based violence awareness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>Cyber safety and digital rights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#BC4749] mr-3 mt-1">•</span>
                      <span>Breaking harmful generational cycles</span>
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
