import React from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import TeamCarousel from "./team-carousel";

type SanityTeam = {
  _id: string;
  name: string;
  position?: string;
  imageUrl?: string | null;
};

const query = `*[_type == "team"] | order(name asc) {
  _id,
  name,
  position,
  "imageUrl": image.asset->url
}`;

export default async function UWTTeamComponent() {
  const team = (await client.fetch(query)) as SanityTeam[];

  return (
    <section className="w-full bg-white text-gray-900 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 ">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
          <div>
            <h1 className="leading-none">
              <span className="block text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                OUR
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mt-1">
                TEAM
              </span>
            </h1>
          </div>
          <Link
            href="/team"
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors"
          >
            View All →
          </Link>
        </div>

        <p className="text-gray-600 max-w-2xl mb-8">
          A youth-led team working across advocacy, mental health and community
          programs.
        </p>
      </div>
      <TeamCarousel team={team} />
    </section>
  );
}
