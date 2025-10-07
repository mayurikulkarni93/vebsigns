import React from 'react'

const GENAIConsultingOverview = () => {
  return (
    <div>
      <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side Content */}
                <div className="order-1 md:order-1 w-full">
                    {/* Subtitle */}
                    <p className="text-blue-600 text-[21px] font-semibold uppercase tracking-wide">
                        Overview
                    </p>

                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl uppercase font-bold text-gray-900 mt-2 mb-6">
                        Redefining Business Innovation with Generative AI
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                       Generative AI empowers businesses to innovate faster, personalize experiences, and unlock new growth opportunities. By applying advanced AI models, organizations can streamline operations, enhance creativity, and deliver smarter outcomes.

                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-8">
                        Our Generative AI solutions integrate seamlessly with IT systems, cloud platforms, and enterprise workflows. From AI copilots and intelligent chatbots to automated content creation and knowledge management, we deliver solutions that improve efficiency and customer engagement. With 5+ years of proven delivery, we provide tailored solutions for industries like finance, retail, healthcare, education, and manufacturing—ensuring secure, scalable, and business-aligned transformation.

                    </p>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-8 mt-8">
                        {/* Stat 1 */}
                        <div className="border-t border-gray-300 pt-4">
                            <p className="text-gray-500 text-sm">Serving the industry for</p>
                            <h3 className="text-5xl sm:text-7xl font-normal text-blue-600">6+</h3>
                            <p className="text-gray-600 mt-2">Years of Excellence</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="border-t border-gray-300 pt-4">
                            <p className="text-gray-500 text-sm">Projects Successfully Completed</p>
                            <h3 className="text-5xl sm:text-7xl font-normal text-blue-600">85+</h3>
                            <p className="text-gray-600 mt-2">Delivering Quality Solutions</p>
                        </div>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className=" justify-center items-center order-2 md:order-2 w-full mt-8 md:mt-0 hidden md:flex">
                    <img
                        src="/assets/HomePage/arrow3.svg"
                        alt="AI Consulting"
                        className="w-full max-w-lg object-contain scale-x-[-1]" // flips horizontally
                    />
                </div>


            </div>
        </section>
    </div>
  )
}

export default GENAIConsultingOverview
