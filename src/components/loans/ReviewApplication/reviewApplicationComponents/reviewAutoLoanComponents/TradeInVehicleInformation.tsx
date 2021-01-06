import React from 'react';
import { AutoLoanApplicationProps } from '../../../../interfaces/loanApplicationInterface';

interface Props {
   autoLoanApplication: AutoLoanApplicationProps;
}

const TradeInVehicleInformation: React.FC<Props> = ({ autoLoanApplication }) => {
   const { tradeInVehicleCurrentValue, tradeInVehicleMake, tradeInVehicleModel, tradeInVehicleOweValue, tradeInVehicleMonthlyPayment, tradeInVehicleType } = autoLoanApplication;

   return (
         <div className="share-classes">
            <h3>trade-in vehicle information</h3>
            <div className="information-wrapper">
               <div className="lef-side-wrapper">
                  <span className="description">vehicle type</span>
                  <span className="value">{tradeInVehicleType}</span>
               </div>
                  <div className="right-side-wrapper">
                  <span className="description">vehicle make</span>
                  <span className="value">{tradeInVehicleMake}</span>
               </div>
            </div> 
            <div className="information-wrapper">
               <div className="lef-side-wrapper">
                  <span className="description">vehicle model</span>
                  <span className="value">{tradeInVehicleModel}</span>
               </div>
                  <div className="right-side-wrapper">
                  <span className="description">vehicle year</span>
                  <span className="value">{'wait'}</span>
               </div>
            </div> 
            <div className="information-wrapper">
               <div className="lef-side-wrapper">
                  <span className="description">current value of this vehicle</span>
                  <span className="value">{`$${tradeInVehicleCurrentValue}`}</span>
               </div>
                  <div className="right-side-wrapper">
                  <span className="description">you owe on this vehicle</span>
                  <span className="value">{`$${tradeInVehicleOweValue}`}</span>
               </div>
            </div> 
            <div className="information-wrapper">
               <div className="lef-side-wrapper">
                  <span className="description">paying monthly for this vehicle</span>
                  <span className="value">{`$${tradeInVehicleMonthlyPayment}`}</span>
               </div>
                  <div className="right-side-wrapper">
                  <span className="description"></span>
                  <span className="value"></span>
               </div>
            </div> 
         </div> 
   )
}

export default TradeInVehicleInformation;
