import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

import { PiMusicNotesBold } from "react-icons/pi";
import Breadcrumb from "../../components/dashboard/breadcrumbs/Breadcrumb";
import { VscDebugStart } from "react-icons/vsc";

const Releases: React.FC = () => {
  const items = [
    { icon: BiSolidDashboard, text: "dashboard", href: "/dashboard" },
    { icon: PiMusicNotesBold, text: "releases", href: "/dashboard/releases" },
  ];

  const [activeTab, setActiveTab] = useState("Newest");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="text-white sm:p-12 p-3 !pb-0 !pt-2">
      <Breadcrumb items={items} />
      <div className="overflow-y-scroll hidden-scroll main-height-mobile">
        <h2 className="text-2xl font-medium">Releases</h2>
        <div className="divider before:bg-slate-400 after:bg-slate-400 my-0 after:h-[0.5px] before:h-[0.5px]"></div>
        <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-4 justify-between">
          <div className="flex items-center flex-col sm:flex-row gap-2 sm:gap-8 w-full sm:w-auto">
            <div className="relative text-gray-600 w-full sm:w-auto">
              <input
                className="border-2 border-gray-300 bg-white w-full sm:w-auto h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder:!text-black"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <IoSearch />
              </button>
            </div>
          </div>

          <div
            role="tablist"
            className="tabs tabs-boxed w-full sm:w-auto bg-card-color"
          >
            <a
              role="tab"
              className={`tab bg-card-color ${
                activeTab === "Popular"
                  ? "audio-displayer text-white"
                  : "text-slate-300"
              }`}
              onClick={() => handleTabClick("Popular")}
            >
              Popular
            </a>
            <a
              role="tab"
              className={`tab bg-card-color ${
                activeTab === "Newest"
                  ? "audio-displayer text-white"
                  : "text-slate-300"
              }`}
              onClick={() => handleTabClick("Newest")}
            >
              Newest
            </a>
            <a
              role="tab"
              className={`tab bg-card-color ${
                activeTab === "Oldest"
                  ? "audio-displayer text-white"
                  : "text-slate-300"
              }`}
              onClick={() => handleTabClick("Oldest")}
            >
              Oldest
            </a>
          </div>
        </div>
        <div className="divider mb-4 before:bg-slate-400 after:bg-slate-400 my-0 after:h-[0.5px] before:h-[0.5px]"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-center place-items-center sm lg:grid-cols-6">
          <div className="flex flex-col cursor-pointer">
            <div className="relative">
              <div className="overlay !rounded-2xl">
                <div className="bg-main-back rounded-xl p-3">
                  <VscDebugStart
                    className="hover:text-logo-color"
                    fontSize={"2rem"}
                  />
                </div>
              </div>
              <img
                className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
                src="/assets/images/galleries/gallery1.jpg"
                alt=""
              />
            </div>

            <p className="text-white text-lg mt-2">Space Melody</p>
            <p className="text-slate-300">Florida Georgia</p>
          </div>

          <div className="flex flex-col cursor-pointer">
            <div className="relative">
              <div className="overlay !rounded-2xl">
                <div className="bg-main-back rounded-xl p-3">
                  <VscDebugStart
                    className="hover:text-logo-color"
                    fontSize={"2rem"}
                  />
                </div>
              </div>
              <img
                className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
                src="/assets/images/galleries/gallery2.jpg"
                alt=""
              />
            </div>

            <p className="text-white text-lg mt-2">Space Melody</p>
            <p className="text-slate-300">Florida Georgia</p>
          </div>

          <div className="flex flex-col cursor-pointer">
            <div className="relative">
              <div className="overlay !rounded-2xl">
                <div className="bg-main-back rounded-xl p-3">
                  <VscDebugStart
                    className="hover:text-logo-color"
                    fontSize={"2rem"}
                  />
                </div>
              </div>
              <img
                className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
                src="/assets/images/galleries/gallery3.jpg"
                alt=""
              />
            </div>

            <p className="text-white text-lg mt-2">Space Melody</p>
            <p className="text-slate-300">Florida Georgia</p>
          </div>

          <div className="flex flex-col cursor-pointer">
            <div className="relative">
              <div className="overlay !rounded-2xl">
                <div className="bg-main-back rounded-xl p-3">
                  <VscDebugStart
                    className="hover:text-logo-color"
                    fontSize={"2rem"}
                  />
                </div>
              </div>
              <img
                className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
                src="/assets/images/galleries/gallery4.jpg"
                alt=""
              />
            </div>

            <p className="text-white text-lg mt-2">Space Melody</p>
            <p className="text-slate-300">Florida Georgia</p>
          </div>

          <div className="flex flex-col cursor-pointer">
            <div className="relative">
              <div className="overlay !rounded-2xl">
                <div className="bg-main-back rounded-xl p-3">
                  <VscDebugStart
                    className="hover:text-logo-color"
                    fontSize={"2rem"}
                  />
                </div>
              </div>
              <img
                className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
                src="/assets/images/galleries/gallery5.jpg"
                alt=""
              />
            </div>

            <p className="text-white text-lg mt-2">Space Melody</p>
            <p className="text-slate-300">Florida Georgia</p>
          </div>

          <div className="flex flex-col cursor-pointer">
            <div className="relative">
              <div className="overlay !rounded-2xl">
                <div className="bg-main-back rounded-xl p-3">
                  <VscDebugStart
                    className="hover:text-logo-color"
                    fontSize={"2rem"}
                  />
                </div>
              </div>
              <img
                className="md:w-36 md:h-36 w-44 h-44 rounded-2xl object-cover hover:bg-slate-600"
                src="/assets/images/galleries/gallery6.jpg"
                alt=""
              />
            </div>

            <p className="text-white text-lg mt-2">Space Melody</p>
            <p className="text-slate-300">Florida Georgia</p>
          </div>
        </div>
        <button className="btn uppercase audio-displayer px-8 border-0 text-white font-medium mx-auto block mt-8">
          load more
        </button>
      </div>
    </main>
  );
};

export default Releases;
