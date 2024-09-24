import React from "react";
import Image from "next/image";

const SvgComponent = ({ svgNames }) => {
  return (
    <>
      <div className=" flex justify-center flex-col items-center">
        <h1 className="font-poppins font-bold text-2xl leading-2 flex items-center text-center text-[#42446E]">
          My Tech Stack
        </h1>
        <h2 className="font-poppins text-lg flex items-center text-center font-normal text-[#666666]">
          Technologies I’ve been working with recently
        </h2>
      </div>

      <div className="flex flex-wrap justify-center p-16">
        {svgNames.map((svgName, index) => (
          <div
            key={index + 1}
            className="w-1/4 md:w-1/6 flex justify-center pb-8"
          >
            <Image
              key={index + 1}
              src={`/${svgName}.svg`}
              alt={svgName}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SvgComponent;
