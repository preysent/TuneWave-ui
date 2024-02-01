import React from "react";
import img1 from "../../assets/title1.jpg";
import img2 from "../../assets/title2.jpg";
import Background from "../Background/Background";

const Hero = () => {
  return (
   
      <section className="relative min-h-[88vh] z-0 ">
        <div className="container mx-auto  px-5 py-24  grid grid-cols-12 content-center">
          <div className="md:col-span-8 col-span-12">
            <h3 className="uppercase font-serif text-6xl md:text-7xl flex items-center gap-2">
              Embark on a{" "}
              <>
                <img
                  src={img1}
                  alt="ig"
                  className="w-16 h-16 object-cover object-right rounded-full inline"
                />
              </>
            </h3>

            <h3 className="uppercase font-serif text-6xl md:text-[4.4rem] flex gap-2">
              <>
                <img
                  src={img2}
                  alt="ig"
                  className="w-16 h-16 object-cover object-center rounded-full inline"
                />
              </>
              Sonic Journey
            </h3>

            <h3 className="uppercase font-serif text-6xl md:text-7xl ">
              with{" "}
              <span className="text-primary font-serif drop-shadow-lg shadow-white">
                TuneWave
              </span>
            </h3>
            <p className="mt-8 text-base text-gray-500 w-4/6">
              Discover new music, share your favorite songs and connect with
              other listeners. Join the community today!
            </p>
          </div>
        
        </div>
        <Background/>

      </section>
  
  );
};

export default Hero;
