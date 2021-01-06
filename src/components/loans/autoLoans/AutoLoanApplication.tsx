import React, {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import logo from '../../../imgs/logo.jpg';
import { useDispatch } from 'react-redux';
import MakeModelYear from './AutoLoanApplicationInputs/MakeModelYear';
import TradeInOption from './AutoLoanApplicationInputs/TradeInOption';
import RefinanceVehicle from './AutoLoanApplicationInputs/RefinanceVehicle';
import { branchLocation, loanTerm } from '../../../seedData';
import { AutoLoanApplicationProps } from '../../interfaces/loanApplicationInterface';
import { AUTO_LOAN_APPLICATION } from '../../../redux/actions';


const AutoLoanApplication = () => {
   const { register, errors, handleSubmit, watch } = useForm<AutoLoanApplicationProps>({
      mode: "onBlur",
   });
   const [toogleAddress, setToogleAddress] = useState(false);
   const [tradeIn, setTradeIn] = useState(false);
   const history = useHistory();
   const dispatch = useDispatch();
   const purchaseType = watch('purchaseType');
   const knowMakeAndModel = watch('knowsMakeAndModel');

   const onSubmit = (values: any) => {
      console.log("values here ", values);
      // console.log("values here ", knowMakeAndModel);
      // const updatedValues = {...values, loanType };
      dispatch({type: AUTO_LOAN_APPLICATION, payload: {...values, tradeIn} });
      // localStorage.setItem("application", JSON.stringify({...updatedValues, ssn: ""}));
      history.push('/loans/application/auto-loan');
   }

   const showDifferentAddressInputs = () => {
      setToogleAddress(!toogleAddress);
      setTradeIn(!tradeIn);
   }

   return (
      <div className="bg-color">
         <div className="LoanApplication">
            <div className="application-header">
               <img src={logo} alt=""/>
               <h1 className="application-title">Apply in 3 Steps</h1>
               <h1 className="auto-loan-title"><span><FaCarAlt /></span>vehicle loan</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <h2>
                  select a branch location
                  <span className="require">*</span>
               </h2>
               <label htmlFor="branchLocation">
                  <select 
                     name="branchLocation" 
                     id="branchLocation" 
                     ref={register({ required: true})}
                  >
                     <option value="">--Please Select--</option>
                     {branchLocation.map((single: string, i: number) => (
                        <option value={single} key={i}>{single}</option>
                     ))}
                  </select>
                  <p className="error-backup">{errors.branchLocation && "Required field"}</p>
               </label>
               <div className="car-loan-input-wrappers">
                  <label htmlFor="purchaseType" className="purchaseType">
                     select a purpose
                     <span className="require">*</span>
                     <select 
                        name="purchaseType" 
                        id="purchaseType" 
                        ref={register({ required: true})}
                     >
                        <option value="">--Please Select--</option>
                        <option value="new vehicle purchase">new vehicle purchase</option>
                        <option value="used vehicle purchase">used vehicle purchase</option>
                        <option value="refinance vehicle">refinance vehicle</option>
                     </select>
                     <p className="select-purpose-error">{errors.purchaseType && "Required field"}</p>
                  </label>
                  <div className="loan-information">
                     <h2>provide loan information</h2>
                     <label htmlFor="vehicleType">
                        vehicle type
                        <span className="require">*</span>
                        <select 
                           name="vehicleType" 
                           id="vehicleType" 
                           ref={register({ required: true })}
                        >
                           <option value="">--Please Select--</option>
                           <option value="auto">auto</option>
                           <option value="pickup-truck">pickup-truck</option>
                        </select>
                        <p className="error">{errors.vehicleType && "Required field"}</p>
                     </label>

                     {purchaseType === "refinance vehicle" && (
                        <div className="different-address-input-wrapper">
                           <MakeModelYear register={register} errors={errors} />
                           <RefinanceVehicle register={register} errors={errors} />
                        </div>
                     )}

                     {purchaseType !== 'refinance vehicle' && (
                        <>
                           <label htmlFor="newOrUse">
                              is this a new or used vehicle?
                              <span className="require">*</span>
                              <select 
                                 name="newOrUse" 
                                 id="newOrUse" 
                                 ref={register({ required: true})}
                              >
                                 <option value="">--Please Select--</option>
                                 <option value="new">new</option>
                                 <option value="used">used</option>
                              </select>
                              <p className="error">{errors.newOrUse && "Required field"}</p>
                           </label>
                           <label htmlFor="knowsMakeAndModel">
                              do you know the Make and Model?
                              <span className="require">*</span>
                              <select 
                                 name="knowsMakeAndModel" 
                                 id="knowsMakeAndModel" 
                                 ref={register({ required: true})}
                              >
                                 <option value="">--Please Select--</option>
                                 <option value="yes">yes</option>
                                 <option value="no">no</option>
                              </select>
                              <p className="error">{errors.knowsMakeAndModel && "Required field"}</p>
                           </label>
                           {knowMakeAndModel === 'yes' && (
                              <MakeModelYear register={register} errors={errors} />
                           )}
                           <label htmlFor="estimatedPrice">
                              Estimated Purchase Price
                              <span className="require">*</span> 
                              <input 
                                 type="text" 
                                 id="estimatedPrice" 
                                 name="estimatedPrice"
                                 placeholder="$0.00"
                                 maxLength={5}
                                 ref={register({ required: true, pattern: /^\d+$/ })} 
                              />
                              <p className="error">
                                 {
                                    errors.estimatedPrice &&  
                                    errors.estimatedPrice.type === "required" && 
                                    "Required field"
                                 }
                                 </p>
                              <p className="error">
                                 {
                                    errors.estimatedPrice &&  
                                    errors.estimatedPrice.type === "pattern" && 
                                    "Enter a valid number"
                                 }
                                 </p>
                           </label>  
                           <label htmlFor="downPaymentAmount">
                              down payment amount
                              <span className="require">*</span> 
                              <input 
                                 type="text" 
                                 id="downPaymentAmount" 
                                 name="downPaymentAmount"
                                 placeholder="$0.00" 
                                 maxLength={5}
                                 ref={register({ required: true, pattern: /^\d+$/ })}
                              />
                              <p className="error">
                                 {
                                    errors.downPaymentAmount &&  
                                    errors.downPaymentAmount.type === "required" && 
                                    "Required field"
                                 }
                                 </p>
                              <p className="error">
                                 {
                                    errors.downPaymentAmount 
                                    &&  errors.downPaymentAmount.type === "pattern" 
                                    && "Enter a valid number"
                                 }
                                 </p>
                           </label> 
                           <label htmlFor="loanAmount">
                              requested loan amount
                              <span className="require">*</span> 
                              <input 
                                 type="text" 
                                 id="loanAmount" 
                                 name="loanAmount"
                                 placeholder="$0.00" 
                                 maxLength={5}
                                 ref={register({ required: true, pattern: /^\d+$/ })}
                              />
                              <p className="error">
                                 {
                                    errors.loanAmount &&  
                                    errors.loanAmount.type === "required" && 
                                    "Required field"
                                 }
                                 </p>
                              <p className="error">
                                 {
                                    errors.loanAmount 
                                    &&  errors.loanAmount.type === "pattern" 
                                    && "Enter a valid number"
                                 }
                                 </p>
                           </label>                     
                        </>
                     )}

                     <label htmlFor="loanTerm">
                        Loan Term (months)
                        <span className="require">*</span>
                        <select 
                           name="loanTerm" 
                           id="loanTerm" 
                           ref={register({ required: true})}
                        >
                           <option value="">--Please Select--</option>
                           {loanTerm.map((single: string, i: number) => (
                              <option value={single} key={i}>{single}</option>
                           ))}
                        </select>
                        <p className="error">{errors.knowsMakeAndModel && "Required field"}</p>
                     </label>

                     {purchaseType !== 'refinance vehicle' && (
                        <div className="use-different-address">
                           {toogleAddress ? (
                              <div className="diferent-address-title" onClick={showDifferentAddressInputs}>
                                 <FaArrowAltCircleDown />
                                 <span>remove trade-in</span>
                              </div>   
                           ): (
                              <div className="diferent-address-title" onClick={showDifferentAddressInputs}>
                                 <FaArrowAltCircleRight />
                                 <span>add a trade-in</span>
                              </div>
                           )}

                           <div className={toogleAddress ? "different-address-input-wrapper show-inputs" : "different-address-input-wrapper"}>
                              <h2 className="trade-in-information">trade-in information</h2>
                              
                              <TradeInOption register={register} errors={errors} />
                           </div>
                        </div>
                     )}
                  </div>
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

export default AutoLoanApplication;
