import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { HIDE_HOME_NAVBAR_AND_FOOTER } from '../../redux/actions';

const DashboardNavbar = () => {
   const dispatch = useDispatch();

   const logout = () => {
      localStorage.clear();
      dispatch({ type: HIDE_HOME_NAVBAR_AND_FOOTER, payload: true });
   }

   return (
      <nav className="DashboardNavbar">
         <div>
         <NavLink to="/account/summary" activeClassName="active" >accounts</NavLink>
         <NavLink to="/account/dashboard"activeClassName="active" >dashboard</NavLink>
         <NavLink to="/account/transfer" activeClassName="active">transfers</NavLink>
         <NavLink to="/account/changePin" activeClassName="active">change PIN</NavLink>
         </div>
         <Link to="/" className="logout" onClick={logout}>logout</Link>
      </nav>
   )
}

export default DashboardNavbar;
