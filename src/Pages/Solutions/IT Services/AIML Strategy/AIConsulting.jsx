import React from "react";

const AIConsultingSection = () => {
    return (
  <section className="bg-[#F3F945]">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
      
      {/* Left Side */}
      <div
        className="flex flex-col justify-center items-center text-center p-8 sm:p-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/HomePage/map.png')",
        }}
      >
        <h2 className="text-[120px] sm:text-[160px] md:text-[192px] font-normal text-[#15042E] leading-none">
          5<span className="text-[50px] sm:text-[65px] md:text-[80px] align-top">+</span>
        </h2>
        <p className="mt-4 text-gray-900 text-base sm:text-lg md:text-lg max-w-md">
           Drawing from 5+ years of industry knowledge, we understand the frequent concerns global customers face at the start of their transformation.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center p-8 sm:p-12 text-center md:text-left">
        {/* <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Why is AI strategy consulting important?
        </h3> */}
        <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
          AI and ML accelerate decision-making by analyzing historical and live device data to forecast trends, optimize resources, and automate actions across connected systems, improving reliability and reducing costs in IoT deployments. End-to-end services span data preparation, model development, integration, and rollout to thousands of users, with options to customize third‑party AI platforms as needed. {" "}
          {/* <a
            href="#"
            className="text-gray-900 font-semibold underline hover:text-blue-700"
          >
            Find out more
          </a> */}
        </p>
      </div>
    </div>
  </section>
);

};

export default AIConsultingSection;
