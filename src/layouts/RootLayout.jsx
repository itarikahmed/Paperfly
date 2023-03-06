import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return( <div>
    <header >
    
      <nav className="flex justify-between items-center p-2 max-w-5xl mx-auto">
        <div>
          <a className="flex items-center gap-3 text-3xl font-bold text-[#0C276A]"><img className="w-10 h-10" src="./img/booklogo.png" /> Paperfly</a>
        </div>
        <div className="space-x-10 p-4">
          <NavLink className="text-[#0C276A]  text-xl font-semibold" to="/">Home</NavLink>
          <NavLink className="text-[#0C276A] text-xl font-semibold"to="books">Books</NavLink>
          <NavLink className="text-[#0C276A] text-xl font-semibold"to="About"> About</NavLink>
        </div>

        <div className="space-x-4 p-4">
          <button className="text-white py-1.5 px-4 rounded text-lg font-medium bg-[#FF8345]">Login</button>
          <button className="text-white py-1.5 px-4 rounded text-lg font-medium bg-[#FF8345]">Signup</button>
        </div>  
      </nav>
    </header>
    <main><Outlet/></main>
    <footer><Footer/></footer>
  </div>
  );
}; 

export default RootLayout;
