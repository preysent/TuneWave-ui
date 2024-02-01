import React from "react";
import img from "../../assets/food.png";
import img1 from "../../assets/food1.jpg";

const Food = () => {
  return (
    <>
      <section className="relative min-h-[88vh] z-0 ">
        <div className="container mx-auto  px-5 py-24  ">
          <div className="grid grid-cols-12 content-center border border-white rounded-2xl">
            <img src={img} alt="" className="lg:col-span-6 col-span-12 mx-auto scale-110 " />
            {/* <img src={img1} alt="" className="h-full" /> */}

            <div className="lg:col-span-6 col-span-12 p-10 text-white text-right text-4xl md:text-6xl m-auto">
              <h3 className="uppercase font-serif flex items-center gap-2">
                Don't play
              </h3>
              <h3 className="uppercase font-serif flex items-center gap-2">
                with fire
              </h3>
              <h3 className="uppercase font-serif flex items-center gap-2">
                play with
              </h3>
              <h3 className="uppercase font-serif flex items-center gap-2">
                taste
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Food;
