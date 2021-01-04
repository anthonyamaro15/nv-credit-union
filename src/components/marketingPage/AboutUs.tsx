import React from 'react';
import { Link } from 'react-router-dom';
import { HiCreditCard } from "react-icons/hi";
// import { FaCarAlt } from "react-icons/fa";
// import { GrCalculator } from "react-icons/gr";
import aboutusImg from '../../imgs/aboutus.png';


const AboutUs = () => {
   return (
      <div className="Loans-wrapper">
         <div className="Loans">
            <section className="loan-section">
               <div className="right-side">
                  <div className="img-container">
                     <img src={aboutusImg} alt="about us imagen"/>
                  </div>
                  <div className="small-description">
                     <h2>Banking for Nevadans, by Nevadans</h2>
                     <p>
                        Nevada is a unique place and so are those of us who live here. From the very beginning, no other state has felt economic ups and downs; booms and busts quite like Nevada.
                     </p>
                     <p>
                        We Nevadans have grand ideas and dreams of prosperity, but pursuing those dreams can be a long road of grit, determination, and discipline. At One Nevada Credit Union, we intimately understand that road because we live and work here too.
                     </p>
                     <p>
                       For 70 years, we’ve had Nevadan’s backs and we’re dedicated to inspiring Nevadans to move beyond that boom and bust, paycheck to paycheck mentality and build lifelong financial strength and stability. We do that by: 
                     </p>
                  </div>
                  <ul className="why-bank-with-us">
                     <li>
                        <span className="highlights">Having real, straightforward conversations</span>
                        with you about money so you can make informed decisions.
                     </li>
                     <li>
                        <span className="highlights">Putting you in control of your money 24/7/365</span>
                        with powerful digital banking tools.
                     </li>
                     <li>
                        <span className="highlights">Offering financial solutions tailored to meet Nevadans’ needs.</span>
                        (Hey, where else in the country can you deposit several hundred dollars in small bills at 3am and not have that be weird?)
                     </li>
                     <li>
                        <span className="highlights">Offering a Nevada-based, Member Service Center </span>
                        so that you always talk to a local Nevadan who understands “Nevada life”.
                     </li>
                  </ul>
                  <div className="open-acc-today">
                     <p>
                        Here’s the thing. If you want more boom and less bust. More make it, less break it. And if you want a credit union that has your back, then One Nevada is the place for you.
                     </p>
                     <p>
                        <Link to="banking/checking">
                           Open your account today 
                        </Link>
                        and experience One Nevada Credit Union membership.
                     </p>
                  </div>
               </div>
            </section>

            <div className="right-side-nav">
               <h3>about us</h3>
               <nav>
                  <div className="share-icons">
                     <HiCreditCard />
                     <Link to="/loans/credit-card">credit cards</Link> 
                  </div> 
                  {/* <div className="share-icons">
                     <FaCarAlt />
                     <Link to="/car-loan">vehicle loans</Link> 
                  </div> 
                  <div className="share-icons">
                     <GrCalculator />
                     <Link to="/calculator">calculators</Link> 
                  </div>  */}
               </nav>
            </div>
         </div>
      </div>
   )
}

export default AboutUs;
