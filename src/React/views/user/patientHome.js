import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../../components/Navbars/AdminNavbar.js";

import DoctorSidebar from "React/components/Sidebar/DoctorSidebar.js";
import DoctorHeaderStats from "React/components/Headers/DoctorHeaderStats.js";
import PatientNavbar from "React/components/Navbars/PatientNavbar.js";
import PatientHeaderStates from "React/components/Headers/PatientHeaderStates.js";

export default function PatientHome() {
  return (
    <>
      <PatientNavbar />
        <PatientHeaderStates />
        {/* Header */}
        {/* <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/doctor/dashboard" exact component={Dashboard} />
            <Route path="/doctor/maps" exact component={Maps} />
            <Route path="/doctor/AccountInformation" exact component={AccountInformation} />
            <Route path="/doctor/tables" exact component={Tables} />
            <Redirect from="/doctor" to="/doctor/dashboard" />
          </Switch>
        </div> */}
    </>
  );
}
