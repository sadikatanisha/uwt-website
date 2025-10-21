"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Skeleton } from "@/components/ui/skeleton";

interface BannerData {
  title: string;
  subTitle: string;
  image?: { asset: { _ref: string; _type: string } } | null;
}

async function getBanner(): Promise<BannerData | null> {
  try {
    const banner = await client.fetch<BannerData | null>(`
      *[_type == "banner"] | order(_createdAt desc)[0]{
        title,
        subTitle,
        image
      }
    `);
    return banner;
  } catch (err) {
    console.error("Sanity getBanner() error:", err);
    throw err;
  }
}

export default function Banner() {
  const [banner, setBanner] = useState<BannerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getBanner()
      .then((data) => {
        if (!mounted) return;
        setBanner(data);
      })
      .catch((err: any) => {
        console.error("Sanity banner fetch error:", err);
        if (mounted) setError(err?.message ?? "Failed to load banner");
      })
      .finally(() => mounted && setLoading(false));

    return () => {
      mounted = false;
    };
  }, []);

  // If Sanity image present, build a URL; otherwise fallback to local public image
  const imgUrl =
    banner?.image && (banner.image as any).asset
      ? urlFor(banner.image).width(2000).auto("format").url()
      : "/banner.jpg";

  if (loading) {
    return (
      <section className="mt-[10px] relative w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-2xl">
        <Skeleton className="w-full h-full" />
      </section>
    );
  }

  // show a small placeholder UI instead of returning null so pages don't break
  if (!banner && error) {
    return (
      <section className="relative mt-[10px] w-full h-[400px] sm:h-[500px] overflow-hidden rounded-2xl bg-gray-100 flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-sm text-gray-600 mb-2">Banner failed to load.</p>
          <p className="text-xs text-gray-500">
            Check console / platform logs for details.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative mt-[10px] w-full h-[500px] sm:h-[600px] lg:h-[650px] overflow-hidden rounded-2xl">
      <Image
        src={imgUrl}
        alt={banner?.title ?? "Banner"}
        fill
        className="object-cover object-center"
        priority
        onLoadingComplete={() => setLoading(false)}
        style={{ filter: "grayscale(100%)", transition: "filter 300ms ease" }}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md mb-4"
        >
          {banner?.title ?? "Educate Empower Eradicate"}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-2xl text-lg sm:text-2xl text-gray-100 mb-6"
        >
          {banner?.subTitle ?? "Unstitchd Women's Tapestry"}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/about"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition "
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
}
