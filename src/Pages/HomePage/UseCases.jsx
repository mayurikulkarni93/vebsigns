import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = value / (duration / 30); // updates every 30ms
        const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
                start = value;
                clearInterval(counter);
            }
            setCount(Math.floor(start));
        }, 20);

        return () => clearInterval(counter);
    }, [value, duration]);

    return <div className="text-7xl font-normal text-blue-600">{count}<span className="text-4xl">%</span> </div>;
};


const useCaseData = [
    {
        id: 'technology',
        title: 'IT Solutions',
        description: 'Big or small, we’ve got you covered with cutting-edge IT solutions.',
        percentage: 85,
        normalImage: '/assets/HomePage/b5.jpg',
        hoverImage: '/assets/HomePage/open-ai-1.png',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>vr headset</title><g stroke-linecap="round" transform="translate(0.5 0.5)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="16" y1="22" x2="48" y2="22" fill="none" stroke="#f3f945" stroke-width="1" data-color="color-2"></line><path d="M49.216,14a18.972,18.972,0,0,0-34.432,0" fill="none" stroke="#1B4BF0" stroke-width="1" data-cap="butt"></path><path d="M16.258,37C19.589,44.062,25.223,49,32,49s12.411-4.938,15.742-12" fill="none" stroke="#1B4BF0" stroke-width="1" data-cap="butt"></path><path d="M56,33V18a4,4,0,0,0-4-4H12a4,4,0,0,0-4,4V33a4,4,0,0,0,4,4H25l3.105-4.868a4.62,4.62,0,0,1,7.79,0L39,37H52A4,4,0,0,0,56,33Z" fill="none" stroke="#f3f945" stroke-width="1" data-color="color-2"></path><path d="M59,61,46.859,57.627A8,8,0,0,1,41,49.919V45.568" fill="none" stroke="#1B4BF0" stroke-width="1" data-cap="butt"></path><path d="M23,45.958v3.961a8,8,0,0,1-5.859,7.708L5,61" fill="none" stroke="#1B4BF0" stroke-width="1" data-cap="butt"></path></g></svg>

        ),

        content: {
            link: "/use-cases", // JSON link
            hoverBgColor: "rgba(0,0,0,0.5)",
            useCaseText: "Learn how we helped our clients to optimize their internal processes and prevent cost overruns.",
            percentageText: "Reported that their online experience improved",
            cardTitle: "IT Infrastructure & Security",
            cardDescription: "Designed and implemented robust IT systems, ensuring secure, scalable, and efficient technology solutions for businesses."
        }
    },
    {
        id: 'finance',
        title: 'IoT',
        description: 'Connecting devices, collecting data, optimizing operations.',
        percentage: 75,
        normalImage: '/assets/HomePage/b5.jpg',
        hoverImage: '/assets/HomePage/open-ai-1.png',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>board 29</title><g stroke-linecap="round" transform="translate(0.5 0.5)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><polyline data-cap="butt" data-color="color-2" fill="none" stroke="#f3f945" stroke-width="1" points="42,27 32,27 32,17 "></polyline><circle data-color="color-2" fill="none" stroke="#f3f945" stroke-width="1" cx="32" cy="27" r="10"></circle><line fill="none" stroke="#1B4BF0" stroke-width="1" x1="32" y1="48" x2="32" y2="60"></line><line data-cap="butt" fill="none" stroke="#1B4BF0" stroke-width="1" x1="26" y1="48" x2="14" y2="62"></line><line data-cap="butt" fill="none" stroke="#1B4BF0" stroke-width="1" x1="38" y1="48" x2="50" y2="62"></line><polyline fill="none" stroke="#1B4BF0" stroke-width="1" points="56,42 56,7 8,7 8,42 "></polyline><line fill="none" stroke="#1B4BF0" stroke-width="1" x1="62" y1="48" x2="2" y2="48"></line><line fill="none" stroke="#1B4BF0" stroke-width="1" x1="32" y1="7" x2="32" y2="2"></line></g></svg>

        ),
        content: {
            link: "/use-cases", // JSON link
            hoverBgColor: "rgba(0,0,0,0.5)",
            useCaseText: "Discover how we enabled clients to connect devices, collect real-time data, and optimize operations through IoT solutions.",
            percentageText: "Reported improved operational efficiency",
            cardTitle: "Smart IoT Solutions",
            cardDescription: "Developed connected devices and systems that monitor, automate, and enhance business processes for smarter decision-making."
        }

    },
    {
        title: 'AI/ML',
        description: 'Intelligent solutions to transform your business.',
        percentage: 90,
        normalImage: '/assets/HomePage/b5.jpg',
        hoverImage: '/assets/HomePage/open-ai-1.png',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64">
                <title>hospital 34</title>
                <g stroke-linecap="round" transform="translate(0.5 0.5)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper">
                    <circle fill="none" stroke="#1B4BF0" stroke-width="1" cx="32" cy="32" r="30"></circle>
                    <polygon data-color="color-2" fill="none" stroke="#f3f945" stroke-width="1" points="48,26 38,26 38,16 26,16 26,26 16,26 16,38 26,38 26,48 38,48 38,38 48,38"></polygon>
                </g>
            </svg>
        ),
        content: {
            link: "/use-cases", // JSON link
            hoverBgColor: "rgba(0,0,0,0.5)",
            useCaseText: "We leverage AI and ML to create intelligent systems that improve decision-making and operational efficiency.",
            percentageText: "Reported improved business outcomes with AI solutions",
            cardTitle: "AI & ML Solutions",
            cardDescription: "Smart algorithms and predictive models to optimize processes and enhance data-driven decisions."
        }
    },
    {
        id: 'industry4.0',
        title: 'Industry 4.0',
        description: 'Smart manufacturing and connected systems for modern industries.',
        percentage: 82,
        normalImage: '/assets/HomePage/b5.jpg',
        hoverImage: '/assets/HomePage/open-ai-1.png',
        icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64">
                <title>visa</title>
                <g stroke-linecap="round" transform="translate(0.5 0.5)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper">
                    <polygon data-color="color-2" data-stroke="none" fill="#f3f945" points="26.219,37.828 29.386,37.828 31.369,26.202 28.2,26.202 " stroke-linejoin="miter" stroke="none"></polygon>
                    <path data-color="color-2" data-stroke="none" fill="#f3f945" d="M37.758,30.87c-1.108-0.538-1.786-0.897-1.779-1.441c0-0.483,0.574-1,1.815-1 c1.015-0.016,1.833,0.191,2.656,0.58l0.43-2.52C40.251,26.253,39.267,26,38.039,26c-3.131,0-5.337,1.577-5.355,3.837 c-0.018,1.67,1.575,2.602,2.777,3.158c1.233,0.57,1.648,0.933,1.642,1.442c-0.008,0.779-0.985,1.135-1.896,1.135 c-1.406,0-2.115-0.217-3.391-0.795l-0.445,2.603c0.74,0.324,2.109,0.606,3.53,0.62c3.331,0,5.493-1.559,5.518-3.972 C40.43,32.706,39.586,31.699,37.758,30.87z" stroke-linejoin="miter" stroke="none"></path>
                    <path data-color="color-2" data-stroke="none" fill="#f3f945" d="M49.005,26.213h-2.449c-0.759,0-1.326,0.207-1.659,0.964l-4.706,10.654h3.327 c0,0,0.544-1.433,0.667-1.747c0.364,0,3.596,0.005,4.058,0.005c0.095,0.407,0.386,1.742,0.386,1.742h2.94L49.005,26.213z M45.097,33.706c0.131-0.335,1.425-3.656,1.683-4.359c0.428,2.004,0.011,0.06,0.948,4.359H45.097z" stroke-linejoin="miter" stroke="none"></path>
                    <path data-color="color-2" data-stroke="none" fill="#f3f945" d="M23.561,26.211l-3.102,7.928l-0.331-1.611l-1.111-5.342 c-0.192-0.736-0.748-0.956-1.436-0.981h-5.11l-0.04,0.242c1.243,0.301,2.354,0.735,3.328,1.275l2.817,10.097l3.353-0.004 l4.989-11.603H23.561z" stroke-linejoin="miter" stroke="none"></path>
                    <path fill="none" stroke="#1B4BF0" stroke-width="1" d="M2,50V14c0-2.2,1.8-4,4-4 h52c2.2,0,4,1.8,4,4v36c0,2.2-1.8,4-4,4H6C3.8,54,2,52.2,2,50z"></path>
                </g>
            </svg>
        ),
        content: {
            link: "/use-cases", // JSON link
            hoverBgColor: "rgba(0,0,0,0.5)",
            useCaseText: "Implemented smart manufacturing systems and IoT-driven analytics for better production efficiency.",
            percentageText: "Reported higher operational productivity",
            cardTitle: "Smart Manufacturing & Analytics",
            cardDescription: "Connected systems and AI-powered insights to optimize industrial processes and decision-making."
        }
    }
];
export default function UseCases() {

    const [activeTab, setActiveTab] = useState(useCaseData[0].id);

    const activeContent = useCaseData.find(item => item.id === activeTab);
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {/* Heading */}
                <p className="text-xl font-semibold text-blue-600 tracking-widest uppercase">
                    Powerful Use Cases
                </p>
                <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 uppercase">
                    In Your Industry
                </h2>
                <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
                    We’ve built an AI-driven platform for launching business transformation.
                    <br />
                    Three ways to make your data do more. Ready for takeoff?
                </p>
            </div>

            {/* Content */}
            <div className="relative mt-12 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Panel */}
                <div className="bg-[#0B0225] text-white rounded-2xl lg:rounded-l-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden z-0">
                    {useCaseData.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex items-center space-x-4 w-full sm:w-[375px] p-4 rounded-xl cursor-pointer transition-colors duration-300 
          ${activeTab === item.id
                                    ? "bg-[#20103D]"
                                    : "hover:bg-[#20103D]/50"}`}
                        >
                            <span
                                className={`${activeTab === item.id ? "text-blue-400" : "text-gray-400"
                                    }`}
                            >
                                {item.icon()}
                            </span>
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base md:text-lg">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-300">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Panel */}
                <div className="bg-[#F0FAFF] rounded-2xl lg:rounded-3xl lg:right-45 p-6 sm:p-8 w-full lg:w-[760px] flex flex-col md:flex-row justify-between items-center z-10 shadow-lg relative">
                    {/* Left Side */}
                    <div
                        className="flex-1 md:pr-6 lg:pr-8 mb-6 md:mb-0 text-center md:text-left"
                        style={{ lineHeight: "30px" }}
                    >
                        <h4 className="font-semibold text-gray-800 mb-2">Use case:</h4>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            {activeContent.content.useCaseText}
                        </p>
                        <hr className="my-4 border-gray-300" />
                        <AnimatedCounter value={activeContent.percentage} duration={1500} />
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            {activeContent.content.percentageText}
                        </p>
                        <hr className="my-4 border-gray-300" />
                        <p className="font-medium text-gray-800 text-sm sm:text-base">
                            Have a project idea and need Free Consultation
                        </p>
                    </div>

                    {/* Right Side - Card */}
                    <div
                        onClick={() => navigate(activeContent.content.link)}
                        className="w-full sm:w-[250px] group cursor-pointer flex-shrink-0"
                    >
                        <div className="flex flex-col bg-white rounded-xl shadow-md h-full relative overflow-hidden transition-transform duration-300 ease-in-out hover:rotate-[3deg] hover:-translate-y-2 z-10">
                            <div className="relative w-full h-40 sm:h-48 group">
                                <img
                                    src={activeContent.normalImage}
                                    alt={activeContent.content.cardTitle}
                                    className="w-full h-full object-cover rounded-t-xl"
                                />
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
                                    style={{ backgroundColor: activeContent.content.hoverBgColor }}
                                ></div>
                                <img
                                    src={activeContent.hoverImage}
                                    alt={`${activeContent.content.cardTitle} hover`}
                                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"
                                />
                            </div>

                            <div className="p-4 flex-1 text-center md:text-left">
                                <h5 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base md:text-lg">
                                    {activeContent.content.cardTitle}
                                </h5>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    {activeContent.content.cardDescription}
                                </p>
                            </div>
                        </div>
                        <div className="text-[13px] sm:text-[14px] md:text-[16px] text-center text-[#15042E] bg-[#F3F945] w-[160px] sm:w-[180px] md:w-[200px] h-[45px] sm:h-[50px] md:h-[60px] flex items-center justify-center cursor-pointer transition-transform duration-300 ease-in-out box-border rounded-b-[8px] mx-auto -mt-[40px] sm:-mt-[50px] md:-mt-[65px] group-hover:translate-y-[35px] sm:group-hover:translate-y-[45px] z-0">
                            <a>Read full case</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}
