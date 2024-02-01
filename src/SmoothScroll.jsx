import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function SmoothScroll({children}) {
  const main = useRef();
  const smoother = useRef();

 
  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 1.1,
        effects: true, 
      });
     
    },
    { scope: main }
  );

  return (
    <>
      <div id="smooth-wrSmoothScroller" ref={main}>
        <div id="smooth-content">
          {children}
        </div>
      </div>      
    </>
  ); 
}

export default SmoothScroll;
