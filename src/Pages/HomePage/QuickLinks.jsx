import React from "react";

const QuickLinks = () => {
    return (
        <section className="bg-yellow-300 py-3 ">
            <div className=" h-20 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-lg text-black">
                {/* Left Side */}
                <p className="font-medium mb-2 sm:mb-0">
                    Quick links to the information:
                </p>

                {/* Right Side (Links) */}
                <nav className="flex flex-wrap gap-6">
                    <a href="#about" className="hover:underline">
                        About us
                    </a>
                    <a href="#stories" className="hover:underline">
                        Customer stories
                    </a>
                    <a href="#why-us" className="hover:underline">
                        Why choose us
                    </a>
                    <a href="#contact" className="hover:underline">
                        Contact us
                    </a>
                </nav>
            </div>
        </section>
    );
};

export default QuickLinks;
