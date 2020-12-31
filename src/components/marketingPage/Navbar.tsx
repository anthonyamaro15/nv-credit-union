import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";
import { ImUserPlus } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
import logo from '../../imgs/logo.jpg';

const Navbar = () => {
   return (
      <div className="Navbar">
         <div className="inner-wrapper">
            <nav className="first-nav">
               <div className="t">
                  <NavLink to="/locations" activeClassName="active">
                     <span><MdLocationOn /></span>
                     Find ATMs & Branches</NavLink>
                  <NavLink to="/register" activeClassName="active">
                     <span><ImUserPlus /></span>
                     Open a New Account</NavLink>
                  <NavLink to="/about" activeClassName="active">
                     <span><FaUsers /></span>
                     About us</NavLink>
                  <NavLink to="/about" activeClassName="active">
                     <span><MdEmail /></span>
                     Contact Us</NavLink>
               </div>
            </nav>
            <nav className="second-nav">
               <Link to="/">
                  <img src={logo} alt="logo"/>
               </Link>
               <div className="second-nav-wrapper">
                  <NavLink to="/bankin" activeClassName="active">Banking</NavLink>
                  <NavLink to="/loans" activeClassName="active">Loans</NavLink>
                  <NavLink to="/mortage" activeClassName="active">Mortage</NavLink>
                  <NavLink to="/servicer" activeClassName="active">Services</NavLink>
                  <NavLink to="/support" activeClassName="active">Support</NavLink>
                  <NavLink to="/login" activeClassName="active"><span><BsFillLockFill /></span> Log in</NavLink>
               </div>
            </nav>
         </div>
      </div>
   )
}

export default Navbar;
