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

            {/* Display this only when user select other than refinance vehicle */}
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
            
            {/* Display only when user selects refinance option, this will display values
             of refinance options user picked */}
            {purchaseType === 'refinance vehicle' && (
               <RefinanceVehicle autoLoanApplication={autoLoanApplication} />
            )}
            {/* If user knows the make model and year of the car then display those values */}
            {knowsMakeAndModel === 'yes' && (
               <KnowsMakeAndModel autoLoanApplication={autoLoanApplication} />
            )}
         </div>
         {/* Only display this component when user picked the option to trade in a vehicle */}
         {tradeIn && (
            <TradeInVehicleInformation autoLoanApplication={autoLoanApplication} />
         )}
      </>
   )
}

export default ReviewAutoLoanInformation;
