import React from "react";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
      
        <div className="px-4 md:px-10 mx-auto w-full">
        <text className="text-white">
          Hospitals Dashboard
        </text>
          <div>
            {/* Card stats */}
            <div className="flex flex-row w-full bg-red-800">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg">
                  ADD DOCTOR
                </button>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg">
                  REMOVE DOCTOR
                </button>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg">
                  Update DOCTOR
                </button>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg">
                  Show DOCTORS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
