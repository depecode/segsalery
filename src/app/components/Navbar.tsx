"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="container mx-auto px-6 py-4 flex items-center">
                <Link href="/" className="text-xl font-bold text-green-900">
                    <Image
                        src="/images/segsalerty-green.svg"
                        alt="SEGSALERTY"
                        width={179}
                        height={40}
                    />
                </Link>

                <div className="hidden md:flex space-x-8 items-center ml-80">
                    <Link href="#impact" className="text-gray-800 hover:text-primary hover:underline hover:underline-offset-4">
                        Impact
                    </Link>
                    <Link href="#about" className="text-gray-800 hover:text-primary hover:underline hover:underline-offset-4">
                        About
                    </Link>
                    <Link href="#programs" className="text-gray-800 hover:text-primary hover:underline hover:underline-offset-4">
                        Programs
                    </Link>
                    <Link href="#support" className="text-gray-800 hover:text-primary hover:underline hover:underline-offset-4">
                        Support Us
                    </Link>
                </div>

                <Link
                    href="https://t.me/+jh9aL-fYeB04Mjlk"
                    className="hidden md:flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-800 transition ml-auto"
                >
                    <span>Join Our Community</span>
                    <Image
                        src="/images/icons/NavCommunity.svg"
                        alt="Hand Heart"
                        width={24}
                        height={24}
                        className="h-6 w-6"
                    />
                </Link>


                <button
                    className="md:hidden text-tertiary ml-auto"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
                    <Link href="#impact" className="block text-tertiary">Impact</Link>
                    <Link href="#about" className="block text-tertiary">About</Link>
                    <Link href="#programs" className="block text-tertiary">Programs</Link>
                    <Link href="#support" className="block text-tertiary">Support Us</Link>
                    <Link
                        href="https://t.me/+jh9aL-fYeB04Mjlk"
                        className="block bg-primary text-white px-4 py-2 rounded-lg text-center"
                    >
                        Join Our Community
                    </Link>
                </div>
            )}
        </nav>


    );
}
