import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { serverUrl } from '../../envVariables';
import { UserData } from '../interfaces/loanApplicationInterface';
import Account from './Account';
import ChangePin from './ChangePin';
import Dashboard from './Dashboard';
import DashboardNavbar from './DashboardNavbar'; 
import Transfers from './Transfers';

const MainUserDashboard = () => {
   const [id, setId] = useState('');
   const [userData, setUserData] = useState<UserData>();

   useEffect(() => {
      const data = localStorage.getItem('credentials');
      if(data) {
         const { id } = JSON.parse(data);
         setId(id);
      }
   },[id]);

   useEffect(() => {
      if(id) {
         getUserData();
      }
   }, [id]);

   async function getUserData() {
      try {
         const { data } = await axios.get(`${serverUrl}/auth/user/${id}`);   
         setUserData(data);
      } catch (error) {
         console.log(error.response.data);
      }
   }
   return (
      <div className="MainUserDashboard">
         <div className="MainUserDashboard-inner">
            <DashboardNavbar />
            <Route path="/account/summary" exact>
               <Account  userData={userData}/>

            </Route>
            <Route path="/account/dashboard" exact>
               <Dashboard  userData={userData}/>
            </Route>
            <Route path="/account/transfer" exact>
               <Transfers />
            </Route>
            <Route path="/account/changePin" exact>
               <ChangePin />
            </Route>
         </div>  
      </div>
   )
}

export default MainUserDashboard;
