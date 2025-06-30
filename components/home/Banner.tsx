"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Skeleton } from "@/components/ui/skeleton";

// Banner data type
interface BannerData {
  title: string;
  subTitle: string;
  image: { asset: { _ref: string; _type: string } };
}

// Client-side fetch for banner
async function getBanner(): Promise<BannerData | null> {
  const banner = await client.fetch<BannerData | null>(`
    *[_type == "banner"] | order(_createdAt desc)[0]{
      title,
      subTitle,
      image
    }
  `);
  return banner;
}

export default function Banner() {
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBanner()
      .then((data) => setBanner(data))
      .catch((err) => console.error("Sanity banner fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="mt-[10px] relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
        <Skeleton className="w-full h-full" />
      </section>
    );
  }

  if (!banner) {
    return null;
  }

  const imgUrl = urlFor(banner.image).width(2000).auto("format").url();

  return (
    <section className="relative mt-[10px] w-full h-[500px] sm:h-[600px] lg:h-[650px] overflow-hidden rounded-2xl">
      <Image
        src={imgUrl}
        alt={banner.title}
        fill
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="/placeholder.png"
        priority
        onLoadingComplete={() => setLoading(false)}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md mb-4">
          {banner.title}
        </h1>
        <p className="max-w-2xl text-lg sm:text-2xl text-gray-100 mb-6">
          {banner.subTitle}
        </p>
        <a
          href="/about"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
