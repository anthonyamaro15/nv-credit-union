import React from 'react';
import Content from './marketingPage/Content';
import Footer from './marketingPage/Footer';
import Header from './marketingPage/Header';
import Navbar from './marketingPage/Navbar';

const MainApp = () => {
   return (
      <div>
         <Navbar />
         <Header />
         <Content />
         <Footer />
      </div>
   )
}

export default MainApp;