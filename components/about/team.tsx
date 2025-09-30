// UWTTeamComponent.tsx
// Server component (Next.js app router). No "use client" here.
import React from "react";
import TeamCard from "./teamCard";
import { client } from "@/sanity/lib/client";

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

export default async function UWTTeamComponent() {
  const team = (await client.fetch(query)) as SanityTeam[];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <header className="mb-6">
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
        <p className="mt-2 text-gray-600 max-w-2xl">
          A youth-led team working across advocacy, mental health and community
          programs.
        </p>
      </header>

      <div className="divide-y divide-gray-200">
        {team.map((member) => (
          <div key={member._id} className="px-0 md:px-2 py-6">
            <TeamCard
              member={
                {
                  id: member._id,
                  name: member.name,
                  role: member.position ?? "",
                  bio: member.background ?? "",
                  motivation: member.motivation ?? "",
                  contribution: member.contribution ?? "",
                  personalTouch: member.personalTouch ?? "",
                  imageUrl: member.imageUrl ?? undefined,
                } as any
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}
