import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";



const LoanApplication = () => {
   const { register, handleSubmit } = useForm();

   const onSubmit = (values: any) => {
      console.log(values);
   }

   return (
      <div className="LoanApplication">
         <h1>Apply in 3 Steps</h1>
         <h1>tell us about yourself</h1>
         <h2>
            <span><FaUserAlt /></span>
            personal information
         </h2>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">first name
               <input type="text" id="firstName" name="firstName" ref={register} />
            </label>
            <label htmlFor="middleName">middle name
               <input type="text" id="middleName" name="middleName" ref={register} />
            </label>
            <label htmlFor="lastName">last name
               <input type="text" id="lastName" name="lastName" ref={register} />
            </label>
            <label htmlFor="ssn">ssn
               <span className="show">Show SSN</span>
               <span className="icon"><AiFillQuestionCircle /></span>
               <span className="lock-icon"><FaLock /></span>
               <input type="password" id="ssn" name="ssn" ref={register} />
            </label>
            <div className="date-of-birth">
               <label htmlFor="month">date of birth
                  <input type="text" id="month" name="month" placeholder="mm" ref={register} />
               </label>
               <label htmlFor="day">
                  <input type="text" id="day" name="day" placeholder="dd" ref={register} />
               </label>
               <label htmlFor="year">
                  <input type="text" id="year" name="year" placeholder="yyyy" ref={register} />
               </label>
               </div>
            <label htmlFor="memberNumber">
               <input type="text" name="memberNumber" id="memberNumber" ref={register} />
            </label>
            <label htmlFor="citizenship">citizenship status
               <select name="citizenship" id="citizenship" ref={register}>
                  <option value="">--Please Select--</option>
                  <option value="permResident">Perm Resident</option>
                  <option value="usCitizen">US Citizen</option>
               </select>
            </label>
            <h2>reference information</h2>
            <label htmlFor="firstName">first name
               <input type="text" id="firstName" name="firstName" ref={register} />
            </label>
            <label htmlFor="lastName">last name
               <input type="text" id="lastName" name="lastName" ref={register} />
            </label>
            <label htmlFor="email">email
               <input type="text" id="email" name="email" ref={register} />
            </label>
            <label htmlFor="phone">phone (xxx) xxx-xxxx
               <input type="text" id="phone" name="phone" ref={register} />
            </label>
            <label htmlFor="relationship">relationship
               <input type="text" id="relationship" name="relationship" ref={register} />
            </label>

            <div className="contact-information">
               <h2>contact information</h2>
               <label htmlFor="contactMethod">Preferred Contact Method
                  <select name="contactMethod" id="contactMethod" ref={register}>
                     <option value="">--Please Select--</option>
                     <option value="email">email</option>
                     <option value="homePhone">home phone</option>
                     <option value="cellPhone">cell phone</option>
                     <option value="workPhone">work phone</option>
                  </select>
               </label>
               <label htmlFor="email">email
                  <input type="text" id="email" name="email" ref={register} />
               </label>
               <label htmlFor="homePhone">home phone (xxx) xxx-xxxx
                  <input type="text" id="homePhone" name="homePhone" ref={register} />
               </label>
               <label htmlFor="cellPhone">cell phone (xxx) xxx-xxxx
                  <input type="text" id="cellPhone" name="cellPhone" ref={register} />
               </label>
               <label htmlFor="workPhone">phone (xxx) xxx-xxxx
                  <input type="text" id="workPhone" name="workPhone" ref={register} />
               </label>            
            </div>
            <div className="current-address">
               <h1>current physical address</h1>
               <label htmlFor="address">address
                  <input type="text" id="address" name="address" ref={register} />  
               </label>
               <label htmlFor="zip">zip
                  <input type="text" id="zip" name="zip" ref={register} />  
               </label>
               <label htmlFor="city">city
                  <input type="text" id="city" name="city" ref={register} />  
               </label>
               <label htmlFor="state">state
                  <select name="state" id="state" ref={register}>
                     <option value="">--Please Select--</option>
                     <option value="alabama">alabama</option>
                  </select>               
               </label>
               <label htmlFor="occupancyStatus">occupancy status
                  <select name="occupancyStatus" id="occupancyStatus" ref={register}>
                     <option value="">--Please Select--</option>
                     <option value="buyingOwnWithMortage">Buying/Own with mortage</option>
                     <option value="liveWithParents">live with parents</option>
                     <option value="rent">rent</option>
                     <option value="governmentQuarterst">government quarters</option>
                     <option value="other">other</option>
                  </select>              
               </label>
               <div className="occupancy-duration">
                  <label htmlFor="years">occupancy duration
                     <select name="years" id="years" ref={register}>
                        <option value="">--Please Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                     </select>
                  </label>
                  <label htmlFor="months">months
                     <select name="months" id="months">
                        <option value="">--Please Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                     </select>
                  </label>
               </div>
            </div>
            <div className="previous-address">
               <h2>previous address</h2>
               <label htmlFor="previousAddress">address
                  <input type="text" id="previousAddress" name="previousAddress" ref={register} />  
               </label>
               <label htmlFor="previousZip">zip
                  <input type="text" id="previousZip" name="previousZip" ref={register} />  
               </label>
               <label htmlFor="previousCity">city
                  <input type="text" id="previousCity" name="previousCity" ref={register} />  
               </label>
               <select name="previousState" id="previousState" ref={register}>state 
                  <option value="">--Please Select--</option>
                  <option value="alabama">alabama</option>
               </select>
            </div>
            <div className="identification">
               <label htmlFor="idType">ID Type
                  <select name="idType" id="idType">
                     <option value="">drivers license</option>
                     <option value="employerId">employer id</option>
                  </select>
               </label>
               <label htmlFor="idNumber">ID Number
                  <input type="text" id="idNumber" name="idNumber" ref={register} />  
               </label>
               <label htmlFor="idState">ID state 
                  <select name="idState" id="idState" ref={register}>
                     <option value="">--Please Select--</option>
                     <option value="alabama">alabama</option>
                  </select>
               </label>
               <div className="id-expiration-date">
                  <label htmlFor="expirationMonth">ID Expiration Date
                     <input type="text" id="expirationMonth" name="expirationMonth" placeholder="mm" ref={register} />
                  </label>
                  <label htmlFor="expirationDay">
                     <input type="text" id="expirationDay" name="expirationDay" placeholder="dd" ref={register} />
                  </label>
                  <label htmlFor="expirationYear">
                     <input type="text" id="expirationYear" name="expirationYear" placeholder="yyyy" ref={register} />
                  </label>
               </div>
            </div>
            <div className="financial-information">
               <h2>financial information</h2>
               <label htmlFor="monthlyIncome">Gross Monthly Income (before taxes)
                  <input type="text" id="monthlyIncome" name="monthlyIncome" ref={register} />
               </label>
               <label htmlFor="employmentStatus">employment status
                  <select name="employmentStatus" id="employmentStatus" ref={register}>
                     <option value="">--Please Select--</option>
                     <option value="employed">employed</option>
                  </select>
               </label>
               <label htmlFor="jobTitle">Profession/Job Title
                  <input type="text" id="jobTitle" name="jobTitle" ref={register} />
               </label>
               <label htmlFor="employer">employer
                  <input type="text" id="employer" name="employer" ref={register} />
               </label>
               <div className="employment-duration">
                  <label htmlFor="employmentYears">employment duration
                     <select name="employmentYears" id="years" ref={register}>
                        <option value="">Years</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                     </select>
                  </label>
                  <label htmlFor="employmentMonths">months
                     <select name="employmentMonths" id="employmentMonths">
                        <option value="">Months</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                     </select>
                  </label>
               </div>
               <h3>monthy expenses</h3>
               <label htmlFor="monthlyExpenses">Monthly Mortgage/Rent Payment
                 <input type="text" id="monthlyExpenses" name="monthlyExpenses" ref={register} /> 
               </label>
            </div>
            <div className="btn-wrapper">
               <button type="submit">continue</button>
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
   )
}

export default LoanApplication;
