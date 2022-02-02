import React from 'react';

function AddHospital() {
  return (
      <div style={{height:"100vh", backgroundColor: "#0284c7",display: "flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{width:"80%", }}>
        <div className='p-5'><text className='p-5 text-2xl font-bold'>
          Adding New Hospital
        </text></div>

        <form
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Enter Hospital Name"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Enter Hospital Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Enter Hospital Contact Info"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Hospital Address"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
        </div>
      </div>
  );
}

export default AddHospital;
