"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  Shield,
  Leaf,
  Users,
  Heart,
  Brain,
  ArrowRight,
  BookOpen,
  Target,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Map icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield size={24} />,
  Leaf: <Leaf size={24} />,
  Users: <Users size={24} />,
  Heart: <Heart size={24} />,
  Brain: <Brain size={24} />,
};

interface SanityCategory {
  _id: string;
  name: string;
  subtitle?: string;
  description: string;
  icon: string;
  image?: { asset: { _ref: string; _type: string } };
}

export default function HomeAbout() {
  const [categories, setCategories] = useState<SanityCategory[]>([]);
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = (await client.fetch(
          `*[_type == "category"]{ _id, name, subtitle, description, icon, image }`
        )) as SanityCategory[];
        setCategories(data);
        if (data.length) setSelectedKey(data[0]._id);
      } catch (err) {
        console.error("Sanity fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  // Loading state skeletons
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-6 w-32 mx-auto mb-4" />
          <Skeleton className="h-12 w-48 mx-auto mb-2" />
          <Skeleton className="h-6 w-64 mx-auto" />
        </div>

        {/* Navigation Skeleton */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-24 rounded-full" />
          ))}
        </div>

        {/* Featured Skeleton */}
        <div className="mb-16">
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>

        {/* Grid Skeletons */}
        <div className="mb-12">
          <Skeleton className="h-8 w-48 mx-auto mb-8" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full rounded-xl" />
            ))}
          </div>
        </div>

        {/* CTA Skeleton */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <Skeleton className="h-6 w-40 mx-auto mb-4" />
          <Skeleton className="h-4 w-64 mx-auto mb-6" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-10 w-32 rounded-lg" />
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>
      </section>
    );
  }

  const selected =
    categories.find((cat) => cat._id === selectedKey) || categories[0];

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
          <Target size={16} />
          Our Focus Areas
        </div>
        <h2 className="text-5xl font-bold text-black mb-4">
          Join The Movement
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Learn, Unlearn and Relearn with UWT. Explore critical issues shaping
          our world and discover how you can make a meaningful impact in your
          community.
        </p>
      </div>

      {/* Interactive Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setSelectedKey(cat._id)}
            className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedKey === cat._id
                ? "bg-[#BC4749] text-white shadow-lg scale-105"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#BC4749] hover:text-[#BC4749]"
            }`}
          >
            <span className="flex items-center gap-2">
              {iconMap[cat.icon] ?? <Shield size={24} />} {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Featured Category Display */}
      <div className="mb-16">
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow-lg">
                  {iconMap[selected.icon] ?? <Shield size={24} />}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-black">
                    {selected.name}
                  </h3>
                  {selected.subtitle && (
                    <p className="text-[#BC4749] font-semibold text-sm">
                      {selected.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {selected.description}
              </p>
              <button className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                <BookOpen size={18} /> Learn More <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                {selected.image ? (
                  <img
                    src={urlFor(selected.image).url()}
                    alt={selected.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Categories Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-center text-black mb-8">
          Explore All Focus Areas
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat._id}
              onMouseEnter={() => setHoveredCard(cat._id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedKey(cat._id)}
              className={`group relative bg-white p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedKey === cat._id
                  ? "border-[#BC4749] shadow-lg scale-105"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-50 rounded-xl transition-opacity" />

              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md">
                  {iconMap[cat.icon] ?? <Shield size={24} />}
                </div>

                <h4 className="text-xl font-bold text-black mb-3 group-hover:text-black transition-colors">
                  {cat.name}
                </h4>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {cat.description.substring(0, 120)}...
                </p>

                <div className="flex items-center text-[#BC4749] text-sm font-medium group-hover:gap-2 transition-all">
                  Explore Topic
                  <ArrowRight
                    size={16}
                    className="ml-1 group-hover:translate-x-1 transition-transform"
                  />
                </div>

                {/* Selection indicator */}
                {selectedKey === cat._id && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#BC4749] rounded-full shadow-lg" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
        <h3 className="text-2xl font-bold text-black mb-4">
          Ready to Make a Difference?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of changemakers learning about these critical issues
          and taking action in their communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#BC4749] text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
            Start Learning
          </button>
          <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
}
