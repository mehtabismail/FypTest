import React from "react";

import { Link } from "react-router-dom";
import Footer from "./components/Footers/Footer";

export default function Home() {
  return (
    <div>
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-bold text-4xl text-lightBlue-600">
                MEDICAL REPORT SYSTEM USING BLOCKCHAIN.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Aim of this project is to develop the online platform to secure
                the medical reports of patient’s using blockchain technology.
                MRUB is the platform allows their users to store their patient’s
                medical reports with best security.
              </p>
              <div className="mt-12">
                <a className="text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                  <Link to="/login">Get started</Link>
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("./assets/img/pattern_react.png").default}
          alt="..."
        />
      </section>
      <Footer />
    </div>
  );
}
