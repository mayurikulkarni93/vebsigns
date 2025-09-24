import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Counter from "../../Components/Counter";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const analyticsData = [
    {
        title: "Analytics Platform",
        description:
            "Provides employees with unified data & tools for advanced analysis, helping identify problems & derive meaningful insights.",
        stats: [
            { label: "Before", value: "58M", description: "Million digital interactions" },
            { label: "After", value: "96%", description: "Growth in new customers" },
        ],
        cta: {
            text: "Have an idea? Our team is ready to guide you with tailored solutions.",
        },
        image: { src: "/assets/HomePage/AP.png", alt: "Tablet", width: 650 },
    },
    {
        title: "Business Insights",
        description:
            "Empowers leaders with real-time analytics dashboards and predictive insights for smarter decision-making.",
        stats: [
            { label: "Before", value: "20M", description: "Data records" },
            { label: "After", value: "75%", description: "Faster reporting" },
        ],
        cta: { text: "Transform your data into actionable insights." },
        image: { src: "/assets/HomePage/AP.png", alt: "Dashboard", width: 650 },
    },
];

const AnalyticsSlider = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-[#122D4D] via-[#15042E] via-[#241032] to-[#15042E]">
            {/* Horizontal Container */}
            <div className="max-w-7xl bg-[#110326] mx-auto px-4 sm:px-6  py-4 sm:py-6 rounded-2xl">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    {analyticsData.map((data, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                                {/* Left Content */}
                                <div className="text-white text-center md:text-left">
                                    <motion.h2
                                        key={idx + '-title'}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="visible"
                                        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-snug"
                                    >
                                        {data.title}
                                    </motion.h2>

                                    <motion.p
                                        key={idx + '-desc'}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: 0.2 }}
                                        className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0 text-sm sm:text-base"
                                    >
                                        {data.description}
                                    </motion.p>

                                    {/* Stats */}
                                    <div className="flex flex-col sm:flex-row sm:space-x-10 md:space-x-16 mb-8 sm:mb-10 items-center md:items-start">
                                        {data.stats.map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                variants={fadeUp}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ delay: 0.3 + index * 0.2 }}
                                                className="mb-6 sm:mb-0 text-center sm:text-left"
                                            >
                                                <p className="text-white text-sm sm:text-base">
                                                    {stat.label}
                                                </p>
                                                <h3 className="text-5xl sm:text-6xl md:text-8xl font-normal text-blue-500 mt-2">
                                                    <Counter value={stat.value} />
                                                </h3>
                                                <p className="text-gray-400 font-semibold text-xs sm:text-sm md:text-base mt-1">
                                                    {stat.description}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="border-gray-500 border-b-[0.5px] mt-6 md:mt-10"></div>

                                    {/* CTA */}
                                    <motion.div
                                        key={idx + '-cta'}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: 0.8 }}
                                        className="mt-6 flex items-center justify-center md:justify-start gap-2 cursor-pointer"
                                    >
                                        <p className="text-sm sm:text-base md:text-lg text-white hover:text-blue-500 hover:underline">
                                            {data.cta.text}
                                        </p>
                                        <span className="bg-white hover:bg-blue-500 hover:text-white text-blue-500 rounded-full p-1 flex items-center justify-center h-6 w-6">
                                            <ArrowRight />
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Right Image */}
                                <motion.div
                                    key={idx + '-img'}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 1 }}
                                    className="relative flex justify-center"
                                >
                                    <img
                                        src={data.image.src}
                                        alt={data.image.alt}
                                        className={`w-[${data.image.width}px] relative z-10`}
                                    />
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>


    );
};

export default AnalyticsSlider;

