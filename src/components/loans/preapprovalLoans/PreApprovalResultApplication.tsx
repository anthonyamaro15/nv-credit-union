import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import LoaderComponent from '../LoaderComponent';
import logo from '../../../imgs/logo.jpg';
import { useSelector } from 'react-redux';

interface PreApprovalValues {
   firstName: string;
   approved: boolean;
}
interface PreApprovalReducerProps {
   preApprovalResult: PreApprovalValues
}

interface ReducerProps {
   preApprovalReducer: PreApprovalReducerProps;
}

const PreApprovalResultApplication = () => {
const [result, setResult] = useState(true);
const { preApprovalResult } = useSelector((state: ReducerProps) => state.preApprovalReducer);
const history = useHistory();

   useEffect(() => {
      // this timer is just to mimic a waiting for application to be approved
      setTimeout(() => {
         setResult(false);
      }, 3000);
   },[]);

   const returnToWebsite = () => {
      if(preApprovalResult.approved) {
         history.push('/loans/credit-card');
      } else {
         history.push('/');
      }
      
   }
   return (
      <div className="ResultApplication">
         {result ? (
         <div className="loading-component">
            <h3>Validating your information...</h3>
            <LoaderComponent />
            
            <p>This may take a few minutes.</p>
         </div>
         ) : (
            preApprovalResult.approved ? (
               <div className="bg-color">
                  <div className="LoanApplication">
                     <div className="review-form-header">
                        <img src={logo} alt=""/>
                        <h1>{`Well Done, ${preApprovalResult.firstName}`}</h1>
                     </div>
                     <div className="application-result">
                        <p>{`You can qualify for any of our credit cards, choose a card and finish applying with a few quick questions.`}</p>
                        <div className="btn-wrapper">
                           <button type="submit" onClick={returnToWebsite}>check our credit cards</button>
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
            ) : (
               <div className="bg-color">
                  <div className="LoanApplication">
                     <div className="review-form-header">
                        <img src={logo} alt=""/>
                        <h1>{`Thank you, ${preApprovalResult.firstName}`}</h1>
                     </div>
                     <div className="application-result">
                        <p>{`We reviewed your information and, unfortunately, we can't pre-approve you for a Visa Signature Rewards Credit Card or Visa Platinum Rewards Credit Card at this time. Rest assured, the form you submitted was not a credit card application and your credit score was not affected.`}</p>
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
            )
         )}
      </div>
   )
}

export default PreApprovalResultApplication;
