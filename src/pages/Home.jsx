import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero"
import Search from "../components/Search";
const Home = () => {

  return (
  <div className="" >
    <Hero />
    <h1 className="text-center font-bold text-4xl text-[#0C276A] my-6">Popular Books</h1>
    <Card/>  
  </div>
  ) ;
};

export default Home;
