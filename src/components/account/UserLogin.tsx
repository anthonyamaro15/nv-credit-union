import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../imgs/logo.jpg';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { HIDE_HOME_NAVBAR_AND_FOOTER } from '../../redux/actions';

interface LoginProps {
   email: string;
   password: string;
}
const UserLogin = () => {
   const { register, handleSubmit, errors } = useForm<LoginProps>({
      mode: "onBlur"
   });
   const history = useHistory();
   const dispatch = useDispatch();

   const onSubmit = (values: LoginProps) => {
      console.log(values);
      history.push("/account/summary");
      dispatch({ type: HIDE_HOME_NAVBAR_AND_FOOTER, payload: false });
   }

   return (
      <div className="bg-color">
         <div className="LoanApplication">
            <div className="application-header">
               <img src={logo} alt="application logo"/>
            </div>
            <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
               <h3>welcome to online banking.</h3>
               <label htmlFor="email"> email:
                  <input 
                     type="email" 
                     id="email" 
                     name="email" 
                     placeholder="email" 
                     ref={register({ required: true })} 
                  />
                  <p className="login-error">{errors.email && "Required field"}</p>
               </label>
               <label htmlFor="password"> password:
                  <input 
                     type="password" 
                     id="password" 
                     name="password" 
                     placeholder="password" 
                     ref={register({ required: true })} 
                  />
                  <p className="login-error">{errors.password && "Required field"}</p>
               </label>
               <div className="login-btn-wrapper">
                  <button type="submit">enter</button>
               </div>
            </form>
            <nav className="extra-links">
               <Link to="/banking/checking">new users</Link>
               <Link to="/forgot-password">forgot password</Link>
            </nav>
            <p className="maintenance-days">
               Please Note: Online Banking may be unavailable for routine maintenance every Saturday from 11pm to 3am PT.
            </p>
            <div className="form-footer">
               <span>One Nevada Credit Union</span>
               <div className="more-info">
                  <a href="www.example.com">Federally Insured by NCUA</a>
                  <a href="www.example.com">Equal Housing Lender.</a>
               </div>
               <span>2013-2020 MeridianLink, Inc., All Rights Reserved.</span>
            </div>
         </div>
      </div>
   )
}

export default UserLogin;
