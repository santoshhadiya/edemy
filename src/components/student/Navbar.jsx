import React, { useContext } from "react";
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const isCourseListPage = location.pathname.includes("/course-list");
  const { navigate, isEducator } = useContext(AppContext);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-36 border-b border-gray-300 py-3 sm:py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      {/* Logo */}
      <div className="flex flex-col">
        <img
          src={assets.logo}
          alt="Logo"
          onClick={() => navigate("/")}
          className="w-24 sm:w-28 md:w-32 cursor-pointer"
        />
        <p className="text-[8px] sm:text-[10px] ml-[30px] sm:ml-[40px]">By Santosh Hadiya</p>
      </div>

      {/* Desktop Navigation - shown on md screens and larger */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 text-gray-600">
        {user && (
          <div className="flex items-center gap-2 lg:gap-3 text-sm lg:text-base">
            <button 
              onClick={() => navigate("/educator")} 
              className="hover:text-blue-600 whitespace-nowrap"
            >
              {isEducator ? "Educator Dashboard" : "Become Educator"}
            </button>
            <span>|</span>
            <Link to="/my-enrollments" className="hover:text-blue-600 whitespace-nowrap">
              My Enrollments
            </Link>
          </div>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full hover:bg-blue-700 transition text-sm sm:text-base whitespace-nowrap"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Navigation - shown on screens smaller than md */}
      <div className="flex md:hidden items-center gap-2 sm:gap-3 text-gray-600">
        {user && (
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
            <button 
              onClick={() => navigate("/educator")} 
              className="hover:text-blue-600 whitespace-nowrap"
            >
              {isEducator ? "Dashboard" : "Educator"}
            </button>
            <span>|</span>
            <Link to="/my-enrollments" className="hover:text-blue-600 whitespace-nowrap">
              Enrollments
            </Link>
          </div>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition text-xs sm:text-sm whitespace-nowrap"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;