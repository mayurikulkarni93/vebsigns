import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import TimelineStepper from './TimelineStepper';
import LeadingCompanies from './LeadingCompanies';
import DrivenByData from './DrivenByData';
import Locations from './Locations';

const About = () => {
    return (
        <div>
            <Header />
            <section className="relative bg-gradient-to-b from-[#0a0220] to-[#120536] text-white py-20 px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Company name */}
                    <p className="text-blue-400 uppercase tracking-wide font-semibold mb-4 text-sm sm:text-base">
                        Vebsigns – AI Company
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
                        BRINGS AI TO YOUR <br className="hidden md:block" />
                        DATA TO HELP YOU BRING AI TO THE WORLD.
                    </h1>

                    {/* Stats */}
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">37Y</p>
                            <p className="text-gray-300 text-xs sm:text-sm mt-1">Years on the market</p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">3</p>
                            <p className="text-gray-300 text-xs sm:text-sm mt-1">
                                Offices in Canada, Australia, USA
                            </p>
                        </div>
                        <div>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-bold">150+</p>
                            <p className="text-gray-300 text-xs sm:text-sm mt-1">Employees on board</p>
                        </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-gray-300 border-t border-gray-700 pt-6">
                        <a href="#" className="hover:text-white transition">
                            Overview
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Story
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Mission and Value
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Meet the Team
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Capabilities
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Other
                        </a>
                    </div>
                </div>
            </section>

            {/* Timeline Stepper Component */}
            <TimelineStepper />
            <LeadingCompanies />
            <DrivenByData />
            <Locations />
            <Footer />
        </div>
    );
};

export default About;
