import { React, useState } from "react";

function Contractform() {
  const [formData, setFormData] = useState({
    firstname: " ",
    lastname: " ",
    blood_group: " ",
    age_group: " ",
    date: " ",
    adhaarID: " ",
    amount: " ",
  });

  const changeEventHandler = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
      [event.target.name]: event.target.value,
    }));
    // console.log(formData);
  };

  const sendData = (e) => {
    e.preventDefault();

    console.log(formData);

    fetch("http://localhost:8000/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res);
    });

    alert("data submited");
    // navigate("/login");
  };

  return (
    <div className="m-6 bg-gray-200 w-3/4">
      {" "}
      <section className="flex flex-col justify-around  items-center w-[100%] h-full">
        <form className="grid grid-cols-6 gap-4 bg-slate-50 p-8 rounded-md">
          <div className="col-span-3">
            <label className="block text-xs font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="firstname"
            />
          </div>
          <div className="col-span-3">
            <label className="block text-xs font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="lastname"
            />
          </div>
          {/* Room type */}
          <div className="col-span-6">
            <label
              htmlFor="Email"
              className="block text-xs font-medium text-gray-700"
            >
              Blood Group
            </label>
            <select
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="blood_group"
            >
              <option>Select</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
          {/* Email */}
          <div className="col-span-6">
            <label
              htmlFor="age_group"
              className="block text-xs font-medium text-gray-700"
            >
              Age Group
            </label>
            <select
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="age_group"
            >
              <option>Select</option>
              <option>10-30</option>
              <option>31-40</option>
              <option>40-50</option>
            </select>
          </div>
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              Date of Donation
            </label>
            <input
              type="text"
              id="hostelID"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="date"
            />
          </div>
          {/* clg id */}
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              Adhaar ID
            </label>
            <input
              type="text"
              id="clgID"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              onChange={changeEventHandler}
              name="adhaarID"
            />
          </div>
          <div className="col-span-6">
            <label className="block text-xs font-medium text-gray-700">
              Amount of blood donated
            </label>
            <input
              id="year"
              className="mt-1 w-full h-10 px-3 border border-gray-300  rounded-md shadow-sm sm:text-sm"
              placeholder="eg. 250mL"
              onChange={changeEventHandler}
              name="amount"
            ></input>
          </div>

          <div className="col-span-6">
            <button
              className="block w-full rounded-md bg-green-500 hover:bg-green-600 p-2.5 text-sm text-white transition hover:shadow-lg"
              type="submit"
              onClick={sendData}
            >
              Add details
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contractform;
