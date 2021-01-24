import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormProps {
   emailOnFile: string;
}

const ForgotPassword = () => {
   const [emailSent, setEmailSent] = useState(false);
   const { register, handleSubmit, errors } = useForm<FormProps>({
      mode: 'onBlur'
   });

   useEffect(() => {
      if(emailSent) {
         setTimeout(() => {
            alert("Check your email to reset password");   
            setEmailSent(false);
         }, 500);
      }
   }, [emailSent]);

   const onSubmit = (value: FormProps) => {
      setEmailSent(true);
      console.log('submitting', value);
   }

   return (
      <div className="Transfers">
         <div className="Account">
            <h3>password reset</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="transfers-form">
               <label htmlFor="emailOnFile">Email Address on file
                  <input 
                     type="text" 
                     id="emailOnFile" 
                     name="emailOnFile" 
                     placeholder="Email" 
                     ref={register({ required: true})}
                  />
                  <p className="transfer-error">{errors.emailOnFile && "Required field"}</p>
               </label>
               <div className="btn-wrapper">
                  <button type="submit">submit</button>
               </div>
               
            </form> 
 
         </div>
         <div className="form-footer">
            <span>One Nevada Credit Union</span>
            <div className="more-info">
               <a href="www.example.com">Federally Insured by NCUA</a>
               <a href="www.example.com">Equal Housing Lender.</a>
            </div>
            <span>2013-2020 MeridianLink, Inc., All Rights Reserved.</span>
         </div>
      </div>

   )
}

export default ForgotPassword;
