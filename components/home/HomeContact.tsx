"use client";

import React from "react";
import Link from "next/link";

export default function HomeContact() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-neutral-900 py-16 px-4 text-center"
    >
      <div className="max-w-4xl mx-auto  gap-12">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Have questions or want to collaborate? Send us a message or reach
            out directly using the information below.
          </p>

          {/* Right: Contact Form */}
          <form className="space-y-6 bg-neutral-100 dark:bg-neutral-800 p-8 rounded-2xl shadow-md border">
            <div>
              <label htmlFor="name" className="block text-gray-700  mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#BC4749]  text-center text-gray-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700  mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-full border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#BC4749]  text-center text-gray-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700  mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-2xl border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#BC4749]  text-center text-gray-600"
              />
            </div>
            <button
              type="submit"
              className=" py-3 px-6 bg-[#BC4749]  text-white font-medium   transition-colors duration-200 rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
