import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { serverUrl } from '../../envVariables';

interface FormProps {
   emailOnFile: string;
}

const ForgotPassword = () => {
   const [emailSent, setEmailSent] = useState(false);
   const [error, setError] = useState('');
   const { register, handleSubmit, errors, reset } = useForm<FormProps>({
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

   useEffect(() => {
      if(error) {
         setTimeout(() => setError(''), 2000);
      }
   },[error]);

   const onSubmit = async  (value: FormProps) => {
      const email = value.emailOnFile;
      
      try {
         await axios.patch(`${serverUrl}/auth/forgot-password`, { email });
         setEmailSent(true);
         reset();
      } catch (error) {
         console.log(error.response.data);
         setError(error.response.data.errorMessage);
      }
   }

   return (
      <div className="Transfers">
         <div className="Forgot-password">
            <div className="Reset-password">
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
                     <p className="transfer-error">{error && error}</p>
                  </label>
                  <div className="btn-wrapper">
                     <button type="submit">submit</button>
                  </div>
               </form> 
               <div className="form-footer">
                  <span>One Nevada Credit Union</span>
                  <div className="more-info">
                     <a href="www.example.com">Federally Insured by NCUA</a>
                     <a href="www.example.com">Equal Housing Lender.</a>
                  </div>
                  <span>2013-2020 MeridianLink, Inc., All Rights Reserved.</span>
               </div>
            </div>
         </div>
      </div>

   )
}

export default ForgotPassword;
