import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HiCreditCard } from "react-icons/hi";
import creditCardImg from '../../../imgs/creditcard.png';


const CreditCardLoan = () => {
   const history = useHistory();

   const redirect = () => {
      history.push("/application-status")
   }
   return (
      <div className="Loans-wrapper">
         <div className="Loans">
            <section className="loan-section">
               <div className="right-side">
                  <div className="img-container">
                     <img src={creditCardImg} alt=""/>
                  </div>
                  <div className="small-description">
                     <h2>Great Rates, Great Rewards, Great Styles.</h2>
                     <p>
                        With so many credit cards out there today, we wanted to offer credit card options that get right to the point and allow you to stand out in the crowd. We have some of the lowest rates around and offer the CURewards® program to reward you for using your card.
                     </p>
                  </div>
                  <nav>
                     <div className="share-icons">
                        <Link to="/loans/credit-card/visa-signature-credit-card">Visa® Signature Rewards Credit Cards</Link> 
                     </div> 
                     <div className="share-icons">
                        <Link to="/loans/credit-card/visa-platium-credit-card">Visa® Platinum Rewards Credit Card</Link> 
                     </div> 
                  </nav>
                  <p className="apr-info">
                     APRs can increase after consummation of the loan if the loan terms allow an APR to increase.
                  </p>
               </div>
               <div className="application-process">
                  <p>
                  Have you already applied for an auto loan, credit card, or personal loan with One Nevada? 
                  </p>
                  <button onClick={redirect}>check your application status</button>
               </div>
            </section>

            <div className="right-side-nav">
               <h3>one nevada loans</h3>
               <nav>
                  <div className="share-icons">
                     <HiCreditCard />
                     <Link to="/loans/credit-card">credit cards</Link> 
                  </div> 
               </nav>
            </div>
         </div>
      </div>
   )
}

export default CreditCardLoan;
