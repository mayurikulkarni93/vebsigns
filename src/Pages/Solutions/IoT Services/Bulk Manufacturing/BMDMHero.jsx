import React from "react";
import { Link } from "react-router-dom";

const BMDMHero = () => {

    return (
        <div className="w-full overflow-hidden">
            <div className="relative w-full min-h-[70vh] flex items-center justify-center">

                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    loading="lazy"

                >
                    <source src="/assets/HomePage/BMDM.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

                {/* Content (Grid Layout) */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left - Image (hidden on mobile, shown after text) */}
                    <div className="flex justify-center relative order-2 md:order-1">
                        <img
                            src="/assets/HomePage/image-12.png"
                            alt="AI Illustration"
                            className="w-full max-w-[500px] sm:max-w-[650px] md:max-w-[830px] h-auto rounded-2xl"
                        />
                    </div>


                    {/* Right - Text */}
                    <div className="text-white text-center md:text-left order-1 mt-10 md:mt-0 md:order-2">
                        <p className="uppercase text-[21px] text-[#6FE4FC] font-semibold">
                            our services
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold uppercase">
                            Bulk Manufacturing & Device Management
                        </h1>
                        <p className="mt-6 text-gray-300 text-base sm:text-lg">
                            Streamline large-scale production and efficiently manage connected devices
                            with secure, scalable, and compliant IoT manufacturing solutions.
                        </p>
                        <Link
                            to={"/contact"}
                            className="mt-8 inline-flex items-center justify-center text-[16px] font-semibold leading-[25px] 
              text-white bg-[#1B4BF0] py-[15px] px-[40px] sm:px-[60px] rounded-[40px] 
              transition duration-300 shadow-none hover:bg-yellow-300 hover:text-black"
                        >
                            Let's Talk About Your Project
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );



};

export default BMDMHero;
