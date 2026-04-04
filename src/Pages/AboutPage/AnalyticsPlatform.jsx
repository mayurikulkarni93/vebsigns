import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Counter from "../../Components/Counter";
import { Link } from "react-router-dom";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const analyticsData = [
    {
        title: "Ayurythm - Health & Wellness",
        path: "https://www.ayurythm.com/",
        description:
            "A holistic health app blending Ayurveda, yoga, and modern technology to deliver personalized wellness, diet, and lifestyle guidance.",
        stats: [
            { label: "Downloads", value: "800K+", description: "App downloads across Android & iOS" },
            { label: "Remedies", value: "1800+", description: "Ayurvedic home remedies available" },
        ],
        cta: {
            text: "Discover your personalized Ayurvedic wellness plan — visit ayurythm.com or download the app today.",
        },
        image: { src: "/assets/HomePage/ayurythm.png", alt: "Ayurythm App", width: 650 },
    },
    {
        title: "IIFL Finance – Diversified Financial Services",
        path: "https://www.iifl.com/finance/",
        description:
            "Leading NBFC in India providing home, gold, business & micro-finance through extensive branch & digital network.",
        stats: [
            { label: "AUM", value: "78,341 Cr", description: "Assets under management (as on Mar 31, 2025)" },
            { label: "Branches", value: "2,600+", description: "Branches across 500+ cities in India" },
        ],
        cta: {
            text: "Explore IIFL's financial solutions — visit iifl.com/finance for loans, investments & more.",
        },
        image: { src: "/assets/HomePage/IIFL.svg", alt: "IIFL Finance", width: 650 },
    },
    {
        title: "Cheesiano – Delicious Food Delivered Fast",
        path: "https://www.cheesiano.com",
        description:
            "Seamless food delivery platform offering a wide range of cuisines from local restaurants with real-time tracking and easy ordering.",
        stats: [
            { label: "Active Restaurants", value: "500+", description: "Partnered local restaurants across multiple cities" },
            { label: "Orders Served", value: "120K+", description: "Meals delivered with speed and reliability" },
        ],
        cta: {
            text: "Order your favorite meals now — visit cheesiano.com for fast, delicious food delivered to your door.",
        },
        image: { src: "/assets/HomePage/Pizza.svg", alt: "Cheesiano Food Delivery", width: 650 },
    },
    {
        title: "SWAAS – Seamless Online Shopping Experience",
        path: "https://www.swaas.in",
        description:
            "E-commerce platform offering a wide range of products across categories with user-friendly navigation, secure payments, and fast delivery.",
        stats: [
            { label: "Products Available", value: "50K+", description: "Variety of items across multiple categories" },
            { label: "Cities Served", value: "200+", description: "Fast delivery across numerous locations in India" },
        ],
        cta: {
            text: "Shop now and enjoy hassle-free online shopping — visit swaas.com for great deals and convenience.",
        },
        image: { src: "/assets/HomePage/SWAAS.svg", alt: "SWAAS Online Shopping", width: 650 },
    },
    {
        title: "Thanatkorn – E-Order Platform for Retailers & Manufacturers",
        path: "https://www.thanatkorn.com",
        description:
            "Thailand-based E-Order platform allowing users to manufacture products, sell to distributors, purchase from manufacturers, and manage stock efficiently.",
        stats: [
            { label: "Active Users", value: "15K+", description: "Retailers, distributors, and manufacturers using the platform" },
            { label: "Products Managed", value: "10K+", description: "Track and manage stock across multiple categories and suppliers" },
        ],
        cta: {
            text: "Start managing your products and stock seamlessly — visit thanatkorn.com for more details.",
        },
        image: { src: "/assets/HomePage/thanatkorn.svg", alt: "Thanatkorn E-Order Platform", width: 650 },
    },
    {
        title: "CricMaths – Where Cricket Meets Maths",
        path: "https://www.cricmaths.com",
        description:
            "Platform connecting children’s love for cricket with engaging maths education, creating a fun and educational community in India and beyond.",
        stats: [
            { label: "Active Students", value: "25K+", description: "Children learning maths through cricket-based challenges" },
            { label: "Interactive Modules", value: "100+", description: "Engaging cricket-themed maths lessons and activities" },
        ],
        cta: {
            text: "Join the fun and make maths exciting — visit cricmaths.com to explore games and learning modules.",
        },
        image: { src: "/assets/HomePage/Cricmaths.svg", alt: "CricMaths Educational Platform", width: 650 },
    },
    {
        title: "Jamaica Craft Café – Passion for Coffee",
        path: "https://thejamaicacraft.com/",
        description:
            "Coffee café founded by Mr. Thanat Thanaboriboon, offering expertly crafted coffee to energize your mornings and create a warm, inviting experience.",
        stats: [
            { label: "Signature Coffees", value: "50+", description: "Variety of specialty coffee blends and beverages" },
            { label: "Locations", value: "3+", description: "Cafés across key areas in Jamaica providing a vibrant coffee experience" },
        ],
        cta: {
            text: "Start your day with the perfect cup — visit jamaicacraftcafe.com to explore our menu and locations.",
        },
        image: { src: "/assets/HomePage/JamaicaWeb.svg", alt: "Jamaica Craft Café", width: 650 },
    },
    {
        title: "India Craft Café – Mobile App",
        // path: "https://www.indiacraftcafe.com/app",
        description:
            "Mobile app for India Craft Café, offering easy access to café services, ordering, and a vibrant coffee experience anytime, anywhere across India.",
        stats: [
            { label: "Menu Items", value: "50+", description: "Variety of specialty coffee blends and beverages available via the app" },
            { label: "Cities Covered", value: "15+", description: "Available in multiple cities across India" }
        ],
        cta: {
            text: "Order your favorite coffee and explore café services — download the India Craft Café app today.",
        },
        image: { src: "/assets/HomePage/JamaicaApp.svg", alt: "India Craft Café Mobile App", width: 650 },
    }
    ,
    {
        title: "Jamaica Craft Café – POS System Thailand",
        path: "https://thejamaicacraft.com/",
        description:
            "Point-of-Sale system for Jamaica Craft Café in Thailand, designed to streamline café operations, manage orders, and enhance customer experience efficiently.",
        stats: [
            { label: "Cafés Using POS", value: "3+", description: "Jamaica Craft Café locations in Thailand leveraging the system" },
            { label: "Transactions Managed", value: "50K+/month", description: "Efficient order processing and sales tracking via POS" },
        ],
        cta: {
            text: "Optimize your café operations with Jamaica POS — visit jamaicacraftcafe.com/pos to learn more.",
        },
        image: { src: "/assets/HomePage/Jamaica.svg", alt: "Jamaica Craft Café POS System", width: 650 },
    },
    {
        title: "Junkky – Smart Waste Collection",
        path: "https://www.junkky.com",
        description:
            "Pune-based startup providing efficient waste collection services for homes, businesses, and communities, promoting cleanliness and sustainability.",
        stats: [
            { label: "Cities Covered", value: "1", description: "Currently operating in Pune" },
            { label: "Waste Collected", value: "500+", description: "Tons of waste processed monthly" },
        ],

        cta: {
            text: "Schedule a pickup and contribute to a cleaner city — visit junkky.com to book waste collection services.",
        },
        image: { src: "/assets/HomePage/junky.svg", alt: "Junkky Waste Collection", width: 650 },
    },
    {
        title: "ONGC – Smart Monitoring App",
        // path: "https://www.ongcsmartapp.com",
        description:
            "IoT-based monitoring app providing real-time data on well performance, intuitive charts, and comprehensive oversight for efficient operations management.",
        stats: [
            { label: "Wells Monitored", value: "500+", description: "Real-time monitoring of multiple wells across regions" },
            { label: "Data Points Collected", value: "1M+/day", description: "Extensive IoT sensor data for accurate decision-making" },
        ],
        cta: {
            text: "Optimize well operations with real-time insights — visit ongcsmartapp.com to learn more.",
        },
        image: { src: "/assets/HomePage/ONGC.svg", alt: "ONGC Smart Monitoring App", width: 650 },
    },
    {
        title: "The Actor's Truth – Acting Workshops & Training",
        path: "https://www.theactorstruth.com",
        description:
            "Founded by Saurabh Sachdeva in 2017, The Actor's Truth offers workshops and training programs to help actors overcome performance challenges and enhance their craft.",
        stats: [
            { label: "Workshops Conducted", value: "200+", description: "Hands-on acting workshops led by industry experts" },
            { label: "Students Trained", value: "5,000+", description: "Aspiring actors nurtured with practical and sensitive training" },
        ],
        cta: {
            text: "Enhance your acting skills and join workshops — visit theactorstruth.com to enroll.",
        },
        image: { src: "/assets/HomePage/TAT.png", alt: "The Actor's Truth Acting Academy", width: 650 },
    },
    {
        title: "Haigreve E-Order – Retailer & Manufacturer Platform",
        path: "https://www.haigreve.com",
        description:
            "Thailand-based app enabling users to act as retailers, distributors, and manufacturers. Manage stock, manufacture products, and streamline buying and selling across the supply chain.",
        stats: [
            { label: "User Types", value: "3", description: "Retailer • Distributor • Manufacturer" },
            { label: "Products Managed", value: "10K+", description: "Inventory across suppliers" },
        ],

        cta: {
            text: "Manage your products and stock seamlessly — visit haigreve.com to get started.",
        },
        image: { src: "/assets/HomePage/haigreve.svg", alt: "Haigreve E-Order App", width: 650 },
    },
    {
        title: "Good Good Piggy – Digital Piggy Bank for Kids",
        path: "https://www.goodgoodpiggy.com",
        description:
            "A fintech app designed to teach children aged 4+ about money management, savings, and financial responsibility through interactive tools and parent-controlled features.",
        stats: [
            { label: "Downloads", value: "5,000+", description: "Available on Google Play Store" },
            { label: "Age Rating", value: "4+", description: "Designed for children aged 4 and above" },
        ],
        cta: {
            text: "Empower your child with financial literacy — download the Good Good Piggy app today.",
        },
        image: { src: "/assets/HomePage/Goodpiggy.svg", alt: "Good Good Piggy App", width: 650 },
    },
    {
        title: "Jaguar Plumbing – Reliable Plumbing Solutions",
        path: "https://www.jaquar.com/en",
        description:
            "Professional plumbing services offering installation, repair, and maintenance for residential and commercial clients, ensuring fast, reliable, and efficient solutions.",
        stats: [
            { label: "Years in Service", value: "10+", description: "Trusted plumbing services with a decade of experience" },
            { label: "Projects Completed", value: "5,000+", description: "Residential and commercial plumbing projects successfully handled" },
        ],
        cta: {
            text: "Book expert plumbing services today — visit jaguarplumbing.com to schedule an appointment.",
        },
        image: { src: "/assets/HomePage/Jaguar.svg", alt: "Jaguar Plumbing Services", width: 650 },
    },
    {
        title: "Best Loans",
        path: "https://bestloans.co.in/",
        description:
            "An Indian digital lending platform offering home loans and personal financing, focused on simplified processes and competitive interest rates.",
        stats: [
            {
                label: "Customers Served",
                value: "50K+",
                description: "Individuals assisted in securing loans"
            },
            {
                label: "Loan Disbursed",
                value: "500 Cr+",
                description: "Total value of loans facilitated"
            },
        ],
        cta: {
            text: "Compare and apply online – visit bestloans.co.in to find your ideal loan offer.",
        },
        image: { src: "/assets/HomePage/bestloan.svg", alt: "Best Loans Logo", width: 650 }
    },
    {
        title: "SMC (SMC India / SMC Global)",
        path: "https://www.smcindiaonline.com/",
        description:
            "A leading Indian financial services group offering broking, wealth management, financing, and gold & silver coin services under its brand.",
        stats: [
            {
                label: "Branches",
                value: "143+",
                description: "Operational branches across India"
            },
            {
                label: "Cities Covered",
                value: "452+",
                description: "Extensive presence across Indian cities"
            },
        ],
        cta: {
            text: "Explore SMC’s financial services and gold coin offerings — visit smcindiaonline.com.",
        },
        image: {
            src: "/assets/HomePage/smc.svg",
            alt: "SMC India / SMC Gold Coins",
            width: 650
        }
    },
    {
        title: "Loan Sarovar",
        path: "https://loansarovar.com/",
        description:
            "Loan Sarovar is a financial services platform offering a wide range of loan solutions including personal loans, business loans, home loans, and financial advisory services tailored to individual and business needs.",
        stats: [
            {
                label: "Loan Services",
                value: "4+",
                description: "Personal, business, home, and other loan options available"
            },
            {
                label: "Customer Support",
                value: "24/7",
                description: "Dedicated assistance for loan queries and processing"
            },
        ],
        cta: {
            text: "Explore Loan Sarovar’s loan solutions and financial services — visit loansarovar.com.",
        },
        image: {
            src: "/assets/HomePage/loansarovar.png",
            alt: "Loan Sarovar Financial Services",
            width: 700
        }
    },
    {
        title: "Groupify AI",
        path: "https://groupify.ai/",
        description:
            "Groupify AI is a comprehensive platform for discovering, comparing, and learning AI tools and courses. It offers a curated directory of thousands of AI applications across categories like productivity, text, image, video, and code generation, helping users boost efficiency and innovation.",
        stats: [
            {
                label: "AI Tools Listed",
                value: "10,000+",
                description: "Extensive directory of AI tools across multiple categories"
            },
            {
                label: "Active Users",
                value: "300+",
                description: "Growing community discovering AI tools and courses"
            },
        ],
        cta: {
            text: "Explore top AI tools, courses, and comparisons — visit groupify.ai.",
        },
        image: {
            src: "/assets/HomePage/groupify.png",
            alt: "Groupify AI Tools Directory Platform",
            width: 600, height: 250
        }
    }
];

