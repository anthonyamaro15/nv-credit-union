import { useForm } from 'react-hook-form';
import { UserData } from '../interfaces/loanApplicationInterface';

interface Props {
   userData?: UserData;
}
const ChangePin: React.FC<Props> = ({ userData }) => {
   const { register, handleSubmit, errors } = useForm({
      mode: 'onBlur'
   });

   const onSubmit = () => {
      console.log('submitting');
   }

   return (
      <div className="Transfers">
         <div className="Account">
            <h3>change PIN</h3>
            
            <form className="change-pin-form" onSubmit={handleSubmit(onSubmit)}>
               <p className="account-number">account<span>{userData?.accountNumber}</span></p>
               <label htmlFor="newPin">New PIN
                  <input 
                     type="text" 
                     id="newPin" 
                     name="newPin" 
                     placeholder="Enter New PIN" 
                     ref={register({ required: true})}
                  />
                  <p className="pin-error">{errors.newPin && "Required field"}</p>
               </label>
               <label htmlFor="reEnterNewPin">Re-Enter New PIN
                  <input 
                     type="text" 
                     id="reEnterNewPin" 
                     name="reEnterNewPin" 
                     placeholder="Re-Enter New PIN" 
                     ref={register({ required: true})}
                  />
                  <p className="pin-error">{errors.reEnterNewPin && "Required field"}</p>
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

export default ChangePin;
