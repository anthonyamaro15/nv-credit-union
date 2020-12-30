import React from 'react';
import { useForm } from 'react-hook-form';
// import { useHistory } from 'react-router-dom';

interface FormProps {
   employerName: string;
   occupation: string;
}

const EmploymentInformation = () => {
   const { register, handleSubmit, errors } = useForm<FormProps>();
   // const history = useHistory();

   const onSubmit = (values: any) => {
      console.log(values);
      // history.push('');
      // now redirect to users account
   }

   return (
      <section className="PersonalInformation">
         <h6>Please enter your information in the fields below.</h6>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="employerName">Employer Name
               <input type="text" name="employerName" id="employerName" ref={register({ required: true })} />
            </label>
            {errors.employerName && <p className="errors">Field require</p>}
            <label htmlFor="occupation">Occupation
               <input type="text" name="occupation" id="occupation" ref={register({ required: true })} />
            </label>
            {errors.occupation && <p className="errors">Field require</p>}
            <div className="btn-wrapper">
               <button type="submit">next</button>
            </div>
         </form>
      </section>
   )
}

export default EmploymentInformation;
