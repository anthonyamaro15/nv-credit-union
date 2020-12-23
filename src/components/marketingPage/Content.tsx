import React from 'react';
import tempImg from '../../imgs/video.jpg';
import { ImUserPlus } from "react-icons/im";

const Content = () => {
   return (
      <>
         <section className="Content">
            <h3>
               become a one nevada member
               <button>
                  open a new account
                  <span> <ImUserPlus /> </span>
               </button>
            </h3>
            <div className="video-wrapper">
               <img src={tempImg} alt="temporary video"/>
            </div>
            <p className="first-child">Open to all residents of Clark, Nye and Washoe counties in Nevada plus family members of current members.</p>
            <p>We’re dedicated to making our website accessible to the broadest audience possible in accordance with ADA standards and guidelines, and we work continually to increase our website accessibility and usability for everyone. If you're using a screen reader or other auxiliary aid and have problems using our site, please give us a ring at 1-800-388-3000. All products and services available on this website are available at One Nevada Credit Union branches.</p>
         </section>
         <section className="Content-lower">
            <div className="sections">
               <div className="shared-sections">
                  <h4>loans</h4>
                  <ul>
                     <li>auto</li>
                     <li>credit card</li>
                     <li>personal</li>
                     <li>home equity</li>
                     <li>payday</li>
                     <li>boat/RV</li>
                     <li>commercial</li>
                     <li>check loan status</li>
                  </ul>
               </div>
               <div className="shared-sections">
                  <h4>banking</h4>
                  <ul>
                     <li>checking</li>
                     <li>savings</li>
                     <li>Certificates of Deposit</li>
                     <li>accounts (CD)</li>
                     <li>money market</li>
                  </ul>
               </div>
               <div className="shared-sections">
                  <h4>insurance</h4>
                  <ul>
                     <li>auto</li>
                     <li>home</li>
                     <li>renters</li>
                     <li>life</li>
                     <li>accidental</li>
                     <li>pet</li>
                  </ul>
               </div>
               <div className="shared-sections">
                  <h4>investments</h4>
                  <ul>
                     <li>retirement</li>
                     <li>401k rollovers</li>
                     <li>planning</li>
                     <li>annuities</li>
                  </ul>
               </div>
            </div>
         </section>
      </>
   )
}

export default Content;