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
      <label htmlFor="retiredJobTitle">
         Former Profession/Job Title
         <span className="require">*</span>
         <input type="text" id="retiredJobTitle" name="retiredJobTitle" ref={register} />
         {/* <p className="error">{errors.jobTitle && "Required field"}</p> */}
      </label>
      <div className="employment-duration">
         <div>
            <span>retired duration</span>
            <span className="require">*</span>
         </div>
         <div className="duration-wrapper">
            <label htmlFor="retiredEmploymentYears">
               <select name="retiredEmploymentYears" id="retiredEmploymentYears" ref={register}>
                  <option value="">Years</option>
                  {years.map((year: number, i: number) => (
                     <option value={year} key={i}>{year}</option>
                  ))}
               </select>
               {/* <p className="error-backup">{errors.employmentYears && "Required field"}</p> */}
            </label>
            <label htmlFor="retiredEmploymentMonths">
               <select name="retiredEmploymentMonths" id="retiredEmploymentMonths" ref={register}>
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
