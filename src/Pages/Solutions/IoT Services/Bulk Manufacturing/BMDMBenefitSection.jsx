import React, { useState } from "react";
import {
  Field,
  Label,
  Input,
  Select,
  Textarea,
  Description,
} from "@headlessui/react";
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { sendContactLeads } from "../../../../api/api"; // Make sure your API method is correctly imported
import toast from "react-hot-toast";

const benefits = [
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>auto flash 2</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><polygon points="36 5 7 38 28 38 24 59 53 26 32 26 36 5" fill="none" stroke="#1B4BF0" stroke-width="1.5"></polygon><path data-color="color-2" data-stroke="none" d="M53.245,40.363h-3.3L43,59h3.2l1.816-5.154h7.1L56.965,59h3.224ZM48.9,51.23l1.676-4.836a28.213,28.213,0,0,0,1-3.415q.128.507.463,1.6t.527,1.6l1.74,5.052Z" fill="#F3F945" stroke="none"></path></g></svg>
      <img className="w-[64px]" src="/assets/BMDM/page 11-10.svg" alt="" />
    ),
    title: "End-to-End Device Management",
    description: "From manufacturing to end-of-life support.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>edit curves</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><path d="M9,50C43,50,27,8,61,8" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></path><polyline points="61 56 3 56 3 8" fill="none" stroke="#1B4BF0" stroke-width="1.5"></polyline></g></svg>
      <img className="w-[64px]" src="/assets/BMDM/page 11-08.svg" alt="" />
    ),
    title: "High-Quality Production",
    description: "Maintain standards across large volumes.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>wallet 44</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="22" x2="34" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="22" x2="22" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="22" x2="10" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="52" x2="34" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="22" x2="46" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="52" x2="46" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="52" x2="22" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="52" x2="10" y2="52"></line><circle data-stroke="none" fill="#1B4BF0" cx="48" cy="37" r="2" stroke-linejoin="miter" stroke="none"></circle><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M7,15c-2.761,0-5-2.239-5-5 v0c0-2.761,2.239-5,5-5h40v4"></path><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M58,31V15H7 c-2.761,0-5-2.239-5-5v41c0,4.418,3.582,8,8,8h48V43"></path><path data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" d="M62,43H48 c-3.314,0-6-2.686-6-6v0c0-3.314,2.686-6,6-6h14V43z"></path></g></svg>
      <img className="w-[64px]" src="/assets/BMDM/page 11-04.svg" alt="" />
    ),
    title: "Remote Monitoring",
    description: "Track device performance in real time.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>timeline</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><line x1="32" y1="2" x2="32" y2="62" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line><rect x="44" y="6" width="16" height="16" fill="none" stroke="#1B4BF0" stroke-width="1.5"></rect><line x1="38" y1="14" x2="32" y2="14" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line><rect x="44" y="42" width="16" height="16" fill="none" stroke="#1B4BF0" stroke-width="1.5"></rect><line x1="38" y1="50" x2="32" y2="50" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line><rect x="4" y="24" width="16" height="16" transform="translate(24 64) rotate(-180)" fill="none" stroke="#1B4BF0" stroke-width="1.5"></rect><line x1="26" y1="32" x2="32" y2="32" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></line></g></svg>
      <img className="w-[64px]" src="/assets/BMDM/page 11-09.svg" alt="" />
    ),
    title: "Firmware & Software Updates",
    description: "Ensure devices are always up-to-date.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>wallet 44</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="22" x2="34" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="22" x2="22" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="22" x2="10" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="38" y1="52" x2="34" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="22" x2="46" y2="22"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="50" y1="52" x2="46" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="26" y1="52" x2="22" y2="52"></line><line data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" x1="14" y1="52" x2="10" y2="52"></line><circle data-stroke="none" fill="#1B4BF0" cx="48" cy="37" r="2" stroke-linejoin="miter" stroke="none"></circle><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M7,15c-2.761,0-5-2.239-5-5 v0c0-2.761,2.239-5,5-5h40v4"></path><path fill="none" stroke="#1B4BF0" stroke-width="1.5" d="M58,31V15H7 c-2.761,0-5-2.239-5-5v41c0,4.418,3.582,8,8,8h48V43"></path><path data-color="color-2" fill="none" stroke="#F3F945" stroke-width="1.5" d="M62,43H48 c-3.314,0-6-2.686-6-6v0c0-3.314,2.686-6,6-6h14V43z"></path></g></svg>
      <img className="w-[64px]" src="/assets/BMDM/page 11-06.svg" alt="" />
    ),
    title: "Scalable Operations",
    description: "Easily manage thousands of connected devices.",
  },
  {
    icon: (
      // <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 64 64"><title>digital key</title><g stroke-linecap="round" transform="translate(0.25 0.25)" fill="#1B4BF0" stroke-linejoin="round" class="nc-icon-wrapper"><circle cx="16" cy="16" r="4" fill="none" stroke="#1B4BF0" stroke-width="1.5" data-cap="butt"></circle><circle cx="34" cy="57" r="4" fill="none" stroke="#1B4BF0" stroke-width="1.5" data-cap="butt"></circle><circle cx="52" cy="16" r="4" fill="none" stroke="#1B4BF0" stroke-width="1.5"></circle><polyline points="25 33 25 48 31.172 54.172" fill="none" stroke="#1B4BF0" stroke-width="1.5" data-cap="butt"></polyline><circle cx="56" cy="57" r="4" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></circle><path d="M42,45H37l-3-3V39H31L20.268,28.268a13.04,13.04,0,1,1,8-8L32,24H44l5.172-5.172" fill="none" stroke="#1B4BF0" stroke-width="1.5"></path><polyline points="56 53 56 48 45 37 42 37 42 34 37.064 29.064" fill="none" stroke="#F3F945" stroke-width="1.5" data-color="color-2"></polyline></g></svg>
      <img className="w-[64px]" src="/assets/BMDM/page 11-02.svg" alt="" />
    ),
    title: "Compliance & Security",
    description: "Adhere to industry regulations and secure data handling.",
  },
];
const inquiries = [
  { id: 1, name: "Partnership" },
  { id: 2, name: "Support" },
  { id: 3, name: "General Inquiry" },
];
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
  // {
  //   name: "Australia",
  //   address: "121 King Street, Melbourne Victoria.",
  //   svg: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="80" height="88" viewBox="0 0 80 88" fill="none">
  //       <path d="M79.0601 37.9172C79.0592 37.3085 78.817 36.7251 78.3865 36.2949C77.9559 35.8646 77.3724 35.6227 76.7637 35.6222C76.6036 35.6222 76.4439 35.6385 76.2872 35.6711C76.0275 35.2208 75.6539 34.8468 75.2039 34.5866C74.754 34.3264 74.2435 34.1892 73.7237 34.1887C73.7057 34.1887 73.6888 34.1924 73.6709 34.1927C71.2878 28.7086 67.6431 23.8648 63.0336 20.0559C58.4242 16.2471 52.9803 13.5807 47.1453 12.274C46.9445 10.37 46.8439 8.45671 46.8438 6.54213H46.8189V4.53436H45.7847V0.951355H45.0757V4.53436H44.0415V6.60272H33.7705V4.53436H32.7364V0.951355H32.0274V4.53436H30.9932V6.56756C30.9934 8.46684 30.8947 10.3649 30.6977 12.2539C23.3045 13.8734 16.57 17.6808 11.3707 23.1808C10.8985 23.0259 10.4046 22.9472 9.90767 22.9474C9.16877 22.948 8.44374 23.1482 7.80925 23.5269C7.17477 23.9056 6.6544 24.4487 6.30318 25.0988C5.87326 24.9909 5.42537 24.9752 4.98894 25.0527C4.55251 25.1301 4.13741 25.2991 3.77091 25.5484C3.4044 25.7977 3.0948 26.1217 2.86242 26.4992C2.63004 26.8767 2.48015 27.299 2.4226 27.7385C2.36504 28.178 2.40112 28.6247 2.52847 29.0493C2.65582 29.4739 2.87156 29.8667 3.16151 30.202C3.45146 30.5372 3.80906 30.8074 4.21082 30.9946C4.61259 31.1819 5.04942 31.282 5.49263 31.2884C2.99514 35.9165 1.48743 41.0133 1.06527 46.2552C0.643113 51.4971 1.31574 56.7696 3.04042 61.7376C4.7651 66.7056 7.50414 71.2607 11.0836 75.1135C14.663 78.9662 19.0045 82.0324 23.8325 84.1174C28.6604 86.2023 33.8692 87.2604 39.128 87.2244C44.3867 87.1885 49.5806 86.0592 54.3795 83.9084C59.1785 81.7576 63.4777 78.6323 67.0041 74.7309C70.5304 70.8295 73.2069 66.2374 74.8634 61.2463L74.8819 61.1918C77.129 54.4165 77.4118 47.1434 75.6975 40.214H76.7637C77.3726 40.2132 77.9563 39.971 78.3868 39.5404C78.8173 39.1098 79.0595 38.5261 79.0601 37.9172ZM46.8189 15.1728C47.8063 21.4376 49.8818 27.4813 52.9517 33.0308V48.099C51.0351 46.4809 49.2322 44.7328 47.5557 42.867V32.2824H47.1114V18.6027H46.8189L46.8189 15.1728ZM66.9239 65.2521V57.4083C67.5663 57.6716 68.2142 57.923 68.8677 58.1622V65.2521H66.9239ZM68.3967 65.9611L66.7857 68.7523L65.1743 65.9611H68.3967ZM66.9239 56.6364L66.7434 56.5588C65.909 56.2078 65.0849 55.8358 64.2711 55.4429V47.2141C65.736 48.5247 67.2704 49.7554 68.8677 50.9009V57.4022C68.214 57.1595 67.5661 56.9043 66.9239 56.6364ZM66.2149 57.1035V65.2521H64.271V56.2283C64.9128 56.5326 65.5608 56.8243 66.2149 57.1035ZM64.5723 66.3361L66.1837 69.1271H62.9613L64.5723 66.3361ZM62.3593 68.7523L60.748 65.9611H63.9704L62.3593 68.7523ZM61.7574 69.1271H58.535L60.146 66.3361L61.7574 69.1271ZM61.6186 65.2521V54.8876C62.2591 55.2355 62.9069 55.57 63.562 55.8909V65.2521L61.6186 65.2521ZM63.562 55.1042C61.9865 54.3162 60.4558 53.4437 58.9659 52.5039V41.7555C60.398 43.4551 61.9329 45.0653 63.562 46.5771V55.1042ZM60.9097 54.4898V65.2521H58.9659V53.3401C59.6061 53.7366 60.2541 54.1198 60.9097 54.4898ZM59.5441 65.9611L57.9331 68.7523L56.3218 65.9611H59.5441ZM57.3311 69.1271H54.1088L55.7198 66.3361L57.3311 69.1271ZM56.313 65.2521V51.5963C56.9513 52.0453 57.6007 52.4768 58.2568 52.8973V65.2521H56.313ZM58.2568 52.0584C56.6662 51.0181 55.132 49.894 53.6606 48.6909V34.2695C55.0259 36.5923 56.5622 38.8103 58.2569 40.905L58.2568 52.0584ZM55.604 51.0803V65.2521H53.6607V49.5971C54.2983 50.1065 54.9461 50.6009 55.604 51.0803ZM55.1178 65.9611L53.5068 68.7523L51.8955 65.9611H55.1178ZM43.521 71.7795L42.6539 69.8361H48.0719L47.212 71.7795H43.521ZM47.0826 72.4885V81.6271H43.6412V72.4884L47.0826 72.4885ZM41.9976 69.1271V65.9611H48.7261V69.1271H41.9976ZM30.541 71.7795L29.6739 69.8361H35.0913L34.232 71.7795H30.541ZM34.1026 72.4885V81.6271H30.6607V72.4884L34.1026 72.4885ZM8.96928 57.4228V50.926C10.5664 49.7813 12.1007 48.5513 13.5655 47.2415V55.4823C12.0746 56.1967 10.5426 56.8435 8.96928 57.4228ZM13.5655 56.263V65.2521H11.6216V57.137C12.2774 56.8584 12.9244 56.5653 13.5655 56.263ZM10.9126 57.422V65.2521H8.96928V58.1745C9.624 57.9358 10.2718 57.6849 10.9126 57.422ZM12.2706 65.9611L10.6593 68.7523L9.04831 65.9611H12.2706ZM12.8726 66.3361L14.4836 69.1271H11.2612L12.8726 66.3361ZM13.4746 65.9611H16.6969L15.0856 68.7523L13.4746 65.9611ZM14.2745 55.125V46.6066C15.9036 45.0949 17.4386 43.4848 18.8707 41.7853V52.5517C17.3892 53.4802 15.8572 54.338 14.2745 55.125ZM18.8707 53.3838V65.2521H16.9273V54.5248C17.5843 54.1571 18.2321 53.7768 18.8707 53.3838ZM16.2184 54.9203V65.2521H14.2745V55.9188C14.9303 55.5978 15.5783 55.265 16.2184 54.9203ZM17.2989 66.3361L18.9099 69.1271H15.6875L17.2989 66.3361ZM17.9009 65.9611H21.1232L19.5119 68.7523L17.9009 65.9611ZM19.5797 52.1063V40.9339C21.2746 38.8399 22.811 36.6226 24.1764 34.3003V48.7564C22.7046 49.9537 21.1702 51.0719 19.5797 52.1063ZM24.1764 49.6653V65.2521H22.2325V51.1403C22.8926 50.6628 23.5406 50.1712 24.1764 49.6653ZM21.5235 51.6525V65.2521H19.5796V52.9484C20.2377 52.5294 20.8857 52.0974 21.5235 51.6525ZM21.7252 66.3361L23.3362 69.1271H20.1138L21.7252 66.3361ZM22.3271 65.9611H25.5495L23.938 68.7523L22.3271 65.9611ZM24.8854 65.2521V49.0969C25.5459 48.554 26.1959 47.9998 26.8287 47.4277V65.2521L24.8854 65.2521ZM26.1515 66.3361L27.7625 69.1271H24.54L26.1515 66.3361ZM26.7534 65.9611H29.9757L28.3644 68.7523L26.7534 65.9611ZM34.5069 48.9768H34.5729V65.2521H30.1905V48.9767L34.5069 48.9768ZM30.9654 48.2678V43.2463C31.9569 42.1323 32.9011 40.9793 33.798 39.7872V48.2677L30.9654 48.2678ZM43.754 12.3986C43.5462 14.4839 43.2178 16.5554 42.7703 18.6027H35.0595C34.6069 16.5535 34.2743 14.4796 34.0636 12.3916C37.2808 11.9794 40.5375 11.9818 43.754 12.3986ZM34.0046 11.6859C33.9536 11.1123 33.8933 10.5397 33.8605 9.96404H43.9452C43.9129 10.5421 43.8792 11.1197 43.829 11.6932C40.5679 11.2721 37.2663 11.2697 34.0046 11.6859ZM35.2818 51.8088V48.9768H42.5304V51.8088H35.2818ZM39.878 52.5178V65.2521H37.9341V52.5177L39.878 52.5178ZM38.9272 29.8977C37.7186 27.3365 36.7147 24.6837 35.9249 21.964H41.9114C41.1273 24.6831 40.1295 27.3359 38.9272 29.8977ZM42.6481 21.964H43.7496V32.2824H40.1328C39.8536 31.7615 39.5946 31.2301 39.3329 30.7001C40.6864 27.8885 41.7956 24.9657 42.6481 21.964ZM38.9445 31.5036C39.0759 31.7631 39.2025 32.025 39.3381 32.2824H38.5368C38.6725 32.0227 38.8129 31.7657 38.9445 31.5036ZM43.3052 32.9913V35.4415H36.7582C37.2487 34.6382 37.7178 33.8215 38.1656 32.9913H43.3052ZM43.3052 36.1505V37.4747C43.0014 37.0352 42.7059 36.5938 42.4186 36.1505H43.3052ZM39.878 36.1505V48.2677H37.9341V36.1506L39.878 36.1505ZM35.9185 35.4415H34.5069V32.9913H37.364C36.906 33.8231 36.419 34.6367 35.9185 35.4415ZM35.4691 36.1505C35.1564 36.6364 34.8356 37.1166 34.5069 37.5911V36.1506L35.4691 36.1505ZM36.3089 36.1505H37.2251V48.2677H34.5069V38.8362C35.1358 37.961 35.7324 37.0626 36.3089 36.1505ZM35.2818 52.5177H37.2251V65.2521H35.2818V52.5177ZM40.587 48.2677V36.1506H41.5713C42.119 37.0116 42.7005 37.8717 43.3052 38.7137V48.2678L40.587 48.2677ZM43.2393 52.5177L43.2398 48.9767H47.6216V65.2521H43.2393V52.5177ZM43.7496 21.255H42.8476C43.021 20.6118 43.1807 19.9635 43.3311 19.3116H43.7495L43.7496 21.255ZM42.6026 19.3116C42.45 19.9637 42.2861 20.6115 42.1109 21.255H34.0625V19.3117L42.6026 19.3116ZM35.1826 21.964C36.049 24.9708 37.1736 27.8972 38.5437 30.7105C38.2842 31.2401 38.0125 31.7624 37.7362 32.2823H34.0625V21.964L35.1826 21.964ZM34.4016 65.9611L32.7906 68.7522L31.1796 65.9611H34.4016ZM30.2564 48.2677H29.4815V65.2521H27.5376V46.7643C28.475 45.8857 29.3852 44.9801 30.2564 44.0391V48.2677ZM30.5777 66.3361L32.1887 69.1271H28.9663L30.5777 66.3361ZM33.3925 69.1271L35.0035 66.3361L36.6149 69.1271H33.3925ZM35.6055 65.9611H38.8279L37.2169 68.7523L35.6055 65.9611ZM39.4298 66.3361L41.0412 69.1271H37.8188L39.4298 66.3361ZM40.0318 65.9611H41.2887V68.1383L40.0318 65.9611ZM40.587 65.2521V52.5177H42.5304V65.2521L40.587 65.2521ZM48.3307 65.2521V48.2677H47.5558V43.9092C48.4415 44.8686 49.3558 45.7928 50.2989 46.6817V65.2521L48.3307 65.2521ZM49.4352 65.9611H50.6916L49.4352 68.138V65.9611ZM51.2936 66.3361L52.905 69.1271H49.6825L51.2936 66.3361ZM51.0079 65.2521V47.3391C51.6452 47.9182 52.2906 48.4864 52.9518 49.0329V65.2521L51.0079 65.2521ZM44.7505 5.24333H46.1099V6.60272H44.7505V5.24333ZM44.7505 9.96404V7.3117H46.1099V18.6027H44.7505V9.96404ZM44.4585 21.964V19.3117H46.4024V32.2824H44.4585L44.4585 21.964ZM46.8467 32.9914V48.2677H44.0142V32.9914L46.8467 32.9914ZM44.0415 18.6027H43.4989C43.7073 17.6411 43.8842 16.6688 44.0415 15.6902V18.6027ZM44.0325 7.31172C44.0276 7.9615 44.018 8.61029 43.9903 9.25507H33.8372C33.8088 8.60791 33.7884 7.96022 33.7831 7.31172H44.0325ZM33.7705 15.6201C33.9316 16.6209 34.1204 17.6151 34.3368 18.6027H33.7705V15.6201ZM31.7022 5.24333H33.0616V6.60272H31.7022V5.24333ZM31.7022 7.3117H33.0616V18.6027H31.7022V7.3117ZM31.4097 19.3117H33.3536V32.2824H31.4097V19.3117ZM33.7979 32.9914V38.6111C32.9054 39.8417 31.9612 41.0322 30.9654 42.1824V38.3766H30.9608V33.9647H30.9654V32.9914H33.7979ZM30.9932 15.3611V18.6027H30.7007V32.2824H30.2564V42.9751C29.1822 44.17 28.0554 45.3163 26.876 46.4142H26.8287V46.4591C26.1942 47.047 25.5489 47.6239 24.8853 48.1815V33.0613C27.9296 27.5588 29.9962 21.57 30.9932 15.3611ZM3.10504 28.1486C3.10549 27.7576 3.19999 27.3725 3.38057 27.0257C3.56115 26.6789 3.8225 26.3807 4.14257 26.1561C4.46264 25.9316 4.83203 25.7873 5.21957 25.7355C5.6071 25.6838 6.00141 25.726 6.3692 25.8586L6.67926 25.969L6.81256 25.6682C7.07907 25.0697 7.51319 24.5613 8.06247 24.2043C8.61175 23.8473 9.25267 23.657 9.90777 23.6565C10.648 23.6081 11.3819 23.819 11.9835 24.253C12.5852 24.6869 13.0169 25.3168 13.2047 26.0344L13.2994 26.4358L13.6817 26.2824C14.0023 26.1536 14.3496 26.1054 14.6932 26.142C15.0367 26.1786 15.3661 26.2988 15.6523 26.4923C15.9386 26.6858 16.1731 26.9465 16.3352 27.2516C16.4973 27.5567 16.582 27.8969 16.5821 28.2424C16.5808 28.8041 16.3565 29.3423 15.9585 29.7387C15.5604 30.135 15.0212 30.3569 14.4595 30.3557L5.53961 30.5852C4.89387 30.5842 4.27489 30.3271 3.81847 29.8703C3.36205 29.4135 3.10548 28.7943 3.10504 28.1486ZM1.64897 49.2941C1.64859 42.9911 3.24811 36.791 6.29771 31.2748L14.4688 31.0646C14.8682 31.0646 15.2631 30.9797 15.6273 30.8157C15.9915 30.6517 16.3167 30.4122 16.5815 30.1131C16.8462 29.814 17.0444 29.4621 17.163 29.0806C17.2816 28.6992 17.3179 28.297 17.2694 27.9005C17.221 27.504 17.0889 27.1223 16.8819 26.7807C16.6749 26.439 16.3978 26.1452 16.0688 25.9187C15.7398 25.6922 15.3665 25.5381 14.9735 25.4666C14.5805 25.3951 14.1768 25.4079 13.7891 25.5041C13.4905 24.6388 12.8764 23.918 12.0694 23.4859C17.0873 18.2513 23.5335 14.6074 30.606 13.0077C29.5799 21.715 26.4366 30.0385 21.4509 37.2505C16.4651 44.4625 9.78874 50.3435 2.00529 54.3794C1.77083 52.6944 1.65178 50.9954 1.64897 49.2941ZM3.66362 59.0776V54.2955C5.25322 53.4102 6.78545 52.4553 8.2603 51.4307V57.6737C6.76103 58.205 5.22881 58.6729 3.66362 59.0776ZM8.2603 58.4253V65.2521H6.31645V59.0634C6.97038 58.8619 7.61834 58.6492 8.2603 58.4253ZM2.95464 59.0486C2.60197 57.7575 2.3198 56.4482 2.10936 55.1265C2.3936 54.9798 2.67375 54.8277 2.95464 54.6765V59.0486ZM3.66131 61.321V61.0705H3.66363V59.8099C4.31663 59.6436 4.96545 59.4693 5.60748 59.2808V65.2521H5.25042C4.64567 63.9733 4.1151 62.6608 3.66131 61.321ZM5.60412 65.9611H7.84374L6.68883 67.9611C6.30773 67.3066 5.94617 66.6399 5.60412 65.9611ZM7.10082 68.6669L8.44634 66.3361L10.0573 69.1271H7.39616C7.29875 68.973 7.19605 68.8225 7.10082 68.6669ZM29.9517 81.6271H29.4815V85.3148C20.6162 82.9843 12.9176 77.4752 7.85112 69.8361H28.8975L29.9517 72.1985V81.6271ZM34.5728 86.2607C33.0978 86.09 31.6343 85.8307 30.1905 85.4841V82.3361H34.5728V86.2607ZM42.9322 81.6271H42.4615V86.3403C41.2795 86.4539 40.0829 86.5168 38.8716 86.5168C37.6604 86.5168 36.4637 86.4539 35.2818 86.3403V81.6271H34.8116V72.2223L35.8668 69.8361H41.8775L42.9322 72.1996L42.9322 81.6271ZM47.5528 85.4841C46.1089 85.8307 44.6455 86.09 43.1705 86.2607V82.3361H47.5528V85.4841ZM48.2618 85.3149V81.6271H47.7915V72.2224L48.847 69.8361H69.8926C64.8261 77.4753 57.1272 82.9845 48.2618 85.3149ZM70.3476 69.1271H67.3876L68.9986 66.3361L70.4856 68.9121C70.4405 68.9844 70.3931 69.0551 70.3476 69.1271ZM70.9057 68.2203L69.6012 65.9611H72.1396C71.7531 66.7294 71.3418 67.4825 70.9057 68.2203ZM69.5767 65.2521V58.4086C70.2195 58.6337 70.8673 58.847 71.52 59.0486V65.2522L69.5767 65.2521ZM74.1729 61.0751C73.6984 62.5002 73.1375 63.8952 72.4933 65.2521H72.229V59.2616C72.8725 59.4507 73.5204 59.628 74.1729 59.7936L74.1729 61.0751ZM74.1729 59.0612C72.6148 58.6594 71.0828 58.1921 69.5767 57.6591V51.4038C71.0518 52.4265 72.5838 53.3827 74.1729 54.2723V59.0612ZM74.8819 58.7227V54.6514C75.1361 54.7883 75.3892 54.9268 75.6463 55.0601C75.4535 56.2931 75.1984 57.5155 74.8819 58.7227ZM76.0948 49.2941C76.0917 50.9721 75.9756 52.648 75.7472 54.3104C69.2908 50.9364 63.5828 46.2924 58.9659 40.6574V40.629H58.9425C56.9573 38.1959 55.1899 35.5929 53.6607 32.8501L53.5448 32.6369C50.1968 26.5684 48.0547 19.9093 47.2368 13.0269C52.8799 14.3307 58.1412 16.9322 62.603 20.625C67.0647 24.3177 70.604 28.9999 72.9397 34.2997C72.4882 34.4213 72.0723 34.6488 71.7265 34.9634C71.3806 35.278 71.1148 35.6706 70.9512 36.1086C70.8194 36.0823 70.6853 36.0692 70.5508 36.0695C70.2783 36.0689 70.0084 36.1221 69.7564 36.2259C69.5045 36.3298 69.2755 36.4824 69.0826 36.6749C68.8897 36.8673 68.7366 37.096 68.6322 37.3477C68.5278 37.5994 68.474 37.8693 68.474 38.1418C68.474 38.4143 68.5278 38.6841 68.6322 38.9359C68.7366 39.1876 68.8897 39.4162 69.0826 39.6087C69.2755 39.8012 69.5045 39.9537 69.7564 40.0576C70.0084 40.1615 70.2783 40.2146 70.5508 40.214H74.971C75.7162 43.1833 76.0936 46.2328 76.0948 49.2941ZM70.5508 39.5051C70.1893 39.5051 69.8425 39.3614 69.5868 39.1058C69.3312 38.8501 69.1875 38.5033 69.1875 38.1418C69.1875 37.7802 69.3312 37.4335 69.5868 37.1778C69.8425 36.9221 70.1893 36.7785 70.5508 36.7785C70.7233 36.7782 70.8942 36.8117 71.0537 36.8771L71.438 37.0344L71.5332 36.6301C71.6416 36.1717 71.8912 35.7589 72.2466 35.4498C72.602 35.1408 73.0455 34.951 73.5145 34.9073C73.9835 34.8637 74.4544 34.9682 74.8608 35.2063C75.2672 35.4445 75.5886 35.8041 75.7798 36.2346L75.9136 36.5373L76.2246 36.424C76.4425 36.3454 76.6749 36.3154 76.9056 36.3362C77.1364 36.3569 77.3597 36.4279 77.5601 36.5441C77.7604 36.6604 77.9329 36.819 78.0655 37.009C78.198 37.199 78.2874 37.4156 78.3273 37.6438C78.3672 37.872 78.3567 38.1061 78.2966 38.3298C78.2364 38.5535 78.128 38.7613 77.979 38.9386C77.83 39.116 77.644 39.2586 77.4341 39.3565C77.2241 39.4543 76.9953 39.505 76.7637 39.5051L70.5508 39.5051Z" fill="#1B4BF0">
  //       </path>
  //     </svg>
  //   ),
  // },
];

const BMDMBenefitsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(inquiries[0]);
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
      answer:
        "We provide IT, IoT, AI solutions, and digital marketing services to transform businesses.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work with retail, healthcare, finance, education, and other sectors.",
    },
    {
      question: "How experienced is your team?",
      answer:
        "Our team has delivered 80+ successful projects with 98% positive feedback.",
    },
    {
      question: "Do you provide custom AI solutions?",
      answer:
        "Yes, we develop AI applications tailored to your business needs.",
    },
    {
      question: "Can you help with digital marketing?",
      answer:
        "Absolutely, we offer SEO, social media, and content strategies for growth.",
    },
  ];
  const filtered =
    query === ""
      ? inquiries
      : inquiries.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );

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
              Ensure scalable, secure, and efficient deployment of IoT devices.
            </h2>
            <p className="text-gray-300 mt-4 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base">
              Streamline operations, reduce costs, and maintain device
              reliability at scale.
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
          style={{
            backgroundImage: "url('/assets/HomePage/bg1.png')",
            opacity: 10,
          }}
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
                  Ready to transform your business? Contact us today to learn
                  how our expert services can help you leverage AI for growth
                  and success.
                </p>
              </div>
            </div>
          </div>

          {/* Card Container */}
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Left: Form */}
            <div className="p-6 sm:p-8">
              <form
                className="space-y-6 w-full max-w-xl mx-auto"
                onSubmit={handleSubmit}
              >
                <Field className="w-full">
                  <Label className="block text-sm sm:text-base font-medium text-gray-700">
                    Business Email
                  </Label>
                  <p className="text-xs mb-2 text-gray-500">
                    Please use a business email to be connected with our sales
                    team
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
                            `cursor-pointer select-none relative py-2 pl-10 pr-4 ${
                              active
                                ? "bg-blue-100 text-blue-900"
                                : "text-gray-900"
                            }`
                          }
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
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
                {success && (
                  <p className="text-green-600 mt-2 text-center">{success}</p>
                )}
              </form>
            </div>

            {/* Right: Info + FAQ */}
            <div className="bg-[#6FE4FC] p-6 sm:p-8 md:p-12 flex flex-col justify-between h-full">
              {/* Top Block */}
              <div>
                <p className="text-gray-800 mb-6 text-base sm:text-lg md:text-xl">
                  Vebsigns has the most comprehensive local office network in
                  the industry.
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

export default BMDMBenefitsSection;
