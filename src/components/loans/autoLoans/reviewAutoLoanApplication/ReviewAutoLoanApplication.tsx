import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../imgs/logo.jpg';
// import { CREDIT_CARD_APPLICATION } from '../../../redux/actions';
// import { preferredLocations } from '../../../seedData';
// import { FormCreditCardProps } from '../../interfaces/loanApplicationInterface';
// import { serverUrl } from '../../../envVariables';
import axios from 'axios';
// import Employed from './reviewApplicationComponents/Employed';
// import Unemployed from './reviewApplicationComponents/Unemployed';
// import Retired from './reviewApplicationComponents/Retired';
// import ActiveMilitary from './reviewApplicationComponents/ActiveMilitary';
// import Homemaker from './reviewApplicationComponents/Homemaker';
// import SelfEmployed from './reviewApplicationComponents/SelfEmployed';
// import ReferenceInformation from './reviewApplicationComponents/ReferenceInformation';
// import DifferentEmailingAddress from './reviewApplicationComponents/DifferentEmailingAddress';

type FormValues = {
   preferredLocation: string;
   hasOneNevadaCreditCard: string;
}

interface CreditCardReducerProps {
   creditCardApplication: any;  
}

interface ReducerProps {
   creditCardReducer: CreditCardReducerProps;
}

interface Props {
   getLocalStoreData: () => void;
}

const ReviewAutoLoanApplication: React.FC<Props> = ({ getLocalStoreData }) => {
   const [hashSSN, setHashSSN] = useState('');
   const { register, errors, handleSubmit } = useForm<FormValues>();
   const history = useHistory();
   const dispatch = useDispatch();
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
      referenceFirstName,
      citizenship,
      contactMethod,
      contactEmail,
      homePhone,
      cellPhone,
      workPhone,
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
      employmentStatus,
      loanType,
      // use different address
      differentAddress,
   } = creditCardApplication;

   useEffect(() => {
      setHashSSN('****' + ssn.slice(5));
   },[setHashSSN, ssn]);

   const generateRandomNumber = () => {
      return Math.floor(Math.random() * 1000000);
   }

   const onSubmit =  async (values: FormValues) => {
      // const { hasOneNevadaCreditCard, preferredLocation } = values;
      // const updateNewValues = {
      //    ...creditCardApplication,
      //    hasOneNevadaCreditCard,
      //    preferredLocation,
      //    applicationNumber: generateRandomNumber()
      // }
      // dispatch({type: CREDIT_CARD_APPLICATION, payload: updateNewValues })
      // history.push("/loans/result-application");
      // localStorage.clear();

      

      // try {
      //   await axios.post(`${serverUrl}/credit_card_application/create`, updateNewValues);
      //   console.log("sucess post application");
      // } catch (error) {
      //    console.log(error.response);
      // }
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
                     <div className="lef-side-wrapper">
                        <span className="description">credit card type</span>
                        <span className="value">{loanType}</span>
                     </div>
                        <div className="right-side-wrapper">
                        <span className="description"></span>
                        <span className="value"></span>
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
                        <span className="value">{`${hashSSN}`}</span>
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
               {/* {referenceFirstName && (
                  <ReferenceInformation applicationInputs={creditCardApplication} />
               )} */}
               <div className="share-classes">
                  <h3>applicant contact information</h3>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">email</span>
                        <span className="value">{contactEmail}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">home phone </span>
                        <span className="value">{homePhone ? homePhone : 'N/A'}</span>
                     </div>
                  </div> 
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">preferred contact method</span>
                        <span className="value">{contactMethod}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">cell phone</span>
                        <span className="value">{cellPhone}</span>
                     </div>
                  </div> 
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">work phone</span>
                        <span className="value">{workPhone ? workPhone : 'N/A'}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description"></span>
                        <span className="value"></span>
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

                  {!differentAddress && (
                     <div className="information-wrapper">
                        <div className="lef-side-wrapper">
                           <span className="description">mailing address</span>
                           <span className="value check-for-same-address">same as current physical address</span>
                        </div>
                        <div className="right-side-wrapper">
                           <span className="description">occupancy duration</span>
                           <span className="value">{`${occupancyYears} yrs ${occupancyMonths} months`}</span>
                        </div>
                     </div>
                  )}

                  {/* {differentAddress && (
                     <DifferentEmailingAddress applicationInputs={creditCardApplication} />
                  )} */}
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

               {/* {employmentStatus === "Employed" && (
                  <Employed applicationInputs={creditCardApplication} />
               )}

               {employmentStatus === "Unemployed" && (
                  <Unemployed applicationInputs={creditCardApplication} />
               )}

               {employmentStatus === "Retired" && (
                  <Retired applicationInputs={creditCardApplication} />
               )}

               {employmentStatus === "Active Military" && (
                  <ActiveMilitary applicationInputs={creditCardApplication} />
               )}

               {employmentStatus === "Homemaker" && (
                  <Homemaker applicationInputs={creditCardApplication} />
               )}

               {employmentStatus === "Self Employed" && (
                  <SelfEmployed  applicationInputs={creditCardApplication} />
               )} */}
            </div>
            <form className="choose-branch-location" onSubmit={handleSubmit(onSubmit)}>
               <h1>please answer question(s) below</h1>
               <label htmlFor="preferredLocation">
                  please select a preferred branch to sign documents
                  <span className="require">*</span>
                  <select name="preferredLocation" id="preferredLocation" ref={register({ required: true })}>
                     <option value="">--Please Select--</option>
                     {/* {preferredLocations.map((location: string, i) => (
                        <option value={location} key={i}>{location}</option>
                     ))} */}
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

export default ReviewAutoLoanApplication;
