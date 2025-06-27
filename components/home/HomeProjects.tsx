import Image from "next/image";
import React from "react";

export default function HomeProjects() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Key Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
        {/* Project 1 Image (large) */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 sm:col-span-2 md:col-span-4 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1625486368591-35c24ea9dddd?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Prottasha"
            fill
            className="object-cover hover:scale-105 transform transition-transform duration-300"
          />
        </div>

        {/* Project 1 Details */}
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg flex flex-col justify-between sm:col-span-2 md:col-span-2 border">
          <h3 className="text-xl font-semibold mb-4">Prottasha</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Empowering marginalized communities in Bangladesh through
            sustainable reintegration, vocational training, and advocacy.
          </p>
        </div>

        {/* Project 2 Details */}
        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-lg flex flex-col justify-between sm:col-span-2 md:col-span-2 border">
          <h3 className="text-xl font-semibold mb-4">Oikko Chokto</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Crafting community arts and craft workshops that preserve
            traditional techniques and uplift women artisans.
          </p>
          <p className="text-md uppercase">Learn More</p>
        </div>

        <div className="relative w-full h-48 sm:h-56 md:h-64 sm:col-span-2 md:col-span-4 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1625486368591-35c24ea9dddd?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Uikko Chokto"
            fill
            className="object-cover hover:scale-105 transform transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
