import React from 'react';
import { carMake } from '../../../../seedData';

interface Props {
   register: any;
   errors: any;
}

const MakeModelYear: React.FC<Props> = ({ register, errors }) => {
   return (
      <>
         <label htmlFor="vehicleMake">
            vehicle make 
            <span className="require">*</span>
            <select 
               name="vehicleMake" 
               id="vehicleMake" 
               ref={register}
            >
               <option value="">--Please Select--</option>
               {carMake.map((single: string, i: number) => (
                  <option value={single} key={i}>{single}</option>
               ))}
            </select>
         </label>
         <label htmlFor="vehicleModel">
            vehicle model
            <span className="require">*</span>
            <input 
               type="text" 
               name="vehicleModel" 
               id="vehicleModel" 
               ref={register} 
            />
         </label>
         <label htmlFor="vehicleYear">vehicle year
            <span className="require">*</span>
            <input 
               type="text" 
               name="vehicleYear" 
               id="vehicleYear" 
               maxLength={7} 
               ref={register({ pattern: /^\d+$/ })} 
            />
            <p className="error">
               { errors.vehicleYear && errors.vehicleYear.type === "pattern" && "Enter a valid number" }
            </p>
         </label>
      </>
   )
}

export default MakeModelYear;
