import React from "react";

const locations = [
    {
        name: "Pune, India",
        address: "221, 911 Gera Imperium Rise, Hinjewadi Phase - 2, Pune, Maharashtra 411057",
        svg: (
                  <img src="/assets/HomePage/Pune.png" className="w-[88px]" alt="India Icon" />

        ),
    },
    {
        name: "Hyderabad, India",
        address: "Unit No 405-411, 4th Floor, Bizness Square Junction, opposite Hitex Road, Jubilee Enclave, HITEC City, Madhapur, Hyderabad, Telangana 500081",
        svg: (
                  <img src="/assets/HomePage/Hyderabad.png" className="w-[87px]" alt="India Icon" />

        ),
    },
    {
    name: "Canada",
    address:
      "209 - Fort York, Toronto - M5V 3K9",
    svg: (
      
      <img
        src="/assets/HomePage/Canada.png"
        className="w-[80px]"
        alt="Canada Icon"
      />
    ),
  },
    
];

const Locations = () => {
    return (
        // <section className="bg-gradient-to-b from-white to-pink-50 py-20 text-center">
        //     <div className="max-w-5xl mx-auto px-6">
        //         {/* Heading */}
        //         <h3 className="text-blue-500 text-xl font-semibold uppercase tracking-wide">
        //             Our Locations
        //         </h3>
        //         <h2 className="text-5xl uppercase font-bold text-gray-900 mt-2">
        //             We Are Global.
        //         </h2>
        //         <p className="text-gray-600 text-base mt-3">
        //             Vebsigns has the most comprehensive local office network in the
        //             industry.
        //         </p>

        //         {/* Grid */}
        //         <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        //             {locations.map((loc, index) => (
        //                 <div key={index} className="flex flex-col items-center">
        //                     {loc.svg}
        //                     <h4 className="mt-4 text-lg font-semibold text-gray-900">
        //                         {loc.name}
        //                     </h4>
        //                     <p className="text-gray-600 text-sm mt-2 max-w-xs">
        //                         {loc.address}
        //                     </p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </section>
        <section className="bg-gradient-to-b from-white to-pink-50 py-20 text-center">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <h3 className="text-blue-500 text-lg sm:text-xl font-semibold uppercase tracking-wide">
      Our Locations
    </h3>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-gray-900 mt-2">
      We Are Global.
    </h2>
    <p className="text-gray-600 text-sm sm:text-base mt-3">
      Vebsigns has the most comprehensive local office network in the
      industry.
    </p>

    {/* Grid */}
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-10">
      {locations.map((loc, index) => (
        <div key={index} className="flex flex-col items-center text-center px-2">
          {loc.svg}
          <h4 className="mt-4 text-base sm:text-lg font-normal text-gray-900">
            {loc.name}
          </h4>
          <p className="text-gray-600 text-sm mt-2 max-w-xs">{loc.address}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    );
};

export default Locations;
