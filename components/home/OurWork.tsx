"use client";

import React from "react";
import Link from "next/link";
import {
  FaBullhorn,
  FaHeartbeat,
  FaSchool,
  FaHandsHelping,
} from "react-icons/fa";

const ITEMS = [
  {
    id: "awareness",
    title: "Awareness & Advocacy",
    Icon: FaBullhorn,
    summary:
      "Short sessions on consent, boundaries, mental health and breaking rape-culture norms.",
    href: "/work/awareness",
    pattern: "dots",
  },
  {
    id: "mental",
    title: "Mental Health & Survivor Support",
    Icon: FaHeartbeat,
    summary:
      "Safe spaces and expert-led sessions for trauma recovery, anxiety and stress management.",
    href: "/work/mental-health",
    pattern: "diagonal",
  },
  {
    id: "school",
    title: "Personal Enhancement Program (PEP)",
    Icon: FaSchool,
    summary:
      "Workshops in schools & colleges covering puberty, boundaries and cyber safety.",
    href: "/work/pep",
    pattern: "grid",
  },
  {
    id: "community",
    title: "Community Development & Care",
    Icon: FaHandsHelping,
    summary:
      "Local projects (hygiene kits, clothes, toys) supporting marginalised groups.",
    href: "/work/community",
    pattern: "circles",
  },
];

export default function OurWorkCards() {
  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <header className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
            OUR WORK
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-px w-44 sm:w-54 bg-gray-200" />
          </div>
          <p className="mt-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            At Unstitched Women's Tapestry (UWT), we are committed to creating
            safer, more equitable communities by challenging gender-based
            violence, dismantling rape culture, promoting mental health
            awareness, advancing sexual and reproductive health rights (SRHR),
            and supporting underprivileged communities.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ITEMS.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                index === 0
                  ? "md:col-span-2 md:row-span-2"
                  : index === 1
                    ? "md:col-span-1"
                    : index === 2
                      ? "md:col-span-1 md:row-span-2"
                      : "md:col-span-2"
              }`}
              style={{
                minHeight: index === 0 || index === 2 ? "450px" : "220px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#BC4749] to-[#8B3538]" />

              {item.pattern === "dots" && (
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              )}
              {item.pattern === "diagonal" && (
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
                    backgroundSize: "20px 20px",
                  }}
                />
              )}
              {item.pattern === "grid" && (
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />
              )}
              {item.pattern === "circles" && (
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, transparent 40%, white 40%, white 43%, transparent 43%)",
                    backgroundSize: "40px 40px",
                  }}
                />
              )}

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" /> */}

              <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                <div>
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors ${
                      index === 0 || index === 2 ? "md:w-16 md:h-16" : ""
                    }`}
                  >
                    <item.Icon
                      className={`text-white ${index === 0 || index === 2 ? "w-7 h-7 md:w-8 md:h-8" : "w-5 h-5 md:w-6 md:h-6"}`}
                    />
                  </div>

                  <h3
                    className={`font-semibold text-white mb-3 ${
                      index === 0 || index === 2
                        ? "text-2xl md:text-3xl lg:text-4xl"
                        : "text-xl md:text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-gray-100 leading-relaxed ${
                      index === 0 || index === 2
                        ? "text-base md:text-lg"
                        : "text-sm md:text-base"
                    }`}
                  >
                    {item.summary}
                  </p>
                </div>

                <div className="mt-4">
                  <span className="inline-flex items-center text-white font-medium text-sm border-b border-transparent group-hover:border-white transition-all">
                    Learn more
                    <span className="ml-2 group-hover:ml-3 transition-all">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
