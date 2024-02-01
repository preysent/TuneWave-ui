import React, { useLayoutEffect, useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import bg from "./assets/dance.jpg";
import Dj from "./components/DJ/Dj";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import DjParty from "./components/DjParty/DjParty";
import SmoothScroll from "./SmoothScroll";
import DjOption from "./components/DjOption/DjOption";
import Food from "./components/Food/Food";
import Polls from "./components/poll/polls";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
// import { useGSAP } from "@gsap/react";

const App = () => {
  const main = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tp = gsap.timeline({
        scrollTrigger: {
          trigger: "#my-id",
          start: "top center",
          end: "top top",
          scrub: 1,
          // markers: true,
        },
      });

      const ct = document.querySelector("#main")
      tp.to(ct, {
        backgroundColor: "black",
      });
    }, main);
    return () => ctx.revert();
  });


  return (
    <>
      <img src={bg} alt="" className="absolute z-[-1] h-full w-full" />

      <SmoothScroll>
        <main id="main" ref={main} className="min-h-screen bg-light overflow-y-hidden">
          <Navbar />
          <Hero />
          <Dj />
          <div id="my-id">
            <DjParty />
          </div>
          <DjOption/>
          <Food/>
          <Polls/>
          <Form/>
          <Footer/>
        </main>
      </SmoothScroll>
    </>
  );
};

export default App;
