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
    ShoppingBag,
} from "lucide-react";

export default function Header() {
    let closeTimeout;

    return (
        <header className="bg-[#1849FF] text-white px-6 py-5">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-20">

                {/* Left - Logo */}
                <div className="flex items-center space-x-2">
                    <img src="/assets/Header/vebsigns.png" alt="Logo" className="h-8" />
                </div>

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

                {/* Right - Contact + Demo + Socials */}
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
            </div>
        </header>
    )
}
