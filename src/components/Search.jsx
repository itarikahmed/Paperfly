import React from "react";

const Search = () => {
  return (
    <div class="flex items-center justify-center ">
         <input type="search" placeholder="Search Book Name" className=" p-4 my-10 w-1/3 h-12 text-lg shadow-md  bg-white rounded"/>
         <button type="submit" className="w-24 h-12 bg-[#FF8345] rounded text-xl font-bold text-white ml-3">Search</button>   
    </div>
 
  );
};

export default Search;
