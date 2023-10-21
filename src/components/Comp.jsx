import React from "react";

const Comp = () => {
  return (
    <div className="bg-very-dark-blue md:w-[35%] max-md:m-5 mx-auto max-md:h-[480px] max-md:mt-16  ">
      <h1 className="p-5 font-inter font-extrabold text-4xl text-soft-orange">
        New
      </h1>
      <div className="mx-3">
        <h1 className=" text-xl pt-5 px-3 text-off-white font-inter font-semibold">
          Hydrogen VS Electric Cars
        </h1>
        <p className="text-[15px] px-3 pt-2 border-b border-b-dark-grayish-blue pb-8 text-off-white font-inter font-normal opacity-90">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
      <div className="mx-3 mt-3">
        <h1 className=" text-xl pt-5 px-3 text-off-white font-inter font-semibold">
          The Downsides of Al Artistry
        </h1>
        <p className="text-[15px] px-3 pt-2 border-b border-b-dark-grayish-blue pb-8 text-off-white font-inter font-normal opacity-90">
          What are the possible adverse effects of on-demand Al image
          generation?
        </p>
      </div>
      <div className="mx-3 mt-4">
        <h1 className=" text-xl pt-5 px-3 text-off-white font-inter font-semibold">
          Is VC Funding Drying Up?
        </h1>
        <p className="text-[15px] px-3 pt-2  pb-8 text-off-white font-inter font-normal opacity-90">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default Comp;
