import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="w-full bg-gray-100 py-8">
      <div className="mx-auto px-4">
        <footer className="w-full bg-[#0B132B] text-white py-12 px-6 md:px-12 rounded-2xl">
          {/* Top CTA */}
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">
              Ready to level up your tech game?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
              Join a community that&apos;s <br className="hidden md:block" />
              building, growing, and <br className="hidden md:block" />
              giving back.
            </h2>

            <Link href="https://t.me/+jh9aL-fYeB04Mjlk" target="_blank">
              <button className="px-6 py-3 bg-primary text-white text-base font-medium rounded-full hover:bg-secondary transition inline-flex items-center gap-2">
                Join Community
                <Image
                  src="/images/icons/Community.svg"
                  alt="Community Icon"
                  width={32}
                  height={32}
                />
              </button>
            </Link>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-6 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/images/segsalerty-green-2.svg"
                alt="Segsalerty Logo"
                width={120}
                height={40}
                priority
              />
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {year} SEGSALERTY. All rights reserved.
            </div>

            {/* Socials */}
            <div className="flex space-x-4">
              {[
                { href: "https://facebook.com", src: "/images/icons/Fb.svg", alt: "Facebook" },
                { href: "https://twitter.com", src: "/images/icons/Tw.svg", alt: "Twitter" },
                { href: "https://instagram.com", src: "/images/icons/Lg.svg", alt: "Instagram" },
                { href: "https://linkedin.com", src: "/images/icons/Ln.svg", alt: "LinkedIn" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.alt}
                >
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={32}
                    height={32}
                    className="hover:opacity-80 transition"
                  />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}



