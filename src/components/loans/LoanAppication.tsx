import React, {  useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaUserAlt } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';
import logo from '../../imgs/logo.jpg';
import { FormCreditCardProps } from '../interfaces/loanApplicationInterface';
import { useDispatch } from 'react-redux';
import { CREDIT_CARD_APPLICATION } from '../../redux/actions';
import { createNumbers, states, employmentStatus, idType } from '../../seedData';
import Employed from './loanApplicationOptionalInputs/Employed';
import Unemployed from './loanApplicationOptionalInputs/Unemployed';
import Homemaker from './loanApplicationOptionalInputs/Homemaker';
import ActiveMilitary from './loanApplicationOptionalInputs/ActiveMillitary';
import IdTypes from './loanApplicationOptionalInputs/IdTypes';
import SelfEmployed from './loanApplicationOptionalInputs/SelfEmployed';

interface Props {
   applicationData: any;
}

const LoanApplication: React.FC<Props> = ({ applicationData }) => {
   const { register, errors, handleSubmit, watch } = useForm({
      mode: "onBlur",
      defaultValues: applicationData
   });
   const [toogleSsn, setToggleSsn] = useState(false);
   const [toogleAddress, setToogleAddress] = useState(false);
   const history = useHistory();
   const dispatch = useDispatch();
   const { loanType } = useParams<{loanType: string}>();
   const years = createNumbers(80);
   const months = createNumbers(11);

   const employment = watch('employmentStatus');
   const identificationType = watch("idType");

   const onSubmit = (values: FormCreditCardProps) => {
      const updatedValues = {...values, loanType };
      dispatch({type: CREDIT_CARD_APPLICATION, payload: updatedValues});
      localStorage.setItem("application", JSON.stringify({...updatedValues, ssn: ""}));
      history.push('/loans/application/visa-platium/confirmation');
   }

   const toogleSSN = () => {
      setToggleSsn(!toogleSsn);
   }

   const showDifferentAddressInputs = () => {
   
      setToogleAddress(!toogleAddress);
   }

   return (
      <div className="bg-color">
         <div className="LoanApplication">
            <div className="application-header">
               <img src={logo} alt=""/>
               <h1 className="application-title">Apply in 3 Steps</h1>
               <h1>tell us about yourself</h1>
               <h2>
                  <span><FaUserAlt /></span>
                  personal information
               </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="firstName">
                  first name 
                  <span className="require">*</span>
                  <input type="text" id="firstName" name="firstName" ref={register({required: true})} />
                  <p className="error">{errors.firstName && "Required field"}</p>
               </label>

               <label htmlFor="middleName">middle name
                  <input type="text" id="middleName" name="middleName" ref={register} />
               </label>
               <label htmlFor="lastName">last name <span className="require">*</span>
                  <input type="text" id="lastName" name="lastName" ref={register({ required: true})} />
                  <p className="error">{errors.lastName && "Required field"}</p>
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
                     {/* <span className="icon"><AiFillQuestionCircle /></span> */}
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
                  <input type={toogleSsn ? "text" : "password"} id="ssn" name="ssn" ref={register({ required: true, maxLength: 9})} />
                  <p className="error-backup">{errors.ssn && errors.ssn.type === "required" && "Required field" }</p>
                  <p className="error-backup">{errors.ssn && errors.ssn.type === "minLength" && "Field required a min length of 9" }</p>

               </label>
               <div className="date-of-birth">
                  <div>
                     <span>date of birth</span>
                     <span className="require">*</span>
                  </div>
                  <div className="dof-wrapper">
                     <label htmlFor="birthMonth">
                        <input type="text" id="birthMonth" name="birthMonth" placeholder="mm" ref={register({ required: true})} />
                        <p className="error-backup">{errors.birthMonth && "Required field"}</p>
                     </label>
                     <label htmlFor="birthDay">
                        <input type="text" id="birthDay" name="birthDay" placeholder="dd" ref={register({ required: true})} />
                        {/* <p className="error">{errors.birthDay && "Required field"}</p> */}
                     </label>
                     <label htmlFor="birthYear">
                        <input type="text" id="birthYear" name="birthYear" placeholder="yyyy" ref={register({ required: true})} />
                        {/* <p className="error">{errors.birthYear && "Required field"}</p> */}
                     </label>
                  </div>

                  </div>
               <label htmlFor="memberNumber">member number
                  <input type="text" name="memberNumber" id="memberNumber" ref={register} />
               </label>
               <label htmlFor="citizenship">
                  citizenship status
                  <span className="require">*</span>
                  <select name="citizenship" id="citizenship" ref={register({ required: true})}>
                     <option value="">US Citizen</option>
                     <option value="permResident">Perm Resident</option>
                     <option value="usCitizen">US Citizen</option>
                  </select>
                  <p className="error">{errors.citizenship&& "Required field"}</p>
               </label>
               <h3>reference information</h3>
               <label htmlFor="referenceFirstName">first name
                  <input type="text" id="referenceFirstName" name="referenceFirstName" ref={register} />
               </label>
               <label htmlFor="referenceLastName">last name
                  <input type="text" id="referenceLastName" name="referenceLastName" ref={register} />
               </label>
               <label htmlFor="referenceEmail">email 
                  <input type="text" id="referenceEmail" name="referenceEmail" ref={register} />
               </label>
               <label htmlFor="referencePhone">
                  phone 
                   
                  (xxx) xxx-xxxx
                  <input type="text" id="referencePhone" name="referencePhone" ref={register} />
               </label>
               <label htmlFor="referenceRelationship">relationship
                  <input type="text" id="referenceRelationship" name="referenceRelationship" ref={register} />
               </label>

               <div className="contact-information">
                  <h2>contact information</h2>
                  <label htmlFor="contactMethod">
                     Preferred Contact Method
                     <span className="require">*</span>
                     <select name="contactMethod" id="contactMethod" ref={register({ required: true})}>
                        <option value="">--Please Select--</option>
                        <option value="email">email</option>
                        <option value="homePhone">home phone</option>
                        <option value="cellPhone">cell phone</option>
                        <option value="workPhone">work phone</option>
                     </select>
                     <p className="error">{errors.contactMethod&& "Required field"}</p>
                  </label>
                  <label htmlFor="contactEmail">
                     email
                     <span className="require">*</span> 
                     <input type="text" id="contactEmail" name="contactEmail" ref={register({ required: true})} />
                     <p className="error">{errors.contactEmail && "Required field"}</p>
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
                  <h2>current physical address</h2>
                  <label htmlFor="address">
                     address
                     <span className="require">*</span>
                     <input type="text" id="address" name="address" ref={register({ required: true})} />
                     <p className="error">{errors.address && "Required field"}</p>  
                  </label>
                  <label htmlFor="zip">
                     zip
                     <span className="require">*</span>
                     <input type="text" id="zip" name="zip" ref={register({ required: true})} />
                     <p className="error">{errors.zip && "Required field"}</p>
                  </label>
                  <label htmlFor="city">
                     city
                     <span className="require">*</span>
                     <input type="text" id="city" name="city" ref={register({ required: true})} />
                     <p className="error">{errors.city && "Required field"}</p>
                  </label>
                  <label htmlFor="state">
                     state
                     <span className="require">*</span>
                     <select name="state" id="state" ref={register({ required: true})}>
                        <option value="">--Please Select--</option>
                        {states.map((single: string, i) => (
                           <option value={single} key={i}>{single}</option>
                        ))}
                     </select>
                     <p className="error">{errors.state && "Required field"}</p>              
                  </label>
                  <label htmlFor="occupancyStatus">
                     occupancy status
                     <span className="require">*</span>
                     <select name="occupancyStatus" id="occupancyStatus" ref={register({ required: true})}>
                        <option value="">--Please Select--</option>
                        <option value="buyingOwnWithMortage">Buying/Own with mortage</option>
                        <option value="liveWithParents">live with parents</option>
                        <option value="rent">rent</option>
                        <option value="governmentQuarterst">government quarters</option>
                        <option value="other">other</option>
                     </select>
                     <p className="error">{errors.occupancyStatus && "Required field"}</p>          
                  </label>
                  <div className="occupancy-duration">
                     <div>
                        <span>occupancy duration</span>
                        <span className="require">*</span>
                     </div>
                     <div className="duration-wrapper">
                        <label htmlFor="occupancyYears">
                           <select name="occupancyYears" id="occupancyYears" ref={register({ required: true})}>
                              <option value="">years</option>
                              {years.map((year: number, i) => (
                                 <option value={year} key={i}>{year}</option>
                              ))}
                           </select>
                           <p className="error-backup">{errors.occupancyYears && "Required field"}</p>
                        </label>
                        <label htmlFor="occupancyMonths">
                           <select name="occupancyMonths" id="occupancyMonths" ref={register({ required: true })}>
                              <option value="">months</option>
                              {months.map((month: number, i) => (
                                 <option value={month} key={i}>{month}</option>
                              ))}
                           </select>
                           {/* <p className="error">{errors.occupancyMonths && "Required field"}</p> */}
                        </label>
                     </div>
                  </div>
                  <div className="use-different-address">
                     {toogleAddress ? (
                        <div className="diferent-address-title" onClick={showDifferentAddressInputs}>
                           <FaArrowAltCircleDown />
                           <span>use same as address for mailing</span>
                        </div>   
                     ): (
                        <div className="diferent-address-title" onClick={showDifferentAddressInputs}>
                           <FaArrowAltCircleRight />
                           <span>use different address for mailing</span>
                        </div>
                     )}

                     <div className={toogleAddress ? "different-address-input-wrapper show-inputs" : "different-address-input-wrapper"}>
                        <label htmlFor="differentAddress">address
                           <span className="require">*</span>
                           <input type="text" name="differentAddress" id="differentAddress" ref={register} />
                        </label>
                        <label htmlFor="differentZip">zip
                           <span className="require">*</span>
                           <input type="text" name="differentZip" id="differentZip" ref={register} />
                        </label>
                        <label htmlFor="differentCity">city
                           <span className="require">*</span>
                           <input type="text" name="differentCity" id="differentCity" ref={register} />
                        </label>
                        <label htmlFor="different-state">
                           state
                           <span className="require">*</span> 
                           <select name="differentState" id="differentState" ref={register}>
                              <option value="">--Please Select--</option>
                              {states.map((single: string, i) => (
                                 <option value={single} key={i}>{single}</option>
                              ))}
                           </select>
                           {/* <p className="error">{errors.idState && "Required field"}</p> */}
                        </label>
                     </div>
                  </div>
               </div>
               <div className="identification">
                  <h2>identification</h2>
                  <label htmlFor="idType">
                     ID Type
                     <span className="require">*</span>
                     <select name="idType" id="idType" ref={register({ required: true })}>
                        <option value="">--Please Select--</option>
                        {idType.map((single: string, i) => (
                           <option value={single} key={i}>{single}</option>
                        ))}
                     </select>
                     <p className="error">{errors.idType && "Required field"}</p>
                  </label>

                  {identificationType && (
                     <IdTypes 
                        register={register}
                        errors={errors}
                        years={years}
                        months={months}
                     
                     />
                  )}

               </div>
               <div className="financial-information">
                  <h2>financial information</h2>
                  <label htmlFor="monthlyIncome">
                     Gross Monthly Income (before taxes)
                     <span className="require">*</span>
                     <input type="text" id="monthlyIncome" name="monthlyIncome" ref={register({ required: true})} />
                     <p className="error">{errors.monthlyIncome && "Required field"}</p>
                  </label>
                  <label htmlFor="employmentStatus">
                     employment status
                     <span className="require">*</span>
                     <select name="employmentStatus" id="employmentStatus" ref={register({ required: true})}>
                        <option value="">--Please Select--</option>
                        {employmentStatus.map((single: string, i) => (
                           <option value={single} key={i}>{single}</option>
                        ))}
                     </select>
                     <p className="error">{errors.employmentStatus && "Required field"}</p>
                  </label>
                  {employment === "Employed" && (
                     <Employed 
                        register={register}
                        errors={errors}
                        years={years}
                        months={months}
                     
                     />
                  )}
                  {employment === "Unemployed" && (
                     <Unemployed 
                        register={register}
                        errors={errors}
                        years={years}
                        months={months}
                     
                     />
                  )}
                  {employment === "Retired" && (
                     <Unemployed 
                        register={register}
                        errors={errors}
                        years={years}
                        months={months}
                     
                     />
                  )}
                  {employment === "Homemaker" && (
                     <Homemaker
                        register={register}
                        errors={errors}
                     />
                  )}
                  {employment === "Active Military" && (
                     <ActiveMilitary
                        register={register}
                        errors={errors}
                        years={years}
                        months={months}
                     />
                  )}

                  {employment === "Self Employed" && (
                     <SelfEmployed
                        register={register}
                        errors={errors}
                        years={years}
                        months={months}
                     />
                  )}
                  <h3>monthy expenses</h3>
                  <label htmlFor="monthlyExpenses">
                     Monthly Mortgage/Rent Payment
                     <span className="require">*</span>
                  <input type="text" id="monthlyExpenses" name="monthlyExpenses" ref={register({ required: true})} /> 
                  <p className="error">{errors.monthlyExpenses && "Required field"}</p>
                  </label>
               </div>
               <div className="btn-wrapper">
                  <p><span className="require">*</span>Required Field(s)</p>
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
      </div>
   )
}

export default LoanApplication;
