import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
  return(
    <div>
      <div className="link">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
        <a href="https://github.com/jomomma999" target="_blank" rel="noopener noreferrer"> GitHub Link </a>
      </div>
    </div>
  );
}

export default Navbar;
