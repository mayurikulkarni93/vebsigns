import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from "lucide-react";


const OPENAIOurExpertise = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section className="bg-gradient-to-b from-white to-blue-50 px-4 sm:px-6 md:px-8">
                <div className="max-w-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                    {/* Left Side: Image with Chat Bubbles */}
                    <div className="relative flex justify-center md:justify-start mt-8 md:mt-12">
                        <img
                            src="/assets/HomePage/home page tablet-01.png"
                            alt="Tablet with hands"
                            className="object-contain w-full max-w-[400px] md:max-w-[650px] h-auto md:h-[590px]"
                        />

                        {/* Chat Bubble 1 */}
                        <div className="absolute left-85 top-85 rotate-[-10deg] hidden sm:block ">
                            <img
                                src="/assets/HomePage/icons8-chat-gpt-120.png"
                                alt="GPT Icon"
                                className="w-12 h-12 md:w-20 md:h-20 z-20"
                            />

                        </div>

                        {/* Chat Bubble 2 */}
                        <div className="absolute left-10 top-1 rotate-[-10deg] ">
                            <img
                                src="/assets/HomePage/icons8-ai-chatting-140.png"
                                alt="Discord Icon"
                                className="w-12 h-12 md:w-20 md:h-20 z-20"
                            />

                        </div>
                        <div className="absolute left-89/120 top-10 rotate-[10deg] ">
                            <img
                                src="/assets/HomePage/icons8-canva-app-100.png"
                                alt="Canva Icon"
                                className="w-12 h-12 md:w-20 md:h-20 z-20"
                            />

                        </div>
                    </div>

                    {/* Right Side: Text and Buttons */}
                    <div className="mt-8 md:mt-0">
       <img src="/assets/HomePage/clapping.svg" alt="" className="w-12 h-12 md:w-16 md:h-16" />

                        <h3 className="font-extrabold uppercase mt-4 text-2xl sm:text-3xl md:text-6xl text-[#15042E]">
                            Core Features of OpenAI Consulting
                        </h3>
                        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700">
                            Our services apply powerful AI models to improve communication, automation, and innovation. Key features include Conversational AI, Content Creation, Code Assistance, and Knowledge Automation.

                        </p>

                        {/* Services Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-5">
                            <div className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto group px-3 py-2 rounded-full bg-white text-blue-700 flex items-center gap-2 text-sm md:text-base transition-colors duration-300 ease-in-out">
                                    {/* SVG background wrapper */}
                                    <div className="bg-[#6FE4FC] group-hover:bg-[#F3F945] transition-colors duration-300 ease-in-out h-10 w-10 rounded-full flex items-center justify-center">
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24"
                                            width="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                strokeLinecap="square"
                                                transform="translate(0.5 0.5)"
                                                fill="#15042E"
                                                strokeLinejoin="miter"
                                                className="nc-icon-wrapper"
                                                strokeMiterlimit="10"
                                            >
                                                <path
                                                    d="M19,23V16.7a8.97,8.97,0,0,0,3-6.569A9.1,9.1,0,0,0,13.262,1,9,9,0,0,0,4,10v1L2,16l2,1v4a2,2,0,0,0,2,2h4a5,5,0,0,0,5-5V13"
                                                    fill="none"
                                                    stroke="#15042E"
                                                    strokeWidth="1"
                                                ></path>
                                                <circle
                                                    cx="15"
                                                    cy="10"
                                                    r="3"
                                                    fill="none"
                                                    stroke="#15042E"
                                                    strokeWidth="1"
                                                    data-color="color-2"
                                                ></circle>
                                            </g>
                                        </svg> */}
                                        <img className="w-[24px]" src="/assets/Open/page 4-02.svg" alt="" />

                                    </div>

                                    {/* Text that changes color */}
                                    <span className=" text-[#15042E] group-hover:text-blue-700 transition-colors duration-300 ease-in-out">
                                        Conversational AI
                                    </span>
                                </button>
                            </div>


                            <div className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto group px-3 py-2 rounded-full bg-white text-blue-700 flex items-center gap-2 text-sm md:text-base transition-colors duration-300 ease-in-out">
                                    {/* SVG wrapper */}
                                    <div className="bg-[#6FE4FC] group-hover:bg-[#F3F945] transition-colors duration-300 ease-in-out h-10 w-10 rounded-full flex items-center justify-center">
                                        {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="24"
                                            width="24"
                                            viewBox="0 0 24 24"
                                        >
                                            <title>open ai</title>
                                            <g
                                                strokeLinecap="square"
                                                transform="translate(0.5 0.5)"
                                                fill="#15042E"
                                                strokeLinejoin="miter"
                                                className="nc-icon-wrapper"
                                                strokeMiterlimit="10"
                                            >
                                                <path
                                                    d="M12,15.079l-6.605-3.813V5.654c0-2.432,1.972-4.403,4.403-4.403h0c1.627,0,3.047,.882,3.81,2.194"
                                                    fill="none"
                                                    stroke="#15042E"
                                                    strokeWidth="1"
                                                    strokeLinecap="butt"
                                                ></path>
                                                <path
                                                    d="M9.333,13.54V5.913s4.86-2.806,4.86-2.806c2.106-1.216,4.799-.494,6.015,1.612h0c.813,1.409,.76,3.08,.005,4.396"
                                                    fill="none"
                                                    stroke="#15042E"
                                                    strokeWidth="1"
                                                    strokeLinecap="butt"
                                                ></path>
                                                <path
                                                    d="M9.333,10.46l6.605-3.813,4.86,2.806c2.106,1.216,2.828,3.909,1.612,6.015h0c-.813,1.409-2.287,2.198-3.805,2.202"
                                                    fill="none"
                                                    stroke="#15042E"
                                                    strokeWidth="1"
                                                    strokeLinecap="butt"
                                                ></path>
                                                <path
                                                    d="M12,8.921l6.605,3.813v5.612c0,2.432-1.972,4.403-4.403,4.403h0c-1.627,0-3.047-.882-3.81-2.194"
                                                    fill="none"
                                                    stroke="#15042E"
                                                    strokeWidth="1"
                                                    strokeLinecap="butt"
                                                ></path>
                                                <path
                                                    d="M14.667,10.46v7.627s-4.86,2.806-4.86,2.806c-2.106,1.216-4.799,.494-6.015-1.612h0c-.813-1.409-.76-3.08-.005-4.396"
                                                    fill="none"
                                                    stroke="#15042E"
                                                    strokeWidth="1"
                                                    strokeLinecap="butt"
                                                ></path>
                                                <path
                                                    d="M14.667,13.54l-6.605,3.813-4.86-2.806c-2.106-1.216-2.828-3.909-1.612-6.015h0c.813-1.409,2.287-2.198,3.805-2.202"
                                                    fill="none"
                                                    stroke="#15042E"
                                                    strokeWidth="1"
                                                    strokeLinecap="butt"
                                                ></path>
                                            </g>
                                        </svg> */}
                                        <img className="w-[24px]" src="/assets/Open/page 4-08.svg" alt="" />

                                    </div>

                                    {/* Text with hover color */}
                                    <span className=" text-[#15042E] group-hover:text-blue-700 transition-colors duration-300 ease-in-out">
                                        Content Creation
                                    </span>
                                </button>
                            </div>

                            <div className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto group px-3 py-2 rounded-full bg-white text-blue-700 flex items-center gap-2 text-sm md:text-base transition-colors duration-300 ease-in-out">
                                    {/* SVG wrapper */}
                                    <div className="bg-[#6FE4FC] group-hover:bg-[#F3F945] transition-colors duration-300 ease-in-out h-10 w-10 rounded-full flex items-center justify-center">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>content delivery</title><g stroke-linecap="square" transform="translate(0.5 0.5)" fill="#15042E" stroke-linejoin="miter" class="nc-icon-wrapper" stroke-miterlimit="10"><line x1="7.891" y1="4.664" x2="4.109" y2="10.336" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" data-color="color-2" stroke-linecap="butt"></line><line x1="19.154" y1="7.231" x2="10.847" y2="3.769" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" data-color="color-2" stroke-linecap="butt"></line><line x1="19.527" y1="9.35" x2="10.473" y2="17.65" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" data-color="color-2" stroke-linecap="butt"></line><line x1="20.696" y1="9.975" x2="19.304" y2="19.026" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" data-color="color-2" stroke-linecap="butt"></line><line x1="5" y1="11.556" x2="19" y2="8.444" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" data-color="color-2" stroke-linecap="butt"></line><circle cx="3" cy="12" r="2" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" stroke-linecap="butt"></circle><circle cx="21" cy="8" r="2" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" stroke-linecap="butt"></circle><circle cx="9" cy="3" r="2" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" stroke-linecap="butt"></circle><circle cx="9" cy="19" r="2" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" stroke-linecap="butt"></circle><circle cx="19" cy="21" r="2" fill="none" stroke="#15042E" stroke-width="1" data-cap="butt" stroke-linecap="butt"></circle></g></svg> */}
                                        <img className="w-[24px]" src="/assets/Open/page 4-01.svg" alt="" />

                                    </div>

                                    {/* Text with hover color */}
                                    <span className=" text-[#15042E] group-hover:text-blue-700 transition-colors duration-300 ease-in-out">
                                        Code Assistance
                                    </span>
                                </button>
                            </div>
                            <div className="w-full sm:w-auto">
                                <button className="w-full sm:w-auto group px-3 py-2 rounded-full bg-white text-blue-700 flex items-center gap-2 text-sm md:text-base transition-colors duration-300 ease-in-out">
                                    {/* SVG wrapper */}
                                    <div className="bg-[#6FE4FC] group-hover:bg-[#F3F945] transition-colors duration-300 ease-in-out h-10 w-10 rounded-full flex items-center justify-center">
                                        {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>menu dots</title><g stroke-linecap="square" transform="translate(0.5 0.5)" fill="#15042E" stroke-linejoin="miter" class="nc-icon-wrapper" stroke-miterlimit="10"><circle data-color="color-2" fill="none" stroke="#15042E" stroke-width="1" cx="12" cy="12" r="2"></circle><circle fill="none" stroke="#15042E" stroke-width="1" cx="3" cy="12" r="2"></circle><circle fill="none" stroke="#15042E" stroke-width="1" cx="21" cy="12" r="2"></circle></g></svg> */}
                                        <img className="w-[24px]" src="/assets/Open/page 4-04.svg" alt="" />

                                    </div>

                                    {/* Text with hover color */}
                                    <span className=" text-[#15042E] group-hover:text-blue-700 transition-colors duration-300 ease-in-out">
                                        Knowledge Automation
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-gray-300 border mt-6 md:mt-10"></div>

                        {/* Free Consultation Link */}
                        <div
                            onClick={() => navigate("/contact")}
                            className="mt-6 flex items-center justify-center sm:justify-start gap-2 cursor-pointer"
                        >
                            <p className="text-sm sm:text-base md:text-lg text-[#15042E] hover:text-blue-500 hover:underline">
                                Have a project idea and need Free Consultation
                            </p>
                            <span className="bg-white hover:bg-blue-500 hover:text-white text-blue-500 rounded-full p-1 flex items-center justify-center h-6 w-6">
                                <ArrowRight />
                            </span>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default OPENAIOurExpertise
