import React from 'react';
import MakeModelYear from './MakeModelYear';


interface Props {
   register: any;
   errors: any;
   knowMakeAndModel: string;
}

const ProvideLoanInformation: React.FC<Props> = ({ register, errors, knowMakeAndModel }) => {
   return (
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
   )
}

export default ProvideLoanInformation;
