import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { 
   APPLICATION_DESICION_COMPONENT_ALLOW 
} from '../../../redux/actions';

interface FormProps {
   employerName: string;
   occupation: string;
}

const EmploymentInformation = () => {
   const { register, handleSubmit, errors } = useForm<FormProps>();
   const history = useHistory();
   const dispatch = useDispatch();

   const onSubmit = (values: FormProps) => {
      // save values to redux state, but not needed at the moment
      console.log(values);
      dispatch({ type: APPLICATION_DESICION_COMPONENT_ALLOW, payload: true });
      history.push('/open-account/register/application-decision');
   }

   return (
      <section className="PersonalInformation">
         <h6>Please enter your information in the fields below.</h6>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="employerName">Employer Name
               <input 
                  type="text" 
                  name="employerName" 
                  id="employerName" 
                  ref={register({ required: true })} 
               />
            </label>
            {errors.employerName && <p className="errors">Field require</p>}
            <label htmlFor="occupation">Occupation
               <input 
                  type="text" 
                  name="occupation" 
                  id="occupation" 
                  ref={register({ required: true })} 
               />
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
