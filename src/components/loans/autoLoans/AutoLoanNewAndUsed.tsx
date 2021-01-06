import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HiCreditCard } from "react-icons/hi";
import { FaCarAlt } from "react-icons/fa";

const AutoLoanNewAndUsed = () => {
   const history = useHistory();

   const redirect = () => {
      history.push('/vehicle-loan/application');
   }

   const applicationStatus = () => {
      history.push('/application-status');
   }
   return (
      <div className="Loans-wrapper">
         <div className="Loans">
            <section className="loan-section">
               <div className="right-side">
                  <div className="small-description">
                     <h1>Auto Loans – New And Used</h1>
                     <h2>Get no payments for 90 days on auto loans. **</h2>
                     <p>
                        You pick the perfect ride; we’ll help you buy it. With our low market rates and 90 days of payment-free driving for qualified individuals, the open road is right around the corner.
                     </p>
                     <p>
                        Apply online, stop by your local One Nevada branch, or ask for One Nevada financing at a local dealership today. Just remember that rates and repayment terms may vary when financing through a local dealership.
                     </p>
                     <span className="loan-rates">
                        Current loan rates as of Thursday, December 24
                     </span>
                     <h3>New & Used Auto Loans APR* 3.49% – 19.74%**</h3>
                  </div>
                  <button className="apply" onClick={redirect}>apply now</button>
                  <p className="apr-info">
                     APR = Annual Percentage Rate and are listed "as low as." Mortgage rates excluded, call for APR. APRs can increase after consummation of the loan if the loan terms allow an APR to increase. Currently Visa® variable APRs are between 8.25% and 17.25%, depending on your credit history and other factors. Rates may change periodically based on the Prime Rate. View Visa® Credit Card Rates, Fees and Cost Information
                     Rates valid as of 12/24/20.
                  </p>
               </div>
               <div className="application-process">
                  <p>
                  Have you already applied for a credit card with One Nevada? 
                  </p>
                  <button onClick={applicationStatus}>check your application status</button>
               </div>
            </section>

            <div className="right-side-nav">
               <h3>one nevada loans</h3>
               <nav>
                  <div className="share-icons credit">
                     <HiCreditCard />
                     <Link to="/loans/credit-card">Credit Cards</Link> 
                  </div> 
                  <div className="share-icons credit">
                     <FaCarAlt />
                     <Link to="/loans/car-loan">vehicle loans</Link> 
                  </div> 
               </nav>
            </div>
         </div>
      </div>
   )
}

export default AutoLoanNewAndUsed;
