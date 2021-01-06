import React from 'react';

interface Props {
   register: any;
   errors: any;
}

const RefinanceVehicle: React.FC<Props> = ({ register, errors }) => {
   return (
      <>
         <label htmlFor="refinanceVehicleMileage">
            vehicle mileage
            <input 
               type="text" 
               name="refinanceVehicleMileage" 
               id="refinanceVehicleMileage" 
               maxLength={9} 
               ref={register({ pattern: /^\d+$/ })} 
            />
            <p className="error">
               { 
                  errors.refinanceVehicleMileage && 
                  errors.refinanceVehicleMileage.type === "pattern" && 
                  "Enter a valid number" 
               }
            </p>
         </label>

         <label htmlFor="refinanceVehicleValue">
            estimated vechicle value
            <span className="require">*</span>
            <input 
               type="text" 
               name="refinanceVehicleValue" 
               id="refinanceVehicleValue" 
               maxLength={5} 
               ref={register({ pattern: /^\d+$/ })} 
            />            
         </label>
         <label htmlFor="refinanceLoanAmount">
            requested refinance amount
            <span className="require">*</span> 
            <input 
               type="text" 
               id="refinanceLoanAmount" 
               name="refinanceLoanAmount"
               placeholder="$0.00" 
               ref={register} 
            />
         </label>  
      </>
   )
}

export default RefinanceVehicle;
