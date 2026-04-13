// import React from 'react';
// import countries from '../../kalash/countries.json';

// const Kalash = () => {
//   return (
//     <div>
//       <h1>Kalash Gallery</h1>
//       {Object.entries(countries).map(([country, items]) => (
//         <div key={country}>
//           <h2>{country}</h2>
//           <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//             {items.map((item, index) => (
//               <div key={index} style={{ margin: '10px' }}>
//                 <img src={item.image_url} alt={`Product ${index}`} style={{ width: '200px', height: '200px' }} />
//                 <a href={item.site_url} target="_blank" rel="noopener noreferrer">View Product</a>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Kalash;




import React, { useState } from "react";
import countriesData from "../../kalash/countries.json";

const Kalash = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [search, setSearch] = useState("");

  const countryNames = Object.keys(countriesData);

  // Filter logic
  const filteredData = Object.entries(countriesData).filter(
    ([country, items]) =>
      (selectedCountry === "All" || country === selectedCountry) &&
      items.some(item =>
        item.site_url.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🌍 Kalash Gallery</h1>

      {/* 🔍 Search */}
      {/* <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          display: "block",
          margin: "20px auto",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      /> */}

      {/* 🌎 Country Filter */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={() => setSelectedCountry("All")}>All</button>
        {countryNames.map((country) => (
          <button
            key={country}
            onClick={() => setSelectedCountry(country)}
            style={{
              margin: "5px",
              background:
                selectedCountry === country ? "#007bff" : "#eee",
              color: selectedCountry === country ? "#fff" : "#000",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {country}
          </button>
        ))}
      </div>

      {/* 📦 Gallery */}
      {filteredData.map(([country, items]) => (
        <div key={country}>
          <h2 style={{ marginTop: "30px" }}>{country}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {items
              .filter((item) =>
                item.site_url
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <img
                    src={item.image_url}
                    alt="product"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />

                  <div style={{ padding: "10px", textAlign: "center" }}>
                    <a
                      href={item.site_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "#007bff",
                        fontWeight: "bold",
                      }}
                    >
                      View Product →
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kalash;