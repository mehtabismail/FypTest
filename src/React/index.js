import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import AllRoutes from './App'
import TestReport from "./components/Inputs/test";
import UploadReports from "./components/Inputs/UploadReports";

ReactDOM.render(<AllRoutes />, document.getElementById("root"));
