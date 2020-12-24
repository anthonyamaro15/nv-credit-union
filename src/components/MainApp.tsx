import React from 'react';
import { Route } from 'react-router-dom';
import Loans from './loans/Loans';
import Content from './marketingPage/Content';
import Footer from './marketingPage/Footer';
import Header from './marketingPage/Header';
import LowerContent from './marketingPage/LowerContent';
import Navbar from './marketingPage/Navbar';

const MainApp = () => {
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
         <LowerContent />
         <Footer />
      </div>
   )
}

export default MainApp;