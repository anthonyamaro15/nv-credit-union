import { on } from 'process';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import autoLoanImg from '../../imgs/autoloan.png';
import CreditCard from './AccountInnerComponents/CreditCard';
import Loans from './AccountInnerComponents/Loans';
import Shares from './AccountInnerComponents/Shares';
import BillPayments from './transfersAndPayments/BillPayments';
import TransfersLoans from './transfersAndPayments/TransfersLoans';

const Account = () => {
   const [displayShare, setDisplayShare] = useState(true);
   const [displayLoan, setDisplayLoan] = useState(false);
   const [displayCreditCard, setDisplayCreditCard] = useState(false);
   const [displayAll, setDisplayAll] = useState(false);
   const [displayTransfers, setDisplayTransfers] = useState(true);
   const [displayBill, setDisplayBill] = useState(false);
   const { handleSubmit, register, watch, errors } = useForm({
      mode: 'onBlur'
   });

   const cheking = watch('selectAccount');

   const toggleShare = () => {
      setDisplayShare(true);
      setDisplayLoan(false);
      setDisplayCreditCard(false);
      setDisplayAll(false);
   }

   const toggleLoans = () => {
      setDisplayShare(false);
      setDisplayLoan(true);
      setDisplayCreditCard(false);
      setDisplayAll(false);
   }
   const toggleCreditCard = () => {
      setDisplayShare(false);
      setDisplayLoan(false);
      setDisplayCreditCard(true);
      setDisplayAll(false);
   }
   const toggleAll = () => {
      setDisplayShare(false);
      setDisplayLoan(false);
      setDisplayCreditCard(false);
      setDisplayAll(!displayAll);
   }

   const toggleTransfers = () => {
      setDisplayTransfers(true);
      setDisplayBill(false);
   }

   const toggleBill = () => {
      setDisplayBill(true);
      setDisplayTransfers(false);
   }

   const onSubmit = () => {
      console.log('subbmited');
   }

   const onSubmitTransfers = (value: any) => {
      console.log("subbmiting tranfers", value);
   }

   console.log('what is checking? ', cheking);

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
                     <button  onClick={toggleShare}>shares</button>
                     <button onClick={toggleLoans}>loans</button>
                     <button onClick={toggleCreditCard}>credit cards</button>
                     <button onClick={toggleAll}>all</button>
                  </div>
                  { displayShare && <Shares /> }
                  { displayLoan && <Loans /> }
                  { displayCreditCard && <CreditCard /> }
                  { displayAll && <Shares /> }
               </div> 

               <div className="shared-classes">
                  <h3>transfers & payments</h3>
                  <div className="btn-links">
                     <button onClick={toggleTransfers}>transfers & loan payments</button>
                     <button onClick={toggleBill}>bill payments</button>
                  </div>

               { displayTransfers && 
                  <TransfersLoans 
                     onSubmitTransfers={onSubmitTransfers}
                     handleSubmit={handleSubmit}
                     register={register}
                     errors={errors}
                  />
               }
               { displayBill && <BillPayments /> }

               </div>
            </div>
            <div className="left-side">
               <div className="shared-classes">
                  <h3>account activity</h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <label htmlFor="selectAccount">select account
                        <select name="selectAccount" id="selectAccount" ref={register}>
                           <option value=""></option>
                           <option value="checking">checking</option>
                        </select>
                     </label>
                  </form>

                  { cheking && 
                     <p className="not-found">No recent transsactions were found.</p>
                  }
                  
               </div>
               <div className="shared-classes">
                  <h3>bill payments</h3>
                  <div className="bill-payments">
                     <p>you don't have any upcoming bill payments.</p>
                  </div>
               </div>
            </div>
         </div>
         <div className="form-footer">
            <span>One Nevada Credit Union</span>
            <div className="more-info">
               <a href="www.example.com">Federally Insured by NCUA</a>
               <a href="www.example.com">Equal Housing Lender.</a>
            </div>
            <span>2013-2020 MeridianLink, Inc., All Rights Reserved.</span>
         </div>
      </div>
   )
}

export default Account;
