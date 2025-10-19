import React from "react";
import { client } from "@/sanity/lib/client";
import TeamGrid from "../../components/team/team-grid";

type SanityTeam = {
  _id: string;
  name: string;
  position?: string;
  background?: string;
  motivation?: string;
  contribution?: string;
  personalTouch?: string;
  imageUrl?: string | null;
};

const query = `*[_type == "team"] | order(name asc) {
  _id,
  name,
  position,
  background,
  motivation,
  contribution,
  personalTouch,
  "imageUrl": image.asset->url
}`;

export default async function TeamPage() {
  const team = (await client.fetch(query)) as SanityTeam[];

  return (
    <div className="w-full bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          <div className="flex flex-col items-start justify-center md:pr-8">
            <div>
              <h1 className="leading-none">
                <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                  OUR
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                  TEAM
                </span>
              </h1>
              <div className="hidden md:block h-px w-48 bg-gray-200 mt-8" />
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-prose">
              A passionate group of individuals dedicated to making a difference
              through advocacy, mental health support, and community programs.
            </p>
          </div>
        </div>

        <TeamGrid team={team} />
      </div>
    </div>
  );
}
