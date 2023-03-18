import React from "react";

export default function Block() {
  return (
    <div className="lg:h-screen flex justify-centre items-centre ">
      <div className=" py-6 sm:py-8 lg:py-12 bg-gray-100 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our competitive advantage
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
            <div className="flex flex-col items-center shadow-md px-6 py-8 bg-white rounded-  ">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                Growth
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>

            <div className="flex flex-col items-center shadow-md px-6 py-8 bg-white rounded-">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                Security
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>

            <div className="flex flex-col items-center shadow-md px-6 py-8 bg-white rounded-">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                Security
              </h3>
              <p className="mb-2 text-center text-gray-500">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <a
                href="#"
                className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
