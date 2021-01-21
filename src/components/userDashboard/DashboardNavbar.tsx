import React from 'react';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
   return (
      <nav className="DashboardNavbar">
         <Link to="/account/summary">accounts</Link>
         <Link to="/account/dashboard">dashboard</Link>
         <Link to="/account/dashboard">bill payer</Link>
         <Link to="/account/transfer">transfers</Link>
         <Link to="/account/notices">e-Notices</Link>
         <Link to="/account/statements">statements</Link>
         <Link to="/account/linked">external accounts</Link>
         <Link to="/account/change-pin">change PIN</Link>
         {/* <Link to="/account-dashboard">send money</Link> */}
         <Link to="/account-online-services">online services</Link>
      </nav>
   )
}

export default DashboardNavbar;
