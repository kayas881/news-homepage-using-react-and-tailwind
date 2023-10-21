import React from "react";
import gaming from "../assets/images/image-gaming-growth.jpg";
import retro from "../assets/images/image-retro-pcs.jpg";
import laptop from "../assets/images/image-top-laptops.jpg";
const Cards = () => {
  return (
    <div className="h-[200px]  mt-10  ">
      <div className="md:grid md:grid-cols-3 md:gap-5 max-md:flex max-md:flex-col">
        <div className="flex max-md:pt-10 max-md:pl-5">
          <img className=" w-[120px]" src={retro} alt="" />
          <div className="flex flex-col">
            <h1 className=" text-3xl font-inter font-semibold opacity-50 pl-6">
              01
            </h1>
            <h2 className=" text-2xl font-inter font-semibold pt-4 pl-6">
              Reviving Retro pc
            </h2>
            <p className="text-md font-inter font-normal pt-4 pl-6 opacity-60">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex max-md:pt-5 max-md:pl-5">
          <img className=" w-[120px]" src={laptop} alt="" />
          <div className="flex flex-col">
            <h1 className=" text-3xl font-inter font-semibold opacity-50 pl-6">
              02
            </h1>
            <h2 className=" text-2xl font-inter font-semibold pt-4 pl-6">
              Top 10 Laptops of 2022
            </h2>
            <p className="text-md font-inter font-normal pt-4 pl-6 opacity-60">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex max-md:pt-5 max-md:pl-5 max-md:mb-10">
          <img className=" w-[120px]" src={gaming} alt="" />
          <div className="flex flex-col">
            <h1 className=" text-3xl font-inter font-semibold opacity-50 pl-6">
              03
            </h1>
            <h2 className=" text-2xl font-inter font-semibold pt-4 pl-6">
              The Growth of Gaming
            </h2>
            <p className="text-md font-inter font-normal pt-4 pl-6 opacity-60">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
