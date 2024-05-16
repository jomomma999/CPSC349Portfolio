import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar(){
  return(
    <div className="navbar">
      <div className="link">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;
