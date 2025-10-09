import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import UseCaseGrid from "./UseCaseGrid";
import SEO from "../../Components/SEO";

export default function UseCase() {
  const images = [
    "/assets/HomePage/iiflFinance.svg",
    "/assets/HomePage/ALogo.svg",
    "/assets/HomePage/cricmath.svg",
    "/assets/HomePage/ONGCLogo.svg",
    "/assets/HomePage/goodgoodpiggy Logo.svg",
    "/assets/HomePage/jaguar (2).svg",
    "/assets/HomePage/TAT.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <SEO
        title="IT, IoT, AI & Automation Use Cases | Vebsigns Technologies"
        description="Explore real-world applications of IT, IoT, AI, and automation technologies across various industries. Discover how Vebsigns Technologies drives innovation, efficiency, and digital transformation through tailored solutions."
        keywords="IT use cases, IoT use cases, AI use cases, automation solutions, Vebsigns Technologies, industry applications, smart manufacturing, predictive maintenance, digital transformation"
        canonical="https://vebsigns.com/use-cases"
      />

      <Header />
      <section className="bg-gradient-to-r from-[#122D4D] via-[#15042E] via-[#241032] to-[#15042E] text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="bg-[#F3F945] p-2 rounded-md"></span>
              <p className="text-sm uppercase font-medium">Case Studies</p>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
              Real Projects, Real Impact <br className="hidden sm:block" />
              Driving Digital Transformation
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              Discover how <span className="text-white font-semibold">our IT & IoT solutions </span>
              helped businesses across industries streamline operations, improve efficiency, and unlock
              new opportunities. From smart automation to enterprise applications, our case studies
              highlight the measurable results we deliver.
            </p>
          </div>

          {/* Right Side Circle + Image */}
          <div className="flex justify-center md:left-40/100 items-center relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto lg:mx-0">
            {/* Rotating Circular Text */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
              <svg viewBox="0 0 300 300" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M150,150 m-120,0 a120,120 0 1,1 240,0 a120,120 0 1,1 -240,0"
                  />
                </defs>

                {/* Visible Circle Border */}
                <circle
                  cx="150"
                  cy="150"
                  r="130"
                  stroke="#F3F945"
                  strokeWidth="35"
                  fill="none"
                />

                {/* Rotating Text */}
                <text
                  fill="black"
                  fontSize="14"
                  fontWeight="bold"
                  textLength="754"
                  lengthAdjust="spacingAndGlyphs"
                >
                  <textPath href="#circlePath" startOffset="0">
                    • EXPLORE NOW • EXPLORE NOW • EXPLORE NOW • EXPLORE NOW
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Inner Image */}
            <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full overflow-hidden relative z-10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Portfolio"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <UseCaseGrid />
      <Footer />
    </div>
  );
}
