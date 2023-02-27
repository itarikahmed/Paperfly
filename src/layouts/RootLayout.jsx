import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const RootLayout = () => {
  return <div>
    <header className="bg-slate-600">
      <nav className="flex justify-center space-x-10 p-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="books">Books</NavLink>
        <NavLink to="About"> About</NavLink> 
      </nav>
    </header>
    <main><Outlet/></main>
    <footer><Footer/></footer>
  </div>;
}; 

export default RootLayout;
