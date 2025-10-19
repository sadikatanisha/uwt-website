import React from "react";
import { FaBullhorn } from "react-icons/fa";

export default function AwarenessPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1  gap-8 items-start">
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
            <p className="text-[#BC4749] text-base md:text-lg leading-relaxed mb-8">
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
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
