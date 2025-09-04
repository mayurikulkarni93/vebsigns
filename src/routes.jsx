import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import Loader from "./Components/Loader";

// Lazy load pages
const Home = lazy(() => import("./Pages/HomePage/Home"));
const About = lazy(() => import("./Pages/AboutPage/About"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
// const Contact = lazy(() => import("./Pages/Contact"));

const AppRoutes = () => (
//   <Suspense fallback={<Loader />}>
  <Suspense>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* Add more routes here */}
    </Routes>
  </Suspense>
);

export default AppRoutes;
