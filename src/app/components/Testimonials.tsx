
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Chidera Okonkwo",
      role: "Rising Star",
      text: "SEGSALERTY gave me the structure and support I didn’t know I needed. I’ve grown so much, both technically and personally.",
      color: "bg-purple-600",
      image: "/images/icons/Arrow-1.svg",
    },
    {
      name: "Grace Williams",
      role: "Rising Star",
      text: "Being here opened doors I thought were shut. Real projects, real mentorship, real results.",
      color: "bg-pink-600",
      image: "/images/icons/Arrow-2.svg",
    },
    {
      name: "Tolu Adeyemi",
      role: "Mentor",
      text: "Mentoring here has been one of the most fulfilling parts of my tech career. The growth in the community is real and intentional.",
      color: "bg-blue-600",
      image: "/images/icons/Arrow-3.svg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 px-6 bg-gray-50 bg-[url('/images/testimonial-bg.jpg')] bg-cover bg-center"
    >
      <div className="text-center mb-10">
        <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold mb-6">
          WHAT OUR COMMUNITY IS SAYING
        </button>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Real stories from real people — growing, building, and leading through
          SEGSALERTY.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(({ name, role, text, color, image }, index) => (
          <div
            key={index}
            className={`relative bg-white text-gray-900 rounded-2xl border-2 border-green-600 shadow-lg hover:shadow-xl transition 
              ${index === 1 ? "p-5 md:p-6 mt-5 h-[80%]" : "p-6 md:p-8 h-full"}`}
          >
            <p className="text-gray-600 italic mb-6 leading-relaxed text-center">
              &quot;{text}&quot;
            </p>

            <div className="flex flex-col items-center relative">
              <Image
                src={image}
                alt={`Testimonial arrow for ${name}`}
                width={56}
                height={56}
                className="object-cover w-12 h-12 md:w-14 md:h-14 absolute -bottom-6"
              />

              <div
                className={`${color} absolute -bottom-20 px-4 py-2 rounded-lg text-white text-center`}
              >
                <p className="font-bold leading-tight">{name}</p>
                <p className="text-sm leading-tight">{role}</p>
              </div>
            </div>

            {["-top-2 -left-2", "-top-2 -right-2", "-bottom-2 -left-2", "-bottom-2 -right-2"].map(
              (pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-4 h-4 border-2 border-green-600 bg-white rounded`}
                />
              )
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <button className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:text-secondary transition">
          Read their stories
        </button>
      </div>
    </section>
  );
}


