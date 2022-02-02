import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DoctorHeaderStats from "React/components/Headers/DoctorHeaderStats";
import PatientsList from "React/components/List/PatientsList";


import DoctorsNavbar from "React/components/Navbars/DoctorsNavbar.js";

export default function ShowAllPatients() {
  return (
    <>
      <div className="relative bg-blueGray-100">
        <DoctorsNavbar />
        {/* Header */}
        <PatientsList />
      </div>
    </>
  );
}
