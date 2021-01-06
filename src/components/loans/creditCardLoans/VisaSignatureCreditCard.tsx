import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const VisaSignatureCreditCard = () => {
   const history = useHistory();

   const apply = () => {
      history.push('/loans/application/visa-signature');
   }

   const redirect = () => {
      history.push("/application-status")
   }

   return (
      <div className="Loans-wrapper">
         <div className="Loans">
            <section className="loan-section">
               <div className="right-side">
                  <div className="small-description">
                     <h1>Visa® Signature Rewards Credit Card</h1>
                     <h2>Earn Rewards with our CURewards® Program.</h2>
                     <p>
                        Our Visa® Signature Rewards Credit Card has been designed to offer you the most rewards and most protection possible, while keeping a low APR. You can feel confident using this card for all of your daily purchases.
                     </p>
                     <h4>Here are the Details:</h4>
                  </div>
                  <ul>
                     <li>No annual fee.</li>
                     <li>Variable rates as low as 8.25% APR* on purchases and cash advances.</li>
                     <li>Credit lines starting at $5,000.</li>
                     <li>25-day interest grace period on purchases.</li>
                     <li>CURewards® rewards program.</li>
                     <li>24/7 cardholder service.</li>
                     <li>Travel and emergency assistance services.</li>
                     <li>Free travel accident insurance.</li>
                     <li>Free auto rental insurance with damage waiver.</li>
                     <li>Free cell phone protection.</li>
                  </ul>
                  <button className="apply" onClick={apply}>apply now</button>
                  <p className="apr-info">
                     APR = Annual Percentage Rate and are listed "as low as." Mortgage rates excluded, call for APR. APRs can increase after consummation of the loan if the loan terms allow an APR to increase. Currently Visa® variable APRs are between 8.25% and 17.25%, depending on your credit history and other factors. Rates may change periodically based on the Prime Rate. View Visa® Credit Card Rates, Fees and Cost Information
                     Rates valid as of 12/24/20.
                  </p>
               </div>
               <div className="application-process">
                  <p>
                  Have you already applied for a credit card with One Nevada? 
                  </p>
                  <button onClick={redirect}>check your application status</button>
               </div>
            </section>

            <div className="right-side-nav">
               <h3>credit cards</h3>
               <nav>
                  <div className="share-icons credit">
                     <Link to="/loans/credit-card/visa-signature-credit-card">Visa® Signature Rewards Credit Cards</Link> 
                  </div> 
                  <div className="share-icons credit">
                     <Link to="/loans/credit-card/visa-platium-credit-card">Visa® Platinum Rewards Credit Card</Link> 
                  </div> 
               </nav>
            </div>
         </div>
      </div>
   )
}

export default VisaSignatureCreditCard;
