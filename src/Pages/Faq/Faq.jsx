import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";


const faqs = [
    {
        question: "What services does Vebsigns offer?",
        answer:
            "We provide IT, IoT, AI solutions, and digital marketing services to transform businesses.",
    },
    {
        question: "Which industries do you serve?",
        answer:
            "We work with retail, healthcare, finance, education, and other sectors.",
    },
    {
        question: "How experienced is your team?",
        answer:
            "Our team has delivered 80+ successful projects with 98% positive feedback.",
    },
    {
        question: "Do you provide custom AI solutions?",
        answer:
            "Yes, we develop AI applications tailored to your business needs.",
    },
    {
        question: "Can you help with digital marketing?",
        answer:
            "Absolutely, we offer SEO, social media, and content strategies for growth.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    // Counter for first target (5)
    useEffect(() => {
        const target = 5;
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 50);

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(counter);
            }
            setCount1(Math.floor(start));
        }, 50);

        return () => clearInterval(counter);
    }, []);

    // Counter for second target (85)
    useEffect(() => {
        const target = 85;
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 50);

        const counter = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(counter);
            }
            setCount2(Math.floor(start));
        }, 50);

        return () => clearInterval(counter);
    }, []);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-20 bg-gradient-to-b from-white to-purple-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Section Title */}
                <p className="text-blue-500 uppercase tracking-widest font-semibold text-[21px]">
                    FAQs
                </p>
                <h2 className="text-3xl md:text-5xl text-[#15042E] font-bold mb-4">
                    QUESTIONS & ANSWERS
                </h2>
                <p className="text-gray-500 text-base max-w-2xl mx-auto mb-12">
                    Need FAQs? We’ve got you covered! Tell us your topic, and we’ll <br />
                    generate custom questions and answers for any use case.
                </p>

                <div className="grid grid-cols-1 lg:flex lg:justify-center gap-10 relative">
                    {/* Left Card */}
                    <div className="hidden lg:flex justify-center lg:absolute lg:left-30 lg:top-30 lg:transform lg:-translate-y-1/2">
                        <motion.div
                            className="bg-cyan-400 text-blue-900 w-[220px] h-[250px] flex flex-col justify-center text-left px-4 rounded-lg shadow-lg origin-top-right"
                            whileInView={{ rotate: [-5, 5, -5] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, repeat: 1, ease: "easeInOut" }}
                        >
                            <p className="font-semibold text-base">Project</p>
                            <h3 className="text-8xl font-normal">
                                {count1}
                                <span className="text-5xl">%</span>
                            </h3>
                            <p className="text-base text-left mt-1 px-2">
                                Reported that their online experience
                            </p>
                        </motion.div>
                    </div>

                    {/* FAQ Box */}
                    <div className="bg-white w-full max-w-[818px] h-auto mx-auto rounded-2xl shadow-xl p-6 md:p-8 text-left lg:relative lg:z-10">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200 py-4">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center text-left"
                                >
                                    <span className="font-medium text-lg text-gray-900">{faq.question}</span>
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-gray-500" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-gray-500" />
                                    )}
                                </button>

                                <motion.div
                                    animate={{
                                        height: openIndex === index ? "auto" : 0,
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden mt-3 text-gray-600 text-base"
                                >
                                    {faq.answer}
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    {/* Right Card */}
                    <div className="hidden lg:flex justify-center lg:absolute lg:right-30 lg:top-20 lg:transform lg:-translate-y-1/2">
                        <motion.div
                            whileInView={{ rotate: [5, -5, 5] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, repeat: 1, ease: "easeInOut" }}
                            className="bg-[#F3F945] text-[#1B4BF0] w-[220px] h-[250px] flex flex-col justify-center text-right px-4 rounded-lg rotate-[7deg] shadow-lg origin-top-left"
                        >
                            <p className="font-semibold text-base">Project</p>
                            <h3 className="text-8xl font-normal">{count2}</h3>
                            <p className="text-base text-right mt-1 px-2">
                                Reported that their online experience
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom CTA */}
                {/* <div className="mt-12 text-sm text-gray-500">
                    <p className="mt-12 text-base sm:text-lg text-gray-600">
                        Drive Your Business Strategy with{" "}
                        <span className="text-indigo-600 font-semibold uppercase">vebsigns</span>.{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Get free consultation
                        </a>
                    </p>
                </div> */}
            </div>
        </section>

    );
}
