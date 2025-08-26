import Image from "next/image";

export default function About() {
    return (
        <section className="w-full bg-gray-50 py-20" id="about">
            <div className="text-center mb-12">
                <span className="px-6 py-2 bg-gray-900 text-white text-sm font-semibold rounded-md uppercase">
                    Meet Our Founder
                </span>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <h2 className="text-2xl md:text-2xl font-bold text-secondary mb-6">
                        Visionary Leadership
                    </h2>
                    <p className="text-tertiary leading-relaxed mb-8">
                        Segun Mustafa is a seasoned CTO and Software Engineering leader with over 15 years of experience building and scaling enterprise systems — particularly in business automation and fintech.
                    </p>

                    <h2 className="text-2xl md:text-2xl font-bold text-secondary mb-6">
                        Master of His Craft
                    </h2>
                    <p className="text-tertiary leading-relaxed mb-8">
                        A certified Oracle Java Master since 2011, Segun also holds a BTech in Information Technology and multiple technical certifications. His expertise spans high-performance systems, cloud-native architecture, and scalable platforms used across continents.
                    </p>

                    <h2 className="text-2xl md:text-2xl font-bold text-secondary mb-6">
                        Beyond Technical Excellence
                    </h2>
                    <p className="text-tertiary leading-relaxed mb-8">
                        What sets Segun apart is his unwavering commitment to giving back. Rather than simply leading from the top, he’s built an ecosystem that empowers aspiring African tech talents through mentorship, real-world projects, and access to global tech leaders.
                    </p>

                    <h2 className="text-2xl md:text-2xl font-bold text-secondary mb-6">
                        Building a Movement
                    </h2>
                    <p className="text-tertiary leading-relaxed">
                        He’s not just developing engineers — he’s fostering a culture of excellence, inclusion, and impact. Through his leadership, a new generation of African tech professionals is rising — bold, equipped, and ready to lead.
                    </p>
                </div>


                <div className="relative w-full max-w-4xl mx-auto">
                    <Image
                        src="/images/about-frame.png"
                        alt="Segun Mustafa - Founder"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-auto rounded-xl shadow-xl"
                        priority
                    />

                    <span className="flex items-center gap-2 absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm  text-tertiary shadow">
                        <Image
                            src="/images/icons/HeroTag-3.png"
                            alt="Tech Transformation"
                            width={20}
                            height={20}
                            className="h-5 w-5"
                        />
                        <span>15+ Years Of Experience</span>
                    </span>


                    <span className="flex items-center gap-2 absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-sm  text-tertiary shadow">
                        <Image
                            src="/images/icons/HeroTag-6.png"
                            alt="Tech Transformation"
                            width={20}
                            height={20}
                            className="h-5 w-5"
                        />
                        <span>Impact and Inclusion</span>
                    </span>
                </div>



            </div>
        </section>
    );
}
