"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logo from "../../public/logo.png";

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
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
      </ul>
      <Link href="/donate">
        <Button size="lg" className="hidden md:block">
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
