import React from 'react';

interface Props {
   register: any;
   // ref: any;
   errors: any;
   years: number[];
   months: number[]
}

const Unemployed: React.FC<Props> = ({ register, errors, years, months }) => {
   return (
     <>
      <label htmlFor="previsousJobTitle">
         Former Profession/Job Title
         <span className="require">*</span>
         <input type="text" id="previsousJobTitle" name="previsousJobTitle" ref={register} />
         {/* <p className="error">{errors.jobTitle && "Required field"}</p> */}
      </label>
      <div className="employment-duration">
         <div>
            <span>Unemployment duration</span>
            <span className="require">*</span>
         </div>
         <div className="duration-wrapper">
            <label htmlFor="previousEmploymentYears">
               <select name="previousEmploymentYears" id="previousEmploymentYears" ref={register}>
                  <option value="">Years</option>
                  {years.map((year: number, i: number) => (
                     <option value={year} key={i}>{year}</option>
                  ))}
               </select>
               {/* <p className="error-backup">{errors.employmentYears && "Required field"}</p> */}
            </label>
            <label htmlFor="previousEmploymentMonths">
               <select name="previousEmploymentMonths" id="previousEmploymentMonths" ref={register}>
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

export default Unemployed;
