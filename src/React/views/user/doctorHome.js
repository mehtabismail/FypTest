import React from "react";
import DoctorSidebar from "React/components/Sidebar/DoctorSidebar.js";
import DoctorHeaderStats from "React/components/Headers/DoctorHeaderStats.js";
import DoctorsNavbar from "React/components/Navbars/DoctorsNavbar.js";

export default function DoctorHome() {
  return (
    <>
      <DoctorSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <DoctorsNavbar />
        {/* Header */}
        <DoctorHeaderStats />
      </div>
    </>
  );
}
