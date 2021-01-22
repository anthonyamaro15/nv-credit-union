import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import autoLoanImg from '../../imgs/autoloan.png';

const Account = () => {
   const [displayShare, setDisplayShare] = useState(true);
   const [displayLoan, setDisplayLoan] = useState(false);
   const [displayCreditCard, setDisplayCreditCard] = useState(false);
   const [displayAll, setDisplayAll] = useState(false);

   return (
      <div className="Account">
         <div className="user-information">
            <div className="top-row">
               <p>welcome:<span>Lisa Smith</span></p>
               <p>account #:<span>****07</span></p>
               <p>routing number:<span>243353322</span></p>
            </div>
            <div className="bottom-row">
               <p>user ID:<span>lisasmith</span></p>
               <p>email:<span>lisasmith@gmail.com</span></p>
               <p>address:<span>3312 pecos rd ave apt 11 las vegas nv 88929</span></p>
            </div>
         </div>
         <div className="img-wrapper">
            <img src={autoLoanImg} alt="auto loan description"/>
         </div>

         <div className="account-information">
            <div className="right-side">
               <div className="shared-classes">
                  <h3>accounts</h3>
                  <div className="btn-links">
                     <button>shares</button>
                     <button>loans</button>
                     <button>credit cards</button>
                     <button>all</button>
                  </div>
                  
                     <div className="Shares">
                        <div className="inner-share-class">
                           <p>primary savings <span>$0.00</span></p>
                           <p>primary savings account <span>$.00 available</span></p>
                        </div>
                        <div className="inner-share-class">
                           <p>one checking<span>$0.00</span></p>
                           <p>one checking <span>-$5.00 available</span></p>
                        </div>
                        <div className="inner-share-class">
                           <p>total balance <span>$0.00</span></p>
                           <p>total available <span>$0.00 available</span></p>
                        </div>                     
                     </div>
               </div> 
               <div className="shared-classes">
                  <h3>accounts</h3>
                  <nav>
                     <Link to="/account/summary/account-shares">transfers & loan payments</Link>
                     <Link to="/account/summary/account-loans">bill payments</Link>
                  </nav>
                     <div className="Shares">
                        <form className="transfer-form">
                           <label htmlFor="transferFrom"> from
                              <select name="transferFrom" id="transferFrom">
                                 <option value=""></option>
                                 <option value="checking">checking</option>
                              </select>
                           </label>
                           <label htmlFor="transferTo">to
                              <select name="transferTo" id="transferTo">
                                 <option value=""></option>
                                 <option value="checking">checking</option>
                              </select>
                           </label>
                           <label htmlFor="transferAmount">amount
                              <input type="text" id="transferAmount" name="transferAmount" placeholder="Amount"/>
                           </label>
                           <div className="btn-wrapper">
                              <button type="submit">transfer</button>
                           </div>
                           
                        </form>
                     </div>
               </div>
            </div>
            <div className="left-side">
               <div className="shared-classes">
                  <h3>account activity</h3>
                  <form>
                 
                     <label htmlFor="selectAccount">select account
                        <select name="selectAccount" id="selectAccount">
                           <option value=""></option>
                           <option value="checking">checking</option>
                        </select>
                     </label>
                  </form>
               </div>
               <div className="shared-classes">
                  <h3>bill payments</h3>
                  <div className="bill-payments">
                     <p>you don't have any upcoming bill payments.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Account;
