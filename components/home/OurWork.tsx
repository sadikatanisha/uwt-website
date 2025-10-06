"use client";

import React, { useState, useRef } from "react";
import {
  FaBullhorn,
  FaHeartbeat,
  FaSchool,
  FaGlobeAmericas,
  FaHandsHelping,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const ITEMS = [
  {
    id: "awareness",
    title: "Awareness & Advocacy",
    Icon: FaBullhorn,
    summary:
      "Short sessions on consent, boundaries, mental health and breaking rape-culture norms.",
    content: [
      `We believe that awareness is the first step toward change. UWT has hosted numerous online and offline awareness sessions tackling issues that range from common practices of rape culture, gender-based violence, ways of identifying and tackling harmful situations to mental health awareness and education — including topics such as consent, boundaries, cyber safety, self-acceptance, self-love, and breaking harmful generational cycles. These sessions have reached students, young adults, and teenagers across Bangladesh and beyond, encouraging them to reflect, unlearn harmful practices, and foster safer environments.`,
      `We also collaborate with like-minded organisations to amplify our impact. With Project Unity, we joined the Orange the World campaign, where experts highlighted pressing issues including women’s rights and transgender rights. Most recently, we hosted Dialogue: Dissecting Rape Culture, which created space for critical conversations and practical solutions.`,
    ],
  },
  {
    id: "mental",
    title: "Mental Health & Survivor Support",
    Icon: FaHeartbeat,
    summary:
      "Safe spaces and expert-led sessions for trauma recovery, anxiety and stress management.",
    content: [
      `Mental health remains heavily stigmatized in Bangladesh, yet it is inseparable from the fight against gender-based violence. At UWT, we provide survivors and young people with safe spaces to heal, share, and connect. Through expert-led online therapy sessions, we have addressed topics such as stress management, trauma recovery, anxiety, and depression.`,
      `Our digital platforms regularly feature mental health awareness content and survivor storytelling. Feedback shows these safe spaces are meaningful parts of the healing process.`,
    ],
  },
  {
    id: "school",
    title: "School & Youth Programs: Personal Enhancement Program (PEP)",
    Icon: FaSchool,
    summary:
      "Workshops in schools & colleges covering puberty, boundaries and cyber safety.",
    content: [
      `We see schools and youth communities as critical spaces for prevention and empowerment. To date, UWT has conducted 7 workshops across Bangladesh, the UK, and the USA, engaging students on topics such as self-respect, boundaries, cyber safety, good touch/bad touch, puberty, and building healthy friendships.`,
      `Highlights include a roundtable at Vassar College on surviving sexual assault, trauma healing and solidarity-building, plus workshops at Bangladeshi schools which prompted institutions to rethink their survivor-support systems.`,
    ],
  },
  {
    id: "community",
    title: "Community Development & Care",
    Icon: FaHandsHelping,
    summary:
      "Local projects (hygiene kits, clothes, toys) supporting marginalised groups.",
    content: [
      `Our community-based projects address the intersections of gender inequality, stigma, and health. With BODOL, we launched প্রজেক্ট প্রত্যাশা, supporting sex workers and their children by providing toys, winter clothes, and essential care.`,
      `In another collaboration, Project ঐক্য চক্র, we distributed over 50 menstrual hygiene kits (reusable pads, medicines, hot water bags) to underprivileged menstruators and ran workshops to destigmatise menstruation and teach hygiene management.`,
    ],
  },
  {
    id: "global",
    title: "Global Engagement",
    Icon: FaGlobeAmericas,
    summary:
      "Workshops & digital projects with international reach — UK, USA and beyond.",
    content: [
      `While rooted in Bangladesh, UWT’s reach is international. We have conducted workshops in both the UK and the USA, extending our advocacy to new audiences.`,
      `Through our digital presence, survivors from countries such as Germany and the UK have shared feedback, engaged with our content, and even contributed creative works, like survivor-led films. We remain open to international collaborations, partnerships and speaking opportunities.`,
    ],
  },
];

export default function OurWorkCards() {
  const [active, setActive] = useState(ITEMS[0].id);
  const [activeIndex, setActiveIndex] = useState(0);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleSelect = (id: string, idx: number) => {
    setActive(id);
    setActiveIndex(idx);
  };

  // keyboard navigation: Up/Down and Left/Right
  const handleKey = (e: React.KeyboardEvent) => {
    if (["ArrowRight", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
      const next = Math.min(activeIndex + 1, ITEMS.length - 1);
      setActiveIndex(next);
      setActive(ITEMS[next].id);
      btnRefs.current[next]?.focus();
    } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      const prev = Math.max(activeIndex - 1, 0);
      setActiveIndex(prev);
      setActive(ITEMS[prev].id);
      btnRefs.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
      setActive(ITEMS[0].id);
      btnRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      const last = ITEMS.length - 1;
      setActiveIndex(last);
      setActive(ITEMS[last].id);
      btnRefs.current[last]?.focus();
    }
  };

  const prevSection = () => {
    if (activeIndex <= 0) return;
    const prev = activeIndex - 1;
    setActiveIndex(prev);
    setActive(ITEMS[prev].id);
    btnRefs.current[prev]?.focus();
  };

  const nextSection = () => {
    if (activeIndex >= ITEMS.length - 1) return;
    const nxt = activeIndex + 1;
    setActiveIndex(nxt);
    setActive(ITEMS[nxt].id);
    btnRefs.current[nxt]?.focus();
  };

  const activeItem = ITEMS.find((it) => it.id === active) ?? ITEMS[0];

  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
            OUR WORK
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-44 sm:w-54 bg-gray-200" />
          </div>
          <p className="mt-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            At Unstitched Women’s Tapestry (UWT), we are committed to creating
            safer, more equitable communities by challenging gender-based
            violence, dismantling rape culture, promoting mental health
            awareness, advancing sexual and reproductive health rights (SRHR),
            and supporting underprivileged communities.
          </p>
        </header>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          {/* layout: mobile -> stacked (nav on top), md+ -> side-by-side */}
          <div className="flex flex-col md:flex-row">
            {/* NAV - on mobile this is full-width and stacked (no scroll); on md it becomes left column */}
            <nav
              className="w-full md:w-1/3 border-b md:border-b-0 md:border-r"
              onKeyDown={handleKey}
              aria-label="Our work sections"
            >
              <ul
                className="flex flex-col gap-2 px-3 py-3 md:px-4 md:py-4"
                role="list"
              >
                {ITEMS.map((it, idx) => {
                  const isActive = it.id === active;
                  return (
                    <li key={it.id} className="w-full">
                      <button
                        ref={(el) => {
                          btnRefs.current[idx] = el;
                        }}
                        data-idx={idx}
                        onClick={() => handleSelect(it.id, idx)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleSelect(it.id, idx);
                          }
                        }}
                        className={`group flex items-start gap-3 w-full text-left rounded-lg p-3 md:p-4 transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#BC4749] ${
                          isActive
                            ? "bg-[#BC4749] text-white shadow-md"
                            : "hover:bg-gray-50"
                        }`}
                        aria-current={isActive ? "true" : undefined}
                        aria-pressed={isActive}
                      >
                        <span
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            isActive ? "bg-white/20" : "bg-[#BC4749]"
                          }`}
                        >
                          <it.Icon className="w-4 h-4 text-white" />
                        </span>

                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span
                              className={`font-semibold ${isActive ? "text-white" : "text-gray-900"}`}
                            >
                              {it.title}
                            </span>
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CONTENT */}
            <div className="w-full md:w-2/3 p-6 md:p-8">
              <div
                className="transition-opacity duration-300 ease-in-out"
                key={activeItem.id}
                aria-live="polite"
              >
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-gray-600">{activeItem.summary}</p>

                <div className="mt-4 text-gray-700 space-y-4">
                  {activeItem.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#programs"
                    className="inline-block bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition"
                  >
                    See related programs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows: OUTSIDE the card */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prevSection}
            disabled={activeIndex === 0}
            aria-label="Previous section"
            className={`flex items-center gap-2 px-4 py-2 rounded-md border transition ${
              activeIndex === 0
                ? "opacity-50 cursor-not-allowed bg-gray-50"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <FaChevronLeft />
            <span className="text-sm">Previous</span>
          </button>

          <button
            onClick={nextSection}
            disabled={activeIndex === ITEMS.length - 1}
            aria-label="Next section"
            className={`flex items-center gap-2 px-4 py-2 rounded-md border transition ${
              activeIndex === ITEMS.length - 1
                ? "opacity-50 cursor-not-allowed bg-gray-50"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <span className="text-sm">Next</span>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
