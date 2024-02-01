import React from "react";
import reqImg from "../../assets/request.png";
import raveImg from "../../assets/rave.png";
import repeatImg from "../../assets/repeat.png";

const DjOption = () => {
  return (
    <>
      <section className="text-gray-600 body-font text-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-light text-primary-lightest flex-shrink-0 overflow-hidden">
              <img
                src={reqImg}
                alt=""
                className="object-contain object-center w-3/4"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Request
              </h2>
              <p className="leading-relaxed text-base">
                Whatever the scale and nature of your project, are specialist
                have the skill and experience necessary to successfully solve
                your problems
              </p>
              <a className="mt-3 text-primary-lightest inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Rave
              </h2>
              <p className="leading-relaxed text-base">
                Whatever the scale and nature of your project, are specialist
                have the skill and experience necessary to successfully solve
                your problems
              </p>
              <a className="mt-3 text-primary-lightest inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-light text-primary-lightest flex-shrink-0">
              <img
                src={raveImg}
                alt=""
                className="object-contain object-center w-3/4"
              />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-light text-primary-lightest flex-shrink-0">
              <img
                src={repeatImg}
                alt="repeat"
                className="object-contain object-center w-3/4"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Repeat
              </h2>
              <p className="leading-relaxed text-base">
                Whatever the scale and nature of your project, are specialist
                have the skill and experience necessary to successfully solve
                your problems
              </p>
              <a className="mt-3 text-primary-lightest inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          {/* <button className="flex mx-auto mt-20 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button> */}
        </div>
      </section>
    </>
  );
};

export default DjOption;
