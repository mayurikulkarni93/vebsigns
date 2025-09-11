import React from 'react'

const SASConsultingSection = () => {
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
          37<span className="text-[50px] sm:text-[65px] md:text-[80px] align-top">+</span>
        </h2>
        <p className="mt-4 text-gray-900 text-base sm:text-lg md:text-lg max-w-md">
          With 37+ years of experience, we realised the common concerns for our global customers when they started their journey.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex flex-col justify-center p-8 sm:p-12 text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Why is Strategic & Advisory Services important?
        </h3>
        <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
          AI strategy consulting is vital for integrating artificial intelligence into business operations effectively. It ensures that AI initiatives align with business goals, enhancing operational efficiency and competitive edge. This consulting process includes.{" "}
          <a
            href="#"
            className="text-gray-900 font-semibold underline hover:text-blue-700"
          >
            Find out more
          </a>
        </p>
      </div>
    </div>
  </section>
    </div>
  )
}

export default SASConsultingSection
