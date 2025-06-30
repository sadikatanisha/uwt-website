"use client";
import React, { useState } from "react";
import {
  Heart,
  Users,
  BookOpen,
  Droplets,
  Home,
  Phone,
  Copy,
  Check,
} from "lucide-react";

const page = () => {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [copiedField, setCopiedField] = useState("");

  const projects = [
    {
      id: 1,
      title: "Clean Water Initiative",
      description:
        "Providing clean drinking water to rural communities through well installations and water purification systems.",
      raised: 45000,
      goal: 75000,
      icon: <Droplets className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Education for All",
      description:
        "Building schools and providing educational materials to underprivileged children in remote areas.",
      raised: 32000,
      goal: 50000,
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Emergency Shelter Program",
      description:
        "Constructing temporary shelters and providing emergency housing for displaced families.",
      raised: 28000,
      goal: 60000,
      icon: <Home className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "Community Healthcare",
      description:
        "Mobile medical units and health camps to provide basic healthcare services to underserved communities.",
      raised: 18000,
      goal: 40000,
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  const donationAmounts = [50, 100, 250, 500, 1000];

  const paymentInfo = {
    bkash: "01712-345678",
    nogod: "01812-345678",
  };

  const copyToClipboard = (text: string, field: any) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(""), 2000);
  };

  const getProgressPercentage = (raised: any, goal: any) => {
    return Math.min((raised / goal) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <div className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Make a Difference Today</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your donation helps us create lasting change in communities around
            the world. Every contribution, no matter the size, makes a real
            impact.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Current Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border-2 border-gray-200 rounded-2xl p-8 hover:border-[#BC4749] duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="mr-4 ">{project.icon}</div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">Progress</span>
                    <span className="font-bold">
                      + ${project.raised.toLocaleString("en-US")} / $
                      {project.goal.toLocaleString("en-US")}
                    </span>
                  </div>

                  <div className="w-full bg-gray-200  h-3">
                    <div
                      className="bg-[#BC4749] h-3 transition-all duration-500"
                      style={{
                        width: `${getProgressPercentage(project.raised, project.goal)}%`,
                      }}
                    ></div>
                  </div>

                  <p className="text-sm mt-2 text-gray-500 group-hover:text-gray-400">
                    {getProgressPercentage(
                      project.raised,
                      project.goal
                    ).toFixed(1)}
                    % completed
                  </p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Choose Your Donation Amount
          </h2>

          {/* Quick Amount Selection */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {donationAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
                className={`py-4 text-xl font-bold border-2 transition-all ${
                  selectedAmount === amount && !customAmount
                    ? "bg-white text-black border-white"
                    : "border-white text-white hover:bg-white hover:text-black"
                }`}
              >
                ৳{amount}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mb-12">
            <label className="block text-lg font-semibold mb-4 text-center">
              Or enter a custom amount:
            </label>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">
                  ৳
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(0);
                  }}
                  placeholder="Enter amount"
                  className="w-full pl-10 pr-4 py-4 text-2xl font-bold text-black border-2 border-white bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-2 border-white p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Payment Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* bKash */}
              <div className="border border-gray-400 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">bKash</h4>
                  <button
                    onClick={() => copyToClipboard(paymentInfo.bkash, "bkash")}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors"
                  >
                    {copiedField === "bkash" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    Copy
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-mono">{paymentInfo.bkash}</span>
                </div>
              </div>

              {/* Nagad */}
              <div className="border border-gray-400 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold">Nagad</h4>
                  <button
                    onClick={() => copyToClipboard(paymentInfo.nogod, "nagad")}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors"
                  >
                    {copiedField === "nagad" ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                    Copy
                  </button>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-mono">{paymentInfo.nogod}</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg mb-6">
                Selected Amount:{" "}
                <span className="font-bold text-2xl">
                  ৳{customAmount || selectedAmount}
                </span>
              </p>

              <div className="bg-gray-800 p-6 mb-6">
                <h4 className="font-bold mb-2">Instructions:</h4>
                <ol className="text-left space-y-2 text-sm">
                  <li>1. Select your preferred payment method above</li>
                  <li>2. Send the donation amount to the provided number</li>
                  <li>3. Keep your transaction receipt for records</li>
                  <li>4. Thank you for your generous contribution!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Message */}
      <div className="bg-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Heart className="w-16 h-16 mx-auto mb-6 text-black" />
          <h3 className="text-3xl font-bold mb-4">
            Thank You for Your Support
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every donation brings us one step closer to creating positive change
            in the world. Your generosity helps us continue our mission and
            reach more communities in need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
