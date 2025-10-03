import { Plus } from "lucide-react";
import React from "react";
import { Fragment } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { blogPosts } from "./useCasePost";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UseCaseGrid = () => {
const categories = ["Show All", "HealthTech", "Wellness & AI", "FinTech", "FoodTech", "E-commerce"];

  const filteredPosts = (category) => {
    if (category === "Show All") return blogPosts;
    return blogPosts.filter((post) => post.category.includes(category));
  };
  return (
    <section className="bg-gradient-to-r from-[#122D4D] via-[#15042E] via-[#241032] to-[#15042E] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs Section */}
        <TabGroup>
          {/* Tabs */}
          <TabList className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((category) => (
              <Tab as={Fragment} key={category}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      "px-4 sm:px-5 py-2 text-sm sm:text-base font-medium rounded-full transition-all duration-300",
                      selected
                        ? "bg-purple-600 text-white shadow-md"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    )}
                  >
                    {category}
                  </button>
                )}
              </Tab>
            ))}
          </TabList>

          {/* Tab Panels */}
          <TabPanels>
            {categories.map((category) => (
              <TabPanel key={category}>
                <div className="space-y-12 sm:space-y-16">
                  {filteredPosts(category).map((post) => (
                    <div
                      key={post.id}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6"
                    >
                      {/* Left Image */}
                      <div className="rounded-2xl overflow-hidden shadow-lg order-1 md:order-1">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 sm:h-80 md:h-full object-cover"
                        />
                      </div>

                      {/* Right Content */}
                      <div className="order-2 md:order-2 text-left md:text-left">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-gray-300 text-base sm:text-lg">
                          {post.excerpt}
                        </p>

                        {/* Bullet Points */}
                        {post.points && (
                          <ul className="mt-4 space-y-2 text-sm sm:text-base">
                            {post.points.map((point, i) => (
                              <li
                                key={i}
                                className="flex items-start text-gray-200 justify-left md:justify-start"
                              >
                                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 mt-1 mr-2 rounded-full bg-pink-500"></span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Solutions */}
                        {post.solutions && (
                          <div className="mt-6">
                            <h4 className="text-lg sm:text-xl font-semibold text-white">
                              Solutions & Impact:
                            </h4>
                            <p className="mt-2 text-gray-400 text-sm sm:text-lg">
                              {post.solutions}
                            </p>
                          </div>
                        )}

                        {/* CTA */}
                        <div className="mt-6">
                          <Link
                            to={`/use-cases/${post.slug}`}
                            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium px-4 sm:px-5 py-2 rounded-lg shadow-md hover:opacity-90 transition"
                          >
                            Read More <Plus className="inline-block ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>



  );
};

export default UseCaseGrid;
