import React from 'react';
import { carMake } from '../../../../seedData';

interface Props {
   register: any;
   errors: any;
}

const TradeInOption: React.FC<Props> = ({ register, errors }) => {
   return (
      <>
         <label htmlFor="tradeInVehicleMake">
            vehicle make 
            <span className="require">*</span>
            <select 
               name="tradeInVehicleMake" 
               id="tradeInVehicleMake" 
               ref={register}
            >
               <option value="">--Please Select--</option>
               {carMake.map((single: string, i: number) => (
                  <option value={single} key={i}>{single}</option>
               ))}
            </select>
            {/* <p className="error">{errors.tradeinVehicleType && "Required field"}</p> */}
         </label>
         <label htmlFor="tradeInVehicleModel">
            vehicle model
            <span className="require">*</span>
            <input 
               type="text" 
               name="tradeInVehicleModel" 
               id="tradeInVehicleModel" 
               // maxLength={5} 
               ref={register} 
            />
            {/* <p className="error">{errors.knowsMaketradeinVehicleType && "Required field"}</p> */}
         </label>

         <label htmlFor="tradeInVehicleYear">vehicle year
            <span className="require">*</span>
            <input 
               type="text" 
               name="tradeInVehicleYear" 
               id="tradeInVehicleYear" 
               maxLength={5}
               ref={register({ pattern: /^\d+$/ })} 
            />
            <p className="error">
               { errors.tradeInVehicleYear && errors.tradeInVehicleYear.type === "pattern" && "Enter a valid number" }
            </p>
         </label>
         <label htmlFor="tradeInVehicleType">
            what type of vehicle is this?
            <span className="require">*</span>
            <select 
               name="tradeInVehicleType" 
               id="tradeInVehicleType" 
               ref={register}
            >
               <option value="">--Please Select--</option>
               <option value="auto">auto</option>
               <option value="pickup-truck">pickup-truck</option>
            </select>
            {/* <p className="error">{errors.vehicleType && "Required field"}</p> */}
         </label>

         <label htmlFor="tradeInVehicleCurrentValue">
            what is the current value of this vehicle?
            <input 
               type="text" 
               name="tradeInVehicleCurrentValue" 
               id="tradeInVehicleCurrentValue" 
               maxLength={7} 
               ref={register({ pattern: /^\d+$/ })} 
            />
            <p className="error">
               { errors.tradeInVehicleCurrentValue && errors.tradeInVehicleCurrentValue.type === "pattern" && "Enter a valid number" }
            </p>
         </label>

         <label htmlFor="tradeInVehicleOweValue">
            how much do you still owe on this vehicle?
            <input 
               type="text" 
               name="tradeInVehicleOweValue" 
               id="tradeInVehicleOweValue" 
               maxLength={7} 
               ref={register({ pattern: /^\d+$/ })} 
            />
            <p className="error">
               { errors.tradeInVehicleOweValue && errors.tradeInVehicleOweValue.type === "pattern" && "Enter a valid number" }
            </p>
         </label>

         <label htmlFor="tradeInVehicleMonthlyPayment">
            how much are you paying monthly for this vehicle?
            <input 
               type="text" 
               name="tradeInVehicleMonthlyPayment" 
               id="tradeInVehicleMonthlyPayment" 
               maxLength={7} 
               ref={register({ pattern: /^\d+$/ })} 
            />
            <p className="error">
               { errors.tradeInVehicleMonthlyPayment && errors.tradeInVehicleMonthlyPayment.type === "pattern" && "Enter a valid number" }
            </p>
         </label>      
      </>
   )
}

export default TradeInOption;
