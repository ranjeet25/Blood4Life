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

            <p className="mx-auto max-w-screen-md text-center text-gray-500 text-md">
              Because blockchain uses a distributed ledger, transactions and
              data are recorded identically in multiple locations. All network
              participants with permissioned access see the same information at
              the same time, providing full transparency. All transactions are
              immutability recorded, and are time- and date-stamped.
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-16">
            <div className="flex flex-col items-center shadow-md px-6 py-8 bg-white rounded-  ">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                Easy to Use
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
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>

              <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">
                Community Support
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
