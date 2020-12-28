import React, {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaLock } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';
import logo from '../../imgs/logo.jpg';
import Loader from './LoaderComponent';

interface FormProps {
   lastName: string;
   email: string;
   ssn: string;
}

const CheckApplicationStatus = () => {
   const { register, errors, handleSubmit } = useForm<FormProps>();
   const [simulateSubmit, setSimulateSubmit] = useState(false);
   const [loading, setLoading] = useState(false);
   const [toogleSsn, setToggleSsn] = useState(false);
   const history = useHistory();

   const onSubmit = (values: FormProps) => {
      setLoading(true);
      setTimeout(() => {
         setSimulateSubmit(true);
         setLoading(false);
      }, 2000);
   }

   const toogleSSN = () => {
      setToggleSsn(!toogleSsn);
   }

   return (
      <div className="bg-color">
         <div className="LoanApplication">
            <div className="img-wrapper">
               <img src={logo} alt=""/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="lastName">last name <span className="require">*</span>
                  <input type="text" id="lastName" name="lastName" ref={register({ required: true})} />
                  <p className="error">{errors.lastName && "Required field"}</p>
               </label>
               <label htmlFor="email">email <span className="require">*</span>
                  <input type="text" id="email" name="email" ref={register({ required: true})} />
                  <p className="error">{errors.email && "Required field"}</p>
               </label>
               <div className="ssn-wrapper">
                  <div>
                     <span>ssn</span>
                     <span className="require">*</span>
                  </div>
                  <div className="ssn-icons">
                     <span 
                        className="show" 
                        onClick={toogleSSN}>{toogleSsn ? "Hide SSN" : "Show SSN"}
                     </span>
                      <span 
                         className="icon" 
                         data-tip="Your Social Security Number (SSN) is used for identification purposes and to determine your account opening eligibility.">
                         <AiFillQuestionCircle />
                         <ReactTooltip />
                         </span>
                     <span className="lock-icon"><FaLock /></span>
                  </div>
               </div>
               <label htmlFor="ssn">
                  <input type={toogleSsn ? "text" : "password"} id="ssn" name="ssn" ref={register({ required: true})} />
                  <p className="error-backup">{errors.ssn && "Required field"}</p>
               </label>

               <div className="app-status-btn-wrapper">
                  <button type="submit">get status</button>
               </div>
            </form>
            {loading && (
               <div className="loading-component">
                  <h3>Processing your request...</h3>
                  <Loader />
                  <p>This may take a few minutes.</p>
               </div>
            ) }
            {simulateSubmit && (
               <div className="Status-result">
                  <h2>applications</h2>
                  <p>Only appliations created in the last 90 days are displayed</p>
                  <span className="application-number">credit card application #477412</span>
                  <div className="application-status">
                     <div className="description-right">
                        <span>status</span>
                        <span>created date</span>
                     </div>
                     <div className="description-left">
                        <span>pending</span>
                        <span>12/27/2020</span>
                     </div>
                  </div>
                  <p className="note-description">Note: Any approval displayed in this check status page may be conditional approval and subject to final review.</p>
               </div>
            )}


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

export default CheckApplicationStatus;
