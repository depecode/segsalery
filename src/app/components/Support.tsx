import Image from "next/image";

export default function Support() {

  const support = [
    {
      title: "FINANCIAL SUPPORT",
      description:
        "Contribute to our community fund to help provide resources and support to rising talents.",
      image: "/images/support-img-1.png",
      btnText: "Give to the Community",
      icon: <Image src="images/icons/HandHeart.svg" alt="Segsalerty Logo" className="h-8" /> 
    },
    {
      title: "PROJECT OPPORTUNITIES",
      description:
        "Outsource your tech projects to our talented community members.",
      image: "/images/support-img-2.png",
      btnText: "Join the Accelerator",
      icon: <Image src="images/icons/ArrowTag-2.svg" alt="Segsalerty Logo" className="h-8" />
    },
    {
      title: "JOIN AS A MENTOR",
      description:
        "Share your expertise and experience with our community members.",
      image: "/images/support-img-3.png",
      btnText: "Join the Accelerator",
      icon: <Image src="images/icons/ArrowTag-1.svg" alt="Segsalerty Logo" className="h-8" />
    },
  ];

  
    return (
      <section className="py-20 bg-gray-100" id="support">
      <div className="container mx-auto px-6 ">
        <div className="text-center">
          <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold mb-6">
          SUPPORT OUR MISSION
          </button>
          <p className="text-tertiary max-w-6xl mx-auto mb-6">
          <span className="text-primary font-semibold">All support inquiries are reviewed exclusively through our official Telegram</span>{" "} channel to ensure transparency, proper coordination, and compliance with regulations. This process helps prevent fraudulent activities, including money laundering and terrorism financing.
          </p> 
          <p className="text-tertiary font-semibold mb-6">
            How you can support:        
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8">
          {support.map((support, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
            >
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 mb-6 rounded-xl overflow-hidden">
  <Image
    src={support.image}
    alt={support.title}
    fill
    className="object-cover"
  />
</div>

              <h3 className="text-xl font-semibold text-primary">
                {support.title}
              </h3>
              <p className="mt-3 text-gray-600">{support.description}</p>
              <button className="mt-6 px-5 py-2 bg-primary text-white text-base font-medium rounded-lg hover:bg-secondary transition inline-flex gap-2 self-start">
                {support.btnText} {support.icon}
              </button> 

            </div>
          ))}
        </div>

      </div>
    </section>
    );
  }
  