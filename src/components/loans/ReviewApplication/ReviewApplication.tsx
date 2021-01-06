import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../../imgs/logo.jpg';
import { CREDIT_CARD_APPLICATION } from '../../../redux/actions';
import { AutoLoanApplicationProps, FormCreditCardProps } from '../../interfaces/loanApplicationInterface';
import { serverUrl } from '../../../envVariables';
import axios from 'axios';
import Employed from './reviewApplicationComponents/Employed';
import Unemployed from './reviewApplicationComponents/Unemployed';
import Retired from './reviewApplicationComponents/Retired';
import ActiveMilitary from './reviewApplicationComponents/ActiveMilitary';
import Homemaker from './reviewApplicationComponents/Homemaker';
import SelfEmployed from './reviewApplicationComponents/SelfEmployed';
import ReferenceInformation from './reviewApplicationComponents/ReferenceInformation';
import DifferentEmailingAddress from './reviewApplicationComponents/DifferentEmailingAddress';
import ReviewAutoLoanInformation from './reviewApplicationComponents/reviewAutoLoanComponents/ReviewAutoLoanInformation';
import ReadSignSubmitForm from './reviewApplicationComponents/ReadSignSubmitForm';

type FormValues = {
   preferredLocation: string;
   hasOneNevadaCreditCard: string;
   vinNumber: string;
}

interface CreditCardReducerProps {
   creditCardApplication: FormCreditCardProps;  
}

interface LoanCarReducerProps {
   autoLoanApplication: AutoLoanApplicationProps;
}

interface ReducerProps {
   creditCardReducer: CreditCardReducerProps;
   loanCarReducer: LoanCarReducerProps;
}

interface Props {
   getLocalStoreData: () => void;
}

const ReviewApplication: React.FC<Props> = ({ getLocalStoreData }) => {
   const [hashSSN, setHashSSN] = useState('');
   const { register, errors, handleSubmit } = useForm<FormValues>();
   const history = useHistory();
   const dispatch = useDispatch();
   const { pathname } = useLocation();
   const  { autoLoanApplication } = useSelector((state: ReducerProps) => state.loanCarReducer);
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
      // Only displays the last four of SSN
      setHashSSN('****' + ssn.slice(5));
   },[setHashSSN, ssn]);

   // generate a random number for confirmation number
   const generateRandomNumber = () => {
      return Math.floor(Math.random() * 1000000);
   }

   const onSubmit =  async (values: FormValues) => {
      const { hasOneNevadaCreditCard, preferredLocation, vinNumber } = values;
      const updateNewValues = {
         ...creditCardApplication,
         hasOneNevadaCreditCard,
         preferredLocation,
         vinNumber,
         applicationNumber: generateRandomNumber()
      }
      dispatch({type: CREDIT_CARD_APPLICATION, payload: updateNewValues })
      history.push("/loans/result-application");
      localStorage.clear();

      // send user data to server so we can send a comfirmation email
      try {
        await axios.post(`${serverUrl}/credit_card_application/create`, updateNewValues);
        console.log("sucess post application");
      } catch (error) {
         console.log(error.response);
      }
   }

   // if user decides to go back to application and edit something
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
               {/* Only display this when user applies for any of the credit cards */}
               {loanType === 'visa-platium' || loanType === 'visa-signature' && (
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
               )}
               {/* Only display auto loan information when user applies for an auto loan */}
               {loanType === 'auto-loan' && (
                  <ReviewAutoLoanInformation autoLoanApplication={autoLoanApplication} />
               )}

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
               {/* Display reference information only when user entered referenced information */}
               {referenceFirstName && (
                  <ReferenceInformation applicationInputs={creditCardApplication} />
               )}
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

                  {/* If there is no different address for mailing that means
                   user wants to use the same as physical address */}
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
                  {/* Display different address only when user enters a different mailing address */}
                  {differentAddress && (
                     <DifferentEmailingAddress applicationInputs={creditCardApplication} />
                  )}
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

               {/* We will display components base on user employment status,
               if user is employed then show employed component, and same for the rest */}
               {employmentStatus === "Employed" && (
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
               )}
            </div>
            {/* Decided to move this form to its own component to make 
            ReviewApplication component as clean as possible */}
            <ReadSignSubmitForm
               register={register}
               handleSubmit={handleSubmit}
               onSubmit={onSubmit}
               loanType={loanType}
               errors={errors}
               goBackToApplication={goBackToApplication}
            />
            <div className="form-footer">
               <span>One Nevada Credit Union</span>
               <div className="more-info">
                  {/* href links values are just placeholders for the moment */}
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
