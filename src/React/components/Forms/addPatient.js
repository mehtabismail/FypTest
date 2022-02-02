import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Circles, TailSpin } from "react-loader-spinner";

function AddPatient() {
  // USESTATE HOOKS
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [contact, setContact] = useState("");
  var [address, setAddress] = useState("");
  var [isLoading, setLoading] = useState(false);

  var count = 0;

  // USE-EFFECT HOOK
  useEffect(() => {
    return () => {};
  }, [count]);

  const handleNameChange = (event) => {
    setName((name = event.target.value));
  };
  const handleEmailChange = (event) => {
    setEmail((email = event.target.value));
  };
  const handleContactChange = (event) => {
    setContact((contact = event.target.value));
  };
  const handleAddressChange = (event) => {
    setAddress((address = event.target.value));
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#0284c7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {isLoading === true ? (
        <TailSpin heigth="100" width="100" color="red" ariaLabel="loading" />
      ) : null}
      <div style={{ position: "absolute", top: 0, left: 0, padding: 20 }}>
        <Link
          to="/doctor/dashboard"
          className={
            "text-5xl py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent rounded-full text-blueGray-700"
          }
        >
          <i className="fa fa-angle-left"></i>
        </Link>
      </div>
      <div style={{ width: "80%" }}>
        <div className="p-5">
          <text className="p-5 text-2xl font-bold">Adding New Patient</text>
        </div>

        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Enter Patient Name"
            name="name"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Patient Email"
            name="email"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <input
            type="text"
            placeholder="Enter Patient Contact Info"
            name="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            value={contact}
            onChange={handleContactChange}
            required
          />
        </div>
        <div className="mb-3 pt-0">
          <textarea
            placeholder="Patient Address"
            name="message"
            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            required
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div className="mb-3 pt-0">
          <button
            className="bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={async () => {
              setLoading((isLoading = true));
              return await fetch("http://localhost:5000/api/v1/patients", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmE0OWZhMGIxN2ZlODdlYTlmMmRiOCIsImlhdCI6MTY0Mzc5MzEyNCwiZXhwIjoxNjQ2Mzg1MTI0fQ.z_2JF3ixICxSFClVPD1ych7igrf_Y_FMraSAy22DNvM",
                },
                body: JSON.stringify({
                  name: name,
                  email: email,
                  address: address,
                  contact: contact,
                }),
              })
                .then((response) => response.json())
                .then((res) => {
                  setLoading((isLoading = false));
                  console.log(res);
                  console.log(res.success);
                  res.success === false
                    ? alert(res.message)
                    : alert("Patient Added Successfully");
                  if (res.success === false) {
                    alert(res.message);
                    
                  } else {
                    alert("Patient Added Successfully");
                  }
                })
                .catch((err) => {
                  setLoading((isLoading = false));
                  console.log(err);
                });
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPatient;
