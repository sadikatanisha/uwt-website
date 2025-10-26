import React from "react";
import { client } from "@/sanity/lib/client";
import TeamHeader from "./team-header";
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
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <TeamHeader />
      </div>
      <TeamCarousel team={team} />
    </section>
  );
}
