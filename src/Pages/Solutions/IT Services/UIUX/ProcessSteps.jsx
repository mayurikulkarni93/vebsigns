import { CheckCircle2 } from "lucide-react";

const processSteps = [
  "Discovery & Research",
  "Strategy & Planning",
  "Design & Prototyping",
  "Development",
  "Testing & Launch",
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#0D003B] to-[#101C4E]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h3 className="text-4xl text-white font-bold mb-14 text-gray-900">
          Our Process
        </h3>

        {/* Steps */}
        <div className="relative flex flex-col md:flex-row md:justify-between md:items-start">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30 rounded-full"></div>

          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center md:w-1/5 group"
            >
              {/* Number circle */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold shadow-lg transition-transform duration-300 group-hover:scale-110">
                {index + 1}
              </div>

              {/* Card */}
              <div className="mt-6 bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-4 w-40 md:w-auto transition duration-300 hover:shadow-2xl">
                <CheckCircle2 className="mx-auto mb-2 text-blue-500" size={28} />
                <p className="font-semibold text-gray-800 text-sm md:text-base">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mt-12 text-white max-w-3xl mx-auto text-lg">
          A lean, iterative process that ensures every decision aligns with your
          <span className="font-semibold text-blue-600"> business goals</span>.
        </p>
      </div>
    </section>
  );
}
