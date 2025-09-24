import React from 'react'

const GENAIConsultingSection = () => {
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
              Drawing from 5+ years of expertise, we help enterprises harness the power of Generative AI to address challenges, reimagine processes, and accelerate their digital transformation journey.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center p-8 sm:p-12 text-center md:text-left">

            <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
              Generative AI goes beyond automation by creating new content, ideas, and solutions. It enables organizations to generate text, images, designs, and code, while also enhancing decision-making, customer interactions, and innovation across industries. End-to-end services cover strategy, model development, fine-tuning, integration, and deployment.

            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GENAIConsultingSection
