import React from "react";
import { useNavigate } from "react-router-dom";

export default function DoctorHeaderStats() {
  let navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-row w-full bg-red-800">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button
                  className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg"
                  onClick={() => navigate("/doctor/show-all-patients")}
                >
                  Show Patients
                </button>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button
                  className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg"
                  onClick={() => {
                    navigate("/doctor/add-new-patient");
                  }}
                >
                  ADD Patient
                </button>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg">
                  REMOVE Patient
                </button>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg">
                  Update Patient
                </button>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button
                  className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg"
                  onClick={() => {
                    navigate("/doctor/add-report");
                  }}
                >
                  Patient Reports
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
