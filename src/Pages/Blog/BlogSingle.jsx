import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { useParams } from "react-router-dom";
import { blogPosts } from "./blogPost"; // Import posts or use centralized store
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaLink } from "react-icons/fa6";
import RelatedPost from "./RelatedPost";



const BlogSingle = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);
    const socials = [
        { icon: <FaFacebookF />, color: "bg-blue-600" },
        { icon: <FaXTwitter />, color: "bg-black" },
        { icon: <FaLinkedinIn />, color: "bg-blue-700" },
        { icon: <FaLink />, color: "bg-gray-500" },
    ];
    const { scrollY } = useViewportScroll();
    const y = useTransform(scrollY, [0, 300], [0, 300]); // adjust scroll range
    const renderContentBlock = (block, index) => {
        switch (block.type) {
            case "heading":
                return (
                    <h2
                        key={index}
                        className="text-2xl font-bold text-gray-900 my-4"
                        dangerouslySetInnerHTML={{ __html: block.content }}
                    />
                );

            case "paragraph":
                return (
                    <p
                        key={index}
                        className="text-lg leading-relaxed my-2"
                        dangerouslySetInnerHTML={{ __html: block.content }}
                    />
                );

            case "list":
                return (
                    <ul
                        key={index}
                        className="mt-6 space-y-3 text-lg"
                        dangerouslySetInnerHTML={{ __html: block.content }}
                    />
                );

            case "dropcap":
                return (
                    <p
                        key={index}
                        className="mt-8 text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: block.content }}
                    />
                );

            default:
                return null;
        }
    };


    if (!post) return <div>Blog post not found.</div>;
    return (
        <div>
            <Header />

            <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10">

                    {/* Left Content */}
                    <div className="bg-blue-600 text-white rounded-2xl p-8 flex flex-col justify-between md:w-1/2">
                        {/* Categories */}
                        <div className="flex gap-3 mb-4">
                            {post.category.map((cat, index) => (
                                <span
                                    key={index}
                                    className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mr-1"
                                >
                                    {cat}
                                </span>
                            ))}

                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                            {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="mt-4 text-sm opacity-90">
                            {post.excerpt}
                        </p>

                        {/* Author & Date */}
                        <div className="mt-6 flex items-center gap-2 text-sm">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt="Author"
                                className="w-6 h-6 rounded-full"
                            />
                            <p>
                                Posted by <span className="font-semibold">{post.author}</span> on{" "}
                                <span className="opacity-80">{post.date}</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative md:w-1/2">

                        <svg
                            viewBox="0 0 350 180"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-auto"
                            preserveAspectRatio="xMidYMid slice"
                            role="img"
                            aria-labelledby="title"
                        >
                            <title id="title">{post.title}</title>

                            <defs>
                                <pattern
                                    id="imgPattern"
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
                                fill="url(#imgPattern)"
                            />
                        </svg>

                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-6 py-16 flex gap-12">
                {/* Sidebar Socials */}
                <motion.div
                    className="hidden md:flex flex-col gap-5"
                    style={{ y }}
                >
                    {socials.map((item, index) => (
                        <motion.a
                            key={index}
                            href="#"
                            className={`w-12 h-12 flex items-center justify-center rounded-full text-white ${item.color}`}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Blog Content */}
                <div className="blog-content max-w-4xl mx-auto px-6 py-10 text-gray-800 space-y-6">
                    {post.content && post.content.map((block, index) => renderContentBlock(block, index))}
                </div>
            </section>
            <RelatedPost currentCategories={post.category} currentSlug={post.slug} />
            <Footer />
        </div>
    );
};

export default BlogSingle;
