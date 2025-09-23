import { useEffect, useState } from "react";

const testimonials = [
    {
        quote:
            "Vebsigns is the place to go, high quality website with excellent Ul development.. shall give 5/5. Very qualified people and excellent service. Highly recommend.",
        author: "Abhishek Agarwal",
        role: "Founder & CEO, Linethemes.com",
        avatar: "/assets/HomePage/Profile.jpg",
    },
    {
        quote:
            "Excellent website design and development work delivered for our company, Finkompas (finkompas.com). Vebsigns Technologies is one of the best software technology firms based out of Pune and must recommend for all high quality website development work. Their team understood our firm's brief properly, ensured all our requirements are well understood & summarised, followed by a superb product, delivered on time. 100% Seamless Experience. Great work, team Vebsigns!",
        author: "FINKOMPAS",
        role: "CTO, InnovateTech",
        avatar: "/assets/HomePage/Profile.jpg",
    },
    {
        quote:
            "Brilliant service by Vebsigns Team for developing my website (manavsevamadhavseva.org). Vebsigns was referred by one of my colleagues for their high quality work service. After reviewing their website, I opted web designing service of Vebsigns. I am happy to say that they listened to my desires and offered professional advice and expertise. The team very quickly got the look and feel that I was after for my website, they listened to everything that I said and wanted and delivered perfectly before time. We find them very professional and technically sound. Thank you so much once again to Vebsigns Team We would highly recommend this company. Would definitely use them again!",
        author: "MANAV SEVA MADHAV SEVA",
        role: "COO, NextGen Solutions",
        avatar: "/assets/HomePage/Profile.jpg",
    },
    {
        quote:
            "Thanks a ton for ensuring a splendid product development..Would like to recommend Vebsigns for web development.. Great effort team. excellent interface and web functionality with the latest immersive website technologies for better consumer interaction.. Shall give 9/10. Keep it up!",
        author: "SHIVARAMA KRISHNAN",
        role: "Head of IT, FutureCorp",
        avatar: "/assets/HomePage/Profile.jpg",
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
