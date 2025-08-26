import Image from "next/image";
import { Users, Award, Handshake } from "lucide-react";
import QuoteWithCorners from "./QuoteWithCorners";


const IndustrySupportIcon = () => (
  <Image
    src="/images/icons/Target.svg"
    alt="Industry Support"
    width={48}
    height={48}
    className="h-8 w-8"
  />
);

const UserIcon = () => (
  <Image
    src="/images/icons/UsersFour.svg"
    alt="Industry Support"
    width={48}
    height={48}
    className="h-8 w-8"
  />
);

const HandShakeIcon = () => (
  <Image
    src="/images/icons/HandShake.svg"
    alt="Industry Support"
    width={48}
    height={48}
    className="h-8 w-8"
  />
);

const stats = [
  { value: "1000+", label: "Tech Talents Transformed", icon: UserIcon },
  { value: "10+", label: "Years of Impact", icon: IndustrySupportIcon },
  { value: "50+", label: "Collaborative Projects", icon: HandShakeIcon },
];

export default function Impact() {
  return (
    <section className="w-full bg-gray-50 py-20" id="impact">

      <div className="container mx-auto px-2 mb-12">
        <QuoteWithCorners>
          <p className="text-gray-800 leading-relaxed">
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
        <span className="px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md uppercase">
          Our Unique Impact
        </span>
      </div>

      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-green-50 rounded-xl py-10 text-center shadow">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center space-y-3">
                <Icon />
                <p className="text-4xl md:text-5xl font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start mb-20">
        <div>
          <h3 className="text-primary text-sm font-bold uppercase mb-2">
            Our Approach
          </h3>
          <p className="text-tertiary leading-relaxed mb-6">
            Through mentorship, motivation, and strategic guidance, we help talented
            individuals transform into outstanding tech professionals. Our strength
            lies in our community-first approach, where real growth happens through
            shared learning and accountability.
          </p>

          <h3 className="text-primary text-sm font-bold uppercase mb-2">
            "The Machine Spirit"
          </h3>
          <p className="text-tertiary leading-relaxed mb-6">
            We’ve built what our members call the "Machine Spirit" — a culture of
            relentless excellence, problem-solving, and world-class work ethic. It’s
            not just about skills. It’s about becoming the kind of person who stands
            out anywhere.
          </p>

          <h3 className="text-primary text-sm font-bold uppercase mb-2">
            From Potential to Power
          </h3>
          <p className="text-tertiary leading-relaxed">
            Our members don’t just level up in tech. They lead with clarity, solve
            with confidence, and thrive in every challenge professionally and
            personally.
          </p>
        </div>

        <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/impact-frame.png"
            alt="Segsalerty Approach"
            fill
            className="object-cover"
          />

          <span className="flex items-center gap-2 absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm  text-tertiary shadow">
            <Image
              src="/images/icons/HeroTag-5.png"
              alt="Tech Transformation"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>Mentorship Targeted at your growth</span>
          </span>


          <span className="flex items-center gap-2 absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm  text-tertiary shadow">
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

      <div className="container mx-auto px-6">
        <QuoteWithCorners>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            “Our community doesn’t just create developers or designers —{" "}
            <b className="font-semibold">
              we nurture individuals who approach every challenge with the ’Machine
              Spirit’,
            </b>{" "}
            turning them into exceptional problem solvers and leaders in their
            fields.”
          </p>
        </QuoteWithCorners>
      </div>
    </section>
  );
}