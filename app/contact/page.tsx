"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Send, CheckCircle } from "lucide-react";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: attach real submission logic
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-20">
        <header className="text-center space-y-8">
          <div className="inline-block px-6 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
            Empowering Communities Since 2010
          </div>
          <h1 className="text-6xl font-bold text-black leading-tight">
            About Our Mission
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pioneering sustainable change through empowerment and innovation.
            We're redefining global impact with community-focused solutions that
            create lasting transformation.
          </p>
        </header>
      </section>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h1>
          {isSubmitted ? (
            <div className="text-center">
              <CheckCircle size={48} className="text-[#BC4749] mx-auto mb-2" />
              <p className="text-gray-700">
                Thank you! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#BC4749] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#BC4749] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#BC4749] focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center py-2 px-4 bg-[#BC4749] hover:shadow-md text-white font-semibold rounded-md transition"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          )}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">Or reach us directly at:</p>
            <Link
              href="mailto:hello@nonprofit.org"
              className="inline-flex items-center mt-2 text-[#BC4749] hover:underline"
            >
              <Mail size={16} className="mr-1" /> hello@nonprofit.org
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
