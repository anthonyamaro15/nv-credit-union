import React from 'react';
import { useHistory } from 'react-router-dom';
import bankingLogo from '../../imgs/banking.png';

const BecomeAMember = () => {
   const history = useHistory();

   const redirect = () => {
      history.push('/open-account');
   }

   return (
      <section className="BecomeAMember">
         <div className="BecomeAMember-wrapper">
            <div className="img-wrapper">
               <img src={bankingLogo} alt=""/>
            </div>
            <div className="banking-description">
               <button onClick={redirect}>become a member</button>
               <p>Checking Account? Who writes checks anymore? Well, the fact is, a checking account is essential to managing your routine, everyday money transactions. And all of our checking accounts come loaded with options that empower you to:</p>
               <ul>
                  <li>Bank online 24/7/365 via your mobile, tablet, or PC.</li>
                  <li>Deposit checks from anywhere with Mobile Deposit</li>
                  <li>Make purchases with your Visa debit card.</li>
                  <li>Get cash surcharge-free at 46,000 ATMs nationwide.</li>
                  <li>Send money with One2Pay person-to-person payments.</li>
                  <li>Monitor your transactions with real-time transaction alerts.</li>
                  <li>Live financially fearless with FREE access to Cent$ible, our financial knowledge program.</li>
                  <li>Get your FREE credit report and score at any time.</li>
               </ul>
            </div>
            <div className="must-read">
               <p>No monthly service fee with 15 signature-based, debit card transactions monthly, or a $2,000 average daily checking account balance, otherwise $5 per month.</p>
               <p>Must be aged 15-17 years old. Accounts will be converted to a One Checking account upon turning age 18.</p>
               <p>Must have verifiable household income of $35,000 or less annually to open this account. Income will be verified routinely.</p>
            </div>
         </div>
      </section>
   )
}

export default BecomeAMember;
