"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { usePathname } from "next/navigation";
import LogoWhite from "@/public/logo-white.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();

  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
    { href: "/donate", label: "Donate" },
  ];

  const workLinks = [
    { href: "/work/awareness", label: "Awareness & Advocacy" },
    { href: "/work/mental-health", label: "Mental Health Support" },
    { href: "/work/pep", label: "Personal Enhancement Program" },
    { href: "/work/community", label: "Community Development" },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: FaFacebook,
      label: "Facebook",
      hoverColor: "hover:text-blue-500",
    },
    {
      href: "https://instagram.com",
      icon: FaInstagram,
      label: "Instagram",
      hoverColor: "hover:text-pink-500",
    },
    {
      href: "https://linkedin.com",
      icon: FaLinkedin,
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400",
    },
  ];

  return (
    <footer className="bg-black text-white py-10 mx-4 lg:mx-7 my-4 rounded-xl  border border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Image
              src={LogoWhite}
              width={60}
              height={60}
              alt="UWT Logo"
              className="mb-4"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Unstitched Women's Tapestry - Educate, Eradicate, Empower.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href
                      ? "text-[#BC4749]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Our Work Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              Our Work
            </h3>
            <nav className="flex flex-col gap-2">
              {workLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href
                      ? "text-[#BC4749]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${social.hoverColor}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Join our community and stay updated with our latest initiatives.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <div className="text-center md:text-left">
              <p>
                © {new Date().getFullYear()} Unstitched Women's Tapestry. All
                rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p>
                Designed & Developed by{" "}
                <a
                  href="https://github.com/sadikatanisha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sadika Rahman
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
