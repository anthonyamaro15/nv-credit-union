import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HiCreditCard } from "react-icons/hi";
import { FaCarAlt } from "react-icons/fa";

const WatercraftLoans = () => {
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
                     <h1>Watercraft Loans</h1>
                     <h2>Don't get all wet from a high interest loan.</h2>
                     <p>
                       Hit the waves or your favorite fishing spot and still have enough for gas and food. We offer loans for all styles of watercraft.
                     </p>
                  </div>
                  <div className="current-loan-rates">
                     <h3>current loan rates as of Sunday January 17:</h3>
                     <p>Watercraft loans APR* as low as 9.00%**</p>
                  </div>
                  <button className="apply" onClick={redirect}>apply now</button>
                  <p className="apr-info">
                     * APR = Annual Percentage Rate and are listed "as low as." Mortgage rates excluded, call for APR. APRs can increase after consummation of the loan if the loan terms allow an APR to increase.
                     ** Rates are determined by individual credit standing, collateral age, collateral value, and loan term. No payments for 90 days is valid for qualified individuals who finance directly with One Nevada. Rates and repayment terms may vary when financing through a local dealership.
                  </p>
               </div>
               <div className="application-process">
                  <p>
                  Have you already applied for a watercraft loan with One Nevada?
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

export default WatercraftLoans;
