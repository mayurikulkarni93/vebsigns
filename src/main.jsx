// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async"; // 👈 import this

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>   {/* 👈 wrap your App here */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
