import React from 'react'

const UIUXConsultingOverview = () => {
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
                            Designing Experiences That Delight Users
                        </h2>

                        {/* Paragraph */}
                        <p className="text-gray-700 text-base leading-relaxed mb-4">
                            We craft user-centric designs that balance aesthetics and usability, making every interaction seamless and impactful.

                        </p>
                        <p className="text-gray-700 text-base leading-relaxed mb-8">
                            Our UI/UX solutions focus on enhancing user satisfaction and business performance. From web and mobile apps to enterprise platforms, we design interfaces that drive engagement, reduce friction, and maximize conversions. With 5+ years of experience, we help brands create digital journeys that stand out in competitive markets.

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

export default UIUXConsultingOverview
