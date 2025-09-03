

import Image from "next/image";
import QuoteWithCorners from "./QuoteWithCorners";

const Icon = ({ src, alt }: { src: string; alt: string }) => (
  <Image
    src={src}
    alt={alt}
    width={48}
    height={48}
    className="h-8 w-8"
  />
);

const stats = [
  { value: "1000+", label: "Tech Talents Transformed", icon: "/images/icons/UsersFour.svg" },
  { value: "10+", label: "Years of Impact", icon: "/images/icons/Target.svg" },
  { value: "50+", label: "Collaborative Projects", icon: "/images/icons/HandShake.svg" },
];

export default function Impact() {
  return (
    <section className="w-full bg-gray-50 py-20" id="impact">
      <div className="container mx-auto px-2 mb-12">
        <QuoteWithCorners>
          <p className="text-gray-800 leading-relaxed px-9 py-1 max-w-6xl mx-auto  text-center">
            We take pride in our distinctive approach: rather than directly teaching
            technical skills,{" "}
            <b className="font-semibold">
              we focus on unleashing the inherent potential within talented tech
              enthusiasts.
            </b>
          </p>
        </QuoteWithCorners>
      </div>

      <div className="text-center mb-12">
        <span className="px-6 py-2 bg-gray-900 text-white text-lg font-semibold rounded-md uppercase">
          Our Unique Impact
        </span>
      </div>

      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-green-50 rounded-xl py-10 text-center shadow">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <Icon src={stat.icon} alt={stat.label} />
              <p className="text-5xl md:text-5xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <h3 className="text-primary text-sm font-bold uppercase mb-2">
            Our Approach
          </h3>
          <p className="text-tertiary leading-relaxed max-w-3xl mx-auto text-justify mb-6">
            Through mentorship, motivation, and strategic guidance, we help <br />talented
            individuals transform into outstanding tech professionals.<br /> Our strength
            lies in our community-first approach, where real growth <br /> happens through
            shared learning and accountability.
          </p>

          <h3 className="text-primary text-sm font-bold uppercase mb-2">
            &quot;The Machine Spirit&quot;
          </h3>
          <p className="text-tertiary leading-relaxed max-w-3xl mx-auto text-justify mb-6">
            We&apos;ve built what our members call the &quot;Machine Spirit&quot; — a culture of <br />
            relentless excellence, problem-solving, and world-class work ethic.<br /> It&apos;s
            not just about skills. It&apos;s about becoming the kind of person who stands <br />
            out anywhere.
          </p>

          <h3 className="text-primary text-sm font-bold uppercase mb-2">
            From Potential to Power
          </h3>
          <p className="text-tertiary leading-relaxed max-w-3xl mx-auto text-justify mb-6">
            Our members don&apos;t just level up in tech. <br /> They lead with clarity, solve
            with confidence, and thrive in every <br /> challenge professionally and
            personally.
          </p>
        </div>

        <div className="relative w-full h-90 md:h-[500px] rounded-l overflow-hidden shadow-lg">


          <Image
            src="/images/impact-frame.png"
            alt="Segsalerty Approach"
            width={800}
            height={0}
            className=" rounded-xl"
            priority
          />



          <span className="flex items-center gap-2 absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm text-tertiary shadow">
            <Image
              src="/images/icons/HeroTag-5.png"
              alt="Tech Transformation"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>Mentorship Targeted at your growth</span>
          </span>

          <span className="flex items-center gap-2 absolute bottom-4 right-2 bg-white px-3 py-1 rounded-full text-sm text-tertiary shadow">
            <Image
              src="/images/icons/HeroTag-1.png"
              alt="Tech Transformation"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>From learning to leading — together</span>
          </span>
        </div>
      </div>

      <div className="container mx-auto px-2">
        <QuoteWithCorners>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed px-9 py-1 max-w-6xl mx-auto  text-center">
            “Our community doesn&apos;t just create developers or designers —{" "}
            <b className="font-semibold">
              we nurture <br />individuals who approach every challenge with the &apos;Machine
              Spirit&apos;,
            </b>{" "}
            turning them<br /> into exceptional problem solvers and leaders in their
            fields.”
          </p>
        </QuoteWithCorners>
      </div>
    </section>
  );
}
