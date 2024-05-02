import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "./SearchBar";
import Swap from "../swap/Swap";
import { FaArrowLeft } from "react-icons/fa6";
import SideBar from "./SideBar";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`flex px-6 sm:px-14 fixed-navbar items-center lg:m-auto lg:max-w-[90rem] justify-between pt-4 mx-auto ${
          isScrolled
            ? "fixed w-full pb-4 bg-black z-[1000]"
            : "fixed w-full pb-4 bg-black sm:bg-transparent z-[1000]"
        }`}
      >
        <Swap
          onIconColor="#fff"
          offIconColor="#fff"
          iconOff={GiHamburgerMenu}
          className="sm:hidden"
          iconOn={FaArrowLeft}
          onToggleOn={() => setIsSideBarOpen(true)}
          onToggleOff={() => setIsSideBarOpen(false)}
        />
        <h1 className="text-logo-color font-bold text-2xl sm:text-3xl font-mono">
          <span className="text-white">Yalla</span>Music
        </h1>
        <ul className="sm:flex hidden items-center text-white gap-12 text-lg">
          <li>
            <NavLink className="pb-3 capitalize" to="/">
              home
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="pb-3 capitalize" to="/auth/login">
              login
            </NavLink>
          </li> */}
          <li>
            <NavLink className="pb-3" to="/yallamusic/live">
              YallaMusic
              <span className="font-medium" style={{ color: "red" }}>
                Live
              </span>
            </NavLink>
          </li>
          <li className="relative">
            <SearchBar />
          </li>
        </ul>

        <div className="relative sm:hidden">
          <SearchBar />
        </div>
      </nav>
      {/* Add transition to the sidebar */}
      <div
        className={`transition-transform duration-300 ${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 bg-gray-900 w-[80%] h-full z-50`}
      >
        <SideBar />
      </div>
    </>
  );
};

export default Navbar;
