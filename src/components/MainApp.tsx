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
import ReviewApplication from './loans/ReviewApplication/ReviewApplication';
import ResultApplication from './loans/ResultApplication';
import CheckApplicationStatus from './loans/CheckApplicationStatus';
import BecomeAMember from './account/BecomeAMember';
import OpenAccount from './account/OpenAccount';
import CreateAccount from './account/CreateAccount';
import MobileNavbar from './mobileFiles/MobileNavbar';
import AboutUs from './marketingPage/AboutUs';
import axios from 'axios';
import { serverUrl } from '../envVariables';
import AutoLoanApplication from './loans/autoLoans/AutoLoanApplication';
// import { FormCreditCardProps } from './interfaces/loanApplicationInterface';

const MainApp = () => {
   const [applicationData, setApplicationData] = useState();

   useEffect(() => {
      getLocalStoreData();
   },[]);

   // The only function of this API request is to wake heroku up since it goes to sleep mode
   // for inactivity then we have to wait 30 seconds. instead once the user gets on the marketing page
   // the funcion below will run
   useEffect(() => {
      async function wakeHerokuUp() {
         try {
            const { data } = await axios.get(`${serverUrl}`);
            console.log(data.message);
         } catch (error) {
            console.log(error.response);
         }
      }
      wakeHerokuUp();
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
         <MobileNavbar />
         <Route path="/" exact>
            <Header />
            <Content />
         </Route>
         <Route path="/loans" exact>
            <Loans />
         </Route>
         <Route path="/about-us" exact>
            <AboutUs />
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
         <Route path="/application-status" exact>
            <CheckApplicationStatus />
         </Route>
         <Route path="/banking/checking" exact>
            <BecomeAMember />
         </Route>
         <Route path='/open-account' exact>
            <OpenAccount />
         </Route>
         <Route path="/open-account/register">
            <CreateAccount />
         </Route>

         <Route path="/vehicle-loan/application" exact>
            <AutoLoanApplication />
         </Route>
         <LowerContent />
         <Footer />
      </div>
   )
}

export default MainApp;