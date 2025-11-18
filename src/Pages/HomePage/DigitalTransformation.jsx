import React from "react";
import { Link, useNavigate } from "react-router-dom";


const DigitalTransformation = () => {
    const navigate = useNavigate();

    const cardData = [
        {
            id: 1,
            image: "/assets/HomePage/open-ai-1.svg",
            number: "1.",
            description: " IT Services & End-to-End Technology Solutions",
            buttonText: "Go to About Page",
            bgColor: "#15042E",
            hoverTextColor: "white",
            link: "/about", // 👈 add your route here

        },
        {
            id: 2,
            image: "/assets/HomePage/i3.png",
            number: "2.",
            description: "Innovative IoT Solutions for Smarter Businesses",
            buttonText: "Go to About Page",
            bgColor: "#15042E",
            hoverTextColor: "white",
            link: "/about", // 👈 add your route here

        },
        {
            id: 3,
            image: "/assets/HomePage/ai2.png",
            number: "3.",
            description: "AI-Powered Products & Intelligent Business Transformation",
            buttonText: "Go to About Page",
            bgColor: "#15042E",
            hoverTextColor: "white",
            link: "/about", // 👈 add your route here

        },
        {
            id: 4,
            image: "/assets/HomePage/Cover image 4th.svg",
            number: "4.",
            description: "Digital Marketing & Scalable Growth Strategies",
            buttonText: "Go to About Page",
            bgColor: "#15042E",
            hoverTextColor: "white",
            link: "/about", // 👈 add your route here

        },
    ];
    return (
        <section className="relative py-16 bg-gradient-to-br from-purple-50 via-white to-orange-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {/* Heading */}
                <p className="text-[21px] font-semibold text-blue-600 tracking-widest uppercase">
                    We’re Vebsigns
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                    DIGITAL TRANSFORMATION
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    We are a software consulting and development company, transforming products and enterprises with tailored, tech-agnostic solutions in software, hardware, IT, and IoT that drive growth, innovation, and lasting business value.
                </p>
                <br />

                {/* Cards */}
                <div className="flex flex-wrap justify-center gap-6 lg:gap-12 w-full max-w-screen-xl mx-auto">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/5 group mx-auto cursor-pointer"
                            onClick={() => navigate(card.link || "#")}
                        >
                            {/* Main Card */}
                            <div
                                className="
    relative
    bg-white hover:bg-[#15042E] hover:text-white
    text-[#15042E]
    text-[16px] leading-[25.6px]
    p-6 sm:p-8
    h-[370px]
    rounded-lg
    shadow-lg
    cursor-pointer
    overflow-visible
    transition-property: transform, color;
    duration-300 ease-in-out
    hover:rotate-[2deg]
    group-hover:translate-y-[-15px]
    flex flex-col
    box-border
    z-10
  "
                            >
                                <img
                                    src={card.image}
                                    alt="Card Image"
                                    className="w-[180px] sm:w-[215px] absolute top-6 left-[-20px] sm:left-[-25px] h-auto"
                                />
                                <h4 className="absolute top-48/100 left-6 text-5xl sm:text-7xl text-[#1B4BF0] font-normal">
                                    {card.number}
                                </h4>
                                <p className="mt-auto text-left text-sm sm:text-base">{card.description}</p>
                            </div>

                            {/* Button */}
                            <div
                                className="text-[14px] sm:text-[16px] leading-[16px] text-center text-[#15042E] 
                       bg-[#F3F945] w-[180px] sm:w-[200px] h-[60px] sm:h-[70px] 
                       p-[20px_10px_10px_10px] sm:p-[40px_10px_15px_10px] 
                       block cursor-pointer transition-transform duration-300 
                       ease-in-out box-border rounded-b-[8px] relative z-0 
                       mx-auto -mt-[60px] sm:-mt-[75px] group-hover:translate-y-[35px]"
                            >
                                <a>{card.buttonText}</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <p className="mt-12 text-base sm:text-lg text-gray-600">
                    Drive Your Business Strategy with{" "}
                    <span className="text-indigo-600 font-semibold uppercase">Vebsigns</span>.{" "}
                    <Link to="/contact" className="text-blue-600 hover:underline">
                        Get free consultation →
                    </Link>
                </p>
            </div>
            {/* <div className="relative w-[1169px] max-w-full mx-auto mt-12 px-4 sm:px-6"
                style={{ fontSize: "16px", padding: "20px 30px 20px 30px" }}>

                <div className="flex items-center mb-2">
                    <label htmlFor="" className="text-[#15042E] font-bold text-base">
                        Quick request a demo
                    </label>
                    <img
                        src="/assets/HomePage/arrow.png"
                        alt=""
                        className="relative top-6 ml-2 h-10 w-12 sm:h-12 sm:w-[59px] z-10"
                    />
                </div>

                <div className="relative flex flex-col sm:flex-row gap-3 sm:gap-0">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="h-14 sm:h-16 w-full pr-4 sm:pr-36 pl-4 border-[0.5px] border-gray-300 rounded-full focus:outline-none z-0"
                    />
                    <button
                        type="submit"
                        className="sm:absolute sm:top-1/2 sm:left-90/110 sm:-translate-y-1/2 h-12 sm:h-14 w-full sm:w-[197px] px-6 rounded-full bg-[#1B4BF0] hover:bg-[#4c73f4] text-white"
                    >
                        Next Steps
                    </button>
                </div>
            </div> */}
        </section>
    );
};

export default DigitalTransformation;
