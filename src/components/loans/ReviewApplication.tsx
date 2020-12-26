import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../imgs/logo.jpg';
import { FormCreditCardProps } from '../interfaces/loanApplicationInterface';

type FormValues = {
   preferredLocation: string;
   hasOneNevadaCreditCard: string;
}

interface CreditCardReducerProps {
   creditCardApplication: FormCreditCardProps;  
}

interface ReducerProps {
   creditCardReducer: CreditCardReducerProps;
}

interface Props {
   getLocalStoreData: () => void;
}

const ReviewApplication: React.FC<Props> = ({ getLocalStoreData }) => {
   const { register, errors, handleSubmit } = useForm<FormValues>();
   const history = useHistory();
   const { pathname } = useLocation();
   const  { creditCardApplication }  = useSelector((state: ReducerProps ) => state.creditCardReducer);

   const {
      firstName,
      middleName,
      lastName,
      ssn,
      birthMonth,
      birthDay,
      birthYear,
      // memberNumber,
      // referenceFirstName,
      // referenceLastName,
      // referenceEmail,
      // referencePhone,
      // referenceRelationship,
      citizenship,
      contactMethod,
      contactEmail,
      homePhone,
      // cellPhone,
      // workPhone,
      address,
      zip,
      city,
      state,
      occupancyStatus,
      occupancyYears,
      occupancyMonths,
      idType,
      idNumber,
      idState,
      expirationMonth,
      expirationDay,
      expirationYear,
      monthlyIncome,
      employmentStatus,
      jobTitle,
      // employer,
      employmentYears,
      // employmentMonths,
      monthlyExpenses,
      loanType,
   } = creditCardApplication;

   // console.log(pathname.split('/').slice(0, -1).join('/'));

   const onSubmit = (values: FormValues) => {
      // const { hasOneNevadaCreditCard, preferredLocation } = values;
      // const updateNewValues = {
      //    ...creditCardApplication,
      //    hasOneNevadaCreditCard,
      //    preferredLocation
      // }
      history.push("/loans/result-application");
      localStorage.clear();
   }

   const goBackToApplication = () => {
      getLocalStoreData();
      const previousPath = pathname.split('/').slice(0, -1).join('/');
      history.push(previousPath);
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
                        <span className="value">{loanType}</span>
                     </div>
                  </div> 
               </div>
               <div className="share-classes">
                  <h3>applicant information</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">full name</span>
                        <span className="value">{`${firstName} ${middleName} ${lastName}`}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">SSN </span>
                        <span className="value">{`${ssn}`}</span>
                     </div>
                  </div> 
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">date of birth</span>
                        <span className="value">{`${birthMonth}/${birthDay}/${birthYear}`}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">citizenship satatus</span>
                        <span className="value">{citizenship}</span>
                     </div>
                  </div> 
               </div>
               <div className="share-classes">
                  <h3>applicant contact information</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">email</span>
                        <span className="value">{contactEmail}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">home phone </span>
                        <span className="value">{homePhone}</span>
                     </div>
                  </div> 
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">preferred contact method</span>
                        <span className="value">{contactMethod}</span>
                     </div>
                  </div> 
               </div>
               <div className="share-classes">
                  <h3>address</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">current physical address</span>
                        <span className="value">{`${address} ${city} ${state} ${zip}`}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">occupancy status </span>
                        <span className="value">{occupancyStatus}</span>
                     </div>
                  </div> 
                 <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">current physical address</span>
                        <span className="value check-for-same-address">mailinh address is the same as current </span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">occupancy duration</span>
                        <span className="value">{`${occupancyYears} yrs ${occupancyMonths} months`}</span>
                     </div>
                  </div> 
               </div>
               <div className="share-classes">
                  <h3>your identification</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">ID Type</span>
                        <span className="value">{idType}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">ID Number</span>
                        <span className="value">{idNumber}</span>
                     </div>
                  </div> 
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">ID State</span>
                        <span className="value">{idState}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">ID Expiration Date</span>
                        <span className="value">{`${expirationMonth}/${expirationDay}/${expirationYear}`}</span>
                     </div>
                  </div> 
               </div>
               <div className="share-classes">
                  <h3>financial information</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">empoyment status</span>
                        <span className="value">{employmentStatus}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">profession/Job Title</span>
                        <span className="value">{jobTitle}</span>
                     </div>
                  </div> 
                 <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">employment duration</span>
                        <span className="value">{`${employmentYears}`}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">gross monthly income </span>
                        <span className="value">{`$ ${monthlyIncome}`}</span>
                     </div>
                  </div> 
                 <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">montly mortage/rent</span>
                        <span className="value">{`$ ${monthlyExpenses}`}</span>
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
                  <button className="goback" onClick={goBackToApplication}>go back</button>
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
