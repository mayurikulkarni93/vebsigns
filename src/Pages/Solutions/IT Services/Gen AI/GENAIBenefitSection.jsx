import React, { useState } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { sendContactLeads } from "../../../../api/api"; // Make sure your API method is correctly imported
import toast from "react-hot-toast";

const benefits = [
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>auto flash 2</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><polygon points="36 5 7 38 28 38 24 59 53 26 32 26 36 5" fill="none" stroke="#1B4BF0" stroke-width="1.5"></polygon><path data-color="color-2" data-stroke="none" d="M53.245,40.363h-3.3L43,59h3.2l1.816-5.154h7.1L56.965,59h3.224ZM48.9,51.23l1.676-4.836a28.213,28.213,0,0,0,1-3.415q.128.507.463,1.6t.527,1.6l1.74,5.052Z" fill="#F3F945" stroke="none"></path></g></svg>
      <img className="w-[64px]" src="/assets/GENAI/page 3-08.svg" alt="" />

    ),
    title: "Enhanced Productivity",
    description:
      "Automate repetitive tasks and workflows.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>edit curves</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><path d="M9,50C43,50,27,8,61,8" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></path><polyline points="61 56 3 56 3 8" fill="none" stroke="#1B4BF0" stroke-width="1.5"></polyline></g></svg>
      <img className="w-[64px]" src="/assets/GENAI/page 3-10.svg" alt="" />

    ),
    title: "Personalized Experiences",
    description:
      "Deliver tailored customer and user interactions.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>wallet 44</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="22" x2="34" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="22" x2="22" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="22" x2="10" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="52" x2="34" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="22" x2="46" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="52" x2="46" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="52" x2="22" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="52" x2="10" y2="52"></line><circle data-stroke="none" fill="#1B4BF0" cx="48" cy="37" r="2" stroke-linejoin="miter" stroke="none"></circle><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M7,15c-2.761,0-5-2.239-5-5 v0c0-2.761,2.239-5,5-5h40v4"></path><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M58,31V15H7 c-2.761,0-5-2.239-5-5v41c0,4.418,3.582,8,8,8h48V43"></path><path data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" d="M62,43H48 c-3.314,0-6-2.686-6-6v0c0-3.314,2.686-6,6-6h14V43z"></path></g></svg>
      <img className="w-[64px]" src="/assets/GENAI/page 3-01.svg" alt="" />

    ),

    title: "Accelerated Innovation",
    description:
      "Generate ideas, content, and solutions faster.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>timeline</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="32" y1="2" x2="32" y2="62" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line><rect x="44" y="6" width="16" height="16" fill="none" stroke="#1B4BF0" stroke-width="1.5"></rect><line x1="38" y1="14" x2="32" y2="14" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line><rect x="44" y="42" width="16" height="16" fill="none" stroke="#1B4BF0" stroke-width="1.5"></rect><line x1="38" y1="50" x2="32" y2="50" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line><rect x="4" y="24" width="16" height="16" transform="translate(24 64) rotate(-180)" fill="none" stroke="#1B4BF0" stroke-width="1.5"></rect><line x1="26" y1="32" x2="32" y2="32" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line></g></svg>
      <img className="w-[64px]" src="/assets/GENAI/page 3-07.svg" alt="" />

    ),
    title: "Cost Efficiency",
    description:
      "Optimize resources with AI-driven automation.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>wallet 44</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="22" x2="34" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="22" x2="22" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="22" x2="10" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="52" x2="34" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="22" x2="46" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="52" x2="46" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="52" x2="22" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="52" x2="10" y2="52"></line><circle data-stroke="none" fill="#1B4BF0" cx="48" cy="37" r="2" stroke-linejoin="miter" stroke="none"></circle><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M7,15c-2.761,0-5-2.239-5-5 v0c0-2.761,2.239-5,5-5h40v4"></path><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M58,31V15H7 c-2.761,0-5-2.239-5-5v41c0,4.418,3.582,8,8,8h48V43"></path><path data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" d="M62,43H48 c-3.314,0-6-2.686-6-6v0c0-3.314,2.686-6,6-6h14V43z"></path></g></svg>
      <img className="w-[64px]" src="/assets/GENAI/page 3-05.svg" alt="" />

    ),
    title: "Industry-Specific Applications",
    description:
      "Adaptable solutions for healthcare, finance, retail, and more.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>digital key</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><circle cx="16" cy="16" r="4" fill="none" stroke="#1B4BF0" stroke-width="1.5" data-cap="butt"></circle><circle cx="34" cy="57" r="4" fill="none" stroke="#1B4BF0" stroke-width="1.5" data-cap="butt"></circle><circle cx="52" cy="16" r="4" fill="none" stroke="#1B4BF0" stroke-width="1.5"></circle><polyline points="25 33 25 48 31.172 54.172" fill="none" stroke="#1B4BF0" stroke-width="1.5" data-cap="butt"></polyline><circle cx="56" cy="57" r="4" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></circle><path d="M42,45H37l-3-3V39H31L20.268,28.268a13.04,13.04,0,1,1,8-8L32,24H44l5.172-5.172" fill="none" stroke="#1B4BF0" stroke-width="1.5"></path><polyline points="56 53 56 48 45 37 42 37 42 34 37.064 29.064" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></polyline></g></svg>
      <img className="w-[64px]" src="/assets/GENAI/page 3-04.svg" alt="" />

    ),
    title: "Scalable Deployment",
    description:
      "Integrate and expand Gen AI across enterprise systems.",
  },
];
const inquiries = [
  { id: 1, name: "Partnership" },
  { id: 2, name: "Support" },
  { id: 3, name: "General Inquiry" },
]
const locations = [
  {
    name: "Pune, India",
    address:
      "221, 911 Gera Imperium Rise, Hinjewadi Phase - 2, Pune, Maharashtra 411057",
    svg: (
      
      <img
        src="/assets/HomePage/Pune.png"
        className="w-[94px]"
        alt="India Icon"
      />
    ),
  },
  {
    name: "Hyderabad, India",
    address:
      "Unit No 405-411, 4th Floor, Bizness Square Junction, opposite Hitex Road, Jubilee Enclave, HITEC City, Madhapur, Hyderabad, Telangana 500081",
    svg: (
      
      <img
        src="/assets/HomePage/Hyderabad.png"
        className="w-[94px]"
        alt="India Icon"
      />
    ),
  },
  {
    name: "Canada",
    address:
      "209 - Fort York, Toronto - M5V 3K9",
    svg: (
      
      <img
        src="/assets/HomePage/Canada.png"
        className="w-[87px]"
        alt="Canada Icon"
      />
    ),
  },


];

const GENAIBenefitsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("")
  const [selected, setSelected] = useState(inquiries[0])
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const faqs = [
    {
      question: "What services does Vebsigns offer?",
      answer: "We provide IT, IoT, AI solutions, and digital marketing services to transform businesses."
    },
    {
      question: "Which industries do you serve?",
      answer: "We work with retail, healthcare, finance, education, and other sectors."
    },
    {
      question: "How experienced is your team?",
      answer: "Our team has delivered 80+ successful projects with 98% positive feedback."
    },
    {
      question: "Do you provide custom AI solutions?",
      answer: "Yes, we develop AI applications tailored to your business needs."
    },
    {
      question: "Can you help with digital marketing?",
      answer: "Absolutely, we offer SEO, social media, and content strategies for growth."
    }
  ];
  const filtered =
    query === ""
      ? inquiries
      : inquiries.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const payload = {
        name: `${firstName} ${lastName}`,
        email,
        company_name: company,
        enquiry_for: selected?.name || "",
        message,
      };

      const response = await sendContactLeads(payload);
      console.log(response.data);
      // Show success toast
      toast.success(response.data.message);

      setSuccess(response.data.message);
      // Clear form after success
      setEmail("");
      setFirstName("");
      setLastName("");
      setCompany("");
      setMessage("");
      setSelected(null);
    } catch (err) {
      console.error(err);
      // Show error toast
      toast.error("Failed to submit. Please try again.");
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {/* Benefits section */}
      <section className="bg-gradient-to-r from-[#0D003B] to-[#101C4E] py-16 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-blue-400 font-semibold uppercase tracking-wide text-base sm:text-lg md:text-xl">
              Key Benefits
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 uppercase">
              Unlock creativity, automation, and intelligence with Generative AI solutions.

            </h2>
            <p className="text-gray-300 mt-4 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base">
              Drive innovation, personalization, and business growth with Gen AI transformation.

            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#120A3A] p-6 sm:p-8 rounded-2xl shadow-md hover:translate-y-[-6px] transition-transform duration-300 flex flex-col items-start"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-blue-400 mb-4 sm:mb-6">
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg font-medium text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div>
        <section
          style={{ backgroundImage: "url('/assets/HomePage/bg1.png')", opacity: 10 }}
          className="bg-[#0B0225] py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        >
          {/* Heading */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Left Side */}
              <div className="text-left">
                <p className="text-[#6FE4FC] text-lg sm:text-xl md:text-2xl uppercase font-normal tracking-wide">
                  Get Started
                </p>
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white uppercase leading-snug sm:leading-tight">
                  Talk to an expert
                </h2>
              </div>

              {/* Right Side */}
              <div className="text-left md:text-right">
                <p className="text-gray-300 mt-4 text-base sm:text-sm max-w-md md:ml-auto">
                  Ready to transform your business? Contact us today to learn how our expert services can help you leverage AI for growth and success.
                </p>
              </div>
            </div>
          </div>


          {/* Card Container */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Left: Form */}
            <div className="p-6 sm:p-8">
              <form className="space-y-6 w-full max-w-xl mx-auto" onSubmit={handleSubmit}>
                <Field className="w-full">
                  <Label className="block text-sm sm:text-base font-medium text-gray-700">
                    Business Email
                  </Label>
                  <p className="text-xs mb-2 text-gray-500">
                    Please use a business email to be connected with our sales team
                  </p>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <Field>
                    <Label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      First Name
                    </Label>
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      placeholder="Eg: John"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </Field>

                  <Field>
                    <Label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                      Last Name
                    </Label>
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      placeholder="Eg: Doe"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    />
                  </Field>
                </div>

                <Field>
                  <Label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Company
                  </Label>
                  <Input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    type="text"
                    placeholder="Eg: Vebsigns"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </Field>

                <Field className="w-full">
                  <Label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    What is your inquiry about?
                  </Label>
                  <Combobox
                    value={selected}
                    onChange={setSelected}
                    onClose={() => setQuery("")}
                  >
                    <div className="relative">
                      <ComboboxInput
                        className={clsx(
                          "w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm sm:text-base text-gray-900",
                          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        )}
                        displayValue={(item) => item?.name}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder="Please select"
                      />
                      <ComboboxButton className="group absolute inset-y-0 right-0 px-3 flex items-center">
                        <ChevronDownIcon className="h-5 w-5 text-gray-500 group-data-hover:text-gray-700" />
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

                <Field>
                  <Label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    How can we help you?
                  </Label>
                  <Textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-semibold py-2 sm:py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-[1.01] text-sm sm:text-base"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                {success && <p className="text-green-600 mt-2 text-center">{success}</p>}
              </form>
            </div>

            {/* Right: Info + FAQ */}
            <div className="bg-[#6FE4FC] p-6 sm:p-8 md:p-12 flex flex-col justify-between h-full">
              {/* Top Block */}
              <div>
                <p className="text-gray-800 mb-6 text-base sm:text-lg md:text-xl">
                  Vebsigns has the most comprehensive local office network in the industry.
                </p>

                {/* Locations */}
                <div className="mt-5 flex justify-between items-start gap-6">
                  {locations.map((loc, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center px-2 flex-1"
                    >
                      {loc.svg}
                      <h4 className="mt-2 text-sm sm:text-base font-normal text-gray-900">
                        {loc.name}
                      </h4>
                      <p className="text-gray-600 text-[12px] sm:text-[12px] mt-2">
                      {loc.address}
                    </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-grow mt-10" />

              {/* Bottom Block (FAQs) */}
              <div className="space-y-4 mt-6 md:mt-0">
                <h3 className="font-semibold text-gray-700 mb-2 sm:mb-4 uppercase text-sm sm:text-base">
                  What are you looking for
                </h3>

                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-400 py-2">
                    <button
                      className="flex justify-between items-center w-full text-left text-gray-700 font-medium text-sm sm:text-base"
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                      <span className="ml-2">
                        {openIndex === index ? (
                          <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                        ) : (
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-xs sm:text-sm text-gray-600">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

  );


};

export default GENAIBenefitsSection;
