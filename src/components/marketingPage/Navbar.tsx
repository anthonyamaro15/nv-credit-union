import React from 'react';
import { Link } from 'react-router-dom';
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
                  <Link to="/locations">
                     <span><MdLocationOn /></span>
                     Find ATMs & Branches</Link>
                  <Link to="/register">
                     <span><ImUserPlus /></span>
                     Open a New Account</Link>
                  <Link to="/about">
                     <span><FaUsers /></span>
                     About us</Link>
                  <Link to="/about">
                     <span><MdEmail /></span>
                     Contact Us</Link>
               </div>
            </nav>
            <nav className="second-nav">
               <Link to="/">
                  <img src={logo} alt="logo"/>
               </Link>
               <div className="second-nav-wrapper">
                  <Link to="/bankin">Banking</Link>
                  <Link to="/loans">Loans</Link>
                  <Link to="/mortage">Mortage</Link>
                  <Link to="/servicer">Services</Link>
                  <Link to="/support">Support</Link>
                  <Link to="/login"><span><BsFillLockFill /></span> Log in</Link>
               </div>
            </nav>
         </div>
      </div>
   )
}

export default Navbar;
