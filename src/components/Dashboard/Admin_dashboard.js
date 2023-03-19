import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contractform from "./Contractform";
import DonarList from "./DonarList";
// import AddStudentInfo from "../Components/AddStudentInfo";
// import donarListword from "../Components/donarListword";

function Admin_dashboard() {
  const [contractForm, setcontractForm] = useState(false);
  const [myDetails, setMyDetails] = useState(true);
  const [donarList, setdonarList] = useState(false);
  const [data, getData] = useState([]);

  return (
    <div className="flex">
      <div className="sidebar justify-self-start  px-4 w-[300px] h-screen overflow-y-auto text-center bg-gray-800">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Blood Bank
            </h1>
          </div>
          <div className="my-2 bg-gray-400 h-[1px]" />
          <div className=" grid grid-cols-2 gap-1 p-4 w-full h-26 bg-gray-100 rounded-md ">
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Name
            </span>
            <span className=" font-bold ml-1 text-[12px] bg-blue-500 px-4 py-1 rounded-full text-slate-100">
              Ranjeet Saw
            </span>
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Location
            </span>
            <span className="  ml-1 text-[12px] bg-blue-200 px-4 py-1 rounded-full font-bold text-blue-700">
              Mumbai
            </span>
          </div>
        </div>

        <button
          className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-blue-600 text-black"
          onClick={() => {
            setMyDetails(true);
            setcontractForm(false);
            setdonarList(false);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Instructions
          </span>
        </button>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black"
          onClick={() => {
            setdonarList(false);
            setMyDetails(false);
            setcontractForm(true);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Add New Donar
          </span>
        </div>
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-500 text-black"
          onClick={() => {
            setcontractForm(false);
            setMyDetails(false);
            setdonarList(true);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            View Donar List
          </span>
        </div>
        <a href="https://www.verbwire.com/dashboard/home">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  bg-white hover:bg-blue-300 ">
            <i className="bi bi-box-arrow-in-right" />
            <span className=" text-[15px] ml-4 text-gray-600 font-bold">
              Visit VerbWire
            </span>
          </div>
        </a>
        <Link to="/">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
            <i className="bi bi-box-arrow-in-right" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Logout
            </span>
          </div>
        </Link>
      </div>

      {myDetails && (
        <div className="flex mt-8 ml-24 justify-center w-[80vw] h-auto flex-wrap ">
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
                <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
                  Introducing
                </p>
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  Revolutionary way to Donate Blood
                </h2>
                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                  Donate blood, and be helpful as it is said that the best among
                  men are those who help others
                </p>
              </div>
            </div>
          </div>

          {/* BOX 01 */}
          <div className="w-80 h-1/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
            <div className="bg-gray-100 h-1/4 flex justify-center items-center">
              <p className="text-xl font-bold text-gray-800">Step 01</p>
            </div>
            <div className="bg-blue-200 h-3/4 flex justify-center items-center">
              <p className=" font-bold text-2xl text-blue-600">Add Donar </p>
            </div>
          </div>
          {/* BOX 02 */}
          <div className="w-80 h-1/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
            <div className="bg-gray-100 h-1/4 flex justify-center items-center">
              <p className="text-xl font-bold text-gray-800">Step 02</p>
            </div>
            <div className="bg-yellow-200 h-3/4 flex justify-center items-center">
              <p className=" font-bold text-2xl text-yellow-600">
                Create a Smart contract
              </p>
            </div>
          </div>
          {/* BOX 03 */}
          <div className="w-80 h-1/4 mx-2 bg-gray-100 rounded-xl border-2  border-gray-200 flex flex-col ">
            <div className="bg-gray-100 h-1/4 flex justify-center items-center">
              <p className="text-xl font-bold text-gray-800">College ID</p>
            </div>
            <div className="bg-green-200 h-3/4 flex justify-center items-center">
              <p className=" font-bold text-2xl text-green-600">
                Deploy using Verbwire
              </p>
            </div>
          </div>
        </div>
      )}

      {contractForm && <Contractform></Contractform>}
      {donarList && <DonarList></DonarList>}
    </div>
  );
}

export default Admin_dashboard;
