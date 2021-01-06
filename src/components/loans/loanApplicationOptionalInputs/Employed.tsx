import React from 'react';

interface Props {
   register: any;
   errors: any;
   years: number[];
   months: number[]
}

const Employed: React.FC<Props> = ({ register, years, months }) => {
   return (
     <>
      <label htmlFor="jobTitle">
         Profession/Job Title
         <span className="require">*</span>
         <input type="text" id="jobTitle" name="jobTitle" ref={register} />
      </label>
      <label htmlFor="employer">
         employer
         <span className="require">*</span>
         <input type="text" id="employer" name="employer" ref={register} />
      </label>
      <div className="employment-duration">
         <div>
            <span>employment duration</span>
            <span className="require">*</span>
         </div>
         <div className="duration-wrapper">
            <label htmlFor="employmentYears">
               <select name="employmentYears" id="years" ref={register}>
                  <option value="">Years</option>
                  {years.map((year: number, i) => (
                     <option value={year} key={i}>{year}</option>
                  ))}
               </select>
            </label>
            <label htmlFor="employmentMonths">
               <select name="employmentMonths" id="employmentMonths" ref={register}>
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

export default Employed;
