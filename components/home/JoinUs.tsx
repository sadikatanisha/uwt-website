import React from "react";
import { FiGlobe } from "react-icons/fi";

const stats = [
  {
    id: "joined",
    icon: <FiGlobe className="w-12 h-12 text-gray-200" />,
    prefix: "Be The Part Of FundRaisers With Over",
    value: "217,924+",
    suffix: "People From Around The World Joined",
  },
];

export default function JoinUs() {
  return (
    <section className="w-full py-16 px-4 bg-white rounded-2xl text-gray-900">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {stats.map(({ id, icon, prefix, value, suffix }) => (
          <div key={id} className="flex flex-col items-center space-y-4">
            <div>{icon}</div>
            <p className="text-sm uppercase tracking-wider text-gray-500">
              {prefix}
            </p>
            <h2 className="text-7xl font-bold">{value}</h2>
            <p className="text-sm text-gray-500">{suffix}</p>
            <button className="mt-4 px-8 py-3 bg-[#BC4749] text-white rounded-full font-semibold  transition">
              Join FundRaisers Now!
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
