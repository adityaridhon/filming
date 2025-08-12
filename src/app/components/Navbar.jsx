"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full mx-auto z-50">
      <div
        className={`wrap mt-6 py-4 px-8 mx-6 md:px-12 bg-gradient-to-r from-blue-50 to-blue-100 m-2 md:m-6 ${
          isMenuOpen ? "rounded-2xl" : "rounded-2xl"
        } md:rounded-full`}
      >
        <div className="navbar flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"} className="logo flex items-center gap-4">
            <img
              src={"/logo.png"}
              alt="Logo"
              className="w-7 h-7 md:w-10 md:h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="menu hidden md:block">
            <ul className="flex items-center gap-4 text-blue-900 font-semibold">
              <li>
                <Link
                  className="hover:text-white px-4 py-2 rounded-xl hover:bg-blue-900 transition-all duration-150"
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white px-4 py-2 rounded-xl hover:bg-blue-900 transition-all duration-150"
                  href={"/popular"}
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white px-4 py-2 rounded-xl hover:bg-blue-900 transition-all duration-150"
                  href={"/top-rated"}
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white px-4 py-2 rounded-xl hover:bg-blue-900 transition-all duration-150"
                  href={"/upcoming"}
                >
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-900 p-2 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {isMenuOpen ? (
                <RiCloseFill className="w-6 h-6" />
              ) : (
                <RiMenuFill className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-blue-200">
            <ul className="flex flex-col gap-2 text-blue-900 font-semibold">
              <li>
                <Link
                  className="block hover:text-white px-4 py-3 rounded-xl hover:bg-blue-900 transition-all duration-150"
                  href={"/popular"}
                  onClick={toggleMenu}
                >
                  Popular
                </Link>
              </li>
              <li>
                <Link
                  className="block hover:text-white px-4 py-3 rounded-xl hover:bg-blue-900 transition-all duration-150"
                  href={"/top-rated"}
                  onClick={toggleMenu}
                >
                  Top Rated
                </Link>
              </li>
              <li>
                <Link
                  className="block hover:text-white px-4 py-3 rounded-xl hover:bg-blue-900 transition-all duration-150"
                  href={"/upcoming"}
                  onClick={toggleMenu}
                >
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
