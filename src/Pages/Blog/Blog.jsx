import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import BlogGrid from "./BlogGrid";

const Blog = () => {
  return (
    <div>
    <Header/>

    <section className="relative bg-gradient-to-r from-[#0b0225] via-[#1a0f3f] to-[#0b0225] text-white py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Small Heading */}
        <p className="text-blue-400 uppercase tracking-wide font-semibold text-3xl">
          Welcome Our Blog
        </p>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl uppercase font-extrabold mt-4">
          Insights From Our Experts
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 mt-4 text-base">
          Stay on top AI development trends to move your business forward.
        </p>

        {/* Scroll Down Badge */}
        
      </div>
    </section>

    <BlogGrid/>
    <Footer/>
    </div>
  );
};

export default Blog;
