import React from 'react';
import { NavLink } from 'react-router-dom';

const CreateAccountNavbar =  () => {
   return (
      <nav className="CreateAccountNavbar">
         <NavLink 
            to="/open-account/register/personal-information" 
            activeClassName="active" 
            exact>
            personal information
         </NavLink>
         <NavLink 
            to="/open-account/register/contact-information" 
            activeClassName="active" 
            exact>
            contact information
         </NavLink>
         <NavLink 
            to="/open-account/register/employment-information" 
            activeClassName="active" 
            exact>
            employment
         </NavLink>
         <NavLink 
            to="/open-account/register/application-decision" 
            activeClassName="active" 
            exact>
            application decision
         </NavLink>
      </nav>
   )
}

export default CreateAccountNavbar;
