import React from 'react';

interface Props {
   register: any;
   // ref: any;
   errors: any;
}

const Homemaker: React.FC<Props> = ({ register, errors }) => {
   return (
     <>
      <label htmlFor="homemakerJobTitle">
         Former Profession/Job Title
         <span className="require">*</span>
         <input type="text" id="homemakerJobTitle" name="homemakerJobTitle" ref={register} />
         {/* <p className="error">{errors.jobTitle && "Required field"}</p> */}
      </label>
     </> 
   )
}

export default Homemaker;
