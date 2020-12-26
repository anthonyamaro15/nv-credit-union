import React from 'react';
import { Link } from 'react-router-dom';
import { HiCreditCard } from "react-icons/hi";
// import { FaUserAlt } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
// import { BsFillHouseFill } from "react-icons/bs";
// import { BsBagFill } from "react-icons/bs";
import { GrCalculator } from "react-icons/gr";
import logoImg from '../../imgs/loanheader.png';


const Loans = () => {
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
                     <button>check your application status</button>
                     <p>
                        As a Member-Owned Financial Institution, we are able to keep our interest rates low and offer several types of lending services to help along the way. Check out all of the options we have for credit cards, auto loans, personal loans and more.
                     </p>
                  </div>
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
                     {/* <div className="share-icons">
                        <BsFillHouseFill />
                        <Link to="/house-loan">mortage loans</Link> 
                     </div> 


                     <div className="share-icons">
                        <BsFillHouseFill />
                        <Link to="/home-equity">home equity loans</Link> 
                     </div> 
                     <div className="share-icons">
                        <BsBagFill />
                        <Link to="/commercial-loan">commercial real state loans</Link> 
                     </div>  */}
                     <div className="share-icons">
                        <GrCalculator />
                        <Link to="/calculator">calculators</Link> 
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
                  <button>check your application status</button>
               </div>
            </section>

            <div className="right-side-nav">
               <h3>one nevada loans</h3>
               <nav>
                  <div className="share-icons">
                     <HiCreditCard />
                     <Link to="/credit-card">credit cards</Link> 
                  </div> 
                  {/* <div className="share-icons">
                     <FaUserAlt />
                     <Link to="/personal-loan">personal loans</Link> 
                  </div>  */}
                  <div className="share-icons">
                     <FaCarAlt />
                     <Link to="/car-loan">vehicle loans</Link> 
                  </div> 
                  {/* <div className="share-icons">
                     <BsFillHouseFill />
                     <Link to="/house-loan">mortage loans</Link> 
                  </div> 


                  <div className="share-icons">
                     <BsFillHouseFill />
                     <Link to="/home-equity">home equity loans</Link> 
                  </div> 
                  <div className="share-icons">
                     <BsBagFill />
                     <Link to="/commercial-loan">commercial real state loans</Link> 
                  </div>  */}
                  <div className="share-icons">
                     <GrCalculator />
                     <Link to="/calculator">calculators</Link> 
                  </div> 
               </nav>
            </div>
         </div>
      </div>
   )
}

export default Loans;
