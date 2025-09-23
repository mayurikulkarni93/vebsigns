import React from "react";


const cards = [
    {
        letter: "D",
        title: "Do Good",
        description: "Foster an inclusive culture where we treat each other with respect."
    },
    {
        letter: "A",
        title: "Act as one team",
        description: "Connect, communicate and collaborate as one diverse team."
    },
    {
        letter: "T",
        title: "Think customer",
        description: "Accelerate customer outcomes in everything we build and how we deliver."
    },
    {
        letter: "A",
        title: "Aspire - innovate",
        description: "Continuously and fearlessly innovate through curiosity and learning."
    }
];

const DrivenByData = () => {
    const downloadPDF = () => {
        const link = document.createElement("a");
        link.href = "/assets/Vebsigns Technologies Company Profile- 2025.pdf";
        link.download = "Vebsigns Technologies Brochure.pdf"; // Name for downloaded file
        link.click();
    };

    return (
        <section className="relative py-16 bg-gradient-to-br from-purple-50 via-white to-orange-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {/* Heading */}
                <p className="text-xl font-semibold text-blue-600 tracking-widest uppercase">
                    Our values

                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl uppercase">
                    driven by data.
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    DATA is our commitment to cultivate a values-driven culture. Discover how you can become part of HanoTek’s talented team to help us create a better tomorrow through better data.
                </p>
                <br />
                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
                    {cards.map((card, index) => (
                        <a
                            key={index}
                            href="#"
                            className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg hover:bg-gray-50 transition p-8 w-full max-w-sm h-[400px]"
                        >
                            {/* Letter Circle */}
                            <div className="w-24 h-24 flex items-center justify-center mb-6 group">
                                <span
                                    className="text-[6rem] md:text-[7rem] lg:text-[128px] font-bold text-transparent transition-colors duration-300 group-hover:text-[#3862F2]"
                                    style={{
                                        WebkitTextStroke: "1px #3862F2",
                                        textStroke: "1px #3862F2"
                                    }}
                                >
                                    {card.letter}
                                </span>
                            </div>
                            {/* Card Content */}
                            <div className="flex flex-col justify-center text-center">
                                <h5 className="mb-3 text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-gray-900">
                                    {card.title}
                                </h5>
                                <p className="text-sm md:text-base text-gray-600">
                                    {card.description}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
                <button onClick={downloadPDF} className="mt-12 px-8 py-4 bg-blue-600 text-white font-light rounded-4xl hover:bg-blue-700 transition flex items-center gap-2 mx-auto">
                    Download Company Brochure
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24"><title>file pdf</title><g stroke-linecap="square" transform="translate(0.5 0.5)" fill="#ffffff" stroke-linejoin="miter" class="nc-icon-wrapper" stroke-miterlimit="10"><path d="M4 9H11V2" stroke="#ffffff" stroke-width="1" data-cap="butt" fill="none" stroke-linecap="butt"></path><path d="M4 11V9.07843C4 8.54799 4.21071 8.03929 4.58579 7.66421L9.66421 2.58579C10.0393 2.21071 10.548 2 11.0784 2H18C19.1046 2 20 2.89543 20 4V11" stroke="#ffffff" stroke-width="1" fill="none"></path><path d="M2 22V15H4.5C5.88071 15 7 16.1193 7 17.5V17.5C7 18.8807 5.88071 20 4.5 20H2.5" stroke="#ffffff" stroke-width="1" data-color="color-2" fill="none"></path><path d="M10 15V22H11.5C13.433 22 15 20.433 15 18.5C15 16.567 13.433 15 11.5 15H10Z" stroke="#ffffff" stroke-width="1" data-color="color-2" fill="none"></path><path d="M18 22L18 15H22M21 18.5H18.5" stroke="#ffffff" stroke-width="1" data-color="color-2" fill="none"></path></g></svg>
                </button>
            </div>
        </section>
    );
};

export default DrivenByData;
