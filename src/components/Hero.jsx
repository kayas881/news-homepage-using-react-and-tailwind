import React from "react";
import Image1 from "../assets/images/image-web-3-desktop.jpg";
import Comp from "./Comp";
import Cards from "./Cards";
const Hero = () => {
  return (
    <div className="max-w-[1240px] mt-[50px] w-full mx-auto">
      <div className=" md:flex h-[510px] ">
        <div className="md:w-[60%] flex flex-col h-[510px]">
          <img className="max-md:w-[800px] max-md:p-5" src={Image1} />
          <div className="w-full md:flex">
            <h1 className="font-inter font-extrabold md:text-5xl text-4xl w-[100%] max-md:pl-5 pt-8 text-very-dark-blue">
              The Bright <br className="max-md:hidden" /> Future of{" "}
              <br className="max-md:hidden" /> Web 3.0 ?
            </h1>
            <div className="w-[100%] ">
              <p className="text-[15px] font-inter font-normal pt-8 md:py-8 py-6 max-md:pl-5 text-very-dark-blue">
                We dive into the next evolution of the web that <br /> claims to
                put the power of the platforms back <br /> into the hands of the
                people. But is it really <br /> fulfilling its promise?
              </p>
              <button className="w-[50%] h-12 bg-soft-red text-off-white font-inter font-normal tracking-[3px] uppercase max-md:ml-5 hover:bg-very-dark-blue">
                Read more
              </button>
            </div>
          </div>
        </div>
        <Comp />
        <div className="h-[200px] md:hidden">
          <Cards />
        </div>
      </div>
      <div className=" max-md:hidden">
        <Cards />
      </div>
    </div>
  );
};

export default Hero;
