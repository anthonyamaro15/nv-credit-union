import React from 'react';
import { useHistory } from 'react-router-dom';

const OpenAccount = () => {
   const history = useHistory();

   const redirect = () => {
      history.push('/open-account/register');
   }

   return (
      <section className="BecomeAMember">
         <div className="BecomeAMember-wrapper">
            <div className="account-header">
               <h1>Become a Member</h1>
               <h3>Join online quickly and securely in about 10 minutes.</h3>
            </div>
            <div className="open-acc-description">
               <button onClick={redirect}>open your account</button>
               <p>Thanks for your interest in joining One Nevada Credit Union! Joining online is fast, easy, and secure and only takes about 10 minutes. Just follow these four steps to open your initial membership savings and checking accounts.</p>
               <ol>
                  <li>Verify your membership eligibility below.</li>
                  <li>Gather the required information.</li>
                  <li>Tap “Open Your Account” to complete our online application.</li>
                  <li>Make your initial deposit.</li>
               </ol>
            </div>
            <div className="account-requirements">
               <div className="membership-eligibility">
                  <h3>Membership Eligibility</h3>
                  <h4>You’re eligible for membership if you:</h4>
                  <ul>
                     <li>Are at least 18 years of age;</li>
                     <li>Live, work, worship, or attend school in Clark, Nye, or Washoe counties; or</li>
                     <li>Are an immediate family member of a current One Nevada member.</li>
                  </ul>
               </div>
               <div className="require-information">
                  <h3>Required Information</h3>
                  <h4>You'll need the following:</h4>
                  <ul>
                     <li>Government-issued photo identification</li>
                     <li>Social Security or Tax ID number</li>
                     <li>Proof of Nevada address</li>
                  </ul>

                  <div className="agree-to">
                     <h4>You'll need to agree to:</h4>
                     <ul>
                        <li>Sign your application electronically.</li>
                        <li>Receive all disclosures and account communications electronically.</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default OpenAccount;