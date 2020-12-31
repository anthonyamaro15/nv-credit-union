// import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";
import { ImUserPlus } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
import logo from '../../imgs/logo.jpg';


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [isMoblie, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMoblie);
  };

  useEffect(() => {
    if (isMoblie) {
      window.document.documentElement.style.overflow = "hidden";
    } else {
      window.document.documentElement.style.overflow = "auto";
    }
  }, [isMoblie]);
  return (
    <div className="Main-wrapper">
       <div className="img-wrapper">
         <img src={logo} alt=""/>
       </div>
      <div
        className={!isMoblie ? "burger-menu" : "burger-menu close"}
        onClick={toggleMenu}
      >
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className={isMoblie ? "MobileNavbar show" : "MobileNavbar"}>
        <nav>
          <NavLink to="/" exact activeClassName="active">
            banking
          </NavLink>
          <NavLink to="/about" exact activeClassName="active">
            loans
          </NavLink>
          <NavLink to="/contact" exact activeClassName="active">
            login
          </NavLink>
          <NavLink to="/contact" exact activeClassName="active">
            open a new account
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;