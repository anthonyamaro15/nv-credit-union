import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import autoLoanImg from '../../imgs/autoloan.png';
import { UserData } from '../interfaces/loanApplicationInterface';
import CreditCard from './AccountInnerComponents/CreditCard';
import Loans from './AccountInnerComponents/Loans';
import Shares from './AccountInnerComponents/Shares';
import DisplayUserInformationNav from './DisplayUserInformationNav';
import BillPayments from './transfersAndPayments/BillPayments';
import TransfersLoans from './transfersAndPayments/TransfersLoans';


interface Props {
   userData?: UserData;
}

const Account: React.FC<Props> = ({ userData }) => {
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



   return (
      <div className="Account">
         
         {userData && (
            <DisplayUserInformationNav userData={userData} />
         )}

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
