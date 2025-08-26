
import Image from "next/image";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Chidera Okonkwo",
            role: "Rising Star",
            text: "SEGSALERTY gave me the structure and support I didn&apos;t know I needed. I&apos;ve grown so much, both technically and personally.",
            color: "bg-purple-600",
            image: "/images/icons/Arrow-1.svg"
        },
        {
            name: "Grace Williams",
            role: "Rising Star",
            text: "Being here opened doors I thought were shut. Real projects, real mentorship, real results.",
            color: "bg-pink-600",
            image: "/images/icons/Arrow-2.svg"
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
            className="py-12 px-6 bg-gray-50 bg-[url('/images/testimonial-bg.jpg')] bg-cover bg-center"
            id="testimonials"
        >
            <div className="text-center mb-5">
                <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold mb-6">
                    WHAT OUR COMMUNITY IS SAYING
                </button>

                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                    Real stories from real people — growing, building, and leading through SEGSALERTY.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className={`relative bg-white text-gray-900 rounded-2xl border-2 border-green-600 shadow-lg hover:shadow-xl transition 
        ${index === 1 ? "p-4 mt-5 md:p-5 h-[80%]" : "p-6 md:p-8 h-full"}`}
                    >
                        <div className="relative z-10 text-center">
                            <p className="text-gray-600 italic mb-4 leading-relaxed">&quot;{item.text}&quot;</p>
                        </div>

                        <div className="flex items-center justify-center gap-3 ">
                            <div className="absolute -bottom-6 -right">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={56}
                                    height={56}
                                    className="object-cover w-12 h-12 md:w-14 md:h-14"
                                />
                            </div>

                            <div className={`${item.color} absolute -bottom-20 -right-1 text-white px-4 py-2 mt-14 ml-12 rounded-lg`}>
                                <p className="font-bold leading-tight">{item.name}</p>
                                <p className="text-sm leading-tight">{item.role}</p>
                            </div>
                        </div>

                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -top-2 -left-2 w-4 h-4 border-2 border-green-600 bg-white rounded" />
                            <div className="absolute -top-2 -right-2 w-4 h-4 border-2 border-green-600 bg-white rounded" />
                            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-green-600 bg-white rounded" />
                            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-2 border-green-600 bg-white rounded" />
                        </div>
                    </div>
                ))}
            </div>


            <div className="text-center mt-20">
                <button className="items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:text-secondary transition">
                    Read their stories
                </button>
            </div>
        </section>
    );
}




