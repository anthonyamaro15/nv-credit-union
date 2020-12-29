import react from 'react';
import { NavLink } from 'react-router-dom';

const CreateAccountNavbar =  () => {
   return (
      <nav className="CreateAccountNavbar">
         <NavLink to="/open-account/register/personal-information" activeClassName="active" exact>personal information</NavLink>
         <NavLink to="/open-account/register/contact-information" activeClassName="active" exact>contact information</NavLink>
         <NavLink to="/open-account/register/employment" activeClassName="active" exact>employment</NavLink>
         
      </nav>
   )
}

export default CreateAccountNavbar;
