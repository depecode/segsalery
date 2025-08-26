
import Image from "next/image";
import Link from "next/link";

type HeroTagProps = {
  icon: string;
  alt: string;
  text: string;
  position: string;
};

function HeroTag({ icon, alt, text, position }: HeroTagProps) {
  return (
    <span
      className={`flex items-center gap-2 absolute ${position} bg-white px-3 py-1 rounded-md text-sm text-tertiary shadow`}
    >
      <Image src={icon} alt={alt} width={20} height={20} className="h-5 w-5" />
      <span>{text}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-28 md:pt-32 relative overflow-hidden bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gray/70"></div>

      <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center z-10">
        <div className="space-y-6">
          <h1 className="flex flex-col text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
            <span>Nurturing</span>
            <span>Africa&apos;s Gifted</span>
            <span>Tech Talents</span>
          </h1>

          <p className="text-lg text-gray-600">
            A decade of discovering, nurturing, and empowering gifted minds to
            become world-class tech leaders.
          </p>

          <div className="flex space-x-4">
            <Link
              href="https://t.me/+aXqfEpkBcy4xNTc8"
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary transition"
            >
              Support Our Mission
              <Image
                src="/images/icons/HandHeart.svg"
                alt="Support Icon"
                width={24}
                height={24}
              />
            </Link>

            <Link
              href="https://t.me/+jh9aL-fYeB04Mjlk"
              className="flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:text-secondary transition"
            >
              Join Next Cohort
              <Image
                src="/images/icons/HeroArrow.svg"
                alt="Arrow Icon"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/hero.png"
            alt="Young African tech talent illustration"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
            priority
          />

          <HeroTag
            icon="/images/icons/HeroTag-1.png"
            alt="Tech Transformation"
            text="Over 1,000 Tech Talents Transformed"
            position="top-6 left-6"
          />
          <HeroTag
            icon="/images/icons/HeroTag-2.png"
            alt="Industry Support"
            text="Backed by Industry Veterans"
            position="top-10 right-6"
          />
          <HeroTag
            icon="/images/icons/HeroTag-4.png"
            alt="Laptop Giveaway"
            text="20+ Laptops Given Out"
            position="bottom-6 left-6"
          />
        </div>
      </div>
    </section>
  );
}

