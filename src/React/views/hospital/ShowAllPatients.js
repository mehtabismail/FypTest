import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DoctorHeaderStats from "React/components/Headers/DoctorHeaderStats";
import PatientsList from "React/components/List/PatientsList";


import DoctorsNavbar from "React/components/Navbars/DoctorsNavbar.js";

export default function ShowAllDoctors() {
  return (
    <>
      <div className="relative bg-blueGray-100">
        <DoctorsNavbar />
        {/* Header */}
        <PatientsList />
        {/* <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/doctor/dashboard" exact component={Dashboard} />
            <Route path="/doctor/maps" exact component={Maps} />
            <Route path="/doctor/AccountInformation" exact component={AccountInformation} />
            <Route path="/doctor/tables" exact component={Tables} />
            <Redirect from="/doctor" to="/doctor/dashboard" />
          </Switch>
        </div> */}
      </div>
    </>
  );
}
