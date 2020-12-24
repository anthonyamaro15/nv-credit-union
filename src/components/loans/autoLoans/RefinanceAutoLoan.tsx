import React from 'react';
import { Link } from 'react-router-dom';
import { HiCreditCard } from "react-icons/hi";
import { FaCarAlt } from "react-icons/fa";
import { GrCalculator } from "react-icons/gr";

const RefinanceAutoLoan = () => {
   return (
      <div className="Loans-wrapper">
         <div className="Loans">
            <section className="loan-section">
               <div className="right-side">
                  <div className="small-description">
                     <h1>Refinance Your Auto Loan</h1>
                     <h2>Lower your monthly payments and save.</h2>
                     <p>
                        With flexible terms, low rates and quick 3-step application process, we can help you lower your monthly payments and save.
                     </p>
                  </div>
                  <button className="apply">apply now</button>
                  <p className="apr-info">
                     All rates are Annual Percentage Rates and are accurate as of date of publication. All loans subject to credit approval. Auto loan rates determined by individual credit standing, collateral age, collateral value and loan term. Other conditions and terms may apply; ask for details. Actual rate subject to credit approval, credit history, collateral value, and term of loan. Refinancing not available on existing ONCU auto loans. First loan payment deferred for up to 90 days with interest accruing on date of loan. Property/casualty insurance is underwritten by selected carriers of One Nevada Insurance Services, not NCUA insured. APRs can increase after consummation of the loan if the loan terms allow an APR to increase.
                  </p>
               </div>
               <div className="application-process">
                  <p>
                  Have you already applied for a credit card with One Nevada? 
                  </p>
                  <button>check your application status</button>
               </div>
            </section>

            <div className="right-side-nav">
               <h3>one nevada loans</h3>
               <nav>
                  <div className="share-icons credit">
                     <HiCreditCard />
                     <Link to="/credit-card">Credit Cards</Link> 
                  </div> 
                  <div className="share-icons credit">
                     <FaCarAlt />
                     <Link to="/car-loan">vehicle loans</Link> 
                  </div> 
                  {/* <div className="share-icons credit">
                     <GrCalculator />
                     <Link to="/calculator">calculators</Link> 
                  </div>  */}
               </nav>
            </div>
         </div>
      </div>
   )
}

export default RefinanceAutoLoan;
