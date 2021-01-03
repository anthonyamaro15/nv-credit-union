import React from 'react';
import { FormCreditCardProps } from '../../../interfaces/loanApplicationInterface';


interface Props {
   applicationInputs: FormCreditCardProps;
}
const Employed: React.FC<Props> = ({ applicationInputs }) => {
   const { 
      employmentStatus, 
      jobTitle, 
      employmentYears, 
      employmentMonths, 
      monthlyIncome, 
      monthlyExpenses 
   } = applicationInputs;

   return (
      <div className="share-classes">
         <h3>financial information</h3>
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">empoyment status</span>
               <span className="value">{employmentStatus}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description">profession/Job Title</span>
               <span className="value">{jobTitle}</span>
            </div>
         </div> 
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">employment duration</span>
               <span className="value">{`${employmentYears} yrs ${employmentMonths} months`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description">gross monthly income </span>
               <span className="value">{`$ ${monthlyIncome}`}</span>
            </div>
         </div> 
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">montly mortage/rent</span>
               <span className="value">{`$ ${monthlyExpenses}`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description"></span>
               <span className="value"></span>
            </div>
         </div> 
      </div>
   )
}

export default Employed;
