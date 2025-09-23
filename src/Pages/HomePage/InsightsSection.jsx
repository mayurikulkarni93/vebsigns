import React from "react";
import BlogGrid from "../Blog/BlogGrid";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        category: "Data and AI",
        title: "Build trustworthy graph neural networks",
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/b6.jpg", // Replace with your image
        featured: true,
    },
    {
        category: "Data and AI",
        title: "How can we ensure responsible AI in marketing?",
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/b5.jpg", // Replace
    },
    {
        category: "AI Theory",
        title: "The role of LLM monitoring in today’s landscape",
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/b4.jpg", // Replace
    },
    {
        category: "Data and AI",
        title: "Insights and opportunities in an AI world",
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/b3.jpg", // Replace
    },
    {
        category: "Digital Experience",
        title: "Making content AI-Friendly: A Practical Guide",
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/b2.jpg", // Replace
    },
    {
        category: "Digital Experience",
        title: "Making content AI-Friendly: A Practical Guide",
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/b2.jpg", // Replace
    },
    {
        category: "Digital Experience",
        title: "Making content AI-Friendly: A Practical Guide",
        image:
            "https://live.21lab.co/hanotek/wp-content/uploads/2024/11/b2.jpg", // Replace
    },
];

const InsightsSection = () => {
    return (
        <section className="relative bg-gradient-to-b from-pink-50 to-orange-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-blue-500 uppercase tracking-wide text-xl font-semibold">
                        Our Blog
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
                        Insights From Our Experts
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm md:text-base">
                        We fuel you with our insights, corporate news, case studies, updates
                        on software, innovations, technologies, and business models.{" "}
                        <Link to="/blog" className="text-blue-500 underline">
                            View all Blogs
                        </Link>
                    </p>
                </div>

                {/* Grid */}
                <BlogGrid/>
                {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:row-span-2">
                        {blogPosts
                            .filter((post) => post.featured)
                            .map((post, index) => (
                                <div
                                    key={index}
                                    className="relative rounded-xl overflow-hidden shadow-lg group mb-6 lg:mb-0"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
                                        <p className="text-sm md:text-base text-white">{post.category}</p>
                                        <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-white">
                                            {post.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:col-span-2">
                        {blogPosts
                            .filter((post) => !post.featured)
                            .map((post, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-300"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-40 sm:h-48 md:h-56 object-cover"
                                    />
                                    <div className="p-4">
                                        <p className="text-sm md:text-base text-gray-500">{post.category}</p>
                                        <h3 className="text-lg md:text-xl font-semibold">{post.title}</h3>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div> */}
            </div>
        </section>
    );

};

export default InsightsSection;
