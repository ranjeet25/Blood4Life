import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Block from "./Block.js";
import Footer from "./Footer.js";
import Intro from "./Intro";
export default function Herosection() {
  return (
    <div>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className="mb-4 flex items-center justify-between py-4 md:py-8">
            {/* logo - start */}
            <a
              href="/"
              className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
              aria-label="logo"
            >
              <svg
                width={95}
                height={94}
                viewBox="0 0 95 94"
                className="h-auto w-6 text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              Blood4Life
            </a>
            {/* logo - end */}
            {/* nav - start */}
            <nav className="hidden gap-12 lg:flex">
              <a href="#" className="text-lg font-semibold text-indigo-500">
                Home
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Features
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Web3
              </a>
              <a
                href="#"
                className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                About
              </a>
            </nav>
            {/* nav - end */}
            {/* buttons - start */}
            <a
              href="/login"
              className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
            >
              Login
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Menu
            </button>
            {/* buttons - end */}
          </header>
          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            {/* image - start */}
            <img
              src="https://img.freepik.com/free-photo/hands-digital-universe-background_53876-97068.jpg?w=996&t=st=1679194887~exp=1679195487~hmac=7adc49492f03b3f214e43935843bca2d92a922ca0db42cf6c16d89fa5a70ec2e"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* image - end */}
            {/* overlay - start */}
            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
            {/* overlay - end */}
            {/* text start */}
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <p className="text-white">Powered By</p>
              <img
                className="h-8 mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGeiU-7tLwkYWxCJtur18SQL8AVCsQ0SCusWFHEerdUTyESOW_"
              ></img>

              <h1 className="mb-8 text-center text-3xl font-bold text-white sm:text-5xl md:mb-12 md:text-4xl">
                A Revolutionary way to Donate and Manage Blood
              </h1>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <a
                  href="#intro"
                  className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Start now
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Take tour
                </a>
              </div>
            </div>
            {/* text end */}
          </section>
        </div>
      </div>
      <Intro id="intro"></Intro>
      <Block></Block>

      <Footer></Footer>
    </div>
  );
}
