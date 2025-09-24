import React from 'react'

const SEOConsultingOverview = () => {
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
                            Driving Online Success with SEO
                        </h2>

                        {/* Paragraph */}
                        <p className="text-gray-700 text-base leading-relaxed mb-4">
                            Effective SEO ensures your business is easily discoverable online. By aligning strategies with search engine algorithms, businesses can attract the right audience, improve user experience, and achieve sustainable digital growth.

                        </p>
                        <p className="text-gray-700 text-base leading-relaxed mb-8">
                            Our SEO services integrate seamlessly with business goals to deliver measurable results. From on-page and off-page optimization to local SEO and analytics tracking, we ensure websites perform at their best. With 5+ years of experience, we provide tailored strategies for industries like retail, healthcare, finance, education, and technology, ensuring lasting impact and stronger online authority.

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

export default SEOConsultingOverview
