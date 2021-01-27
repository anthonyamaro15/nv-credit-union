import React from 'react';
import { states } from  '../../../seedData';

interface Props {
   register: any;
   errors: any;
   years: number[];
   months: number[]
}

const IdTypes: React.FC<Props> = ({ register, errors }) => {
   return (
     <>
      <label htmlFor="idNumber">
         ID Number
         <span className="require">*</span>
         <input type="text" id="idNumber" name="idNumber" ref={register({ required: true})} />
         <p className="error">{errors.idNumber && "Required field"}</p> 
      </label>
      <label htmlFor="idState">
         ID state
         <span className="require">*</span> 
         <select name="idState" id="idState" ref={register({ required: true})}>
            <option value="">--Please Select--</option>
            {states.map((single: string, i) => (
               <option value={single} key={i}>{single}</option>
            ))}
         </select>
         <p className="error">{errors.idState && "Required field"}</p>
      </label>
      <div className="id-expiration-date">
         <span>ID Expiration Date</span>
         <span className="require">*</span>
         <div className="input-wrapper">
            <label htmlFor="expirationMonth">
               <input 
                  type="text" 
                  id="expirationMonth" 
                  name="expirationMonth" 
                  placeholder="mm"
                  maxLength={2}
                  ref={register({ 
                     required: true,
                     validate: (value: any) => parseInt(value) <= 12, 
                     pattern: /^\d+$/
                  })} 
               />
               <p className="error">{errors.expirationMonth && errors.expirationMonth === 'required' && "Required field"}</p>
               <p className="error">
                  {errors.expirationMonth && errors.expirationMonth.type === "validate" && "Enter valid month"}
               </p>
               <p className="error">
                  {errors.expirationMonth && errors.expirationMonth.type === "pattern" && "Enter valid format"}
               </p>
               <p className="error">
                  {errors.expirationDay && errors.expirationDay.type === "validate" && "Enter valid day"}
               </p>
               <p className="error">
                  {errors.expirationDay && errors.expirationDay.type === "pattern" && "Enter valid format"}
               </p>
               <p className="error">
                  {errors.expirationYear && errors.expirationYear.type === "pattern" && "Enter valid format"}
               </p>
            </label>
            <label htmlFor="expirationDay">
               <input 
                  type="text" 
                  id="expirationDay" 
                  name="expirationDay" 
                  placeholder="dd" 
                  maxLength={2}
                  ref={register({ 
                     required: true,
                     validate: (value: any) => parseInt(value) <= 12, 
                     pattern: /^\d+$/
                  })} 
               />
            </label>
            <label htmlFor="expirationYear">
               <input 
                  type="text" 
                  id="expirationYear" 
                  name="expirationYear" 
                  placeholder="yyyy"
                  maxLength={4} 
                  ref={register({ 
                     required: true,
                     pattern: /^\d+$/
                  })} 
               />
            </label>
         </div>
      </div>
     </> 
   )
}

export default IdTypes;
