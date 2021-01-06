import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ImUserPlus } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import logo from '../../imgs/logo.jpg';

const Navbar = () => {
   return (
      <div className="Navbar">
         <div className="inner-wrapper">
            <nav className="first-nav">
               <div className="t">
                  <NavLink to="/banking/checking" activeClassName="active">
                     <span><ImUserPlus /></span>
                     Open a New Account</NavLink>
                  <NavLink to="/about-us" activeClassName="active">
                     <span><FaUsers /></span>
                     About us
                  </NavLink>
               </div>
            </nav>
            <nav className="second-nav">
               <Link to="/">
                  <img src={logo} alt="logo"/>
               </Link>
               <div className="second-nav-wrapper">
                  <NavLink to="/loans" activeClassName="active">Loans</NavLink>
               </div>
            </nav>
         </div>
      </div>
   )
}

export default Navbar;
