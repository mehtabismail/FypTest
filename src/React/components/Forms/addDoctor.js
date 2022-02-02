import React, { useEffect, useState } from "react";

function AddDoctor() {
  // USESTATE HOOKS
  var [name, setName] = useState("");
  var [email, setEmail] = useState("");
  var [contact, setAddress] = useState("");
  var [address, setAddress] = useState("");

  // USE-EFFECT HOOK
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#0284c7",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "80%" }}>
        <div className="p-5">
          <text className="p-5 text-2xl font-bold">Adding New Doctor</text>
        </div>

        <form method="POST" target="_blank">
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="Enter Doctor Name"
              name="name"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Enter Doctor Email"
              name="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Enter Doctor Contact Info"
              name="email"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Doctor Address"
              name="message"
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <button
              className="bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
              onSubmit={
                async () => {
                return await fetch(
                  "http://localhost:5000/api/v1/patients",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmE0OWZhMGIxN2ZlODdlYTlmMmRiOCIsImlhdCI6MTY0Mzc5MzEyNCwiZXhwIjoxNjQ2Mzg1MTI0fQ.z_2JF3ixICxSFClVPD1ych7igrf_Y_FMraSAy22DNvM"
                    },
                    body: JSON.stringify({ name: "name", email: "email1234567890@gmail.com", address: "address", contact: "contact" }),
                  }
                )
                  .then((response) => response.json())
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
              }
              }
              onClick={async () => {
                return await fetch("http://localhost:5000/api/v1/patients", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmE0OWZhMGIxN2ZlODdlYTlmMmRiOCIsImlhdCI6MTY0Mzc5MzEyNCwiZXhwIjoxNjQ2Mzg1MTI0fQ.z_2JF3ixICxSFClVPD1ych7igrf_Y_FMraSAy22DNvM",
                  },
                  body: JSON.stringify({
                    name: "name",
                    email: "email1234567890@gmail.com",
                    address: "address",
                    contact: "contact",
                  }),
                })
                  .then((response) => response.json())
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDoctor;
