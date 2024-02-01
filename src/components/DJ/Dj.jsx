import React, { useEffect } from "react";
import MusicImg from "../../assets/wave.png";
import Djimg from "../../assets/djperson.png";
import gsap from "gsap";

const Dj = () => {
  useEffect(() => {
    const tl = gsap.timeline();
  }, []);

  return (
    <>
      <section className="relative  z-0">
        <div className="container mx-auto px-5 py-24 h-full flex flex-col content-center justify-center">
          <img src={Djimg} alt=" " className="h-[20vh] object-contain self-start" />
          <div className="text-center border w-fit mx-auto p-6 px-12 rounded-xl relative">
            <h3 className="text-7xl font-serif ">Our DJs</h3>
            <h3 className="text-7xl font-serif "> Your Anthem </h3>
            <ul className="flex justify-center gap-8">
              <li>Request</li>
              <li>Rave</li>
              <li>Repeat</li>
            </ul>
          </div>
          <img src={MusicImg} alt="" className="h-[20vh] object-contain self-end" />
        </div>
      </section>
    </>
  );
};

export default Dj;
