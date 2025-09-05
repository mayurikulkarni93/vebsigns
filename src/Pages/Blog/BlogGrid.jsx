import { Plus } from "lucide-react";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogPost";

const BlogGrid = () => {
    return (

        <section className="bg-gradient-to-br from-purple-50 to-orange-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {blogPosts.map((post, index) => (
                        <Link to={`/blog/${post.slug}`} key={post.id}>

                            <div
                                key={post.id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 relative"
                            >
                                {/* Blog Image */}
                                <div className="relative w-full">
                                    <svg
                                        key={index}
                                        viewBox="0 0 350 180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-full h-auto" // 👈 responsive SVG scaling
                                        preserveAspectRatio="xMidYMid slice"
                                    >
                                        <defs>
                                            <pattern
                                                id={`imgPattern-${index}`}
                                                patternUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                            >
                                                <image
                                                    href={post.image}
                                                    x="0"
                                                    y="0"
                                                    width="350"
                                                    height="180"
                                                    preserveAspectRatio="xMidYMid slice"
                                                />
                                            </pattern>
                                        </defs>

                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M350 15C350 6.71573 343.284 0 335 0H15C6.71573 0 0 6.71573 0 15V165C0 173.284 6.71573 180 15 180H275C283.284 180 290 173.284 290 165V135C290 126.716 296.716 120 305 120H335C343.284 120 350 113.284 350 105V15Z"
                                            fill={`url(#imgPattern-${index})`}
                                        />
                                    </svg>

                                    <button
                                        className="absolute bottom-0 right-1 bg-yellow-300 rounded-full p-3 shadow-md 
                hover:bg-[#1B4BF0] hover:text-white transition-colors duration-300 
                group"
                                    >
                                        <Plus
                                            className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-180"
                                            strokeWidth={1.5}
                                        />
                                    </button>
                                </div>


                                {/* Blog Content */}
                                <div className="mt-4">
                                    <p className="text-sm text-blue-600 uppercase font-semibold">
                                        {post.category.join(", ")}
                                    </p>
                                    <h3 className="text-lg font-semibold mt-1">{post.title}</h3>
                                    <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>

                                    {/* Author Info */}
                                    <div className="flex items-center mt-4 text-sm text-gray-500">
                                        <img
                                            src="/assets/HomePage/Author.png"
                                            alt="author"
                                            className="w-6 h-6 rounded-full mr-2"
                                        />
                                        <span>by {post.author}</span>
                                        <span className="ml-2">on {post.date}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default BlogGrid;
