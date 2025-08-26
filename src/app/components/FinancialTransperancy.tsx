import Image from "next/image";

const fundingStatus = {
  date: "Updated 5th of March, 2025",
  title: "CURRENT FUNDING STATUS",
  amount: "₦4,550,000",
  description: "Cash in Bank (+ External Donations)",
  note: "65% is the Founder&apos;s personal contribution",
};

const expensesOverview = {
  date: "Next Report: End of Q1 2025",
  title: "QUARTERLY EXPENSES OVERVIEW",
  description:
    "Detailed quarterly expense reports are published at the end of each quarter, providing complete transparency on:",
  items: [
    "Talent support disbursements",
    "Tools and resources provided",
    "Community events and activities",
    "Operational costs",
  ],
};

const donationProcess = {
  title: "DONATION PROCESS",
  description:
    "While we deeply appreciate the community&apos;s interest in supporting our mission, we maintain a careful due diligence process for all potential donations:",
  steps: [
    "All donation inquiries must be initiated through our official Telegram channel to ensure transparency and proper documentation",
    "A brief due diligence process is conducted for all potential donors to ensure alignment with our community values",
    "Real-time updates of received donations are reflected in our public financial dashboard",
    "Quarterly reports detail how all donations are utilized to support our community members",
  ],
  note: "Note: External donations enable us to expand our reach and impact, helping us support more talented individuals while validating and strengthening our community&apos;s mission. Together, we can create more opportunities for deserving tech talents.",
};

export default function FinancialTransparency() {
  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="text-center mb-10">
        <button className="bg-white text-green-900 px-6 py-2 rounded-lg font-semibold mb-6">
          FINANCIAL TRANSPARENCY
        </button>
        <p className="mt-6 max-w-6xl mx-auto text-gray-200 leading-relaxed">
          While this initiative has been primarily self-funded by our founder
          since inception, external donations play a crucial role in amplifying
          our impact. Your support not only validates our mission but enables us
          to reach and support more talented individuals, creating a wider ripple
          effect in the tech community. Every contribution helps us extend our
          comprehensive support to more deserving talents who could benefit from
          our proven mentorship and guidance programs.
        </p>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg relative">
          <span className="absolute left-6 bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full shadow">
            {fundingStatus.date}
          </span>
          <h3 className="text-xl font-bold mt-8 mb-4">{fundingStatus.title}</h3>
          <p className="text-4xl font-extrabold text-primary mb-3">
            {fundingStatus.amount}
          </p>
          <p>{fundingStatus.description}</p>
          <p className="text-gray-600 mt-2">{fundingStatus.note}</p>
        </div>

        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg relative">
          <span className="absolute left-6 bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full shadow">
            {expensesOverview.date}
          </span>
          <h3 className="text-xl font-bold mt-8 mb-4">
            {expensesOverview.title}
          </h3>
          <p className="mb-4">{expensesOverview.description}</p>
          <ul className="space-y-2">
            {expensesOverview.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-tertiary">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-xl font-bold mb-4 uppercase">
            {donationProcess.title}
          </h3>
          <p className="mb-4">{donationProcess.description}</p>
          <ul className="space-y-2">
            {donationProcess.steps.map((step, idx) => (
              <li key={idx} className="flex items-center gap-2 text-tertiary">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                {step}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500 mt-6">{donationProcess.note}</p>
        </div>
      </div>

      <div className="text-center">
        <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-white text-green-900 rounded-full font-semibold shadow hover:bg-gray-100">
          Give to the community
          <Image
            src="/images/icons/HandHeartGreen.svg"
            alt="Donate"
            width={40}
            height={40}
          />
        </button>
      </div>
    </section>
  );
}
