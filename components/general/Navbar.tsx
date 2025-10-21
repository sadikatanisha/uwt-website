"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import logo from "../../public/logo.png";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isWorkOpen, setIsWorkOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },

    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  const workItems = [
    { label: "Awareness & Advocacy", href: "/work/awareness" },
    { label: "Mental Health Support", href: "/work/mental-health" },
    { label: "Personal Enhancement Program", href: "/work/pep" },
    { label: "Community Development", href: "/work/community" },
  ];

  const linkClass = (href: string) =>
    `text-xl font-medium hover:text-[#BC4749] transition-colors ${
      pathname === href ? "text-[#BC4749]" : "text-gray-800"
    }`;

  return (
    <nav className="flex justify-between items-center py-5 px-4 lg:px-7 sticky top-0 bg-white z-20">
      <Link href="/">
        <Image src={logo} width={50} height={50} alt="logo" />
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          </li>
        ))}
        <li
          className="relative"
          onMouseEnter={() => {
            if (closeTimeout) clearTimeout(closeTimeout);
            setIsWorkOpen(true);
          }}
          onMouseLeave={() => {
            const timeout = setTimeout(() => setIsWorkOpen(false), 200);
            setCloseTimeout(timeout);
          }}
        >
          <button
            className={`text-xl font-medium hover:text-[#BC4749] transition-colors flex items-center gap-1 ${
              pathname.startsWith("/work") ? "text-[#BC4749]" : "text-gray-800"
            }`}
          >
            Work
            <ChevronDown
              size={16}
              className={`transition-transform ${isWorkOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isWorkOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-100">
              {workItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${
                    pathname === item.href
                      ? "text-[#BC4749] bg-gray-50"
                      : "text-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </li>
      </ul>
      <Link href="/donate">
        <Button
          size="lg"
          className="hidden md:block bg-[#BC4749] hover:bg-[#a63b3d] text-white"
        >
          Donate
        </Button>
      </Link>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu size={28} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64">
          <ul className="flex flex-col gap-4 mt-8 p-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <div className="text-xl font-medium text-gray-800 mb-2">Work</div>
              <ul className="ml-4 space-y-2">
                {workItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-base hover:text-[#BC4749] transition-colors ${
                        pathname === item.href
                          ? "text-[#BC4749]"
                          : "text-gray-700"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <Link href="/donate">
              <Button className="mt-4 w-full">Donate</Button>
            </Link>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
