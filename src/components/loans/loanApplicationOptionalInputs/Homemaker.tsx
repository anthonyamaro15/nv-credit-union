import React from 'react';

interface Props {
   register: any;
   errors: any;
}

const Homemaker: React.FC<Props> = ({ register }) => {
   return (
     <>
      <label htmlFor="homemakerJobTitle">
         Former Profession/Job Title
         <span className="require">*</span>
         <input type="text" id="homemakerJobTitle" name="homemakerJobTitle" ref={register} />
      </label>
     </> 
   )
}

export default Homemaker;
