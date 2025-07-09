import React from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

interface Params {
  params: {
    slug: string;
  };
}

// Pre-generate static routes for all categories
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    `*[_type == "category"]{ "slug": slug.current }`
  );
  return slugs;
}

export default async function page({ params: { slug } }: Params) {
  const query = `*[_type == "category" && slug.current == $slug][0]{
    _id,
    name,
    subtitle,
    description,
    icon,
    image
  }`;

  const category = await client.fetch(query, { slug });

  if (!category) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
      {category.subtitle && (
        <p className="text-[#BC4749] font-medium text-lg mb-2">
          {category.subtitle}
        </p>
      )}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {category.description}
      </p>
      {category.image && (
        <img
          src={urlFor(category.image).url()}
          alt={category.name}
          className="rounded-xl w-full object-cover border border-gray-200"
        />
      )}
    </section>
  );
}
