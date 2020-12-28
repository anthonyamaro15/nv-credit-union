import react from 'react';
import { NavLink } from 'react-router-dom';

const CreateAccountNavbar =  () => {
   return (
      <nav className="CreateAccountNavbar">
         <NavLink to="/open-account/register/personal-information">personal information</NavLink>
         <NavLink to="/open-account/register/contact-information">contact information</NavLink>
         <NavLink to="/open-account/register/employment">employment</NavLink>
         
      </nav>
   )
}

export default CreateAccountNavbar;
