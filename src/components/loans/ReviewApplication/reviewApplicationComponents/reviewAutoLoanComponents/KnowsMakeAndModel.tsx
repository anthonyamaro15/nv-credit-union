import React from 'react';
import { AutoLoanApplicationProps } from '../../../../interfaces/loanApplicationInterface';

interface Props {
   autoLoanApplication: AutoLoanApplicationProps;
}

const KnowsMakeAndModel: React.FC<Props> = ({ autoLoanApplication }) => {
   const { vehicleMake, vehicleModel, vehicleYear } = autoLoanApplication;

   return (
      <>
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

export default KnowsMakeAndModel;
