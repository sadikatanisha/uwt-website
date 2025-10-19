import React from "react";

export default function PEPPage() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  PERSONAL
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  ENHANCEMENT
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  PROGRAM
                </span>
              </h1>
              <div className="hidden md:block h-px w-48 bg-gray-200 mt-8" />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Workshops in schools & colleges covering puberty, boundaries and
              cyber safety.
            </p>

            <article className="prose prose-sm md:prose-base max-w-none text-gray-800">
              <p>
                We see schools and youth communities as critical spaces for
                prevention and empowerment. To date, UWT has conducted 7
                workshops across Bangladesh, the UK, and the USA, engaging
                students on topics such as self-respect, boundaries, cyber
                safety, good touch/bad touch, puberty, and building healthy
                friendships.
              </p>
              <br />
              <p>
                Highlights include a roundtable at Vassar College on surviving
                sexual assault, trauma healing and solidarity-building, plus
                workshops at Bangladeshi schools which prompted institutions to
                rethink their survivor-support systems.
              </p>

              <div className="mt-8 not-prose"></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
