import React from "react";
import { FaBolt, FaChartLine, FaUserCheck } from "react-icons/fa";

const features = [
  {
    title: "Business Processes Automation",
    description:
      "At Vebsigns, we simplify complex workflows through automation, AI, IoT, and IT solutions. Our tailored strategies optimize efficiency, reduce costs, and accelerate digital transformation, empowering businesses to scale seamlessly and achieve lasting growth.",
    icon: (
      <img
        src="/assets/HomePage/busuness process automation.svg"
        alt=""
        className="w-[64px]"
      />
    ),
  },
  {
    title: "Improved Decision-Making",
    description:
      "AI algorithms analyze data to provide accurate insights, data augmentation, and predictive analytics. By using AI-based insights, businesses can make more informed decisions, follow market trends, and seize opportunities for growth.",
    icon: (
      <img
        src="/assets/HomePage/Improved Decision-Making.svg"
        alt=""
        className="w-[64px]"
      />
    ),
  },
  {
    title: "Personalized Customer Experiences",
    description:
      "AI helps personalize interactions with customers using machine learning algorithms. Businesses can analyze behavior, preferences, and purchase history of each customer and get tailored recommendations, offers, and experiences to invest in brand identity.",
    icon: (
    <img
        src="/assets/HomePage/Personalized Customer Experiences.svg"
        alt=""
        className="w-[64px]"
      />
    ),
  },
  {
    title: "Cost Savings",
    description:
      "AI technologies reduce operational costs by automating tasks that would otherwise require manual intervention. AI streamlines processes and helps optimize resource allocation",
    icon: (
    <img
        src="/assets/HomePage/cost saving.svg"
        alt=""
        className="w-[64px]"
      />
    ),
  },
  {
    title: "Security",
    description:
      "AI-powered cybersecurity solutions provide threat detection and defense against evolving cyber threats, saving sensitive data. AI mitigates risks and protects business assets from potential breaches and attacks",
    icon: (
    <img
        src="/assets/HomePage/security.svg"
        alt=""
        className="w-[64px]"
      />
    
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose"
      className="relative bg-[#0b0225] py-16 md:py-20 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading (Centered) */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-blue-300 uppercase tracking-widest font-semibold text-sm sm:text-base md:text-3xl">
            Why You Should
          </p>
          <h2 className="text-3xl uppercase sm:text-4xl md:text-7xl font-bold">
            Choose Vebsigns
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Arrow */}
          <div className="flex justify-center items-center relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex justify-center items-center">
              <img
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                loading="lazy"
                decoding="async"
                src="https://live.21lab.co/hanotek/wp-content/uploads/2024/11/arrow3.svg"
                alt="Arrow"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">
            <div className="space-y-8 sm:space-y-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
