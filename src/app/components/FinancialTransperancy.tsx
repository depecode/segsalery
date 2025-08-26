import Image from "next/image";

export default function FinancialTransparency() {
    return (
        <section className="py-20 bg-green-900 text-white">
            <div className="text-center mb-10">

                <button className="bg-white text-green-900 px-6 py-2 rounded-lg font-semibold mb-6">
                    FINANCIAL TRANSPARENCY
                </button>

                <p className="mt-6 max-w-6xl mx-auto text-gray-200 leading-relaxed">
                    While this initiative has been primarily self-funded by our founder since inception,
                    external donations play a crucial role in amplifying our impact. Your support not only
                    validates our mission but enables us to reach and support more talented individuals,
                    creating a wider ripple effect in the tech community. Every contribution helps us extend
                    our comprehensive support to more deserving talents who could benefit from our proven
                    mentorship and guidance programs.
                </p>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg relative">
                        <span className="absolute left-6 bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full shadow">
                            Updated 5th of March, 2025
                        </span>
                        <h3 className="text-xl font-bold mt-8 mb-4">CURRENT FUNDING STATUS</h3>
                        <p className="text-4xl font-extrabold text-primary mb-3">₦4,550,000</p>
                        <p>Cash in Bank (+ External Donations)</p>
                        <p className="text-gray-600 mt-2">
                            65% is the Founder&apos;s personal contribution
                        </p>
                    </div>

                    <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg relative">
                        <span className="absolute left-6 bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full shadow">
                            Next Report: End of Q1 2025
                        </span>
                        <h3 className="text-xl font-bold mt-8 mb-4">
                            QUARTERLY EXPENSES OVERVIEW
                        </h3>
                        <p className="mb-4">
                            Detailed quarterly expense reports are published at the end of each quarter,
                            providing complete transparency on:
                        </p>
                        <ul className="space-y-2">
                            {[
                                "Talent support disbursements",
                                "Tools and resources provided",
                                "Community events and activities",
                                "Operational costs",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-tertiary">
                                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg mb-16">
                    <h3 className="text-xl font-bold mb-4 uppercase">DONATION PROCESS</h3>
                    <p className="mb-4">
                        While we deeply appreciate the community&apos;s interest in supporting our mission,
                        we maintain a careful due diligence process for all potential donations:
                    </p>
                    <ul className="space-y-2">
                        {[
                            "All donation inquiries must be initiated through our official Telegram channel to ensure transparency and proper documentation",
                            "A brief due diligence process is conducted for all potential donors to ensure alignment with our community values",
                            "Real-time updates of received donations are reflected in our public financial dashboard",
                            "Quarterly reports detail how all donations are utilized to support our community members",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-tertiary">
                                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm text-gray-500 mt-6">
                        Note: External donations enable us to expand our reach and impact, helping us
                        support more talented individuals while validating and strengthening our community&apos;s mission.
                        Together, we can create more opportunities for deserving tech talents.
                    </p>
                </div>
            </div>

            <div className="text-center">
                <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-white text-green-900 rounded-full font-semibold shadow hover:bg-gray-100">
                    Give to the community      <Image src="/images/icons/HandHeartGreen.svg" alt="Facebook" width={40} height={40} className="mx-0" />

                </button>
            </div>
        </section>
    );
}
