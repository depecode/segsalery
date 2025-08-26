import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import QuoteWithCorners from "./QuoteWithCorners";

const programs = [
  {
    title: "RISING STARS PROGRAM",
    description:
      "Our entry-level program identifies and nurtures exceptional early-career talents through comprehensive support. We provide substantial financial backing to support their self-development journey.",
    image: "/images/program-img-1.png",
    btnText: "Begin Your Journey",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScPpFKheMhVXMR1GrDrDxr9S0z4ZRGxSy_H6Bk4NCC8bBEjKw/viewform",
    icon: <ArrowUpRight size={18} />,
  },
  {
    title: "MID-LEVEL ACCELERATOR",
    description:
      "Designed for established professionals seeking to elevate their career trajectory through innovative thinking, strategic networking, and enhanced leadership capabilities.",
    image: "/images/program-img-2.png",
    btnText: "Join the Accelerator",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfQ2SgADzMvZZK0xxRtUK84ikSjY0QLz-wHeJfO4pzxm-jrug/viewform",
    icon: <ArrowUpRight size={18} />,
  },
  {
    title: "TECH LEADERS CIRCLE",
    description:
      "An exclusive circle comprising distinguished industry veterans and respected tech leaders who share our passion for nurturing talent and giving back to the tech community.",
    image: "/images/program-img-3.png",
    btnText: "Join the Circle",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfhxJES6a3Ur4GL4w37TQkuC9BZ_OmCQluG-hiII71cSzlNng/viewform",
    icon: <ArrowUpRight size={18} />,
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-gray-50" id="support">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold mb-6">
            OUR PROGRAMS, DESIGNED FOR YOU
          </button>

          <p className="flex flex-col text-tertiary max-w-5xl mx-auto mb-6">
            <span>Feeling stuck in your tech journey?</span> Whether you&apos;re just starting out
            or unsure how to grow, we&apos;ve designed each of our programs to meet
            you where you are — and move you forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col"
            >
              <div className="relative w-full h-60 mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-primary uppercase">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 flex-1">{item.description}</p>

              {/* Link Button */}
              <Link href={item.link} className="mt-6">
                <button className="px-5 py-2 bg-primary text-white text-base font-medium rounded-lg hover:bg-green-800 transition flex gap-2 items-center">
                  {item.btnText} {item.icon}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 text-center">
        <QuoteWithCorners>
          <p className="text-gray-800">
            "While we scale to impact more lives, our commitment remains unchanged:
            ensuring <span className="font-semibold text-primary">YOU</span> receive the
            personal guidance and support <span className="font-semibold text-primary">YOU</span> need to thrive."
          </p>
        </QuoteWithCorners>
      </div>
    </section>
  );
}