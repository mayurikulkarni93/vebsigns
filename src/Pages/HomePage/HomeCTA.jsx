import React from "react";
import { motion } from "framer-motion";

const logos = [
    { src: "/assets/HomePage/a2.jpg" },
    { src: "/assets/HomePage/a3.jpg" },
    { src: "/assets/HomePage/a4.jpg" },
    { src: "/assets/HomePage/a1.jpg" },
];

const HomeCTA = () => {
    return (
        <section className="relative bg-gradient-to-b from-white via-white to-pink-50 py-20 overflow-hidden">
            {/* Dot pattern background */}
            <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')] opacity-10"></div>

            {/* Center content */}
            <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6">
                {/* Small Heading */}
                <p className="text-blue-600 text-2xl sm:text-2xl font-semibold uppercase tracking-wide">
                    Get Started
                </p>

                {/* Main Heading */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase font-extrabold text-gray-900 mt-4 leading-tight">
                    Drive Your <br /> Business Strategy <br /> With AI
                </h2>

                {/* CTA Button */}
                <div className="mt-8">
                    <a
                        href="#"
                        className="inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl font-medium transition"
                    >
                        Let’s Talk About Your Project
                    </a>
                </div>

                {/* Subtext */}
                <p className="mt-4 text-gray-500 text-sm sm:text-base">
                    Have a project idea? Book a Free Consultation call with our Experts today.
                </p>
            </div>

            {/* Floating Logos */}
            <div className="hidden lg:block absolute top-4 left-1/2 transform -translate-x-1/2 sm:left-60 sm:translate-x-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                <motion.img
                    src={logos[0].src}
                    alt="Logo"
                    className="w-full h-full rounded-full shadow-xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
            </div>

            <div className="hidden lg:block absolute top-10 right-10 sm:right-90 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                <motion.img
                    src={logos[1].src}
                    alt="Logo"
                    className="w-full h-full rounded-full shadow-xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
            </div>

            <div className="hidden lg:block absolute left-10 bottom-10 sm:left-20 sm:bottom-30 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                <motion.img
                    src={logos[2].src}
                    alt="Logo"
                    className="w-full h-full rounded-full shadow-xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
            </div>

            <div className="hidden lg:block absolute right-10 bottom-10 sm:right-20 sm:bottom-20 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28">
                <motion.img
                    src={logos[3].src}
                    alt="Logo"
                    className="w-full h-full rounded-full shadow-xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                />
            </div>
        </section>

    );
};

export default HomeCTA;
