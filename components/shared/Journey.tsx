// "use client";
import React from "react";
import { client } from "@/sanity/lib/client";

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

const Journey: React.FC = async () => {
  const milestones: Milestone[] = await client.fetch(`
    *[_type == "journey"] | order(year asc) {
      year,
      title,
      description
    }
  `);

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4">Our Journey</h2>
        <p className="text-xl text-gray-600">
          Key milestones in our mission to create lasting change
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year + index}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
              }`}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="text-[#BC4749] font-bold text-lg mb-2">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#BC4749] rounded-full border-4 border-white shadow-lg"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
