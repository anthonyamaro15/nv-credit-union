import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import logo from '../../imgs/logo.jpg';
import { useSelector } from 'react-redux';
import { FormCreditCardProps } from '../interfaces/loanApplicationInterface';

interface CreditCardReducerProps {
   creditCardApplication: FormCreditCardProps;  
}

interface ReducerProps {
   creditCardReducer: CreditCardReducerProps;
}

const ResultApplication = () => {
const [result, setResult] = useState(true);
const { creditCardApplication } = useSelector((state: ReducerProps) => state.creditCardReducer);
const history = useHistory();

   useEffect(() => {
      // this timer is just to mimic a waiting for application to be approved
      setTimeout(() => {
         setResult(false);
      }, 3000);
   },[]);

   const returnToWebsite = () => {
      history.push('/');
   }
   return (
      <div className="ResultApplication">
         {result ? (
         <div className="loading-component">
            <h3>Processing your request...</h3>
            <LoaderComponent />
            
            <p>This may take a few minutes.</p>
         </div>
         ) : (
         <div className="bg-color">
            <div className="LoanApplication">
               <div className="review-form-header">
                  <img src={logo} alt=""/>
                  <h1 className="application-title">apply in 3 steps</h1>
                  <h1>thank you</h1>
               </div>
               <div className="application-result">
                  <p>{`${creditCardApplication.firstName}, thank you for submitting you loan appliation. Your application number is ${creditCardApplication.applicationNumber}. You will reveive an email notification when your application has been updated or you may login to check the status online. If you have any questions or need additional information, please contact our Member Services Contact Center at (800) 388-3000.`}</p>
                  <div className="btn-wrapper">
                     <button type="submit" onClick={returnToWebsite}>return to our website</button>
                  </div>
               </div>
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
         )}
      </div>
   )
}

export default ResultApplication;
