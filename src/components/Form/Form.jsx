import React from "react";
import img from "../../assets/speaker.png";

const Form = () => {
  return (
    <>
      <section className="relative min-h-[88vh] z-0 overflow-clip">
        <div className="absolute z-[-1] min-w-[50rem]">
          {" "}
          <img src={img} alt="" />
        </div>
        <div className="container mx-auto px-5 py-24 min-h-screen grid grid-cols-12 content-center text-white">
          <div className="lg:col-span-3  hidden lg:block"></div>
          <div className="border border-white p-10 rounded-2xl col-span-12 lg:col-span-6 backdrop-blur-lg">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact Us
              </h1>
            </div>
            <div className="mx-auto">
              <div className="p-2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="text-black w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="text-black w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="number"
                    className="text-black w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white  br-primary border-0 py-2 px-8 focus:outline-none bg-primary rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-3 hidden lg:block"></div>
        </div>
      </section>
    </>
  );
};

export default Form;
