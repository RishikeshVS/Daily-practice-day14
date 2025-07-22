import React, { useState } from "react";
import './App.css'

function Responsive2() 
{
  var [menuOpen,setMenuOpen]=useState(false);
  function toggleMenu()
  {
    setMenuOpen(!menuOpen);
  } 
  return (
    <header className="header">
      <div className="logo">Header</div>

    <nav className={menuOpen ? "nav-links open" : "nav-links"}> 
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Contact</a>
    </nav>
    <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>
    </header>
  );
}

export default Responsive2;
