// import React, { useState } from "react";
// import AIMLConsulting from "./Solutions/AIML"; // Import your component

// // Define components for each section
// const components = [
//   AIMLConsulting,
//   () => <div className="p-6">Data Science and Data Analytics Component</div>,
//   () => <div className="p-6">OpenAI Consulting Services Component</div>,
//   () => <div className="p-6">Gen AI for Business Transformation Component</div>,
//   () => <div className="p-6">The Comprehensive AI Ecosystem Component</div>,
// ];

// const services = [
//   { title: "AI/ML STRATEGY AND CONSULTING" },
//   { title: "DATA SCIENCE AND DATA ANALYTICS" },
//   { title: "OPENAI CONSULTING SERVICES" },
//   { title: "GEN AI FOR BUSINESS TRANSFORMATION" },
//   { title: "THE COMPREHENSIVE AI ECOSYSTEM" },
// ];

// const Accordion = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//   <section className="w-full mx-auto py-10 px-4">
//     <h2 className="text-center text-lg text-gray-500 mb-4">
//       Capacitate your business with our tech expertise
//     </h2>

//     <div className="space-y-2">
//       {services.map((service, index) => {
//         const Component = components[index];

//         // Calculate shade (start from 50 and go darker by 50 each step)
//         const bgShades = [
//           "from-white to-gray-50",
//           "from-gray-50 to-gray-100",
//           "from-gray-100 to-gray-200",
//           "from-gray-200 to-gray-300",
//           "from-gray-300 to-gray-400",
//         ];
//         const bgGradient = bgShades[index % bgShades.length]; // cycle if >5

//         return (
//           <div
//             key={index}
//             className="border-b border-gray-200 rounded-lg overflow-hidden"
//           >
//             {/* Accordion Header */}
//             <button
//               onClick={() => toggleAccordion(index)}
//               className={`w-full flex justify-between items-center px-6 py-4 text-left bg-gradient-to-r ${bgGradient} hover:brightness-105 transition`}
//             >
//               <span className="text-lg font-semibold text-gray-900">
//                 {service.title}
//               </span>
//               <span className="text-2xl font-bold text-gray-700">
//                 {openIndex === index ? "−" : "+"}
//               </span>
//             </button>

//             {/* Content Section */}
//             <div
//               className={`transition-all duration-300 ease-in-out overflow-hidden ${
//                 openIndex === index ? "max-h-[1000px] p-0 bg-white" : "max-h-0"
//               }`}
//             >
//               {openIndex === index && <Component />}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </section>
// );

// };

// export default Accordion;


import React, { useState } from "react";
import AIMLConsulting from "./OurSoftware"; // Import your component

// Define components for each section
const components = [
  AIMLConsulting,
  AIMLConsulting,
  AIMLConsulting,
  AIMLConsulting,
  AIMLConsulting,
//   () => <div className="p-4 sm:p-6">Data Science and Data Analytics Component</div>,
//   () => <div className="p-4 sm:p-6">OpenAI Consulting Services Component</div>,
//   () => <div className="p-4 sm:p-6">Gen AI for Business Transformation Component</div>,
//   () => <div className="p-4 sm:p-6">The Comprehensive AI Ecosystem Component</div>,
];

const services = [
  { title: "AI/ML STRATEGY AND CONSULTING" },
  { title: "DATA SCIENCE AND DATA ANALYTICS" },
  { title: "OPENAI CONSULTING SERVICES" },
  { title: "GEN AI FOR BUSINESS TRANSFORMATION" },
  { title: "THE COMPREHENSIVE AI ECOSYSTEM" },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full mx-auto py-8 sm:py-10 px-3 sm:px-4 md:px-6">
      <h2 className="text-center text-base sm:text-lg md:text-xl text-gray-500 mb-4 px-2">
        Capacitate your business with our tech expertise
      </h2>

      <div className="space-y-2">
        {services.map((service, index) => {
          const Component = components[index];

          // Shade per item
          const bgShades = [
            "from-white to-gray-50",
            "from-gray-50 to-gray-100",
            "from-gray-100 to-gray-200",
            "from-gray-200 to-gray-300",
            "from-gray-300 to-gray-400",
          ];
          const bgGradient = bgShades[index % bgShades.length];

          return (
            <div
              key={index}
              className="border-b border-gray-200 rounded-lg overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className={`w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 text-left bg-gradient-to-r ${bgGradient} hover:brightness-105 transition`}
              >
                <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">
                  {service.title}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-gray-700">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Content Section */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-[1000px] p-0 bg-white" : "max-h-0"
                }`}
              >
                {openIndex === index && <Component />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Accordion;
