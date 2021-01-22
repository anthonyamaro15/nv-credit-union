import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
   return (
      <nav className="DashboardNavbar">
         <Link to="/account/summary">accounts</Link>
         <Link to="/account/dashboard">dashboard</Link>
         <Link to="/account/transfer">transfers</Link>
         <Link to="/account/change-pin">change PIN</Link>
      </nav>
   )
}

export default DashboardNavbar;
