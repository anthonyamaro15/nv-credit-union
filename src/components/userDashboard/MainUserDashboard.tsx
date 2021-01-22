import React from 'react';
import { Route } from 'react-router-dom';
import Account from './Account';
import Dashboard from './Dashboard';
import DashboardNavbar from './DashboardNavbar'; 
import Transfers from './Transfers';

const MainUserDashboard = () => {
   return (
      <div className="MainUserDashboard">
         <div className="MainUserDashboard-inner">
            <DashboardNavbar />
            <Route path="/account/summary" exact>
               <Account />

            </Route>
            <Route path="/account/dashboard" exact>
               <Dashboard />
            </Route>
            <Route path="/account/transfer" exact>
               <Transfers />
            </Route>
         </div>  
      </div>
   )
}

export default MainUserDashboard;
