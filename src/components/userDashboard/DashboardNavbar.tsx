import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardNavbar = () => {
   return (
      <nav className="DashboardNavbar">
         <NavLink to="/account/summary" activeClassName="active" >accounts</NavLink>
         <NavLink to="/account/dashboard"activeClassName="active" >dashboard</NavLink>
         <NavLink to="/account/transfer" activeClassName="active">transfers</NavLink>
         <NavLink to="/account/changePin" activeClassName="active">change PIN</NavLink>
      </nav>
   )
}

export default DashboardNavbar;
