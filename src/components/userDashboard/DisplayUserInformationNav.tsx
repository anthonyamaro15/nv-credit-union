import React from 'react';
import { UserData } from '../interfaces/loanApplicationInterface';

interface Props {
   userData: UserData;
}
const DisplayUserInformationNav: React.FC<Props> = ({ userData }) => {
   const { 
      firstName, 
      lastName,
      email,
      apartmentNumber, 
      addressLineOne, 
      accountNumber,
      routingNumber,
      city, 
      state, 
      zip
   } = userData;

   const fullName = `${firstName} ${lastName}`;
   const aptNumber = apartmentNumber ? apartmentNumber : '';
   const address = `${addressLineOne} ${aptNumber} ${city} ${state} ${zip}`

   return (
      <div className="user-information">
         <div className="top-row">
            <p>welcome:<span>{fullName}</span></p>
            <p>account #:<span>{accountNumber}</span></p>
            <p>routing number:<span>{routingNumber}</span></p>
         </div>
         <div className="bottom-row">
            <p>user ID:<span>{firstName}</span></p>
            <p>email:<span>{email}</span></p>
            <p>address:<span>{address}</span></p>
         </div>
      </div>
   )
}

export default DisplayUserInformationNav;
