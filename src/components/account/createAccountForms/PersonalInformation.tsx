import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { 
   CONTACT_INFO_COMPONENT_ALLOW, 
   CREATE_ACCOUNT_USER 
} from '../../../redux/actions';

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
   const { register, handleSubmit, errors, watch } = useForm<FormProps>({
      mode: "onBlur"
   });
   const [dofError, setDofError] = useState('');
   const history = useHistory();
   const dispatch = useDispatch();

   const dof = watch('dateOfBirth');

   useEffect(() => {
      if(dofError) setTimeout(() => setDofError(''), 5000);
   }, [dofError]);

   useEffect(() => {
      let currentYear = new Date().getFullYear();

      if(dof) {
         let userDof = dof.slice(0, 4);
         if(Number(userDof) >= currentYear) {
            return setDofError('Enter valid date');
         }
         if((Number(userDof) - currentYear) < 18) {
            return setDofError('Not old enough');
         }
      }
   }, [dof]);

   const onSubmit = (values: FormProps) => {
      const { 
         SSNNumber, 
         confirmSSN, 
         password, 
         confirmPassword, 
         email, 
         confirmEmail, 
         firstName, 
         middleName, 
         lastName, 
         dateOfBirth, 
         gender,  
      } = values;

      const updatedValues = {
         firstName,
         middleName,
         lastName,
         SSNNumber,
         dateOfBirth,
         gender,
         email,
         password,
      }
      // passwords and ssnumbers need to match before you continue
      if(SSNNumber !== confirmSSN) {
         return alert("ssn numbers dont match")  
      } 
      if(password !== confirmPassword) {
         return alert('passwords dont match');
      }
      if(email !== confirmEmail) {
         return alert("emails dont match");
      }

      dispatch({type: CREATE_ACCOUNT_USER, payload: updatedValues });
      dispatch({ type: CONTACT_INFO_COMPONENT_ALLOW, payload: true });
      history.push('/open-account/register/contact-information');
   }

   return (
      <section className="PersonalInformation">
         <h6>Please enter your personal information in the fields below.</h6>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">first name
               <input 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  ref={register({ required: true })} 
               />
            </label>
            {errors.firstName && <p className="errors">Require field</p>}
            <label htmlFor="middleName">middle name
               <input 
                  type="text" 
                  name="middleName" 
                  id="middleName" ref={register} 
               />
            </label>
            <label htmlFor="lastName">last name
               <input 
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                  ref={register({ required: true })} 
               />
            </label>
            {errors.lastName && <p className="errors">Require field</p>}
            <label htmlFor="SSNNumber">social security number
               <input 
                  type="password" 
                  name="SSNNumber" 
                  id="SSNNumber" 
                  placeholder="xxx-xx-xxxx" 
                  inputMode="numeric"
                  maxLength={9}
                  ref={register({ 
                     required: true, 
                     minLength: 9, 
                     pattern: /^\d+$/
                  })} 
               />
            </label>
            <p className="errors">
               {errors.SSNNumber && errors.SSNNumber.type === "required" && "Required field" }
            </p>
            <p className="errors">
               {errors.SSNNumber && errors.SSNNumber.type === "pattern" && "Enter valid SSN" }
            </p>
            <label htmlFor="confirmSSN">confirm social security number
               <input 
                  type="password" 
                  name="confirmSSN" 
                  id="confirmSSN" 
                  placeholder="xxx-xx-xxxx" 
                  inputMode="numeric"
                  maxLength={9}
                  ref={register({ 
                     required: true, 
                     minLength: 9, 
                     pattern: /^\d+$/
                  })} 
               />
            </label>
            <p className="errors">
               {errors.confirmSSN && errors.confirmSSN.type === "required" && "Required field" }
            </p>
            <p className="errors">
               {errors.confirmSSN && errors.confirmSSN.type === "pattern" && "Enter valid SSN" }
            </p>
            <label htmlFor="dateOfBirth">date of birth
               <input
                  type="date" 
                  name="dateOfBirth" 
                  id="dateOfBirth" 
                  maxLength={10}
                  ref={register({ required: true })} 
               />
            </label>
            <p className="errors">{errors.dateOfBirth && errors.dateOfBirth.type === 'required' && "Require field"}</p>
            <p className="errors">{dofError && dofError}</p>

            <label htmlFor="gender">gender
               <select 
                  name="gender" 
                  id="gender" 
                  ref={register({ required: true })}
               >
                  <option value="">-Select One-</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
               </select>
            </label>
            {errors.gender && <p className="errors">Require field</p>}
            <label htmlFor="email">e-mail address
               <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  ref={register({ required: true })} 
               />
            </label>
            {errors.email && <p className="errors">Require field</p>}
            <label htmlFor="confirmEmail">re-enter email address
               <input 
                  type="email" 
                  name="confirmEmail" 
                  id="confirmEmail" 
                  ref={register({ required: true })} 
               />
            </label>
            {errors.confirmEmail && <p className="errors">Require field</p>}
            <label htmlFor="password">create password
               <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  ref={register({ required: true })} 
               />
            </label>
            {errors.password && <p className="errors">Require field</p>}
            <label htmlFor="confirmPassword">re-enter password
               <input 
                  type="password" 
                  name="confirmPassword" 
                  id="confirmPassword" 
                  ref={register({ required: true })} 
               />
            </label>
            {errors.confirmPassword && <p className="errors">Require field</p>}
            <div className="btn-wrapper">
               <button type="submit">next</button>
            </div>
         </form>
      </section>
   )
}

export default PersonalInformation;
