import React from 'react'

const SEOConsultingSection = () => {
  return (
    <div>
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
              With 5+ years of digital marketing expertise, we help businesses improve visibility, attract qualified traffic, and build strong online presence through proven SEO strategies.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center p-8 sm:p-12 text-center md:text-left">

            <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
              SEO is the process of optimizing websites to rank higher on search engines like Google and Bing. By enhancing website structure, content, and authority, SEO drives organic traffic, increases brand visibility, and boosts customer engagement. Our services cover technical SEO, keyword research, content optimization, and link building.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SEOConsultingSection
