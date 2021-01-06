import React from 'react';
import { AutoLoanApplicationProps } from '../../../../interfaces/loanApplicationInterface';
import KnowsMakeAndModel from './KnowsMakeAndModel';
import RefinanceVehicle from './RefinanceVehicle';
import TradeInVehicleInformation from './TradeInVehicleInformation';

interface Props {
   autoLoanApplication: AutoLoanApplicationProps;
}

const ReviewAutoLoanInformation: React.FC<Props> = ({ autoLoanApplication }) => {
   const { 
      branchLocation, 
      newOrUse, 
      purchaseType, 
      vehicleType, 
      knowsMakeAndModel, 
      estimatedPrice, 
      downPaymentAmount, 
      loanAmount, 
      loanTerm,
      tradeIn
   } = autoLoanApplication;

   return (
      <>
         <div className="share-classes">
            <h3>branch selection</h3>
            <div className="information-wrapper">
               <div className="lef-side-wrapper">
                  <span className="description">branch name</span>
                  <span className="value">{branchLocation}</span>
               </div>
                  <div className="right-side-wrapper">
                  <span className="description"></span>
                  <span className="value"></span>
               </div>
            </div> 
         </div> 
         <div className="share-classes">
            <h3>vehicle loan information</h3>
            {purchaseType !== 'refinance vehicle' && (
               <>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">new vehicle</span>
                        <span className="value">{`${newOrUse}`}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">loan purpose</span>
                        <span className="value">{`${purchaseType}`}</span>
                     </div>
                  </div> 
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">vehicle type</span>
                        <span className="value">{`${vehicleType}`}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">know vehicle make</span>
                        <span className="value">{knowsMakeAndModel}</span>
                     </div>
                  </div>
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">est. purchase price</span>
                        <span className="value">{`$${estimatedPrice}`}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">down payment</span>
                        <span className="value">{`$${downPaymentAmount}`}</span>
                     </div>
                  </div> 
                  <div className="information-wrapper">
                     <div className="lef-side-wrapper">
                        <span className="description">requested loan</span>
                        <span className="value">{`$${loanAmount}`}</span>
                     </div>
                     <div className="right-side-wrapper">
                        <span className="description">loan term</span>
                        <span className="value">{`${loanTerm} months`}</span>
                     </div>
                  </div>                
               </>
            )}
            

            {purchaseType === 'refinance vehicle' && (
               <RefinanceVehicle autoLoanApplication={autoLoanApplication} />
            )}
            {knowsMakeAndModel === 'yes' && (
               <KnowsMakeAndModel autoLoanApplication={autoLoanApplication} />
            )}
         </div>
         {tradeIn && (
            <TradeInVehicleInformation autoLoanApplication={autoLoanApplication} />
         )}
      </>
   )
}

export default ReviewAutoLoanInformation;
