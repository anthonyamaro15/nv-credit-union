import React from 'react';
import { payGrade } from '../../../seedData';

interface Props {
   register: any;
   // ref: any;
   errors: any;
   years: number[];
   months: number[]
}

const ActiveMilitary: React.FC<Props> = ({ register, errors, years, months }) => {
   return (
     <>
      <label htmlFor="militaryJobTitle">
         Profession/MOS
         <span className="require">*</span>
         <input type="text" id="militaryJobTitle" name="militaryJobTitle" ref={register} />
         {/* <p className="error">{errors.jobTitle && "Required field"}</p> */}
      </label>
      <label htmlFor="branchOfService">
         branch of service
         <span className="require">*</span>
         <input type="text" id="branchOfService" name="branchOfService" ref={register} />
         {/* <p className="error">{errors.employer && "Required field"}</p> */}
      </label>
      <label htmlFor="payGrade">
         pay grade
         <span className="require">*</span>
         <select name="payGrade" id="payGrade" ref={register}>
            <option value="">--Please Select--</option>
            {payGrade.map((single: string, i) => (
               <option value={single} key={i}>{single}</option>
            ))}
         </select>
         {/* <p className="error">{errors.idType && "Required field"}</p> */}
      </label>
      <div className="employment-duration">
         <div>
            <span>employment duration</span>
            <span className="require">*</span>
         </div>
         <div className="duration-wrapper">
            <label htmlFor="militaryEmploymentYears">
               <select name="militaryEmploymentYears" id="militaryEmploymentYears" ref={register}>
                  <option value="">Years</option>
                  {years.map((year: number, i) => (
                     <option value={year} key={i}>{year}</option>
                  ))}
               </select>
               {/* <p className="error-backup">{errors.employmentYears && "Required field"}</p> */}
            </label>
            <label htmlFor="militaryEmploymentMonths">
               <select name="militaryEmploymentMonths" id="militaryEmploymentMonths" ref={register}>
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

export default ActiveMilitary;
