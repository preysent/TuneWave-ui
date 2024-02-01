import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './style.css';
import img from '../../assets/cut.png'

const Background = () => {
  const ref = useRef();

  useEffect(() => {
    const boxes = document.querySelectorAll('.okey');

    const animateBox = (box) => {
      const randomY = Math.ceil(Math.random() * 20);
      const randomX = Math.ceil(Math.random() * 50);

      gsap.to(box, {
        duration: 3,
        y: `-${randomY}%`,
        x: `-${randomX}%`,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    };

    boxes.forEach(animateBox);
    
    // Cleanup function
    return () => {
      boxes.forEach((box) => gsap.killTweensOf(box)); 
      
    };
  }, []);

  return (
    <div ref={ref} className='w-full h-full absolute z-[-1] top-0 left-0 overflow-x-clip'>
      <div className='w-80 h-80 bg-primary-darkest absolute right-[-8rem] bottom-[-8rem] rounded-full blur-lg okey'></div>
      <div className='w-80 h-80 bg-primary-darkest absolute right-[-5rem] bottom-[-2rem] rounded-full blur-lg okey'></div>
      <div className='w-80 h-80 bg-primary-darkest absolute right-0 bottom-[-1rem] rounded-full blur-lg okey'></div>
      <div className='w-80 h-80 bg-primary-darkest absolute right-24 bottom-[-4rem] rounded-full blur-lg okey'></div>
    </div>
  );
};

export default Background;
