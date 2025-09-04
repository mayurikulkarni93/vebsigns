import React from "react";
import { FaBolt, FaChartLine, FaUserCheck } from "react-icons/fa";

const features = [
    {
        title: "Business Processes Automation",
        description:
            "Advanced AI models of automation streamline repetitive tasks, allowing your team to focus on high-value activities. AI technologies can handle routine processes with speed and accuracy: data entry, virtual assistant, customer service, etc.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="64"
                width="64"
                viewBox="0 0 64 64"
                className="w-12 h-12"
            >
                <title>auto flash 2</title>
                <g
                    strokeLinecap="round"
                    transform="translate(0.25 0.25)"
                    fill="#1B4BF0"
                    strokeLinejoin="round"
                    className="nc-icon-wrapper"
                >
                    <polygon
                        points="36 5 7 38 28 38 24 59 53 26 32 26 36 5"
                        fill="none"
                        stroke="#1B4BF0"
                        strokeWidth="1.5"
                    />
                    <path
                        data-color="color-2"
                        data-stroke="none"
                        d="M53.245,40.363h-3.3L43,59h3.2l1.816-5.154h7.1L56.965,59h3.224ZM48.9,51.23l1.676-4.836a28.213,28.213,0,0,0,1-3.415q.128.507.463,1.6t.527,1.6l1.74,5.052Z"
                        fill="#F3F945"
                        stroke="none"
                    />
                </g>
            </svg>
        ),
    },
    {
        title: "Improved Decision-Making",
        description:
            "AI algorithms analyze data to provide accurate insights, data augmentation, and predictive analytics. By using AI-based insights, businesses can make more informed decisions, follow market trends, and seize opportunities for growth.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>timeline</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="32" y1="2" x2="32" y2="62" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line><rect x="44" y="6" width="16" height="16" fill="none" stroke="#1B4BF0" stroke-width="1.5"></rect><line x1="38" y1="14" x2="32" y2="14" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line><rect x="44" y="42" width="16" height="16" fill="none" stroke="#1B4BF0" stroke-width="1.5"></rect><line x1="38" y1="50" x2="32" y2="50" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line><rect x="4" y="24" width="16" height="16" transform="translate(24 64) rotate(-180)" fill="none" stroke="#1B4BF0" stroke-width="1.5"></rect><line x1="26" y1="32" x2="32" y2="32" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line></g></svg>
        ),
    },
    {
        title: "Personalized Customer Experiences",
        description:
            "AI helps personalize interactions with customers using machine learning algorithms. Businesses can analyze behavior, preferences, and purchase history of each customer and get tailored recommendations, offers, and experiences to invest in brand identity.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>edit curves</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><path d="M9,50C43,50,27,8,61,8" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></path><polyline points="61 56 3 56 3 8" fill="none" stroke="#1B4BF0" stroke-width="1.5"></polyline></g></svg>
        ),
    },
    {
        title: "Cost Savings",
        description:
            "AI technologies reduce operational costs by automating tasks that would otherwise require manual intervention. AI streamlines processes and helps optimize resource allocation",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>wallet 44</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="22" x2="34" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="22" x2="22" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="22" x2="10" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="52" x2="34" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="22" x2="46" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="52" x2="46" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="52" x2="22" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="52" x2="10" y2="52"></line><circle data-stroke="none" fill="#1B4BF0" cx="48" cy="37" r="2" stroke-linejoin="miter" stroke="none"></circle><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M7,15c-2.761,0-5-2.239-5-5 v0c0-2.761,2.239-5,5-5h40v4"></path><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M58,31V15H7 c-2.761,0-5-2.239-5-5v41c0,4.418,3.582,8,8,8h48V43"></path><path data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" d="M62,43H48 c-3.314,0-6-2.686-6-6v0c0-3.314,2.686-6,6-6h14V43z"></path></g></svg>),
    },
    {
        title: "Security",
        description:
            "AI-powered cybersecurity solutions provide threat detection and defense against evolving cyber threats, saving sensitive data. AI mitigates risks and protects business assets from potential breaches and attacks",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>digital key</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><circle cx="16" cy="16" r="4" fill="none" stroke="#1B4BF0" stroke-width="1.5" data-cap="butt"></circle><circle cx="34" cy="57" r="4" fill="none" stroke="#1B4BF0" stroke-width="1.5" data-cap="butt"></circle><circle cx="52" cy="16" r="4" fill="none" stroke="#1B4BF0" stroke-width="1.5"></circle><polyline points="25 33 25 48 31.172 54.172" fill="none" stroke="#1B4BF0" stroke-width="1.5" data-cap="butt"></polyline><circle cx="56" cy="57" r="4" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></circle><path d="M42,45H37l-3-3V39H31L20.268,28.268a13.04,13.04,0,1,1,8-8L32,24H44l5.172-5.172" fill="none" stroke="#1B4BF0" stroke-width="1.5"></path><polyline points="56 53 56 48 45 37 42 37 42 34 37.064 29.064" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></polyline></g></svg>)
    },
];


const WhyChooseUs = () => {

    return (
        <section className="relative bg-[#0b0225] py-16 md:py-20 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Heading (Centered) */}
                <div className="text-center mb-12 md:mb-16">
                    <p className="text-blue-300 uppercase tracking-widest font-semibold text-sm sm:text-base md:text-3xl">
                        Why You Should
                    </p>
                    <h2 className="text-3xl uppercase sm:text-4xl md:text-7xl font-bold">
                        Choose Vebsigns
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Arrow */}
                    <div className="flex justify-center items-center relative">
                        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex justify-center items-center">
                            <img
                                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                                loading="lazy"
                                decoding="async"
                                src="https://live.21lab.co/hanotek/wp-content/uploads/2024/11/arrow3.svg"
                                alt="Arrow"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="text-center lg:text-left">
                        <div className="space-y-8 sm:space-y-10">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5"
                                >
                                    <div className="flex-shrink-0">{feature.icon}</div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm sm:text-base">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );


};

export default WhyChooseUs;
