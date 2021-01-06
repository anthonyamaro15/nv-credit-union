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
import ProvideLoanInformation from './AutoLoanApplicationInputs/ProvideLoanInformation';


const AutoLoanApplication = () => {
   const { register, errors, handleSubmit, watch } = useForm<AutoLoanApplicationProps>({
      mode: "onBlur",
   });
   const [toogleTradeIn, setToogleTradeIn] = useState(false);
   const [tradeIn, setTradeIn] = useState(false);
   const history = useHistory();
   const dispatch = useDispatch();
   const purchaseType = watch('purchaseType');
   const knowMakeAndModel = watch('knowsMakeAndModel');

   const onSubmit = (values: AutoLoanApplicationProps) => {
      dispatch({type: AUTO_LOAN_APPLICATION, payload: {...values, tradeIn} });
      history.push('/loans/application/auto-loan');
   }

   const displayTradeInInputs = () => {
      setToogleTradeIn(!toogleTradeIn);
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

                     {/* ONly display components below if user select the refinance option */}
                     {purchaseType === "refinance vehicle" && (
                        <div className="different-address-input-wrapper">
                           <MakeModelYear register={register} errors={errors} />
                           <RefinanceVehicle register={register} errors={errors} />
                        </div>
                     )}

                     {/* Display this when user select other than refiance */}
                     {purchaseType !== 'refinance vehicle' && (
                        <ProvideLoanInformation
                           register={register}
                           errors={errors}
                           knowMakeAndModel={knowMakeAndModel}
                        />
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
                           {/* If toogleTradeIn is true that means user clicked on the trade in button, so trade in form will be display to user, it will toogle the title and icon as well */}
                           {toogleTradeIn ? (
                              <div className="diferent-address-title" onClick={displayTradeInInputs}>
                                 <FaArrowAltCircleDown />
                                 <span>remove trade-in</span>
                              </div>   
                           ): (
                              <div className="diferent-address-title" onClick={displayTradeInInputs}>
                                 <FaArrowAltCircleRight />
                                 <span>add a trade-in</span>
                              </div>
                           )}

                           {/* Toogles css classes to show / hide the trade in form */}
                           <div className={toogleTradeIn ? "different-address-input-wrapper show-inputs" : "different-address-input-wrapper"}>
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
