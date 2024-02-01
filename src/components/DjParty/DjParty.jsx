import React, { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../assets/dance.jpg";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const DjParty = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "top top",
          scrub: 1,
        },
      });

      // Animation 1
      t.to(".pera", {
        color: "white",
      });

      // Animation 2 (starts after Animation 1 completes)
      t.to("#djBg", {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  });

 

  return (
    <>
      <section
        ref={containerRef}
        className="relative z-0 screen party-container"
      >
        <div id="djBg" className="opacity-0 absolute z-[-1] h-full w-full">
          <img src={img} alt="bg-img" className="object-cover w-full h-full" />
          <div className="gradient-overlay"></div>
        </div>
        <div className="container mx-auto px-5 py-24 min-h-screen grid grid-cols-3 content-center">
          <div className="lg:col-span-2"></div>
          <p className="text-2xl font-bold pera col-span-2 lg:col-span-1">
            handpick your favorite beat and send it to the dj!" suggest your
            favorite songs, from chart-toppers to hidden gems and get our djs
            know exactly what gets you moving . "groove on demand" now impress
            your loved once with their fav song tune into happiness with fav
            song and fav place with TUNEWAVE
          </p>
        </div>
      </section>
    </>
  );
};

export default DjParty;
