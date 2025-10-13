import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';



const HeroSection = () => {
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        // Function to check if viewport is mobile
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };

        // Check initially
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3, // delay between each child animation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 }, // start left and invisible
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }, // slide in from left
    };

    return (
        <div>
            {/* Mobile View code start */}
            {isMobile ? (
                <div className="w-full  flex items-center justify-center mt-24">
                    {/* <div className="relative bg-gradient-to-b from-[#0a0220] to-[#120536]  w-[1200px] h-[223px] sm:w-[80vw] sm:h-[50vw] transform scale-[1] sm:scale-[0.8] overflow-hidden"> */}
                    <div className="relative bg-gradient-to-r from-[#3DB6D9] via-[#3FBEB9] to-[#42C897] w-[1200px] h-[223px] sm:w-[80vw] sm:h-[50vw] transform scale-[1] sm:scale-[0.8] overflow-hidden">
                        {/* All your content goes here */}
                        <img
                            src="/assets/HomePage/Subtract.svg"
                            alt="Bg white"
                            className="max-w-full h-auto absolute left-[2%] top-[10%] w-[96%]  z-0 "
                        />
                        <img
                            src="/assets/HomePage/image-12.png"
                            alt="Man with Lappy"
                            className="absolute left-[-10%] top-[5%] w-[62%]  z-10"
                        />
                        <motion.img
                            src="/assets/HomePage/image-13.png"
                            alt="RecorderImage"
                            className="absolute left-[30%] top-[7%] w-[10%] z-30"
                            animate={{ y: [0, -10, 0] }}   // move up 15px
                            transition={{
                                duration: 2.5,                // slightly slower
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <motion.img
                            src="/assets/HomePage/image-16.png"
                            alt="RecorderImage"
                            className="absolute left-[40%] top-[50%] w-[10%] z-0"
                            animate={{ y: [0, -10, 0] }}   // move up 20px
                            transition={{
                                duration: 3,                  // slower, different timing
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,                   // start slightly later
                            }}
                        />
                        <motion.img
                            src="/assets/HomePage/Rectangle.svg"
                            alt="Laptop Shadow"
                            className="absolute left-[22%] transform -translate-x-3/7 -translate-y-2/9 top-[18%] w-[52%] z-20"
                            animate={{ opacity: [0, 0.8, 0] }} // fade in, then out
                            transition={{
                                duration: 2,   // total time for one cycle
                                repeat: Infinity, // loop forever
                                ease: "easeInOut"
                            }}
                        />

                        <motion.div
                            className="absolute  top-[19%] left-[53%] w-[100%] z-40 flex flex-col items-start space-y-1 "
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h2
                                className="text-[10px] uppercase font-semibold text-[#1b4bf0]"
                                variants={itemVariants}
                            >
                                Where Data and AI
                            </motion.h2>

                            <motion.span
                                className="text-[16px] uppercase font-bold text-[#15042e]"
                                variants={itemVariants}
                            >
                                Come to life
                            </motion.span>

                            <motion.span
                                className="text-[7px] text-[#7c728a]"
                                variants={itemVariants}
                            >
                                Everybody's ready for AI except your data
                            </motion.span>

                            <motion.button
                                className="mt-1 px-1 py-1 h-[30px] w-[130px] text-[8px] bg-[#1b4bf0] text-white font-light rounded-full hover:bg-[#ecf00c] hover:text-black transition flex items-center justify-center gap-2"
                                variants={itemVariants}
                                onClick={() => navigate("/contact")}
                            >
                                Building wealth, creating futures.
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            ) : (

                <div className="w-full overflow-hidden mt-24">
                    <div className="bg-gradient-to-r from-[#3DB6D9] via-[#3FBEB9] to-[#42C897] h-[100vh] md:h-[100vh] sm:h-[60vh] flex items-center justify-center relative">
                        {/* <div className="bg-[#15042E]  h-[100vh] md:h-[100vh] sm:h-[60vh] flex items-center justify-center relative"> */}
                        {/* Background white shape */}
                        <img
                            src="/assets/HomePage/Subtract.svg"
                            alt="Bg white"
                            className="max-w-full h-auto z-0 "
                        />

                        {/* Man with laptop (middle layer) */}
                        <img
                            src="/assets/HomePage/image-12.png"
                            alt="Man with Lappy"
                            className="absolute left-1/4 transform -translate-x-1/2 w-[831px] z-10"
                        />
                        {/* Recorder image floating on top of man */}
                        <motion.img
                            src="/assets/HomePage/image-13.png"
                            alt="RecorderImage"
                            className="absolute left-[35%] top-[10%] w-[100px] z-30"
                            animate={{ y: [0, -15, 0] }}   // move up 15px
                            transition={{
                                duration: 2.5,                // slightly slower
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        <motion.img
                            src="/assets/HomePage/image-16.png"
                            alt="RecorderImage"
                            className="absolute left-[42%] top-[45%] w-[90px] z-0"
                            animate={{ y: [0, -20, 0] }}   // move up 20px
                            transition={{
                                duration: 3,                  // slower, different timing
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,                   // start slightly later
                            }}
                        />

                        <motion.img
                            src="/assets/HomePage/image-14.png"
                            alt="RecorderImage"
                            className="absolute left-[2%] top-[35%] w-[60px] z-0"
                            animate={{ y: [0, -10, 0] }}   // move up 10px
                            transition={{
                                duration: 2,                  // faster
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,                     // start later
                            }}
                        />
                        {/* Laptop shadow with Framer Motion */}
                        <motion.img
                            src="/assets/HomePage/Rectangle.svg"
                            alt="Laptop Shadow"
                            className="absolute left-26/100 transform -translate-x-3/7 -translate-y-2/9 w-[730px] top-18 z-20"
                            animate={{ opacity: [0, 0.8, 0] }} // fade in, then out
                            transition={{
                                duration: 2,   // total time for one cycle
                                repeat: Infinity, // loop forever
                                ease: "easeInOut"
                            }}
                        />
                        {/* Hello text on the right side */}
                        <motion.div
                            className="absolute  top-[22%] right-[15%] z-40 flex flex-col items-start space-y-1 max-w-[450px]"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h2
                                className="text-[32px] uppercase font-semibold text-[#1b4bf0]"
                                variants={itemVariants}
                            >
                                Where Data and AI
                            </motion.h2>

                            <motion.span
                                className="text-[64px] uppercase font-bold text-[#15042e]"
                                variants={itemVariants}
                            >
                                Come to life
                            </motion.span>

                            <motion.span
                                className="text-base text-[#7c728a]"
                                variants={itemVariants}
                            >
                                Everybody's ready for AI except your data
                            </motion.span>

                            <motion.button
                                className="mt-4 px-6 py-3 h-[63px] w-[350px] bg-[#1b4bf0] text-white font-light rounded-full hover:bg-[#ecf00c] hover:text-black transition flex items-center justify-center gap-2"
                                variants={itemVariants}
                                onClick={() => navigate("/contact")}
                            >
                                Building wealth, creating futures.
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeroSection
