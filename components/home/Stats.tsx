import React from "react";
import { IoMdGlobe } from "react-icons/io";
import { PiHandshakeLight } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { PiUsers } from "react-icons/pi";

interface Stat {
  id: string;
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    id: "projects",
    icon: <IoMdGlobe className="w-12 h-12 text-gray-200" />,
    value: "120+",
    label: "Projects Completed",
  },
  {
    id: "beneficiaries",
    icon: <PiUsers className="w-12 h-12 text-gray-200" />,
    value: "25k+",
    label: "Lives Impacted",
  },
  {
    id: "volunteers",
    icon: <PiHandshakeLight className="w-12 h-12 text-gray-200" />,
    value: "500+",
    label: "Active Volunteers",
  },
  {
    id: "funds",
    icon: <BsHeart className="w-12 h-12 text-gray-200" />,
    value: "$1.2M",
    label: "Funds Raised",
  },
];

export default function Stats() {
  return (
    <section className="border w-full py-16 px-4 bg-[#BC4749] rounded-2xl text-white">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold">Our Impact in Numbers</h2>
        <p className="text-gray-200  mt-2">
          Every stat represents our commitment to change and community
          empowerment.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto ">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-col items-center   rounded-2xl p-6 "
          >
            <div className="mb-4">{stat.icon}</div>
            <h3 className="text-4xl font-extrabold mb-2 text-gray-100">
              {stat.value}
            </h3>
            <p className="text-gray-300 dark:text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
