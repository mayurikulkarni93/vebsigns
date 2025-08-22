import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { Link } from "react-router-dom";
import {
    BrainCircuit,
    BarChart3,
    Sparkles,
    Bot,
    Search,
    Layers,
    ChevronDown,
    UserCheck,
    LineChart,
    Smile,
    Database,
    Utensils,
    ShoppingBag, Menu, X
} from "lucide-react";
import { useState } from 'react';

export default function Header() {
    let closeTimeout;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);



    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <header className="bg-[#1849FF] text-white px-6 py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20">

                {/* Left - Logo */}
                <div className="flex items-center space-x-2">
                    <Link to="/">
                        <img src="/assets/Header/vebsigns.png" alt="Logo" className="h-8" />
                    </Link>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={toggleDrawer}
                    aria-label="Toggle menu"
                >
                    {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Center - Navigation */}
                <nav className="hidden md:flex space-x-6 text-lg font-medium">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                    <Link to="/software" className="hover:underline">
                        Software
                    </Link>

                    {/* Headless UI Popover for Solutions */}
                    <Popover className="relative">
                        {({ open, close }) => (

                            <div
                                onMouseEnter={() => {
                                    clearTimeout(closeTimeout); // cancel pending close
                                    if (!open) {
                                        document.querySelector("#solutions-btn")?.click();
                                    }
                                }}

                                onMouseLeave={() => {
                                    closeTimeout = setTimeout(() => {
                                        if (open) {
                                            document.querySelector("#solutions-btn")?.click();
                                        }
                                    }, 100); // waits 100ms before closing
                                }}                            >
                                {/* Trigger */}
                                <PopoverButton
                                    id="solutions-btn"
                                    className="hover:underline focus:outline-none flex items-center gap-1"
                                >
                                    Solutions
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""
                                            }`}
                                    />
                                </PopoverButton>

                                {/* Dropdown Panel */}
                                <PopoverPanel className="absolute z-50 mt-2 w-[550px] rounded-lg bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="flex px-6 py-5 gap-8">
                                        {/* By Services Section */}
                                        <div className="flex-1">
                                            <div className="font-semibold mb-3">By Services</div>
                                            <div className="space-y-3">
                                                <Link
                                                    to="/ai-ml-strategy"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <BrainCircuit size={24} />
                                                    <span>AI/ML Strategy and Consulting</span>
                                                </Link>
                                                <Link
                                                    to="/data-science"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <BarChart3 size={24} />
                                                    <span>Data Science and Data Analytics</span>
                                                </Link>
                                                <Link
                                                    to="/gen-ai"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <Sparkles size={24} />
                                                    <span>Gen AI For Business Transformation</span>
                                                </Link>
                                                <Link
                                                    to="/openai-consulting"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <Bot size={24} />
                                                    <span>OpenAI Consulting Services</span>
                                                </Link>
                                                <Link
                                                    to="/seo-services"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <Search size={24} />
                                                    <span>Search Engine Optimization Services</span>
                                                </Link>
                                                <Link
                                                    to="/comprehensive-ai"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <Layers size={24} />
                                                    <span>The Comprehensive AI Ecosystem</span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* For Industries Section */}
                                        <div className="flex-1">
                                            <div className="font-semibold mb-3">For Industries</div>
                                            <div className="space-y-3">
                                                <Link
                                                    to="/gender-detection"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <UserCheck size={24} />
                                                    <span>AI Gender Detection Solution</span>
                                                </Link>
                                                <Link
                                                    to="/business-intelligence"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <LineChart size={24} />
                                                    <span>Business Intelligence for Konstruct</span>
                                                </Link>
                                                <Link
                                                    to="/face-recognition"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <Smile size={24} />
                                                    <span>Face Recognition and Identification</span>
                                                </Link>
                                                <Link
                                                    to="/investment-data"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <Database size={24} />
                                                    <span>Investment Data Management</span>
                                                </Link>
                                                <Link
                                                    to="/ai-recipes"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <Utensils size={24} />
                                                    <span>Smart AI-Generated Recipes</span>
                                                </Link>
                                                <Link
                                                    to="/retail-platform"
                                                    className="flex items-center gap-2 hover:bg-blue-50 rounded px-2 py-1"
                                                >
                                                    <ShoppingBag size={24} />
                                                    <span>Solution for Retail Platform</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </div>
                        )}
                    </Popover>


                    <Link to="/use-cases" className="hover:underline">
                        Use Cases
                    </Link>
                    <Popover className="relative">
                        {({ open, close }) => (
                            <div
                                onMouseEnter={() => {
                                    clearTimeout(closeTimeout);
                                    if (!open) {
                                        document.querySelector("#pages-btn")?.click();
                                    }
                                }}
                                onMouseLeave={() => {
                                    closeTimeout = setTimeout(() => {
                                        if (open) {
                                            document.querySelector("#pages-btn")?.click();
                                        }
                                    }, 100); // waits 100ms before closing
                                }}
                            >
                                {/* Trigger */}
                                <PopoverButton
                                    id="pages-btn"
                                    className="hover:underline focus:outline-none flex items-center gap-1"
                                >
                                    Pages
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""
                                            }`}
                                    />
                                </PopoverButton>

                                {/* Dropdown Panel */}
                                <PopoverPanel className="absolute z-50 mt-2 w-48 rounded-lg bg-white text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="p-3 divide-y divide-gray-200">
                                        <Link
                                            to="/about"
                                            className="block px-3 py-2 rounded hover:bg-gray-100"
                                        >
                                            About
                                        </Link>
                                        <Link
                                            to="/blog"
                                            className="block px-3 py-2 rounded hover:bg-gray-100"
                                        >
                                            Blog
                                        </Link>
                                        <Link
                                            to="/pricing"
                                            className="block px-3 py-2 rounded hover:bg-gray-100"
                                        >
                                            Pricing
                                        </Link>
                                        <Link
                                            to="/faq"
                                            className="block px-3 py-2 rounded hover:bg-gray-100"
                                        >
                                            FAQ
                                        </Link>
                                        <Link
                                            to="/contact"
                                            className="block px-3 py-2 rounded hover:bg-gray-100"
                                        >
                                            Contact
                                        </Link>
                                    </div>
                                </PopoverPanel>
                            </div>
                        )}
                    </Popover>
                </nav>

                {/* Mobile Drawer */}
                <div className={`
                fixed top-0 right-0 h-full w-[280px] bg-white text-black z-50 
                transform transition-transform duration-300 ease-in-out
                ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
                md:hidden
            `}>
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <img src="/assets/Header/vebsigns.png" alt="Logo" className="h-8" />
                            <button onClick={toggleDrawer}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="hover:text-blue-600" onClick={toggleDrawer}>
                                Home
                            </Link>
                            <Link to="/software" className="hover:text-blue-600" onClick={toggleDrawer}>
                                Software
                            </Link>

                            {/* Mobile Solutions Dropdown */}
                            <div className="space-y-2">

                                {/* Main Solutions Dropdown */}
                                <div>
                                    <div
                                        className="flex items-center justify-between font-semibold cursor-pointer select-none"
                                        onClick={() => setSolutionsOpen(!solutionsOpen)}
                                    >
                                        <span>Solutions</span>
                                        <ChevronDown
                                            className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                                        />
                                    </div>

                                    <div
                                        className={`pl-2 space-y-2 overflow-hidden transition-[max-height] duration-300 ${solutionsOpen ? "max-h-[1000px]" : "max-h-0"
                                            }`}
                                    >
                                        {/* Services Dropdown */}
                                        <div className="space-y-1">
                                            <div
                                                className="flex items-center justify-between cursor-pointer select-none font-medium"
                                                onClick={() => setServicesOpen(!servicesOpen)}
                                            >
                                                <span>By Services</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                                />
                                            </div>

                                            <div
                                                className={`pl-4 space-y-1 overflow-hidden transition-[max-height] duration-300 ${servicesOpen ? "max-h-96" : "max-h-0"
                                                    }`}
                                            >
                                                <Link to="/ai-ml-strategy" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    AI/ML Strategy and Consulting
                                                </Link>
                                                <Link to="/data-science" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Data Science and Data Analytics
                                                </Link>
                                                <Link to="/gen-ai" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Gen AI For Business Transformation
                                                </Link>
                                                <Link to="/openai-consulting" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    OpenAI Consulting Services
                                                </Link>
                                                <Link to="/seo-services" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Search Engine Optimization Services
                                                </Link>
                                                <Link to="/comprehensive-ai" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    The Comprehensive AI Ecosystem
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Industries Dropdown */}
                                        <div className="space-y-1">
                                            <div
                                                className="flex items-center justify-between cursor-pointer select-none font-medium"
                                                onClick={() => setIndustriesOpen(!industriesOpen)}
                                            >
                                                <span>For Industries</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                                                />
                                            </div>

                                            <div
                                                className={`pl-4 space-y-1 overflow-hidden transition-[max-height] duration-300 ${industriesOpen ? "max-h-96" : "max-h-0"
                                                    }`}
                                            >
                                                <Link to="/gender-detection" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    AI Gender Detection Solution
                                                </Link>
                                                <Link to="/business-intelligence" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Business Intelligence for Konstruct
                                                </Link>
                                                <Link to="/face-recognition" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Face Recognition and Identification
                                                </Link>
                                                <Link to="/investment-data" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Investment Data Management
                                                </Link>
                                                <Link to="/ai-recipes" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Smart AI-Generated Recipes
                                                </Link>
                                                <Link to="/retail-platform" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Solution for Retail Platform
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <Link to="/use-cases" className="hover:text-blue-600" onClick={toggleDrawer}>
                                Use Cases
                            </Link>

                            {/* Mobile Pages Dropdown */}
                            <div className="space-y-2">
                                {/* Header with arrow */}
                                <div
                                    className="flex items-center justify-between font-semibold cursor-pointer select-none"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span>Pages</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>

                                {/* Dropdown links */}
                                {open && (
                                    <div className="pl-4 space-y-2">
                                        <Link to="/about" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            About
                                        </Link>
                                        <Link to="/blog" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            Blog
                                        </Link>
                                        <Link to="/pricing" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            Pricing
                                        </Link>
                                        <Link to="/faq" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            FAQ
                                        </Link>
                                        <Link to="/contact" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            Contact
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Contact Info */}
                            <div className="pt-4 border-t">
                                <p className="text-sm text-gray-600">Need help?</p>
                                <a href="tel:+9199708 76727" className="text-blue-600 font-semibold">
                                    +91 99708 76727
                                </a>
                            </div>

                            {/* Social Icons */}
                            <div className="flex space-x-4 pt-4">
                                <a href="https://www.facebook.com/VebsignsTechnologies/" className="text-gray-600 hover:text-blue-600">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-600">
                                    <FaXTwitter size={20} />
                                </a>
                                <a href="https://www.linkedin.com/company/vebsigns/" className="text-gray-600 hover:text-blue-600">
                                    <FaLinkedinIn size={20} />
                                </a>
                                <a href="https://www.instagram.com/vebsigns/" className="text-gray-600 hover:text-blue-600">
                                    <FaInstagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Contact + Demo + Socials */}
                <div className="hidden md:flex items-center space-x-4 text-lg">

                    <div className="flex items-center space-x-4 text-lg">
                        <span className="hidden md:inline">Need help:</span>
                        <a href="tel:+9199708 76727" className="font-semibold">
                            +91 99708 76727
                        </a>

                        <button className="flex items-center space-x-1 bg-white text-[#1849FF] px-3 py-1 rounded-lg font-medium hover:bg-gray-100 transition">
                            <MdComputer />
                            <span>Book Meeting</span>
                        </button>

                        {/* Social Icons */}
                        <div className="flex space-x-3">
                            <a
                                href="https://www.facebook.com/VebsignsTechnologies/"
                                aria-label="Facebook"
                                className="hover:text-gray-200 text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="hover:text-gray-200 text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/vebsigns/"
                                aria-label="LinkedIn"
                                className="hover:text-gray-200 text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://www.instagram.com/vebsigns/"
                                aria-label="LinkedIn"
                                className="hover:text-gray-200 text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram />
                            </a>
                        </div>

                    </div>
                    <button className="md:hidden flex items-center space-x-1 bg-white text-[#1849FF] px-3 py-1 rounded-lg font-medium">
                        <MdComputer />
                        <span>Book</span>
                    </button>
                </div>
                {/* Overlay */}
                {isDrawerOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={toggleDrawer}
                    ></div>
                )}
            </div>
        </header>
    )
}
