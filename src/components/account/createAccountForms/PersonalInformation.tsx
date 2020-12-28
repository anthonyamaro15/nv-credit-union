import React from 'react';
import { useForm } from 'react-hook-form';

const PersonalInformation = () => {
   const { register, handleSubmit } = useForm();

   const onSubmit = (values: any) => {
      console.log(values);
   }
   return (
      <section className="PersonalInformation">
         <h6>Please enter your personal information in the fields below.</h6>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">
               <input type="text" name="firstName" id="firstName" ref={register} />
            </label>
            <label htmlFor="middleName">
               <input type="text" name="middleName" id="middleName" ref={register} />
            </label>
            <label htmlFor="lastName">
               <input type="text" name="lastName" id="lastName" ref={register} />
            </label>
            <label htmlFor="SSNNumber">
               <input type="text" name="SSNNumber" id="SSNNumber" placeholder="xxx-xx-xxxx" ref={register} />
            </label>
            <label htmlFor="confirmSSN">
               <input type="text" name="confirmSSN" id="confirmSSN" placeholder="xxx-xx-xxxx" ref={register} />
            </label>
            <label htmlFor="dateOfBirth">
               <input type="text" name="dateOfBirth" id="dateOfBirth" placeholder="mm/dd/yyyy" ref={register} />
            </label>
            <label htmlFor="gender">
               <select name="gender" id="gender" ref={register}>
                  <option value="">-Select One-</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
               </select>
            </label>
            <label htmlFor="email">
               <input type="text" name="email" id="email" ref={register} />
            </label>
            <label htmlFor="confirmEmal">
               <input type="text" name="confirmEmal" id="confirmEmal" ref={register} />
            </label>
            <label htmlFor="password">
               <input type="text" name="password" id="password" ref={register} />
            </label>
            <label htmlFor="confirmPassword">
               <input type="text" name="confirmPassword" id="confirmPassword" ref={register} />
            </label>
            <div className="btn-wrapper">
               <button type="submit">next</button>
            </div>
         </form>
      </section>
   )
}

export default PersonalInformation;
