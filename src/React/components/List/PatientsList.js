import React, {useEffect} from "react";
import { Table } from "reactstrap";
import FileIcon, { defaultStyles } from "react-file-icon";
export default function PatientsList() {
  useEffect(() => {
    const fetchPatientsData = async () => {
      return await fetch('')
    }
    return () => {
      fetchPatientsData()
    };
  }, []);
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
          <text className="text-white font-bold text-3xl p-5">Patients List</text>
          <Table responsive>
        <thead>
          <tr className=" p-5">
            <th className="text-white font-bold text-lg p-5">#</th>
            <th className="text-white font-bold text-lg p-5">Patient Name</th>
            <th className="text-white font-bold text-lg p-5">Patient ID</th>
            <th className="text-white font-bold text-lg p-5">E-mail</th>
            <th className="text-white font-bold text-lg p-5">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="p-5">
            <th scope="row" className="font-bold text-lg p-5">1</th>
            <td className="font-bold text-lg p-5">Yasir</td>
            <td className="font-bold text-lg p-5">46123245151</td>
            <td className="font-bold text-lg p-5">Yasir@gmail.com</td>
            <td className="font-bold text-lg p-5">22-01-2022</td>
          </tr>
          <tr>
            <th scope="row" className="font-bold text-lg p-5">2</th>
            <td className="font-bold text-lg p-5">Zia Haider</td>
            <td className="font-bold text-lg p-5">89122324574</td>
            <td className="font-bold text-lg p-5">zia@gmail.com</td>
            <td className="font-bold text-lg p-5">22-01-2022</td>
          </tr>
        </tbody>
      </Table>
            
          </div>
        </div>
      </div>
    </>
  );
}



{/* Card stats */}
            {/* <div className="flex flex-row w-full bg-red-800">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button
                  className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg"
                  onClick={() => console.log("hello navigation")}
                >
                  Show Patients
                </button>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <button className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg">
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
                <button className="bg-white text-lightBlue-600 font-bold p-5 rounded-lg">
                  Patient Reports
                </button>
              </div>
            </div> */}