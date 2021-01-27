import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../../envVariables';

interface FormValues {
   settingNewPassword: string;
   reEnterSettingNewPassword: string;
}
const ResetPassword = () => {
   const [message, setMessage] = useState('');
   const history = useHistory();
   const { token } = useParams<{ token: string }>();
   const { register, handleSubmit, errors, reset } = useForm<FormValues>({
      mode: 'onBlur'
   });

   useEffect(() => {
      if(message) {
         setTimeout(() => {
            alert(message);
            setMessage('');
         }, 1000);
      }
   }, [message]);

   const onSubmit = async (values: FormValues) => {
      const {settingNewPassword, reEnterSettingNewPassword } = values;
      if(settingNewPassword !== reEnterSettingNewPassword) {
         return alert("Password do not match");
      }
      try {
         const password = { password: settingNewPassword };
         const { data } = await axios.patch(`${serverUrl}/auth/reset-password/${token}`, password);
         setMessage(data.message);
         history.push('/login');
         reset();
      } catch (error) {
         console.log(error.response.data);         
      }
   }

   return (
      <div className="Transfers">
         <div className="Account">
            <h3>enter new password</h3>
            <form className="transfers-form" onSubmit={handleSubmit(onSubmit)}>
               <label htmlFor="settingNewPassword">New Password
                  <input 
                     type="text" 
                     id="settingNewPassword" 
                     name="settingNewPassword" 
                     placeholder="New Password" 
                     ref={register({ required: true})}
                  />
                  <p className="transfer-error">{errors.settingNewPassword && "Required field"}</p>
               </label>
               <label htmlFor="reEnterSettingNewPassword">Re-Enter New Password
                  <input 
                     type="text" 
                     id="reEnterSettingNewPassword" 
                     name="reEnterSettingNewPassword" 
                     placeholder="Re-Enter New Password" 
                     ref={register({ required: true})}
                  />
                  <p className="transfer-error">{errors.reEnterSettingNewPassword && "Required field"}</p>
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

export default ResetPassword;
