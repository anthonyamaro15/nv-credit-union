import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import AutoLoan from './loans/autoLoans/AutoLoan';
import AutoLoanNewAndUsed from './loans/autoLoans/AutoLoanNewAndUsed';
import CreditCardLoan from './loans/creditCardLoans/CreditCardLoan';
import Loans from './loans/Loans';
import RefinanceAutoLoan from './loans/autoLoans/RefinanceAutoLoan';
import VisaPlatiumCreditCard from './loans/creditCardLoans/VisaPlatiumCreditCard';
import VisaSignatureCreditCard from './loans/creditCardLoans/VisaSignatureCreditCard';
import Content from './marketingPage/Content';
import Footer from './marketingPage/Footer';
import Header from './marketingPage/Header';
import LowerContent from './marketingPage/LowerContent';
import Navbar from './marketingPage/Navbar';
import LoanApplication from './loans/LoanAppication';
import ReviewApplication from './loans/ReviewApplication';
import ResultApplication from './loans/ResultApplication';
import CheckApplicationStatus from './loans/CheckApplicationStatus';
// import { FormCreditCardProps } from './interfaces/loanApplicationInterface';

const MainApp = () => {
   const [applicationData, setApplicationData] = useState();

   useEffect(() => {
      getLocalStoreData();
   },[]);

   function getLocalStoreData() {
      const data = localStorage.getItem('application');
      if(data) {
         setApplicationData(JSON.parse(data))
      }
   }
   return (
      <div>
         <Navbar />
         <Route path="/" exact>
            <Header />
            <Content />
         </Route>
         <Route path="/loans" exact>
            <Loans />
         </Route>
         <Route path="/loans/credit-card" exact>
            <CreditCardLoan />
         </Route>
         <Route path="/loans/credit-card/visa-signature-credit-card" exact>
            <VisaSignatureCreditCard />
         </Route>
         <Route path="/loans/credit-card/visa-platium-credit-card" exact>
            <VisaPlatiumCreditCard />
         </Route>
         <Route path="/loans/car-loan" exact>
            <AutoLoan />
         </Route>
         <Route path="/loans/auto-loan" exact>
            <AutoLoanNewAndUsed />
         </Route>
         <Route path="/loans/auto-refinance" exact>
            <RefinanceAutoLoan />
         </Route>
         <Route path="/loans/application/:loanType" exact>
            <LoanApplication applicationData={applicationData} />
         </Route>
         <Route path="/loans/application/:loanType/confirmation" exact>
            <ReviewApplication getLocalStoreData={getLocalStoreData} />
         </Route>
         <Route path="/loans/result-application" exact>
            <ResultApplication />
         </Route>
         <Route path="/application-status">
            <CheckApplicationStatus />
         </Route>
         <LowerContent />
         <Footer />
      </div>
   )
}

export default MainApp;