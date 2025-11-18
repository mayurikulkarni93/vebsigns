// WhyChooseVebsigns.jsx
import React from "react";
export default function WhyChooseVebsigns({ benefits }) {
  return (
    <section className="bg-[#0A0025] text-white py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-14 leading-snug">
          Why Choose <span className="text-teal-400">Vebsigns?</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-center border border-teal-400 rounded-lg p-6 sm:p-8 hover:shadow-lg transition text-left space-x-6"
            >
              {/* Image on the Left */}
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />

              {/* Text on the Right */}
              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-teal-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
