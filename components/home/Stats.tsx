import React from "react";
import { FaUsers, FaGraduationCap, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";

interface Stat {
  id: string;
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    id: "workshops",
    icon: <FaGraduationCap className="w-10 h-10" />,
    value: "7+",
    label: "Workshops Conducted",
    description: "Across Bangladesh, UK, and USA",
  },
  {
    id: "reach",
    icon: <FaUsers className="w-10 h-10" />,
    value: "1000+",
    label: "Students Reached",
    description: "Through awareness programs",
  },
  {
    id: "kits",
    icon: <FaHandsHelping className="w-10 h-10" />,
    value: "50+",
    label: "Hygiene Kits Distributed",
    description: "Supporting marginalized communities",
  },
  {
    id: "countries",
    icon: <FaGlobeAmericas className="w-10 h-10" />,
    value: "5",
    label: "Countries",
    description: "Global team presence",
  },
];

export default function Stats() {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-48 bg-gray-200" />
          </div>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
            Every number represents real change, real conversations, and real
            lives impacted through education and community support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-[#BC4749] to-[#8B3538] rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex flex-col items-center text-center text-white">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-bold mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-lg font-semibold mb-2">{stat.label}</p>
                  <p className="text-sm text-white/80">{stat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm italic">
            *Impact data as of 2024. Our work continues to grow with each
            program and partnership.
          </p>
        </div>
      </div>
    </section>
  );
}
