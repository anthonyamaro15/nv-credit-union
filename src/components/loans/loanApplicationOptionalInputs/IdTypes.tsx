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
                  ref={register({ required: true })} 
               />
               <p className="error">{errors.expirationMonth && "Required field"}</p>
            </label>
            <label htmlFor="expirationDay">
               <input 
                  type="text" 
                  id="expirationDay" 
                  name="expirationDay" 
                  placeholder="dd" 
                  ref={register({ required: true})} 
               />
            </label>
            <label htmlFor="expirationYear">
               <input 
                  type="text" 
                  id="expirationYear" 
                  name="expirationYear" 
                  placeholder="yyyy" 
                  ref={register({ required: true})} 
               />
            </label>
         </div>
      </div>
     </> 
   )
}

export default IdTypes;
