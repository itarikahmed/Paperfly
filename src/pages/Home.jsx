import React from "react";
import Cart from "../components/Cart";
import Hero from "../components/Hero"

const Home = () => {

  return (
  <div className="primary " >
    <Hero />
    <div className="m-20">
       <h1 className="text-center font-bold text-4xl text-[#0C276A] my-6">Popular Books</h1>
       <h2 className="text-center font-midium text-2xl text-[#0C276A]"> Some Popular book from world renowned Author</h2>
    </div>
    <Cart/>  
  </div>
  ) ;
};

export default Home;
