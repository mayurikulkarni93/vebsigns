import React from 'react'

const WDADConsultingOverview = () => {
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
                            Transforming Ideas into Powerful Digital Experiences
                        </h2>

                        {/* Paragraph */}
                        <p className="text-gray-700 text-base leading-relaxed mb-4">
                            We design and develop websites that combine creativity, technology, and strategy to help businesses build a strong online presence and achieve growth.

                        </p>
                        <p className="text-gray-700 text-base leading-relaxed mb-8">
                            Our web solutions are tailored to business needs, integrating cutting-edge technologies with intuitive design. From corporate websites to e-commerce platforms, we focus on speed, usability, SEO, and security. With 5+ years of proven delivery, we empower businesses across industries like retail, healthcare, education, and finance to connect with their audiences through impactful websites.

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

export default WDADConsultingOverview
