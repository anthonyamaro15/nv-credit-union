import React from 'react';
import { FormCreditCardProps } from '../../../interfaces/loanApplicationInterface';


interface Props {
   applicationInputs: FormCreditCardProps;
}
const ReferenceInformation: React.FC<Props> = ({ applicationInputs }) => {
   const { 
      referenceFirstName,
      referenceLastName,
      referenceEmail,
      referenceRelationship,
      referencePhone
   } = applicationInputs;

   return (
      <div className="share-classes">
         <h3>reference information</h3>
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">first name</span>
               <span className="value">{`${referenceFirstName}`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description">last name</span>
               <span className="value">{`${referenceLastName}`}</span>
            </div>
         </div> 
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">email</span>
               <span className="value">{`${referenceEmail}`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description">relationship</span>
               <span className="value">{referenceRelationship}</span>
            </div>
         </div>
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">phone</span>
               <span className="value">{`${referencePhone}`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description"></span>
               <span className="value"></span>
            </div>
         </div>  
      </div>
   )
}

export default ReferenceInformation;
