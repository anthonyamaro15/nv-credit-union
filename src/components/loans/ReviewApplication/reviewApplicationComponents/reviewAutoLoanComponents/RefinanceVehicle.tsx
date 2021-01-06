import React from 'react';
import { AutoLoanApplicationProps } from '../../../../interfaces/loanApplicationInterface';

interface Props {
   autoLoanApplication: AutoLoanApplicationProps;
}

const RefinanceVehicle: React.FC<Props> = ({ autoLoanApplication }) => {
   const { 
      purchaseType, 
      vehicleType, 
      vehicleMake, 
      refinanceLoanAmount, 
      refinanceVehicleMileage, 
      refinanceVehicleValue, 
      loanTerm, 
      vehicleModel, 
      vehicleYear
   } = autoLoanApplication;

   return (
      <>
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">new vehicle</span>
               <span className="value">{`NO`}</span>
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
               <span className="value">{vehicleMake ? "YES" : "NO"}</span>
            </div>
         </div>
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">est. vehicle value</span>
               <span className="value">{`$${refinanceVehicleValue}`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description">req. refinance amount</span>
               <span className="value">{`$${refinanceLoanAmount}`}</span>
            </div>
         </div> 
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">vehicle mileage</span>
               <span className="value">{`$${refinanceVehicleMileage}`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description">loan term</span>
               <span className="value">{`${loanTerm} months`}</span>
            </div>
         </div> 
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">vehicle make</span>
               <span className="value">{`${vehicleMake}`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description">vehicle model</span>
               <span className="value">{vehicleModel}</span>
            </div>
         </div>
         <div className="information-wrapper">
            <div className="lef-side-wrapper">
               <span className="description">vehicle year</span>
               <span className="value">{`${vehicleYear}`}</span>
            </div>
            <div className="right-side-wrapper">
               <span className="description"></span>
               <span className="value"></span>
            </div>
         </div>
      </>
   )
}

export default RefinanceVehicle;
