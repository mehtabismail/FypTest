import React from "react";

// components

import CardSettings from "../../components/Cards/CardSettings.js";
import CardProfile from "../../components/Cards/CardProfile.js";
import DoctorsNavbar from "React/components/Navbars/DoctorsNavbar.js";
import DoctorHeaderStats from "React/components/Headers/DoctorHeaderStats.js";
import { Link } from "react-router-dom";

export default function AccountInformation() {
  return (
    <>
    <div style={{backgroundColor:"#0284c7"}}>

    <nav className="w-full z-10  md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <Link
            className="text-white text-lg uppercase hidden lg:inline-block font-semibold"
            to="/doctor/dashboard"
            // onClick={(e) => e.preventDefault()}
          >
            Dorctor's Dashboard
          </Link>
          {/* <Link
                className="text-white hover:font-bold text-xs uppercase py-3 px-3 font-bold block"
                to="/login"
              >
                <i class="fas fa-sign-out-alt mr-2"></i>{" "}
                Log Out
              </Link> */}
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          <Link
                className="text-white hover:font-bold text-xs uppercase py-3 px-3 font-bold block"
                to="/login"
              >
                <i class="fas fa-sign-out-alt mr-2"></i>{" "}
                Log Out
              </Link>
        </div>
      </nav>
    </div>
    <div style={{height:"10%", backgroundColor: "transparent"}}><text style={{color: "transparent"}}>hello</text></div>
      <div className="flex flex-wrap " >
        <div className="w-full lg:w-8/12 px-4">
          <CardSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div>
      </div>
    </>
  );
}
