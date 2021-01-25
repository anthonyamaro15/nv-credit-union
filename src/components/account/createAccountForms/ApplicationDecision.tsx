import React, { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import LoaderComponent from '../../loans/LoaderComponent'

const ApplicationDecision = () => {
   const [loading, setLoading] = useState(true);
   const history = useHistory();


   // the reason of this timer is to mimic an application desicion
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 3000);
   }, []);

   const redirect = () => {
      history.push("/account");
   }
   
   return (
      <section className="PersonalInformation">
         {loading ? (
            <div className="loading-component">
               <h3>Making a decision...</h3>
               <LoaderComponent />
               <p>This may take a few minutes.</p>
            </div>
         ): (
            <div className="congratulations">
               <h1>congratulations!</h1>
               <p>you've been approved, you can login to your account now.</p>
               <button onClick={redirect}>log in</button>
            </div>
         )}
      </section>
   )
}

export default ApplicationDecision;
