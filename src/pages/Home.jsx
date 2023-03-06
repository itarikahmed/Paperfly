import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero"
const Home = () => {

  return (<div>
    <Hero />
    <h1 className="text-center font-bold text-4xl text-[#0C276A] my-6">Popular Books</h1>
    <Card/>
    
    </div>) ;
};

export default Home;
