import React from "react";

const DigitalTransformation = () => {
    const cardData = [
        {
            id: 1,
            image: "/assets/HomePage/open-ai-1.png",
            number: "1.",
            description: "AI Solution provider & Big Data Experts Company",
            buttonText: "Explore Vebsigns",
            bgColor: "#15042E",
            hoverTextColor: "white",
        },
        {
            id: 2,
            image: "/assets/HomePage/ai2.png",
            number: "2.",
            description: "Transform businesses into AI-first organizations",
            buttonText: "See What We Do",
            bgColor: "#15042E",
            hoverTextColor: "white",
        },
        {
            id: 3,
            image: "/assets/HomePage/i3.png",
            number: "3.",
            description: "Has experience working with different industries",
            buttonText: "Industries We Serve",
            bgColor: "#15042E",
            hoverTextColor: "white",
        },
    ];
    return (
        // <section className="relative py-16 bg-gradient-to-br from-purple-50 via-white to-orange-50">
        //     <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        //         {/* Heading */}
        //         <p className="text-[21px] font-semibold text-blue-600 tracking-widest uppercase">
        //             We’re Vebsigns
        //         </p>
        //         <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
        //             DIGITAL TRANSFORMATION
        //         </h2>
        //         <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
        //             At Hanotek, we specialize in helping companies integrate generative AI
        //             tools into business routines to use its benefits for successful
        //             business strategy
        //         </p>
        //         <br />
        //         {/* Cards */}

        //         <div className="flex gap-12">
        //             {cardData.map((card) => (
        //                 <div key={card.id} className="relative w-[269px] group">
        //                     {/* Main Card */}
        //                     <div
        //                         className={`relative bg-white hover:bg-[#15042E] text-[#15042E] hover:text-white 
        //                 text-[16px] leading-[25.6px] p-[30px] w-[269px] h-[370.203px] z-10 
        //                 box-border rounded-lg shadow-lg cursor-pointer 
        //                 transition-transform duration-300 ease-in-out hover:rotate-[2deg] 
        //                 group-hover:translate-y-[-15px] overflow-visible 
        //                 flex flex-col`}
        //                     >
        //                         <img
        //                             src={card.image}
        //                             alt="Card Image"
        //                             className="w-[215px] absolute top-6 left-[-25px] h-auto"
        //                         />
        //                         <h4 className="absolute top-48/100 left-6 text-7xl text-[#1B4BF0] font-normal">
        //                             {card.number}
        //                         </h4>
        //                         <p className="mt-auto text-left">{card.description}</p>
        //                     </div>

        //                     {/* Button */}
        //                     <div
        //                         className="text-[16px] leading-[16px] text-center text-[#15042E] 
        //                bg-[#F3F945] w-[230px] h-[70px] p-[40px_10px_15px_10px] 
        //                block cursor-pointer transition-transform duration-300 
        //                ease-in-out box-border rounded-b-[8px] relative z-0 
        //                mx-auto -mt-[75px] group-hover:translate-y-[35px]"
        //                     >
        //                         <a>{card.buttonText}</a>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //         {/* Bottom Text */}
        //         <p className="mt-12 text-base text-gray-600">
        //             Drive Your Business Strategy with{" "}
        //             <span className="text-indigo-600 font-semibold">AI</span>.{" "}
        //             <a href="#" className="text-blue-600 hover:underline">
        //                 Get free consultation →
        //             </a>
        //         </p>
        //     </div>
        // </section>
        <section className="relative py-16 bg-gradient-to-br from-purple-50 via-white to-orange-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                {/* Heading */}
                <p className="text-[21px] font-semibold text-blue-600 tracking-widest uppercase">
                    We’re Vebsigns
                </p>
                <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                    DIGITAL TRANSFORMATION
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                    At Hanotek, we specialize in helping companies integrate generative AI
                    tools into business routines to use its benefits for successful
                    business strategy
                </p>
                <br />

                {/* Cards */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-6 lg:gap-12">
                    {cardData.map((card) => (
                        <div key={card.id} className="relative w-full sm:w-[220px] md:w-[250px] lg:w-[269px] group mx-auto">
                            {/* Main Card */}
                            <div
                                className={`relative bg-white hover:bg-[#15042E] text-[#15042E] hover:text-white 
                      text-[16px] leading-[25.6px] p-[20px] sm:p-[30px] h-[370.203px] z-10 
                      box-border rounded-lg shadow-lg cursor-pointer 
                      transition-transform duration-300 ease-in-out hover:rotate-[2deg] 
                      group-hover:translate-y-[-15px] overflow-visible 
                      flex flex-col`}
                            >
                                <img
                                    src={card.image}
                                    alt="Card Image"
                                    className="w-[180px] sm:w-[215px] absolute top-6 left-[-20px] sm:left-[-25px] h-auto"
                                />
                                <h4 className="absolute top-48/100 left-6 text-5xl sm:text-7xl text-[#1B4BF0] font-normal">
                                    {card.number}
                                </h4>
                                <p className="mt-auto text-left text-sm sm:text-base">{card.description}</p>
                            </div>

                            {/* Button */}
                            <div
                                className="text-[14px] sm:text-[16px] leading-[16px] text-center text-[#15042E] 
                       bg-[#F3F945] w-[200px] sm:w-[230px] h-[60px] sm:h-[70px] 
                       p-[20px_10px_10px_10px] sm:p-[40px_10px_15px_10px] 
                       block cursor-pointer transition-transform duration-300 
                       ease-in-out box-border rounded-b-[8px] relative z-0 
                       mx-auto -mt-[60px] sm:-mt-[75px] group-hover:translate-y-[35px]"
                            >
                                <a>{card.buttonText}</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Text */}
                <p className="mt-12 text-base sm:text-lg text-gray-600">
                    Drive Your Business Strategy with{" "}
                    <span className="text-indigo-600 font-semibold">AI</span>.{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Get free consultation →
                    </a>
                </p>
            </div>
        </section>

    );
};

export default DigitalTransformation;
