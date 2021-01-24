import { useForm } from 'react-hook-form';

interface FormValues {
   settingNewPassword: string;
   reEnterSettingNewPassword: string;
}
const ResetPassword = () => {
   const { register, handleSubmit, errors } = useForm<FormValues>({
      mode: 'onBlur'
   });

   const onSubmit = (values: FormValues) => {
      const {settingNewPassword, reEnterSettingNewPassword } = values;
      if(settingNewPassword !== reEnterSettingNewPassword) {
         return alert("Password do not match");
      }
      console.log('submitting');
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
