import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { Link } from "react-router-dom";
import {
    BrainCircuit, Info, FileText, DollarSign, HelpCircle, Mail,
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
    ShoppingBag, Menu, X,
    Phone
} from "lucide-react";
import { useState, useEffect } from 'react';

export default function Header() {
    let closeTimeout;

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [solutionsOpen, setSolutionsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [industriesOpen, setIndustriesOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Only trigger when user scrolls more than 5px
            if (currentScrollY - lastScrollY > 5) {
                // Scrolling down → hide header
                setIsVisible(false);
            } else if (lastScrollY - currentScrollY > 5) {
                // Scrolling up → show header
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);


    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        // <header className="bg-[#1849FF] text-white px-6 py-5">
        // <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0a0220] to-[#120536] text-white px-6 py-5 shadow-lg">
        // Find the header element and modify its className:

        <header className={`
  fixed top-0 left-0 w-full z-50 
  bg-gradient-to-b from-[#0a0220] to-[#120536] 
  text-white px-6 py-5 shadow-lg
  transform transition-transform duration-300 ease-in-out
  ${isVisible ? 'translate-y-0' : '-translate-y-full'}
`}>

            <div className="max-w-7xl mx-auto flex items-center justify-between h-14">

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
                    <Popover className="relative">
                        {({ open }) => (
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
                                    Company
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""
                                            }`}
                                    />
                                </PopoverButton>

                                {/* Dropdown Panel */}
                                <PopoverPanel className="absolute z-50 mt-2 w-56 rounded-lg bg-[#6FE4FC] text-[#15042E] shadow-lg  ring-opacity-5">
                                    <div className="p-3 text-sm space-y-1">
                                        <Link
                                            to="/about"
                                            className="relative flex items-center gap-2 px-3 py-2 rounded overflow-hidden group"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <Info className="w-4 h-4" />
                                                About Us
                                            </span>
                                            <span className="absolute left-0 top-0 h-full w-0 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>

                                        <Link
                                            to="/hire-developers"
                                            className="relative flex items-center gap-2 px-3 py-2 rounded overflow-hidden group"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <FileText className="w-4 h-4" />
                                                Hire Developers
                                            </span>
                                            <span className="absolute left-0 top-0 h-full w-0 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>

                                        <Link
                                            to="/blog"
                                            className="relative flex items-center gap-2 px-3 py-2 rounded overflow-hidden group"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <DollarSign className="w-4 h-4" />
                                                Blogs
                                            </span>
                                            <span className="absolute left-0 top-0 h-full w-0 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>

                                        <Link
                                            to="/contact"
                                            className="relative flex items-center gap-2 px-3 py-2 rounded overflow-hidden group"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <Mail className="w-4 h-4" />
                                                Contact
                                            </span>
                                            <span className="absolute left-0 top-0 h-full w-0 bg-gray-100 transition-all duration-300 group-hover:w-full"></span>
                                        </Link>

                                    </div>
                                </PopoverPanel>


                            </div>
                        )}
                    </Popover>

                    {/* Headless UI Popover for Solutions */}
                    <Popover className="relative">
                        {({ open }) => (

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
                                <PopoverPanel className="absolute z-50 mt-2 w-[650px] rounded-lg bg-[#6FE4FC] text-[#15042E] shadow-lg  ring-opacity-5">
                                    <div className="flex px-3 py-5 gap-8">
                                        {/* IT Services Section */}
                                        <div className="flex-1 pr-2 border-r border-gray-500">
                                            <div className="font-semibold mb-3">IT Services</div>
                                            <div className="space-y-3 text-sm">
                                                <Link
                                                    to="/ai-ml-strategy"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <BrainCircuit size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-06.svg" alt="" className='w-[30px]' />
                                                        <span>AI/ML Strategy and Consulting</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/data-science"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <BarChart3 size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-01.svg" alt="" className='w-[30px]' />
                                                        <span>Data Science and Data Analytics</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/gen-ai"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Sparkles size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-07.svg" alt="" className='w-[30px]' />
                                                        <span>Gen AI For Business Transformation</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/openai-consulting"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Bot size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-08.svg" alt="" className='w-[30px]' />
                                                        <span>OpenAI Consulting Services</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/seo-services"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Search size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-09.svg" alt="" className='w-[30px]' />
                                                        <span>Search Engine Optimization Services</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/comprehensive-ai"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Layers size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-10.svg" alt="" className='w-[30px]' />
                                                        <span>The Comprehensive AI Ecosystem</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/website-design"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Layers size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-11.svg" alt="" className='w-[30px]' />

                                                        <span>Website Development</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/app-design"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Layers size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-12.svg" alt="" className='w-[30px]' />

                                                        <span>App Development</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/uiux"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Layers size={24} /> */}
                                                        <img src="/assets/HomePage/UI UX-13.svg" alt="" className='w-[30px]' />
                                                        <span>UI / UX Design</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>
                                            </div>
                                        </div>

                                        {/* IoT Services Section */}
                                        <div className="flex-1">
                                            <div className="font-semibold mb-3">IoT Services</div>
                                            <div className="space-y-3 text-sm">
                                                <Link
                                                    to="/iot-product-development"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <UserCheck size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-14.svg" alt="" className='w-[30px]' />

                                                        <span>IoT Product Development</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/bulk-manufacturing"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <LineChart size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-15.svg" alt="" className='w-[30px]' />
                                                        <span>Bulk Manufacturing & Device Management</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/implementation-system-integration"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Smile size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-16.svg" alt="" className='w-[30px]' />
                                                        <span>Implementation & System Integration</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/strategic-advisory-services"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Database size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-17.svg" alt="" className='w-[30px]' />
                                                        <span>Strategic & Advisory Services</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
                                                </Link>

                                                <Link
                                                    to="/predictive-maintenance"
                                                    className="relative flex items-center gap-2 rounded px-2 py-1 overflow-hidden group"
                                                >
                                                    <span className="relative z-10 flex items-center gap-2">
                                                        {/* <Utensils size={24} /> */}
                                                        <img src="/assets/HomePage/drop down icons-18.svg" alt="" className='w-[30px]' />
                                                        <span>Predictive Maintenance & Analytics</span>
                                                    </span>
                                                    <span className="absolute left-0 top-0 h-full w-0 bg-blue-50 transition-all duration-300 group-hover:w-full"></span>
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
                    <Link to="/careers" className="hover:underline">
                        Careers
                    </Link>

                </nav>

                {/* Mobile Drawer */}
                {/* <div className={`
                fixed top-0 right-0 h-full w-[280px] bg-white text-black z-50 
                transform transition-transform duration-300 ease-in-out
                ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
                md:hidden
            `}>
                    <div className="p-6"> */}
                <div className={`
    fixed top-0 right-0 h-screen w-[280px]
    bg-white text-black z-50 
    transform transition-transform duration-300 ease-in-out
    ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}
    md:hidden
    overflow-y-auto
`}
                    style={{ height: '100vh', backgroundColor: 'white' }}
                >
                    <div className="p-6 min-h-full bg-white">
                        <div className="flex justify-between items-center mb-6">
                            <img src="/assets/Header/logo_fav.png" alt="Logo" className="h-8" />
                            <button onClick={toggleDrawer}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <Link to="/" className="hover:text-blue-600" onClick={toggleDrawer}>
                                Home
                            </Link>
                            {/* Mobile Pages Dropdown */}
                            <div className="space-y-2">
                                {/* Header with arrow */}
                                <div
                                    className="flex items-center justify-between font-semibold cursor-pointer select-none"
                                    onClick={() => setOpen(!open)}
                                >
                                    <span>Company</span>
                                    <ChevronDown
                                        className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>

                                {/* Dropdown links */}
                                {open && (
                                    <div className="pl-4 space-y-2">
                                        <Link to="/about" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            About Us
                                        </Link>
                                        <Link to="/hire-developers" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            Hire Developers
                                        </Link>
                                        <Link to="/blog" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            Blogs
                                        </Link>
                                        {/* <Link to="/faq" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            FAQ
                                        </Link> */}
                                        <Link to="/contact" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                            Contact
                                        </Link>
                                    </div>
                                )}
                            </div>

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
                                                <span>IT Services</span>
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
                                                <Link to="/website-design" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Website Design & Development
                                                </Link>
                                                <Link to="/app-design" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    App Design & Development
                                                </Link>
                                                <Link to="/uiux" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    UI/UX Design
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Industries Dropdown */}
                                        <div className="space-y-1">
                                            <div
                                                className="flex items-center justify-between cursor-pointer select-none font-medium"
                                                onClick={() => setIndustriesOpen(!industriesOpen)}
                                            >
                                                <span>IoT Services</span>
                                                <ChevronDown
                                                    className={`w-4 h-4 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`}
                                                />
                                            </div>

                                            <div
                                                className={`pl-4 space-y-1 overflow-hidden transition-[max-height] duration-300 ${industriesOpen ? "max-h-96" : "max-h-0"
                                                    }`}
                                            >
                                                <Link to="/iot-product-development" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    IoT Product Development
                                                </Link>
                                                <Link to="/bulk-manufacturing" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Bulk Manufacturing & Device Management
                                                </Link>
                                                <Link to="/implementation-system-integration" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Implementation & System Integration
                                                </Link>
                                                <Link to="/strategic-advisory-services" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Strategic & Advisory Services
                                                </Link>
                                                <Link to="/predictive-maintenance" className="block hover:text-blue-600" onClick={toggleDrawer}>
                                                    Predictive Maintenance & Analytics
                                                </Link>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <Link to="/use-cases" className="hover:text-blue-600" onClick={toggleDrawer}>
                                Use Cases
                            </Link>
                            <Link to="/careers" className="hover:text-blue-600" onClick={toggleDrawer}>
                                Careers
                            </Link>

                            {/* Mobile Pages Dropdown */}

                            <button
                                className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-gradient-to-r from-teal-400 to-sky-400 text-black font-semibold shadow-lg hover:opacity-90 transition"
                                onClick={() => window.open("https://calendly.com/vebsigns/30min", "_blank")}
                            >

                                <span>Book Meeting</span>
                            </button>


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
                                <a href="https://x.com/vebsigns" className="text-gray-600 hover:text-blue-600">
                                    <FaXTwitter size={20} />
                                </a>
                                <a href="https://www.linkedin.com/company/vebsigns/" className="text-gray-600 hover:text-blue-600">
                                    <FaLinkedinIn size={20} />
                                </a>
                                <a href="https://www.instagram.com/vebsigns/" className="text-gray-600 hover:text-blue-600">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="https://www.youtube.com/channel/UC1vWQgIJIrHZcrjKL-eTsiQ" className="text-gray-600 hover:text-blue-600">
                                    <FaYoutube size={20} />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right - Contact + Demo + Socials */}
                <div className="hidden md:flex items-center space-x-4 text-lg">

                    <div className="flex items-center space-x-4 text-lg">
                        <span className="hidden md:inline"><Phone /></span>
                        <a href="tel:+9199708 76727" className="font-semibold">
                            +91 99708 76727
                        </a>

                        <button
                            className=" px-2 sm:px-2 py-2 sm:py-2 rounded-md bg-gradient-to-r from-teal-400 to-sky-400 text-black font-semibold shadow-lg hover:opacity-90 transition"
                            onClick={() => window.open("https://calendly.com/vebsigns/30min", "_blank")}
                        >
                            <span>Book Meeting</span>
                        </button>


                        {/* Social Icons */}
                        {/* <div className="flex space-x-3">
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
                                href="https://x.com/vebsigns"
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
                            <a
                                href="https://www.youtube.com/channel/UC1vWQgIJIrHZcrjKL-eTsiQ"
                                aria-label="Youtube"
                                className="hover:text-gray-200 text-xl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube />
                            </a>
                        </div> */}

                    </div>
                    <button className="md:hidden flex items-center space-x-1 bg-white text-[#1849FF] px-3 py-1 rounded-lg font-medium">
                        <MdComputer />
                        <span>Book</span>
                    </button>
                </div>
                {/* Overlay */}
                {isDrawerOpen && (
                    <div
                        className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 md:hidden h-[100vh]"
                        onClick={toggleDrawer}
                    ></div>
                )}
            </div>
        </header>
    )
}
