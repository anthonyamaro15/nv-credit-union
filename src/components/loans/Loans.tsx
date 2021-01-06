import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HiCreditCard } from "react-icons/hi";
import { FaCarAlt } from "react-icons/fa";
import logoImg from '../../imgs/loanheader.png';


const Loans = () => {
   const history = useHistory();

   const applicationStatus = () => {
      history.push("/application-status");
   }

   return (
      <div className="Loans-wrapper">
         <div className="Loans">
            <section className="loan-section">
               <div className="right-side">
                  <div className="img-container">
                     <img src={logoImg} alt=""/>
                  </div>
                  <div className="small-description">
                     <h2>Easy borrowing for all of life's stages.</h2>
                     <button onClick={applicationStatus}>check your application status</button>
                     <p>
                        As a Member-Owned Financial Institution, we are able to keep our interest rates low and offer several types of lending services to help along the way. Check out all of the options we have for credit cards, auto loans, personal loans and more.
                     </p>
                  </div>
                  <nav>
                     <div className="share-icons">
                        <span><HiCreditCard /></span>
                        <Link to="/loans/credit-card">credit cards</Link> 
                     </div> 
                     <div className="share-icons">
                        <span><FaCarAlt /></span>
                        <Link to="/loans/car-loan">vehicle loans</Link> 
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
                  <button onClick={applicationStatus}>check your application status</button>
               </div>
            </section>

            <div className="right-side-nav">
               <h3>one nevada loans</h3>
               <nav>
                  <div className="share-icons">
                     <span><HiCreditCard /></span>
                     <Link to="/loans/credit-card">credit cards</Link> 
                  </div> 
                  <div className="share-icons">
                     <span><FaCarAlt /></span>
                     <Link to="/car-loan">vehicle loans</Link> 
                  </div> 
               </nav>
            </div>
         </div>
      </div>
   )
}

export default Loans;
