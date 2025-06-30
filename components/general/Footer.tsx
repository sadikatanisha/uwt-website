import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import LogoWhite from "@/public/logo-white.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          <Image src={LogoWhite} width={50} height={50} alt="logo" />
        </div>

        {/* Page Links */}
        <nav className="flex gap-4 text-md">
          <Link href="/" className="hover:text-[#BC4749]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#BC4749]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#BC4749]">
            Contact
          </Link>
        </nav>

        {/* Social Links */}
        <div className="flex gap-4 text-lg">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <Facebook />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Twitter />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <Instagram />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <Linkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
