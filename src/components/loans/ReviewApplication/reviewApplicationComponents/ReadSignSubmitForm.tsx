import React from 'react';
import { preferredLocations } from '../../../../seedData';

interface Props {
   register: any;
   handleSubmit: any;
   onSubmit: any;
   loanType: string;
   errors: any;
   goBackToApplication: () => void;
}

const ReadSignSubmitForm: React.FC<Props> = ({ 
   register, 
   handleSubmit, 
   onSubmit, 
   loanType, 
   errors, 
   goBackToApplication 
}) => {
   return (
      <form className="choose-branch-location" onSubmit={handleSubmit(onSubmit)}>
         <h1>please answer question(s) below</h1>
         {loanType === 'visa-platium' || loanType === 'visa-signature' && (
            <>
               <label htmlFor="preferredLocation">
                  please select a preferred branch to sign documents
                  <span className="require">*</span>
                  <select name="preferredLocation" id="preferredLocation" ref={register({ required: true })}>
                     <option value="">--Please Select--</option>
                     {preferredLocations.map((location: string, i) => (
                        <option value={location} key={i}>{location}</option>
                     ))}
                  </select>
                  <p className="error">{errors.preferredLocation && "Require field"}</p>
               </label>
               <label htmlFor="hasOneNevadaCreditCard">
                  Do you currently have a One Nevada Credit Union Visa Credit Card
                  <span className="require">*</span>
                  <select name="hasOneNevadaCreditCard" id="hasOneNevadaCreditCard" ref={register({ required: true })}>
                     <option value="">--Please Select--</option>
                     <option value="no">no</option>
                     <option value="yes">yes</option>
                  </select>
                  <p className="error">{errors.hasOneNevadaCreditCard && "Require field"}</p>
               </label>                  
            </>
         )}
         {loanType === 'auto-loan' && (
            <label htmlFor="vinNumber">
               please enter VIN of the vehicle
               <input 
                  type="text" 
                  name="vinNumber" 
                  id="vinNumber"
                  maxLength={17}
                  ref={register({ required: true })}
                  />
               <p className="error">{errors.vinNumber && "Require field"}</p>
            </label>
         )}

         <div className="agreement">
            <h1>Read, sign and Submit</h1>
            <p className="small-desc">Your application is not complete until you read the disclosure below and click the "I Agree" button in orther to submit your application.</p>
            <p>You are now ready to submit your application! By clicking on "I agree", you authorize us to verify the information you submitted and may obtain your credit report. Upon your request, we will tell you if a credit report was obtained and give you the name and address of the credit reporting agency that provided the report. You warrant to us that the information you are submitting is true and correct. By submitting this application, you agree to allow us to receive the information contained in your application, as well as the status of your application.</p>
         </div>
         <div className="btn-wrapper">
            <p><span className="require">*</span>Required Field(s)</p>
            <button type="submit">I Agree</button>
            <span>Or</span>
            <button className="goback" onClick={goBackToApplication}>go back</button>
         </div>
      </form>
   )
}

export default ReadSignSubmitForm;
