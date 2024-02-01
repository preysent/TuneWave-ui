import React from "react";
import "./style.css";
import SideMenu from "./SideMenu";

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font  w-full">
        <div className="container flex justify-between p-5 mx-auto ">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl">TuneWave</span>
          </a>
          <nav className="md:ml-auto md:mr-auto md:flex flex-wrap items-center text-base justify-center rounded-full p-1 gap-2 border border-black hidden" >

            <a className=" cursor-pointer hover:text-gray-900 bg-primary-lightest p-1 px-3 text-white rounded-full ">Home</a>
            <a className=" cursor-pointer hover:text-gray-900 p-1 px-3">Menu</a>  
            <a className=" cursor-pointer hover:text-gray-900 p-1 px-3">Three Hours</a>
            <a className=" cursor-pointer hover:text-gray-900 p-1 px-3">Polls</a>
          </nav> 
          
          <button className="btn border px-4 p-2 rounded-full relative overflow-hidden hidden md:block">
            <p className="z-10 relative ">Login</p>
          </button>
          <div className="md:hidden">
          <SideMenu/>
          </div>
        </div> 
      </header>
    </>
  ); 
};

export default Navbar; 
