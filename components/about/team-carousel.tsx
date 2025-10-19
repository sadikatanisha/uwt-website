"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type TeamMember = {
  _id: string;
  name: string;
  position?: string;
  imageUrl?: string | null;
};

export default function TeamCarousel({ team }: { team: TeamMember[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const maxIndex = Math.max(0, team.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }
      return prev + 1;
    });
  }, [maxIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return maxIndex;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    if (isPaused || team.length <= itemsPerView) return;

    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, goToNext, team.length, itemsPerView]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            gap: itemsPerView === 1 ? "0px" : "1.5rem",
          }}
        >
          {team.map((member) => (
            <div
              key={member._id}
              className="flex-shrink-0 px-3"
              style={{
                width: `${100 / itemsPerView}%`,
              }}
            >
              <div className="group relative">
                <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden shadow-sm bg-gray-100">
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <span className="text-4xl sm:text-6xl text-gray-400 font-light">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-200">{member.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {team.length > itemsPerView && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            ←
          </button>
          <span className="text-sm text-gray-600">
            {currentIndex + 1} / {maxIndex + 1}
          </span>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
