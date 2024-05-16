import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from "react";
import { useEffect } from "react";

function Navbar(){
    const [expand, setExpand] = useState(false);

    const location = useLocation();
    useEffect(() => {
        setExpand(false);
      }, [location]);
//allows the navbar to close when clicking on the dropdown 
  return(
    <div className="navbar" id={expand ? "open" : "close"}> 
      <div className="buttonTogg">
        <button onClick={() => {setExpand((prev => !prev))}}>  
            <MenuIcon/>
        </button>
      </div>
      <div className="link">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>

  );

}

export default Navbar;
