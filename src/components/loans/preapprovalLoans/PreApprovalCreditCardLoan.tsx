import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaLock, FaUserAlt } from "react-icons/fa";
import logo from '../../../imgs/logo.jpg';
import { useDispatch } from 'react-redux';
import { employmentStatus, states } from '../../../seedData';
import { AiFillQuestionCircle } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';
import axios from 'axios';
import { serverUrl } from '../../../envVariables';
import { PRE_APPROVAL_RESULT } from '../../../redux/actions';


interface ApprovalFormTypes {
   address: string;
   cellPhone: string;
   city: string;
   creditScore: string;
   dateOfBirth: string;
   email: string;
   employmentStatus: string;
   firstName: string;
   haveBankAccount: string;
   lastName: string;
   middleName?: string;
   monthlyExpenses: string;
   monthlyIncome: string;
   ssn: string;
   state: string;
   zip: string;
}

const PreApprovalCreditCardLoan = () => {
   const { register, errors, handleSubmit } = useForm<ApprovalFormTypes>({
      mode: "onBlur",
   });
   const [toogleSsn, setToggleSsn] = useState(false);
   const [alreadyApplied, setAlreadyApplied] = useState('');
   const history = useHistory();
   const dispatch = useDispatch();

   useEffect(() => {
      if(alreadyApplied) {
         alert(alreadyApplied);
      }
      setTimeout(() => setAlreadyApplied(''), 2000);
   }, [alreadyApplied]);

   const onSubmit = async (values: ApprovalFormTypes) => {
      try {
         const { data } = await axios.post(`${serverUrl}/preapproval/application`, values);
         // if message exists then that means user submitted an application already
         if(data.message) {
            setAlreadyApplied(data.message);
         } else {
            dispatch({ type: PRE_APPROVAL_RESULT, payload: data });
            history.push('/loans/preappove-result');
         }

      } catch (error) {
         console.log(error.response);
      }
   }

   const toogleSSN = () => {
      setToggleSsn(!toogleSsn);
   }

   return (
      <div className="bg-color">
         <div className="LoanApplication">
            <div className="application-header">
               <img src={logo} alt=""/>
               <h1 className="pre-approval-title">Pre-Approval Questions</h1>
               <h2>
                  <span><FaUserAlt /></span>
                  personal information
               </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="firstName">
                  first name 
                  <span className="require">*</span>
                  <input 
                     type="text" 
                     id="firstName" 
                     name="firstName" 
                     ref={register({ required: true })} 
                  />
                  <p className="error">{errors.firstName && "Required field"}</p>
               </label>

               <label htmlFor="middleName">middle name
                  <input 
                     type="text" 
                     id="middleName" 
                     name="middleName" 
                     ref={register} 
                  />
               </label>
               <label htmlFor="lastName">last name <span className="require">*</span>
                  <input 
                     type="text" 
                     id="lastName" 
                     name="lastName" 
                     ref={register({ required: true })} 
                  />
                  <p className="error">{errors.lastName && "Required field"}</p>
               </label>
               <label htmlFor="email">Email <span className="require">*</span>
                  <input 
                     type="email" 
                     id="email" 
                     name="email" 
                     ref={register({ required: true })} 
                  />
                  <p className="error">{errors.email && "Required field"}</p>
               </label>
               <label 
                  htmlFor="cellPhone" 
                  className="phone-labels"
               >Primary Phone Number
                  <span className="require">*</span>
                  <input 
                     type="tel" 
                     id="cellPhone" 
                     name="cellPhone" 
                     maxLength={10}
                     ref={register({ 
                        required: true, 
                        pattern: /^\d+$/ 
                     })}
                  />
                  <p className="error">
                     {errors.cellPhone && errors.cellPhone.type === "pattern" && "Enter valid phone number"}
                  </p>
                  <p className="error">
                     {errors.cellPhone && errors.cellPhone.type === "required" && "Required field"}
                  </p>
               </label>

               <label htmlFor="dateOfBirth">Date of Birth <span className="require">*</span>
                  <input 
                     type="date" 
                     id="dateOfBirth" 
                     name="dateOfBirth" 
                     ref={register({ required: true })} 
                  />
                  <p className="error">{errors.dateOfBirth && "Required field"}</p>
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
                  <input 
                     type={toogleSsn ? "text" : "password"}
                     id="ssn" 
                     name="ssn" 
                     inputMode="numeric"
                     maxLength={9}
                     ref={register({ 
                        required: true, 
                        minLength: 9,
                        pattern: /^\d+$/ 
                     })} 
                  />
                  <p className="error-backup">
                     {errors.ssn && errors.ssn.type === "required" && "Required field" }
                  </p>
                  <p className="error-backup">
                     {errors.ssn && errors.ssn.type === "minLength" && "Field required a min length of 9" }
                  </p>
                  <p className="error-backup">
                     {errors.ssn && errors.ssn.type === "pattern" && "Enter valid SSN" }
                  </p>

               </label>
               <label htmlFor="creditScore">
                  what's your credit score?
                  <span className="require">*</span>
                  <input 
                     type="text"
                     maxLength={3}
                     id="creditScore" 
                     name="creditScore" 
                     ref={register({ 
                        required: true,
                        pattern: /^\d+$/,
                        validate: value => value >= 300
                     })} 
                  />
                  <p className="error">
                     {errors.creditScore && errors.creditScore.type === 'required' && "Required field"}
                  </p>
                  <p className="error">
                     {errors.creditScore && errors.creditScore.type === "pattern" && "Enter valid format"}
                  </p>
                  <p className="error">
                     {errors.creditScore && errors.creditScore.type === "validate" && "Enter valid credit score"}
                  </p>
               </label>

               <div className="current-address">
                  <h2>current physical address</h2>
                  <label htmlFor="address">
                     address
                     <span className="require">*</span>
                     <input 
                        type="text" 
                        id="address" 
                        name="address" 
                        ref={register({ required: true })} 
                     />
                     <p className="error">{errors.address && "Required field"}</p>  
                  </label>
                  <label htmlFor="zip">
                     zip
                     <span className="require">*</span>
                     <input 
                        type="text" 
                        id="zip" 
                        name="zip"
                        maxLength={5} 
                        ref={register({ 
                           required: true,
                           pattern: /^\d+$/
                        })} 
                     />
                     <p className="error">{errors.zip && errors.zip.type === "required" && "Required field"}</p>
                     <p className="error">{errors.zip && errors.zip.type === "pattern" && "Enter valid Zipcode"}</p>
                  </label>
                  <label htmlFor="city">
                     city
                     <span className="require">*</span>
                     <input 
                        type="text" 
                        id="city" 
                        name="city" 
                        ref={register({ required: true })} 
                     />
                     <p className="error">{errors.city && "Required field"}</p>
                  </label>
                  <label htmlFor="state">
                     state
                     <span className="require">*</span>
                     <select 
                        name="state" 
                        id="state" 
                        ref={register({ required: true })}
                     >
                        <option value="">--Please Select--</option>
                        {states.map((single: string, i) => (
                           <option value={single} key={i}>{single}</option>
                        ))}
                     </select>
                     <p className="error">{errors.state && "Required field"}</p>              
                  </label>
                  <label htmlFor="haveBankAccount">
                     do you have any bank accounts?
                     <span className="require">*</span>
                     <select 
                        name="haveBankAccount" 
                        id="haveBankAccount" 
                        ref={register({ required: true })}
                     >
                        <option value="">--Please Select--</option>
                        <option value="checkingSavings">checking and savings</option>
                        <option value="savingsOnly">savings only</option>
                        <option value="checkingOnly">checking only</option>
                        <option value="neither">neither</option>

                     </select>
                     <p className="error">{errors.haveBankAccount && "Required field"}</p>              
                  </label>

                  <label htmlFor="employmentStatus">
                     Employment Status
                     <span className="require">*</span>
                     <select 
                        name="employmentStatus" 
                        id="employmentStatus" 
                        ref={register({ required: true })}
                     >
                        <option value="">--Please Select--</option>
                        {employmentStatus.map((single: string, i) => (
                           <option value={single} key={i}>{single}</option>
                        ))}
                     </select>
                     <p className="error">{errors.employmentStatus && "Required field"}</p>
                  </label>
                  <label htmlFor="monthlyExpenses">
                     Monthly Mortgage/Rent Payment
                     <span className="require">*</span>
                  <input 
                     type="number" 
                     id="monthlyExpenses" 
                     name="monthlyExpenses" 
                     ref={register({ required: true })} 
                  /> 
                  <p className="error">{errors.monthlyExpenses && "Required field"}</p>
                  </label>
                  <label htmlFor="monthlyIncome">
                     Gross Monthly Income (before taxes)
                     <span className="require">*</span>
                     <input 
                        type="number" 
                        id="monthlyIncome" 
                        name="monthlyIncome"
                        
                        ref={register({ required: true })} 
                     />
                     <p className="error">{errors.monthlyIncome && "Required field"}</p>
                  </label>
               </div>
               <div className="btn-wrapper">
                  <p><span className="require">*</span>Required Field(s)</p>
                  <button type="submit">see if I'm Pre-Approved</button>
               </div>
            </form>

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

export default PreApprovalCreditCardLoan;
