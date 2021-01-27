import logo from '../../imgs/logo.jpg';
import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isMoblie, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMoblie);
  };

  const closeNavMenu = () => {
     setIsMobile(false);
  }

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
          <Link to="/">
            <img src={logo} alt="application logo"/>
          </Link>
         
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
          <NavLink onClick={closeNavMenu} to="/" exact activeClassName="active">
            home
          </NavLink>
          <NavLink onClick={closeNavMenu} to="/loans" exact activeClassName="active">
            loans
          </NavLink>
          <NavLink onClick={closeNavMenu} to="/login" exact activeClassName="active">
            login
          </NavLink>
          <NavLink onClick={closeNavMenu} to="/banking/checking" exact activeClassName="active">
            open a new account
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;