import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "../serviceWorker";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
// layouts

import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";

// views without layouts

import Landing from "./views/Landing.js";
import Profile from "./views/Profile.js";
import Index from "./views/Index.js";
import DoctorHome from "./views/user/doctorHome";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <DoctorHome />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.register();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import * as serviceWorker from '../../serviceWorker';
// import Test from './Test';

// ReactDOM.render(<Test />, document.getElementById('root'));
// serviceWorker.unregister();


