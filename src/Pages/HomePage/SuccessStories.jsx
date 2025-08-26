import React, { useState } from "react";
import { Link } from "react-router-dom";

const successStories = [
    {
        title: "Face Recognition and Identification",
        description:
            "Pose tracking and error detection models for safe dumbbell workouts developed",
        image:
            "https://images.unsplash.com/photo-1595152772835-219674b2a8a6", // Replace with actual image
    },
    {
        title: "Smart AI-Generated Recipes",
        description:
            "A 20% higher customer retention rate within the 1st three months after deploy",
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/p5-768x503.jpg", // Replace with actual image
    },
    {
        title: "Solution for Retail Platform",
        description:
            "Improved decision-making process and sentiment accuracy by 91%",
        image:
            "https://images.unsplash.com/photo-1556745753-b2904692b3cd", // Replace with actual image
    },
];

const SuccessStories = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="relative bg-gradient-to-b from-[#0a0225] to-[#110a3c] py-16 md:py-20 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Heading */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 md:mb-12">
                    <div className="text-center md:text-left">
                        <p className="text-blue-400 uppercase font-semibold tracking-wide text-sm sm:text-base">
                            Our Customer
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
                            Success Stories
                        </h2>
                    </div>
                    <p className="text-gray-300 mt-4 md:mt-0 md:max-w-md text-base sm:text-lg text-center md:text-left">
                        Check out our AI case studies and learn how we helped our clients to
                        optimize their internal processes, boost efficiency and prevent cost
                        overruns.
                    </p>
                </div>

                {/* Cards */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={story.image}
                                alt={story.title}
                                className="w-full h-48 sm:h-56 object-cover"
                            />
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">{story.title}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{story.description}</p>
                            </div>
                        </div>
                    ))}
                    <div className="p-4 bg-yellow-400 sm:p-6 border-t border-gray-200 text-blue-600 font-semibold hover:underline cursor-pointer">
                        Hello
                    </div>
                </div> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {successStories.map((story, index) => (
                        <div
                            key={index}
                            className="group bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative"
                            onClick={() => setIsOpen(!isOpen)} // toggle on mobile/tablet
                        >
                            <img
                                src={story.image}
                                alt={story.title}
                                className="w-full h-48 sm:h-56 object-cover"
                            />
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                    {story.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    {story.description}
                                </p>
                            </div>

                            {/* Yellow bar */}
                            <Link
                                to="/case-study"
                                className={`absolute bottom-0 left-0 w-full bg-yellow-400 text-blue-600 font-semibold 
        text-center py-3 transition-transform duration-300 hover:underline
        ${isOpen ? "translate-y-0" : "translate-y-full"} 
        lg:translate-y-full lg:group-hover:translate-y-0`}
                            >
                                Read Case Study
                            </Link>
                        </div>
                    ))}
                </div>


                {/* Testimonial */}
                <div className="mt-12 md:mt-16 text-center">
                    <div className="bg-white/10 p-4 sm:p-6 md:p-8 rounded-xl max-w-3xl mx-auto">
                        <p className="text-base sm:text-lg md:text-xl italic leading-relaxed">
                            “They have helped exponentially expand & accelerate our pipeline &
                            have assisted in our rise as a global player in a short amount of
                            time”
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default SuccessStories;
