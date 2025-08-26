"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#impact", label: "Impact" },
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#support", label: "Support Us" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center">
        <Link href="/" className="text-xl font-bold text-green-900">
          <Image
            src="/images/segsalerty-green.svg"
            alt="SEGSALERTY"
            width={179}
            height={40}
            priority
          />
        </Link>

        <div className="hidden md:flex space-x-8 items-center ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-800 hover:text-primary hover:underline hover:underline-offset-4"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://t.me/+jh9aL-fYeB04Mjlk"
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
          >
            <span>Join Our Community</span>
            <Image
              src="/images/icons/NavCommunity.svg"
              alt="Community"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </Link>
        </div>

        <button
          className="md:hidden text-tertiary ml-auto"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-tertiary"
              onClick={() => setOpen(false)} 
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://t.me/+jh9aL-fYeB04Mjlk"
            className="block bg-primary text-white px-4 py-2 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Join Our Community
          </Link>
        </div>
      )}
    </nav>
  );
}
