import React from 'react';
import { FormCreditCardProps } from '../../../interfaces/loanApplicationInterface';


interface Props {
   applicationInputs: FormCreditCardProps;
}
const DifferentEmailingAddress: React.FC<Props> = ({ applicationInputs }) => {
   const { 
      differentAddress,
      differentCity,
      differentState,
      differentZip,
      occupancyYears,
      occupancyMonths
   } = applicationInputs;

   return (
      <div className="information-wrapper">
         <div className="lef-side-wrapper">
            <span className="description">mailing address</span>
            <span className="value check-for-same-address">
               {`${differentAddress} ${differentCity} ${differentState} ${differentZip}`}
            </span>
         </div>
         <div className="right-side-wrapper">
            <span className="description">occupancy duration</span>
            <span className="value">{`${occupancyYears} yrs ${occupancyMonths} months`}</span>
         </div>
      </div> 
   )
}

export default DifferentEmailingAddress;
