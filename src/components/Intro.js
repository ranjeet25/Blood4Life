import React from "react";

function Intro() {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="bg-white py-6 sm:py-8 lg:py-12 w-[90vw]">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
            {/* image - start */}
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src="https://media.istockphoto.com/id/1308423570/photo/donating-blood.jpg?s=612x612&w=0&k=20&c=c9u9GuTbZw3woLtD5_DP48GhpirZJH5TCan4M_6ypuY="
                loading="lazy"
                alt="Photo by Andras Vas"
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* image - end */}
            {/* content - start */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                Donate Blood with New Tech
              </h2>
              <p className="mb-8 max-w-md text-gray-600">
                A Blockchain uses a distributed ledger, transactions and data
                are recorded identically in multiple locations. All network
                participants with permissioned access see the same information
                at the same time
              </p>
              <div className="mt-auto">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Get Started
                </a>
              </div>
            </div>
            {/* content - end */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
