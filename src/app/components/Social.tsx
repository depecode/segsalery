
"use client";

import Image from "next/image";

export default function Social() {
  const slides = [
    { src: "/images/social-1.png", alt: "Slide 1" },
    { src: "/images/social-2.png", alt: "Slide 2" },
    { src: "/images/social-3.png", alt: "Slide 3" },
    { src: "/images/social-4.png", alt: "Slide 4" },
  ];

  const socialLinks = [
    { href: "https://facebook.com", src: "/images/icons/Fb.svg", alt: "Facebook" },
    { href: "https://twitter.com", src: "/images/icons/Tw.svg", alt: "Twitter" },
    { href: "https://instagram.com", src: "/images/icons/Lg.svg", alt: "Instagram" },
    { href: "https://linkedin.com", src: "/images/icons/Ln.svg", alt: "LinkedIn" },
  ];

  return (
    <section className="py-20 px-10 bg-gray-50">
      <div className="flex items-center justify-center gap-4 mb-10 flex-wrap">
        <button className="px-6 py-2 bg-tertiary text-white rounded-lg font-medium hover:bg-blue-800 transition">
          GAIN VALUE FROM OUR SOCIALS
        </button>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, src, alt }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <Image src={src} alt={alt} width={40} height={40} />
            </a>
          ))}
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll gap-6">
          {[...slides, ...slides].map((slide, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[375px] h-[468px] sm:w-[500px] sm:h-[624px] md:w-[700px] md:h-[873px]"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={700}
                height={873}
                className="w-full h-full object-cover rounded-lg shadow-md"
                priority
              />
            </div>
          ))}
        </div>

        <style jsx>{`
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scroll 15s linear infinite;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
