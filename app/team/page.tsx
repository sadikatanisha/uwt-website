import React from "react";
import { client } from "@/sanity/lib/client";
import TeamPageHeader from "../../components/team/team-page-header";
import TeamPageGrid from "./team-page-grid";

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
        <TeamPageHeader />
        <TeamPageGrid team={team} />
      </div>
    </div>
  );
}
