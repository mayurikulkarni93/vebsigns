// import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
// import { Field, Input, Label, Button } from '@headlessui/react'
// import clsx from 'clsx'

// const Footer = () => {
//     return (
//         <footer className="relative bg-gradient-to-br from-[#0B0223] via-[#150544] to-[#0B0223] text-gray-300 px-6 md:px-16 py-12">
//             {/* Newsletter Section */}
//             <div className="grid md:grid-cols-2 gap-8 relative z-10">
//                 <div>
//                     <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter:</h3>
//                     <Field>
//                         <Label className="text-sm/6 font-medium text-white">Email ID</Label>

//                         {/* Flex container for input + button */}
//                         <div className="mt-3 flex w-[300px] items-center gap-2">
//                             <Input
//                                 className={clsx(
//                                     'flex-1 rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
//                                     'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25'
//                                 )}
//                             />
//                             <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700">
//                                 Submit
//                             </Button>
//                         </div>
//                     </Field>

//                     <p className="text-xs text-gray-400 mt-3 w-96">
//                         By subscribing you agree to with our Privacy Policy and provide
//                         consent to receive updates from our company.
//                     </p>
//                 </div>

//                 {/* Links Section */}
//                 <div className="grid grid-cols-3 gap-8 text-sm">
//                     <div>
//                         <h4 className="font-semibold mb-3">Expertise</h4>
//                         <ul className="space-y-2">
//                             <li><a href="#" className="hover:text-white">Artificial Intelligence</a></li>
//                             <li><a href="#" className="hover:text-white">Generative AI / GPT</a></li>
//                             <li><a href="#" className="hover:text-white">Big Data and Cloud</a></li>
//                             <li><a href="#" className="hover:text-white">Software Development</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h4 className="font-semibold mb-3">Solutions</h4>
//                         <ul className="space-y-2">
//                             <li><a href="#" className="hover:text-white">Virtual Assistant Tool</a></li>
//                             <li><a href="#" className="hover:text-white">Image Recognition</a></li>
//                             <li><a href="#" className="hover:text-white">Text Analysis</a></li>
//                             <li><a href="#" className="hover:text-white">Data Capture & OCR</a></li>
//                         </ul>
//                     </div>
//                     <div>
//                         <h4 className="font-semibold mb-3">About</h4>
//                         <ul className="space-y-2">
//                             <li><a href="#" className="hover:text-white">Company</a></li>
//                             <li><a href="#" className="hover:text-white">Customer Success</a></li>
//                             <li><a href="#" className="hover:text-white">Resources</a></li>
//                             <li><a href="#" className="hover:text-white">Talk an Expert</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             {/* Divider */}
//             <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 relative z-10">
//                 <p>Copyright © 2024.</p>

//                 {/* Social Icons */}
//                 <div className="flex space-x-4 mt-4 md:mt-0">
//                     <a href="#" className="hover:text-white"><FaFacebookF /></a>
//                     <a href="#" className="hover:text-white"><FaXTwitter /></a>
//                     <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";

import { Field, Input, Label, Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  console.log("Footer component rendered");
  return (
    <footer className="relative bg-gradient-to-br from-[#0B0223] via-[#150544] to-[#0B0223] text-gray-300 px-6 md:px-16 py-12">
      {/* Newsletter Section */}
      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        <div className="flex flex-col items-start space-y-5">
          {/* Logo */}
          <img
            src="/assets/Header/vebsigns.png"
            alt="Vebsigns Logo"
            className="w-36 sm:w-48"
          />

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs sm:max-w-sm">
            Empower your business with innovative technology. Streamline
            operations, enhance connectivity, and unlock growth with tailored IT
            and IoT services.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-gray-400 mt-2">
            <a
              href="https://www.facebook.com/VebsignsTechnologies/"
              aria-label="Facebook"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://x.com/vebsigns"
              aria-label="Twitter"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/vebsigns/"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://www.instagram.com/vebsigns/"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-lg sm:text-xl" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC1vWQgIJIrHZcrjKL-eTsiQ"
              aria-label="YouTube"
              className="hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-lg sm:text-xl" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3 text-base">IT Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  UI/UX
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Website Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Mobile Application Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  AI
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-base">IoT Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  IoT Product Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Bulk Manufacturing & Device Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Implementation & System Integration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Strategic & Advisory Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative hover:text-white transition duration-300 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 
                 after:h-[1px] after:w-0 after:bg-yellow-400 
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Predictive Maintenance & Analytics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="relative hover:text-white transition duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-[1px] after:w-0 after:bg-yellow-400
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/hire-developers"
                  className="relative hover:text-white transition duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-[1px] after:w-0 after:bg-yellow-400
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Hire Developers
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="relative hover:text-white transition duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-[1px] after:w-0 after:bg-yellow-400
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative hover:text-white transition duration-300
                 after:content-[''] after:absolute after:left-0 after:bottom-0
                 after:h-[1px] after:w-0 after:bg-yellow-400
                 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations */}
        <div class="flex flex-col space-y-8 md:ml-12 ml-0">
          {/*  */}
          
          <div class="flex items-center space-x-3">
            <img
              src="/assets/HomePage/Pune.png"
              className="w-[80px]"
              alt="India Icon"
            />
            <div class="flex flex-col">
              <h4 class="text-base font-semibold ">Head office - Pune, India</h4>
              <p class="text-xs font-medium text-white">221, 911 Gera Imperium Rise, Hinjewadi Phase - 2, Pune, Maharashtra 411057</p>
            </div>
          </div>

          <div class="flex items-center space-x-3">
            <img
            src="/assets/HomePage/Hyderabad.png"
            className="w-[80px]"
            alt="India Icon"
          />
            <div class="flex flex-col">
              <h4 class="text-base font-semibold ">Branch office - Hyderabad, India</h4>
              <p class="text-xs font-medium text-white">Unit No 405-411, 4th Floor, Bizness Square Junction, opposite Hitex Road,
                    Jubilee Enclave, HITEC City, Madhapur, Hyderabad, Telangana 500081</p>
            </div>
          </div>

          <div class="flex items-center space-x-5">
            <img
            src="/assets/HomePage/Canada.png"
            className="w-[80px]"
            alt="Canada Icon"
          />
            <div class="flex flex-col">
              <h4 class="text-base font-semibold ">Canada</h4>
              <p class="text-xs font-medium text-white">209 - Fort York, Toronto - M5V 3K9</p>
            </div>
          </div>


        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 relative z-10">
        <p>Copyright © 2020 - 2025 Vebsigns. All Rights Reserved.</p>

        {/* Social Icons */}
        {/* <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="hover:text-white"><FaXTwitter /></a>
                    <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
                </div> */}
      </div>
    </footer>
  );
};

export default Footer;
