import React from 'react';
import { Route } from 'react-router-dom';
import Account from './Account';
import Dashboard from './Dashboard';
import DashboardNavbar from './DashboardNavbar'; 

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
         </div>  
      </div>
   )
}

export default MainUserDashboard;
