import React, { useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { RiCalendarEventLine } from "react-icons/ri";
import Breadcrumb from "../../components/dashboard/breadcrumbs/Breadcrumb";
import { VscDebugStart } from "react-icons/vsc";
import { LuTicket } from "react-icons/lu";

const Events: React.FC = () => {
  const items = [
    { icon: BiSolidDashboard, text: "dashboard", href: "/dashboard" },
    { icon: RiCalendarEventLine, text: "events", href: "/dashboard/events" },
  ];

  const [activeTab, setActiveTab] = useState("Newest");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <main className="text-white sm:p-12 p-3 !pb-0 !pt-2">
      <Breadcrumb items={items} />
      <div className="overflow-y-scroll hidden-scroll main-height-mobile">
        <h2 className="text-2xl font-medium">Events</h2>
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
        <div className="grid grid-cols-1 place-items-center sm:place-items-start gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 sm:gap-20">
          <div className="h-80 w-80 md:w-auto rounded-2xl relative">
            <div className="absolute z-10 text-white flex flex-col left-4 h-full w-full justify-evenly">
              <button className="flex items-center font-medium btn w-32 flex-nowrap !h-10 !min-h-10 p-0 bg-slate-800 border-0 text-white hover:bg-special-btn ticket-btn">
                <LuTicket className="text-logo-color" fontSize={"1.5rem"} />
                <b> Buy ticket</b>
              </button>
              <div className="flex flex-col">
                <p>March 31, 2021</p>
                <p className="text-slate-200">6:40 pm</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-medium">Rocky Pub</p>
                <p>514 S. Magnolia St. Orlando, FL 32806</p>
              </div>
            </div>
            <img
              className="w-full h-full rounded-2xl object-cover opacity-70"
              src="/assets/images/events/event2.jpg"
              alt=""
            />
          </div>
          <div className="h-80 w-80 md:w-auto rounded-2xl relative">
            <div className="absolute z-10 text-white flex flex-col left-4 h-full w-full justify-evenly">
              <button className="flex items-center font-medium btn w-32 flex-nowrap !h-10 !min-h-10 p-0 bg-slate-800 border-0 text-white hover:bg-special-btn ticket-btn">
                <LuTicket className="text-logo-color" fontSize={"1.5rem"} />
                <b> Buy ticket</b>
              </button>
              <div className="flex flex-col">
                <p>March 31, 2021</p>
                <p className="text-slate-200">6:40 pm</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-medium">Rocky Pub</p>
                <p>514 S. Magnolia St. Orlando, FL 32806</p>
              </div>
            </div>
            <img
              className="w-full h-full rounded-2xl object-cover opacity-70"
              src="/assets/images/events/event1.jpg"
              alt=""
            />
          </div>
          <div className="h-80 w-80 md:w-auto rounded-2xl relative">
            <div className="absolute z-10 text-white flex flex-col left-4 h-full w-full justify-evenly">
              <button className="flex items-center font-medium btn w-32 flex-nowrap !h-10 !min-h-10 p-0 border-0 text-white bg-special-btn hover:bg-special-btn">
                <LuTicket className="text-white" fontSize={"1.5rem"} />
                <b>Sold out</b>
              </button>
              <div className="flex flex-col">
                <p>March 31, 2021</p>
                <p className="text-slate-200">6:40 pm</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-medium">Rocky Pub</p>
                <p>514 S. Magnolia St. Orlando, FL 32806</p>
              </div>
            </div>
            <img
              className="w-full h-full rounded-2xl object-cover opacity-70"
              src="/assets/images/events/event3.jpg"
              alt=""
            />
          </div>
          <div className="h-80 w-80 md:w-auto rounded-2xl relative">
            <div className="absolute z-10 text-white flex flex-col left-4 h-full w-full justify-evenly">
              <button className="flex items-center font-medium btn w-32 flex-nowrap !h-10 !min-h-10 p-0 bg-slate-800 border-0 text-white hover:bg-special-btn ticket-btn">
                <LuTicket className="text-logo-color" fontSize={"1.5rem"} />
                <b> Buy ticket</b>
              </button>
              <div className="flex flex-col">
                <p>March 31, 2021</p>
                <p className="text-slate-200">6:40 pm</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-3xl font-medium">Rocky Pub</p>
                <p>514 S. Magnolia St. Orlando, FL 32806</p>
              </div>
            </div>
            <img
              className="w-full h-full rounded-2xl object-cover opacity-70"
              src="/assets/images/events/event1.jpg"
              alt=""
            />
          </div>
        </div>
        <button className="btn uppercase audio-displayer px-8 border-0 text-white font-medium mx-auto block mt-8">
          load more
        </button>
      </div>
    </main>
  );
};

export default Events;
