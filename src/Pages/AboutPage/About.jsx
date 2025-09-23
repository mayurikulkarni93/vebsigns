import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import TimelineStepper from './TimelineStepper';
import LeadingCompanies from './LeadingCompanies';
import DrivenByData from './DrivenByData';
import Locations from './Locations';
import Team from '../HomePage/Team';

const About = () => {
    return (
        <div>
            <Header />
            <section className="relative bg-gradient-to-b from-[#0a0220] to-[#120536] text-white py-20 px-6 md:px-12 lg:px-20 overflow-hidden">
                {/* Background Image (above gradient but below content) */}
                <div
                    className="absolute inset-0 bg-[url('/assets/HomePage/bg-ab.png')] bg-cover bg-center bg-no-repeat opacity-40"
                ></div>

                {/* Content */}
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    {/* Company name */}
                    <p className="text-blue-400 uppercase tracking-wide font-semibold mb-4 text-sm sm:text-base">
                        Vebsigns – IT & IoT Innovators
                    </p>

                    {/* Main Heading */}
                    <h1 className="uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
                        Empowering businesses <br /> with AI and IoT <br />for smarter growth
                    </h1>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">6Y</p>
                            <p className="text-gray-300 text-xs sm:text-sm mt-1">Years on the market</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">2</p>
                            <p className="text-gray-300 text-xs sm:text-sm mt-1">
                                Offices in India, Canada
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">50+</p>
                            <p className="text-gray-300 text-xs sm:text-sm mt-1">Employees on board</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Timeline Stepper Component */}
            <TimelineStepper />
            <LeadingCompanies />
            <DrivenByData />
            <Team />
            <Locations />
            <Footer />
        </div>
    );
};

export default About;
