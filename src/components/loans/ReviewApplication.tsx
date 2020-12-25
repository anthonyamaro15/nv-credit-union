import React from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../imgs/logo.jpg';

type FormValues = {
   preferredLocation: string;
   hasOneNevadaCreditCard: string;
}

const ReviewApplication = () => {
   const { register, errors, handleSubmit } = useForm<FormValues>();

   const onSubmit = (values: any) => {
      console.log(values);
   }

   return (
      <div className="bg-color">
         <div className="LoanApplication">
            <div className="review-form-header">
               <img src={logo} alt=""/>
               <h1 className="application-title">apply in 3 steps</h1>
               <h1>review and submit</h1>
            </div>
            <div className="application-information">
               <div className="share-classes">
                  <h3>credit card information</h3>
                  <div className="information-wrapper">
                     <div className="left-side-wrapper">
                        <span className="description">credit card type</span>
                        <span className="value">credit card</span>
                     </div>
                  </div> 
               </div>
               <div className="share-classes">
                  <h3>applicant information</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">full name</span>
                        <span className="value">lisa smith</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">SSN </span>
                        <span className="value">***1111</span>
                     </div>
                  </div> 
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">date of birth</span>
                        <span className="value">01/13/1994</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">citizenship satatus</span>
                        <span className="value">perm resident</span>
                     </div>
                  </div> 
               </div>
               <div className="share-classes">
                  <h3>applicant contact information</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">email</span>
                        <span className="value">lisa@gmail.com</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">home phone </span>
                        <span className="value">(702) 232-34-22</span>
                     </div>
                  </div> 
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">preferred contact method</span>
                        <span className="value">email</span>
                     </div>
                  </div> 
               </div>
               <div className="share-classes">
                  <h3>address</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">current physical address</span>
                        <span className="value">4450 e karen ave las vegas NV 89121</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">occupancy status </span>
                        <span className="value">rent</span>
                     </div>
                  </div> 
                 <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">current physical address</span>
                        <span className="value check-for-same-address">mailinh address is the same as current </span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">occupancy duration</span>
                        <span className="value">4 yers 2 monts</span>
                     </div>
                  </div> 
               </div>
               <div className="share-classes">
                  <h3>your identification</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">ID Type</span>
                        <span className="value">DRIVERS LICENSE</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">ID Number</span>
                        <span className="value">324324242424233</span>
                     </div>
                  </div>  
               </div>
               <div className="share-classes">
                  <h3>financial information</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">empoyment status</span>
                        <span className="value">unemployed</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">profession/Job Title</span>
                        <span className="value">chef</span>
                     </div>
                  </div> 
                 <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">employment duration</span>
                        <span className="value">1 yers</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">gross monthly income </span>
                        <span className="value">$ 4,000.00</span>
                     </div>
                  </div> 
                 <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">montly mortage/rent</span>
                        <span className="value">$ 300.00</span>
                     </div>
                  </div> 
               </div>
            </div>
            <form className="choose-branch-location" onSubmit={handleSubmit(onSubmit)}>
               <h1>please answer question(s) below</h1>
               <label htmlFor="preferredLocation">
                  please select a preferred branch to sign documents
                  <span className="require">*</span>
                  <select name="preferredLocation" id="preferredLocation" ref={register({ required: true })}>
                     <option value="">--Please Select--</option>
                     <option value="location-one">location one</option>
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
               <div className="agreement">
                  <h1>Read, sign and Submit</h1>
                  <p className="small-desc">Your application is not complete until you read the disclosure below and click the "I Agree" button in orther to submit your application.</p>
                  <p>You are now ready to submit your application! By clicking on "I agree", you authorize us to verify the information you submitted and may obtain your credit report. Upon your request, we will tell you if a credit report was obtained and give you the name and address of the credit reporting agency that provided the report. You warrant to us that the information you are submitting is true and correct. By submitting this application, you agree to allow us to receive the information contained in your application, as well as the status of your application.</p>
               </div>
               <div className="btn-wrapper">
                  <p><span className="require">*</span>Required Field(s)</p>
                  <button type="submit">I Agree</button>
                  <span>Or</span>
                  <button className="goback">go back</button>
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

export default ReviewApplication;
