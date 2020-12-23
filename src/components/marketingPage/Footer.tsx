import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import logo from '../../imgs/logo.jpg';

const Footer = () => {
   return (
      <footer className="Footer">
         <div className="footer-wrapper">
            <div className="left-side">
               <nav>
                  <Link to="/about">about us</Link>
                  <Link to="/careers">careers</Link>
                  <Link to="/contact">contact us</Link>
                  <Link to="/disclosures">disclosures</Link>
                  <Link to="/locations">locations</Link>
                  <Link to="/member">member resources</Link>
                  <Link to="/privacy">privacy policy</Link>
                  <Link to="/security">security</Link>
                  <Link to="/sitemap">sitemap</Link>
               </nav>
               <div className="logos">
                  <img src={logo} alt="logo"/>
                  <img src={logo} alt="logo2"/>
               </div>
            </div>
            <div className="right-side">
               <h3>one nevada credit union</h3>
               <p>routing number: <span>322484401</span></p>
               <div className="follow-us">
                  <span><FaFacebookSquare /></span>
                  <span><FaTwitterSquare /></span>
                  <span><FaYoutubeSquare /></span>
               </div>
            </div>
         </div>
         <div className="copyright">
            <p>Copyright &copy; 2020 One Nevada Credit Union. All Rights Reserved.</p>
            <a href="www.example.com">Federally Insured by NCUA. Equal Housing Opportunity.</a>
         </div>
      </footer>
   )
}

export default Footer;
