import React, { useState } from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: 2020,
    image:
      "/assets/HomePage/company building.jpg", // Replace
    description:
      "Vebsigns Technologies was conceptualized with a vision to deliver innovative IT solutions. The founders conducted extensive market research to identify industry gaps and opportunities for digital transformation.",
  },
  {
    year: 2021,
    image:
      "/assets/HomePage/company building.jpg", // Replace
    description:
      "The company was officially incorporated in Pune, Maharashtra. Initial services such as website development, mobile app development, and digital marketing were launched, supported by a newly formed team of skilled professionals.",
  },
  {
    year: 2022,
    image:
      "/assets/HomePage/company building.jpg", // Replace
    description:
      "Vebsigns diversified its offerings by expanding into AI, IoT, and blockchain solutions. With an upgraded infrastructure, the company secured projects across multiple industries, strengthening its reputation.",
  },
  {
    year: 2023,
    image:
      "/assets/HomePage/company building.jpg", // Replace
    description:
      "The brand established a stronger presence in the market through strategic partnerships, client success stories, and participation in industry events and conferences, gaining recognition as a reliable IT solutions provider.",
  },
  {
    year: 2024,
    image:
      "/assets/HomePage/company building.jpg", // Replace
    description:
      "Focused on innovation, Vebsigns introduced proprietary software solutions tailored to client needs. With high satisfaction rates, the company expanded its client base and initiated outreach to international markets.",
  },
  {
    year: 2025,
    image:
      "/assets/HomePage/company building.jpg", // Replace
    description:
      "Looking ahead, Vebsigns is committed to sustainable growth, technological leadership in AI and IoT, and making a meaningful impact on the global tech community through innovation and collaboration.",
  },
];

const TimelineStepper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = timelineData[activeIndex];


  return (
    <section className="relative bg-[#0b0225] text-white py-20">
      <div className="w-full mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-blue-400 uppercase tracking-wide text-3xl sm:text-4xl">
          # Our Story
        </p>

        {/* Year and Content */}
        <div className="flex flex-col items-center mt-10 space-y-6">
          <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Image */}
            <div className="lg:w-1/2 w-full">
              <motion.img
                key={activeItem.year}
                src={activeItem.image}
                alt={activeItem.year}
                className="h-64 sm:h-80 md:h-96 lg:h-[20rem] rounded-xl rotate-[-4deg] shadow-lg w-full object-cover"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.05, 0.95, 1] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            {/* Year and Description */}
            <div className="lg:w-1/2 w-full text-left">
              <h2 className="text-5xl sm:text-7xl md:text-[120px] lg:text-[180px] font-bold text-blue-400">
                {activeItem.year}
              </h2>
              <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-300">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Stepper */}
        <div className="mt-16 sm:mt-24 flex justify-center items-center relative overflow-x-auto">
          {/* Line behind dots */}
          <div className="absolute top-2 left-0 w-full h-[1px] bg-gray-700 z-0"></div>

          <div className="flex space-x-3 sm:space-x-16 md:space-x-28 z-10 px-6">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer flex-shrink-0"
                onClick={() => setActiveIndex(index)}
              >
                {/* Dot */}
                <div
                  className={`w-5 h-5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-yellow-400 scale-100" : "bg-blue-400"
                    }`}
                ></div>
                <p
                  className={`mt-2 text-xs sm:text-sm ${index === activeIndex ? "text-yellow-400" : "text-gray-400"
                    }`}
                >
                  {item.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default TimelineStepper;
