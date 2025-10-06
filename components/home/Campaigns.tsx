import { client } from "@/sanity/lib/client";
import React from "react";
import Image from "next/image";

type Campaign = {
  id: string;
  name: string;
  year?: string;
  imageUrl?: string;
  description: React.ReactNode;
};

const query = `*[_type == "campaign"] | order(name asc) {
  "id": _id,
  name,
  description,
  "imageUrl": image.asset->url
}`;

export default async function Campaigns() {
  const campaigns = (await client.fetch(query)) as Campaign[];

  return (
    <section className="max-w-7xl mx-auto py-6">
      <header className="mb-6">
        <h2 className="leading-none">
          <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-tight">
            Impact
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl  font-medium tracking-tight mt-1">
            In Action
          </span>
        </h2>
        <div className="mt-4 flex items-center justify-start">
          <div className="h-px w-38 bg-gray-200" />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((c) => (
          <article
            key={c.id}
            className="group rounded-xl overflow-hidden transition-shadow duration-200 bg-white border flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden rounded-2xl">
              {c.imageUrl ? (
                <Image
                  src={c.imageUrl}
                  alt={c.name}
                  loading="lazy"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl p-2"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
                  No image
                </div>
              )}
            </div>

            {/* Main content grows so buttons stay at bottom */}
            <div className="p-4 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium">{c.name}</h3>
                  {c.year && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {c.year}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-3 text-sm text-muted-foreground">
                {c.description}
              </div>
            </div>

            {/* Buttons row — fixed to bottom of card */}
            <div className="p-4 pt-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#programs"
                  className="w-full inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition"
                  aria-label="See our programs"
                >
                  See our programs
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
