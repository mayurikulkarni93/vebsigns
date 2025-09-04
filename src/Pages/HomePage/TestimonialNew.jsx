import { useEffect, useState } from "react";

const testimonials = [
    {
        quote:
            "Being a Managed Services Client Has Improved Our Uptime, Increased Our Productivity And Systematized Our Software Updates",
        author: "Chris Ellison",
        role: "Founder & CEO, Linethemes.com",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote:
            "The support team is extremely responsive and proactive. We feel more secure and efficient with their services.",
        author: "Sarah Mitchell",
        role: "CTO, InnovateTech",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        quote:
            "Our collaboration with them has transformed our workflows, reduced downtime, and streamlined updates.",
        author: "David Johnson",
        role: "COO, NextGen Solutions",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
        quote:
            "They helped us scale faster while keeping our systems reliable. Truly a partner we can count on.",
        author: "Emma Williams",
        role: "Head of IT, FutureCorp",
        avatar: "https://randomuser.me/api/portraits/women/77.jpg",
    },
    {
        quote:
            "Best decision we ever made for our business continuity and technology growth.",
        author: "Michael Brown",
        role: "Founder, BrightPath",
        avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
];

export default function TestimonialNew() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-change every 2s
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-gradient-to-br from-[#0b0220] to-[#0d0730] py-20 text-center text-white">
            {/* Quotation Icon */}
            <div className="flex justify-center mb-6">
                {/* <span className="text-6xl text-cyan-400">"</span> */}
                <img loading="lazy" decoding="async" width="50" height="50" src="https://live.21lab.co/hanotek/wp-content/uploads/2024/11/quote.svg" class="attachment-large size-large wp-image-554 entered lazyloaded" alt="" data-lazy-src="https://live.21lab.co/hanotek/wp-content/uploads/2024/11/quote.svg" data-ll-status="loaded"></img>
            </div>

            {/* Section Title */}
            <h3 className="text-cyan-400 tracking-widest text-xl font-semibold uppercase mb-6">
                What Our Clients Say:
            </h3>

            {/* Quote */}
            <p className="max-w-4xl mx-auto text-xl md:text-3xl font-medium leading-relaxed transition-all duration-500">
                "{testimonials[activeIndex].quote}"
            </p>

            {/* Author */}
            <div className="mt-6 transition-all duration-500">
                <h4 className="text-base font-semibold">{testimonials[activeIndex].author}</h4>
                <p className="text-gray-400 text-sm">{testimonials[activeIndex].role}</p>
            </div>

            {/* Avatars */}
            <div className="flex justify-center gap-4 mt-10">
                {testimonials.map((t, index) => (
                    <img
                        key={index}
                        src={t.avatar}
                        alt={t.author}
                        onClick={() => setActiveIndex(index)}
                        className={`w-12 h-12 rounded-full border-2 cursor-pointer transition-all duration-300
              ${activeIndex === index
                                ? "border-cyan-400 opacity-100"
                                : "border-gray-600 opacity-40 grayscale"}`}
                    />
                ))}
            </div>
        </section>
    );
}
