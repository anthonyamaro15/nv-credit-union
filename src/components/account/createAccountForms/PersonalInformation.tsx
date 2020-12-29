import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

interface FormProps {
   firstName: string;
   middleName?: string;
   lastName: string;
   SSNNumber: string;
   confirmSSN: string;
   dateOfBirth: string;
   gender: string;
   email: string;
   confirmEmail: string;
   password: string;
   confirmPassword: string;
}

const PersonalInformation = () => {
   const { register, handleSubmit, errors } = useForm<FormProps>();
   const history = useHistory();

   const onSubmit = (values: any) => {
      console.log(values);
      history.push('/open-account/register/contact-information');
   }

   return (
      <section className="PersonalInformation">
         <h6>Please enter your personal information in the fields below.</h6>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">first name
               <input type="text" name="firstName" id="firstName" ref={register({ required: true })} />
            </label>
            {errors.firstName && <p className="errors">Field require</p>}
            <label htmlFor="middleName">middle name
               <input type="text" name="middleName" id="middleName" ref={register} />
            </label>
            <label htmlFor="lastName">last name
               <input type="text" name="lastName" id="lastName" ref={register({ required: true })} />
            </label>
            {errors.lastName && <p className="errors">Field require</p>}
            <label htmlFor="SSNNumber">social security number
               <input type="text" name="SSNNumber" id="SSNNumber" placeholder="xxx-xx-xxxx" ref={register({ required: true })} />
            </label>
            {errors.SSNNumber && <p className="errors">Field require</p>}
            <label htmlFor="confirmSSN">confirm social security number
               <input type="text" name="confirmSSN" id="confirmSSN" placeholder="xxx-xx-xxxx" ref={register({ required: true })} />
            </label>
            {errors.confirmSSN && <p className="errors">Field require</p>}
            <label htmlFor="dateOfBirth">date of birth
               <input type="text" name="dateOfBirth" id="dateOfBirth" placeholder="mm/dd/yyyy" ref={register({ required: true })} />
            </label>
            {errors.dateOfBirth && <p className="errors">Field require</p>}
            <label htmlFor="gender">gender
               <select name="gender" id="gender" ref={register({ required: true })}>
                  <option value="">-Select One-</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
               </select>
            </label>
            {errors.gender && <p className="errors">Field require</p>}
            <label htmlFor="email">e-mail address
               <input type="text" name="email" id="email" ref={register({ required: true })} />
            </label>
            {errors.email && <p className="errors">Field require</p>}
            <label htmlFor="confirmEmal">re-enter email address
               <input type="text" name="confirmEmal" id="confirmEmal" ref={register({ required: true })} />
            </label>
            {errors.confirmEmail && <p className="errors">Field require</p>}
            <label htmlFor="password">create password
               <input type="text" name="password" id="password" ref={register({ required: true })} />
            </label>
            {errors.password && <p className="errors">Field require</p>}
            <label htmlFor="confirmPassword">re-enter password
               <input type="text" name="confirmPassword" id="confirmPassword" ref={register({ required: true })} />
            </label>
            {errors.confirmPassword && <p className="errors">Field require</p>}
            <div className="btn-wrapper">
               <button type="submit">next</button>
            </div>
         </form>
      </section>
   )
}

export default PersonalInformation;
