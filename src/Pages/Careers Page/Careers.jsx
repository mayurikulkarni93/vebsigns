import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Fragment, useState } from "react";
import { developerTabs } from "./developerTabs";
import WhyChooseVebsigns from "./WhyChooseVebsigns";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Field, Label, Input, Select, Textarea, Description } from "@headlessui/react"
import {
    Combobox,
    ComboboxInput,
    ComboboxButton,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import { sendCareersData } from "../../api/api"; // Make sure your API method is correctly imported
import toast from "react-hot-toast";
import SEO from "../../Components/SEO";


function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const inquiries = [
    { id: 1, name: "Flutter App Developer" },
    { id: 2, name: "Android Developer" },
    { id: 3, name: "iOS Developer" },
    { id: 4, name: "PHP Developer" },
    { id: 5, name: "Java Developer" },
    { id: 6, name: "Python Developer" },
    { id: 7, name: "ReactJS Developer" },
    { id: 8, name: "NodeJS Developer" },
    { id: 9, name: "NextJS Developer" },
    { id: 10, name: "AngularJS Developer" },
    { id: 11, name: "QA Engineer" },
    { id: 12, name: "UI/UX Designer" },
];

export default function Careers() {

    const [activeTab, setActiveTab] = useState(0);
    const [fileName, setFileName] = useState("No file chosen");
    const [selected, setSelected] = useState(inquiries[0])
    const [query, setQuery] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [resumeFile, setResumeFile] = useState(null);



    const filtered =
        query === ""
            ? inquiries
            : inquiries.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            )



    // File change handler
    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setResumeFile(e.target.files[0]);
            setFileName(e.target.files[0].name);
        } else {
            setResumeFile(null);
            setFileName("No file chosen");
        }
    };

    // Form submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !phone || !selected?.name || !resumeFile) {
            toast.error("Please fill all fields and upload a resume.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email_id", email);
        formData.append("phone_number", phone);
        formData.append("applying_for_role", selected.name);
        formData.append("resume", resumeFile);

        const loadingToast = toast.loading("Submitting your application...");

        try {
            const response = await sendCareersData(formData);
            toast.success(response.data.message || "Application submitted!", {
                id: loadingToast,
            });

            // Reset form
            setName("");
            setEmail("");
            setPhone("");
            setSelected(inquiries[0]);
            setResumeFile(null);
            setFileName("No file chosen");
        } catch (error) {
            console.error("Error submitting career form:", error);
            toast.error(
                error?.response?.data?.message || "Failed to submit application",
                { id: loadingToast }
            );
        }
    };

    return (
        <div>
            <SEO
                title="Careers at Vebsigns Technologies | Join Our Innovative IT Team"
                description="Explore career opportunities at Vebsigns Technologies. Join our team of talented developers, designers, and IT professionals shaping the future of web development, AI, IoT, and automation."
                keywords="Vebsigns Careers, jobs at Vebsigns, IT jobs India, web development careers, AI jobs, IoT careers, software development jobs, automation careers"
                canonical="https://vebsigns.com/careers"
            />


            <Header />
            <section className="bg-[#0A0025] text-white py-20 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <TabGroup selectedIndex={activeTab} onChange={setActiveTab}>
                        {/* Tabs */}


                        {/* Panels */}
                        <TabPanels>
                            {developerTabs.map((tab) => (
                                <TabPanel key={tab.name}>
                                    {/* Top Section */}
                                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-12">
                                        {/* Left Content */}
                                        <div className="max-w-lg text-center md:m-14 md:text-left">
                                            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
                                                {tab.title}
                                            </h2>
                                            <p className="text-base sm:text-lg text-gray-300 mt-4 sm:mt-6">
                                                {tab.description}
                                            </p>
                                            <button onClick={() => {
                                                document.getElementById("career-form")?.scrollIntoView({ behavior: "smooth" });
                                            }}
                                                className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md bg-gradient-to-r from-teal-400 to-sky-400 text-black font-semibold shadow-lg hover:opacity-90 transition">
                                                Get Started
                                            </button>
                                        </div>

                                        {/* Right Illustration */}
                                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                                            <img src={tab.image} alt={tab.name} className="w-full object-contain" />
                                        </div>
                                    </div>
                                    {/* Tabs */}
                                    <TabList className="flex flex-wrap gap-3 justify-center mb-10 sm:mb-12">
                                        {developerTabs.map((tab) => (
                                            <Tab as={Fragment} key={tab.name}>
                                                {({ selected }) => (
                                                    <button
                                                        className={classNames(
                                                            "px-3 sm:px-6 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300",
                                                            selected
                                                                ? "bg-teal-500 text-white shadow-md"
                                                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                                        )}
                                                    >
                                                        {tab.name}
                                                    </button>
                                                )}
                                            </Tab>
                                        ))}
                                    </TabList>
                                    {/* Why Choose Section */}
                                    {tab.features && (
                                        <div className="mt-16 sm:mt-20">
                                            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
                                                Why Choose {tab.name.split(" ")[0]}?
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                                                {tab.features.map((feature, i) => (
                                                    <div
                                                        key={i}
                                                        className="bg-white text-gray-900 rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition"
                                                    >
                                                        <img
                                                            src={feature.image}
                                                            alt={feature.title}
                                                            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 mx-auto mb-4 sm:mb-6 object-contain"
                                                        />
                                                        <h4 className="text-lg sm:text-xl font-bold text-center">
                                                            {feature.title}
                                                        </h4>
                                                        <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 text-center">
                                                            {feature.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </TabPanel>

                            ))}
                        </TabPanels>




                    </TabGroup>
                </div>
            </section>

            {/* <WhyChooseVebsigns /> */}
            <WhyChooseVebsigns benefits={developerTabs[activeTab].benefits} />

            <section className="py-20 bg-gradient-to-r from-[#122D4D] via-[#15042E] via-[#241032] to-[#15042E] text-white">
                <div className="max-w-3xl mx-auto px-6">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Apply Now
                    </h2>

                    {/* Form */}
                    <form id="career-form" className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Email Address</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        {/* Dropdown */}
                        <Field className="w-full">
                            <Label className="block text-sm sm:text-base font-medium text-white mb-1">
                                Which role are you applying for?
                            </Label>

                            <Combobox
                                value={selected}
                                onChange={setSelected}
                                onClose={() => setQuery("")}
                            >
                                <div className="relative">
                                    <ComboboxInput
                                        className={clsx(
                                            "w-full rounded-lg  bg-white/20  placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 px-4 py-2 text-sm sm:text-base text-gray-300",
                                            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        )}
                                        displayValue={(item) => item?.name}
                                        onChange={(event) => setQuery(event.target.value)}
                                        placeholder="Please select"
                                    />
                                    <ComboboxButton className="group absolute inset-y-0 right-0 px-3 flex items-center">
                                        <ChevronDownIcon className="h-5 w-5 text-white group-data-hover:text-gray-700" />
                                    </ComboboxButton>
                                </div>

                                <ComboboxOptions
                                    anchor="bottom"
                                    transition
                                    className={clsx(
                                        "w-(--input-width) rounded-lg border border-gray-200 bg-white shadow-lg mt-2 p-1",
                                        "transition duration-100 ease-in data-leave:data-closed:opacity-0 empty:invisible"
                                    )}
                                >
                                    {filtered.map((item) => (
                                        <ComboboxOption
                                            key={item.id}
                                            value={item}
                                            className={({ active }) =>
                                                `cursor-pointer select-none relative py-2 pl-10 pr-4 ${active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                                                }`
                                            }
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                                                        {item.name}
                                                    </span>
                                                    {selected && (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                                                            <CheckIcon className="h-5 w-5" />
                                                        </span>
                                                    )}
                                                </>
                                            )}
                                        </ComboboxOption>
                                    ))}
                                </ComboboxOptions>
                            </Combobox>
                        </Field>

                        {/* Upload CV */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Upload CV / Resume</label>
                            <div className="flex items-center gap-4">
                                <label className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl cursor-pointer transition">
                                    Choose File
                                    <input type="file" className="hidden" onChange={handleFileChange} />
                                </label>
                                <span className="text-sm text-gray-300 truncate">{fileName}</span>
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            onClick={handleSubmit} // bind API call here
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition text-white font-semibold"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}
