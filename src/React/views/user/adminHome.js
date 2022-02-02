import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components

import AdminNavbar from "../../components/Navbars/AdminNavbar.js";

import DoctorSidebar from "React/components/Sidebar/DoctorSidebar.js";
import DoctorHeaderStats from "React/components/Headers/DoctorHeaderStats.js";
// import Dashboard from "../doctor/Dashboard.js";
import Maps from "../doctor/Maps.js";
// import Tables from "../../views/doctor/Tables.js";
import DoctorsNavbar from "React/components/Navbars/DoctorsNavbar.js";
import AccountInformation from "../doctor/AccountInformation.js";
import Sidebar from "React/components/Sidebar/Sidebar.js";
import Navbar from "../../components/Navbars/AdminNavbar.js";

export default function AdminHome() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        <DoctorHeaderStats />
        {/* <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Routes>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/AccountInformation" exact component={AccountInformation} />
            <Route path="/admin/tables" exact component={Tables} />
            <Navigate to="/admin/dashboard" replace={true} />
          </Routes>
        </div> */}
      </div>
    </>
  );
}
