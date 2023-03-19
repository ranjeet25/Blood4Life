import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Contractform from "./Contractform";
// import DonarList from "./DonarList";
// import AddStudentInfo from "../Components/AddStudentInfo";
// import donarListword from "../Components/donarListword";

function Donar_dashboard() {
  const [contractForm, setcontractForm] = useState(false);
  const [myDetails, setMyDetails] = useState(true);
  const [donarList, setdonarList] = useState(false);
  const [data, getData] = useState([]);

  return (
    <div className="flex">
      <div className="sidebar justify-self-start  px-4 w-[300px] h-screen overflow-y-auto text-center bg-gray-800">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-red-600" />
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Donar Dashboard
            </h1>
          </div>
          <div className="my-2 bg-gray-400 h-[1px]" />
          <div className=" grid grid-cols-2 gap-1 p-4 w-full h-26 bg-gray-100 rounded-md ">
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Name
            </span>
            <span className=" font-bold ml-1 text-[10px] bg-red-500 px-2 py-1 rounded-full text-slate-100">
              Manav Sanghvi
            </span>
            <span className="text-[15px] ml-4 text-gray-700 font-bold">
              Location
            </span>
            <span className="  ml-1 text-[12px] bg-red-200 px-4 py-1 rounded-full font-bold text-red-700">
              Mumbai
            </span>
          </div>
        </div>

        <button
          className=" w-full p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red  -600 text-black"
          onClick={() => {
            setMyDetails(true);
            setcontractForm(false);
            setdonarList(false);
          }}
        >
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            My Dashboard
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
            View Past Details
          </span>
        </div>

        <a href="https://www.verbwire.com/dashboard/home">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  bg-white hover:bg-red   -300 ">
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
        <div className="flex mt-8 ml-24 justify-around w-[80vw] h-[80vh] flex-wrap ">
          <div className="bg-white h-auto py-1   w-full">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
              {/* This is main div */}
              <div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
                <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
                  Below Is Donar's Details
                </p>
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  Revolutionary way to Donate Blood
                </h2>
              </div>

              <div className="date w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">Donation Date</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-pink-200 text-pink-600">
                    19/03/2023
                  </span>
                </div>
              </div>
              <div className="date w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">AdhaarCard Number</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-orange-200 text-orange-600">
                    9865 7854 1452 3652
                  </span>
                </div>
              </div>
              <div className="thash w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">TransactionHash</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-blue-200 text-blue-600">
                    0xcaab6378e9d4c73c46e57497859c34d3071f380daf92b4f15c7da76e57a3075d
                  </span>
                </div>
              </div>
              <div className="bexplorer w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">blockExplorer</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-green-200 text-green-600">
                    https://goerli.etherscan.io/tx/0xcaab6378e9d4c73c46e57497859c34d3071f380daf92b4f15c7da76e57a3075d
                  </span>
                </div>
              </div>
              <div className=" contractAdress w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">createdContractAddress</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-violet-200 text-violet-600">
                    0x08f4898D374d22badeeFe44Cf1aa60421F05C417
                  </span>
                </div>
              </div>
              <div className="tid w-full bg-gray-200 p-4 mt-1 rounded-md">
                <div className="flex">
                  <p className="font-bold">transactionID</p>
                  <span className=" ml-2 px-2 py-1 rounded-md font-medium text-sm bg-red-200 text-red-600">
                    641690002a77e411b8d86c80
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {contractForm && <Contractform></Contractform>}
      {donarList && <DonarList></DonarList>} */}
    </div>
  );
}

export default Donar_dashboard;
