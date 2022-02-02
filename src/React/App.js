import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

// DOCTOR SCREENS
import DoctorHome from "./views/user/doctorHome";
import AccountInformation from "./views/doctor/AccountInformation";
import AdminHome from "./views/user/adminHome";
import HospitalHome from "./views/user/hospitalHome";
import PatientHome from "./views/user/patientHome";
import ShowAllPatients from "./views/doctor/ShowAllPatients";
import AddPatient from "./components/Forms/addPatient";
import UploadReports from "./components/Inputs/UploadReports";

// import AdminHome from "./views/user/adminHome";
// import HospitalHome from "./views/user/hospitalHome";

export default function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DOCTOR ROUTES */}
        <Route path="/doctor/dashboard" element={<DoctorHome />} />
        <Route
          path="/doctor/AccountInformation"
          element={<AccountInformation />}
        />
        <Route path="/doctor/show-all-patients" element={<ShowAllPatients />} />
        <Route path="/doctor/add-new-patient" element={<AddPatient />} />
        <Route path="/doctor/add-report" element={<UploadReports />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/dashboard" element={<AdminHome />} />

        {/* HOSPITAL ROUTES */}
        <Route path="/hospital/dashboard" element={<HospitalHome />} />

        {/* PATIENT ROUTES */}
        <Route path="/patient/dashboard" element={<PatientHome />} />
      </Routes>
    </Router>
  );
}
