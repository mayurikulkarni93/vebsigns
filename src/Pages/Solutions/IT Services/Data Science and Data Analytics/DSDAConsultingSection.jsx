import React from 'react'

const DSDAConsultingSection = () => {
  return (
    <div>
      <section className="bg-[#6FE4FC]">
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
          Drawing from 5+ years of industry knowledge, we help global customers unlock the true value of their data and address the most common challenges faced during their transformation journey.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center p-8 sm:p-12 text-center md:text-left">
        
        <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
          Data Science and Analytics empower organizations to convert raw data into actionable intelligence. By analyzing historical and real-time datasets, businesses can uncover patterns, forecast outcomes, optimize resources, and automate decisions to achieve efficiency and growth. Our end-to-end services span data preparation, advanced analytics, model development, visualization, and deployment at scale.{" "}
          
        </p>
      </div>
    </div>
  </section>
    </div>
  )
}

export default DSDAConsultingSection
