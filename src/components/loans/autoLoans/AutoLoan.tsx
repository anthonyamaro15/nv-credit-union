import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HiCreditCard } from "react-icons/hi";
// import { FaUserAlt } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import autoLoanImg from '../../../imgs/autoloan.png';


// commented out code is something im going to implement later
const AutoLoan = () => {
   const history = useHistory();

   const redirect = () => {
      history.push("/application-status");
   }

   return (
      <div className="Loans-wrapper">
         <div className="Loans">
            <section className="loan-section">
               <div className="right-side">
                  <div className="img-container">
                     <img src={autoLoanImg} alt=""/>
                  </div>
                  <div className="small-description">
                     <h2>Get 90 Days No Payment</h2>
                     {/* <button>check your application status</button> */}
                     <p>
                        Sure, it’s always fun to walk on a dealership lot and drive off with a new car that day. What’s not so fun is all the time and hassle of figuring out the financing details at the dealership.
                     </p>
                     <p>
                        Save time, money, and hassle on your next ride by getting pre-approved. You’ll walk on the lot knowing exactly how much you can afford. Plus, when you finance directly with us, you’re eligible for no payments for 90 days.
                     </p>
                     <p>
                        Find out how much you can afford today and start shopping.
                     </p>
                  </div>
                  <nav>
                     <div className="share-icons">
                        <HiCreditCard />
                        <Link to="/loans/auto-loan">auto loans - new and used</Link> 
                     </div> 
                     {/* <div className="share-icons">
                        <FaUserAlt />
                        <Link to="/personal-loan">personal loans</Link> 
                     </div>  */}
                     <div className="share-icons">
                        <FaCarAlt />
                        <Link to="/loans/auto-refinance">refinance your auto loan</Link> 
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
                  {/* <div className="share-icons">
                     <FaUserAlt />
                     <Link to="/personal-loan">personal loans</Link> 
                  </div>  */}
                  <div className="share-icons">
                     <FaCarAlt />
                     <Link to="/loans/car-loan">vehicle loans</Link> 
                  </div> 
               </nav>
            </div>
         </div>
      </div>
   )
}

export default AutoLoan;