const AnalyticsSlider = () => {
    return (
        <section className="py-20 bg-gradient-to-r from-[#122D4D] via-[#15042E] via-[#241032] to-[#15042E]">
            {/* Horizontal Container */}
            <div className="max-w-7xl bg-[#110326] mx-auto px-4 sm:px-6  py-4 sm:py-6 rounded-2xl">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                >
                    {analyticsData.map((data, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                                {/* Left Content */}
                                <div className="text-white text-center md:text-left">
                                    <motion.h2
                                        key={idx + '-title'}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="visible"
                                        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-snug"
                                    >
                                        {data.title}
                                    </motion.h2>

                                    <motion.p
                                        key={idx + '-desc'}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: 0.2 }}
                                        className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0 text-sm sm:text-base"
                                    >
                                        {data.description}
                                    </motion.p>

                                    {/* Stats */}
                                    <div className="flex flex-col sm:flex-row sm:space-x-10 md:space-x-16 mb-8 sm:mb-10 items-center md:items-start">
                                        {data.stats.map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                variants={fadeUp}
                                                initial="hidden"
                                                animate="visible"
                                                transition={{ delay: 0.3 + index * 0.2 }}
                                                className="mb-6 sm:mb-0 text-center sm:text-left"
                                            >
                                                <p className="text-white text-sm sm:text-base">
                                                    {stat.label}
                                                </p>
                                                <h3 className="text-5xl sm:text-6xl md:text-6xl font-normal text-blue-500 mt-2">
                                                    <Counter value={stat.value} />
                                                </h3>
                                                <p className="text-gray-400 font-semibold text-xs sm:text-sm md:text-base mt-1">
                                                    {stat.description}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="border-gray-500 border-b-[0.5px] mt-6 md:mt-10"></div>

                                    {/* CTA */}
                                    <motion.div
                                        key={idx + '-cta'}
                                        variants={fadeUp}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ delay: 0.8 }}
                                        className="mt-6 flex items-center justify-center md:justify-start gap-2 cursor-pointer"
                                    >
                                        <Link to={data.path}
                                            target="_blank"
                                            className="text-sm sm:text-base md:text-lg text-white hover:text-blue-500 hover:underline">
                                            {data.cta.text}
                                        </Link>
                                        <span className="bg-white hover:bg-blue-500 hover:text-white text-blue-500 rounded-full p-1 flex items-center justify-center h-6 w-6">
                                            <ArrowRight />
                                        </span>
                                    </motion.div>
                                </div>

                                {/* Right Image */}
                                <motion.div
                                    key={idx + '-img'}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 1 }}
                                    className="relative flex justify-center"
                                >
                                    <img
                                        src={data.image.src}
                                        alt={data.image.alt}
                                        className={`w-[${data.image.width}px] relative z-10`}
                                    />
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>


    );
};

export default AnalyticsSlider;

