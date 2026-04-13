import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Loader from "./Components/Loader";

// Lazy load pages
const Home = lazy(() => import("./Pages/HomePage/Home"));
const About = lazy(() => import("./Pages/AboutPage/About"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const BlogSingle = lazy(() => import("./Pages/Blog/BlogSingle"));
const ContactSection = lazy(() => import("./Pages/ContactUs/ContactUs"));
const AIMLHome = lazy(() => import("./Pages/Solutions/IT Services/AIML Strategy/AIMLHome"));
const DSDAHome = lazy(() => import("./Pages/Solutions/IT Services/Data Science and Data Analytics/DSDAHome"));
const GENAIHome = lazy(() => import("./Pages/Solutions/IT Services/Gen AI/GENAIHome"));
const OPENAIHome = lazy(() => import("./Pages/Solutions/IT Services/OpenAI/OPENAIHome"));
const SEOHome = lazy(() => import("./Pages/Solutions/IT Services/SEO/SEOHome"));
const CAIHome = lazy(() => import("./Pages/Solutions/IT Services/Comprehensive AI/CAIHome"));
const AIGHome = lazy(() => import("./Pages/Solutions/IoT Services/AI Gender/AIGHome"));
const BMDMHome = lazy(() => import("./Pages/Solutions/IoT Services/Bulk Manufacturing/BMDMHome"));
const ISIHome = lazy(() => import("./Pages/Solutions/IoT Services/Implementation System/ISIHome"));
const SASHome = lazy(() => import("./Pages/Solutions/IoT Services/Strategic & Advisory Services/SASHome"));
const PMAHome = lazy(() => import("./Pages/Solutions/IoT Services/Predictive Maintenance & Analytics/PMAHome"));
const WDADHome = lazy(() => import("./Pages/Solutions/IT Services/Website Design & Development/WDADHome"));
const ADADHome = lazy(() => import("./Pages/Solutions/IT Services/App Design & Development/ADADHome"));
const UIUXHome = lazy(() => import("./Pages/Solutions/IT Services/UIUX/UIUXHome"));
const AIPCHome = lazy(() => import("./Pages/Solutions/IT Services/AI-Powered Computer Vision/AIPCHome"));
const UseCase = lazy(() => import("./Pages/Use Cases/UseCase"));
const UseCaseSingle = lazy(() => import("./Pages/Use Cases/UseCaseSingle"));
const HireDev = lazy(() => import("./Pages/Hire Developers/HireDevelopers"));
const Careers = lazy(() => import("./Pages/Careers Page/Careers"));
const Kalash = lazy(() => import("./Pages/Kalash/Kalash"));

const AppRoutes = () => (
  <Suspense fallback={<Loader />}>
    {/* <Suspense> */}
    <ScrollToTop />   {/* 👈 Add this here */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogSingle />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/ai-ml-strategy" element={<AIMLHome />} />
      <Route path="/data-science" element={<DSDAHome />} />
      <Route path="/gen-ai" element={<GENAIHome />} />
      <Route path="/openai-consulting" element={<OPENAIHome />} />
      <Route path="/seo-services" element={<SEOHome />} />
      <Route path="/comprehensive-ai" element={<CAIHome />} />
      <Route path="/iot-product-development" element={<AIGHome />} />
      <Route path="/bulk-manufacturing" element={<BMDMHome />} />
      <Route path="/implementation-system-integration" element={<ISIHome />} />
      <Route path="/strategic-advisory-services" element={<SASHome />} />
      <Route path="/predictive-maintenance" element={<PMAHome />} />
      <Route path="/website-design" element={<WDADHome />} />
      <Route path="/app-design" element={<ADADHome />} />
      <Route path="/uiux" element={<UIUXHome />} />
      <Route path="/ai-powered-computer-vision" element={<AIPCHome />} />
      <Route path="/use-cases" element={<UseCase />} />
      <Route path="/use-cases/:slug" element={<UseCaseSingle />} />
      <Route path="/hire-developers" element={<HireDev />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/kalash/countries.json" element={<Kalash />} />

      {/* Add more routes here */}
    </Routes>
  </Suspense>
);

export default AppRoutes;
