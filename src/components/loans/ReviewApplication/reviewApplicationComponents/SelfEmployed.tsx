import React from 'react';
import { FormCreditCardProps } from '../../../interfaces/loanApplicationInterface';


interface Props {
   applicationInputs: FormCreditCardProps;
}
const SelfEmployed: React.FC<Props> = ({ applicationInputs }) => {
   const { 
      employmentStatus,
      selfJobTitle,
      selfEmployer,
      selfEmploymentMonths,
      selfEmploymentYears,
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
               <span className="value">{selfJobTitle}</span>
            </div>
         </div> 
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">employment duration</span>
               <span className="value">{`${selfEmploymentYears} yrs ${selfEmploymentMonths} months`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description">gross monthly income </span>
               <span className="value">{`$ ${monthlyIncome}`}</span>
            </div>
         </div> 
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">employer</span>
               <span className="value">{`${selfEmployer}`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description">montly mortage/rent</span>
               <span className="value">{`$ ${monthlyExpenses}`}</span>
            </div>
         </div> 
      </div>
   )
}

export default SelfEmployed;
