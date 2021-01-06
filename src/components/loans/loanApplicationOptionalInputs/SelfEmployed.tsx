import React from 'react';

interface Props {
   register: any;
   errors: any;
   years: number[];
   months: number[]
}

const SelfEmployed: React.FC<Props> = ({ register, years, months }) => {
   return (
     <>
      <label htmlFor="seflJobTitle">
         Profession/Job Title
         <span className="require">*</span>
         <input type="text" id="selfJobTitle" name="selfJobTitle" ref={register} />
      </label>
      <label htmlFor="selfEmployer">
         employer
         <input type="text" id="selfEmployer" name="selfEmployer" ref={register} />
      </label>
      <label htmlFor="businessType">
         business type
         <span className="require">*</span>
         <input type="text" id="businessType" name="businessType" ref={register} />
      </label>
      <div className="employment-duration">
         <div>
            <span>employment duration</span>
            <span className="require">*</span>
         </div>
         <div className="duration-wrapper">
            <label htmlFor="selfEmploymentYears">
               <select name="selfEmploymentYears" id="selfEmploymentYears" ref={register}>
                  <option value="">Years</option>
                  {years.map((year: number, i) => (
                     <option value={year} key={i}>{year}</option>
                  ))}
               </select>
            </label>
            <label htmlFor="selfEmploymentMonths">
               <select name="selfEmploymentMonths" id="selfEmploymentMonths" ref={register}>
                  <option value="">Months</option>
                  {months.map((month: number, i) => (
                     <option value={month} key={i}>{month}</option>
                  ))}
               </select>
            </label>
         </div>
      </div>
     </> 
   )
}

export default SelfEmployed;
