import React from 'react'

const AIGConsultingOverview = () => {
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
                        What is IoT Product Development?
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-700 text-base leading-relaxed mb-4">
                        AI strategy consulting is a specialized advisory service that guides
                        organizations in integrating artificial intelligence into their operations
                        to meet their strategic business goals.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed mb-8">
                        It involves comprehensive planning and the application of AI to enhance
                        operational efficiency and customer satisfaction. Consultants evaluate an
                        organization’s readiness for AI, establish clear objectives, identify suitable
                        AI applications, and create a strategic implementation plan. They also assist
                        in establishing the infrastructure, suggest team composition, conduct
                        architecture reviews, handle risks, and confirm that AI solutions are ethical
                        and socially responsible. This strategic approach is vital for companies aiming
                        to use AI for competitive advantage and growth.
                    </p>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-8 mt-8">
                        {/* Stat 1 */}
                        <div className="border-t border-gray-300 pt-4">
                            <p className="text-gray-500 text-sm">Data and AI Projects</p>
                            <h3 className="text-5xl sm:text-7xl font-normal text-blue-600">28+</h3>
                            <p className="text-gray-600 mt-2">Successfully Realized</p>
                        </div>

                        {/* Stat 2 */}
                        <div className="border-t border-gray-300 pt-4">
                            <p className="text-gray-500 text-sm">Experts</p>
                            <h3 className="text-5xl sm:text-7xl font-normal text-blue-600">85+</h3>
                            <p className="text-gray-600 mt-2">From 17 fields of study</p>
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

export default AIGConsultingOverview
