import React from "react";
import Search from "./Search";

const Hero = () => {
  return <div className="h-[477px]  bg-[#0C276A]">
    <div>
    <h1 className="relative top-[100px] text-center text-white font-bold text-4xl mb-24">Search here to find the best books available.</h1>
    <Search/>
    </div>
   
  </div>;
};

export default Hero;
