import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CREATE_ACCOUNT_USER, EMPLOYMENT_INFO_COMPONENT_ALLOW } from '../../../redux/actions';
import { states } from '../../../seedData';

interface FormProps {
   addressLineOne: string;
   addressLineTwo?: string;
   apartmentNumber?: string;
   city: string;
   state: string;
   zip: string;
   country: string;
   citizenshipType: string;
   primaryPhone: string;
   cellPhone: string;
   workPhone?: string;
   driverLicenseNumber: number;
   licenseState: string;
   dateIssued: string;
   expirationDate: string;
}

const ContactInformation = () => {
   const dispatch = useDispatch();
   const { register, handleSubmit, errors } = useForm<FormProps>({
      mode: "onBlur"
   });
   const history = useHistory();

   const onSubmit = (values: FormProps) => {
      dispatch({ type: CREATE_ACCOUNT_USER, payload: values });
      dispatch({ type: EMPLOYMENT_INFO_COMPONENT_ALLOW, payload: true });
      history.push('/open-account/register/employment-information');
   }
   
   return (
      <section className="PersonalInformation">
         <h6>Please enter your contact information in the fields below.</h6>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="addressLineOne">Address Line 1
               <input 
                  type="text" 
                  name="addressLineOne" 
                  id="addressLineOne" 
                  ref={register({ required: true })} 
               />
            </label>
            {errors.addressLineOne && <p className="errors">Field require</p>}
            <label htmlFor="addressLineTwo">Address Line 2
               <input 
                  type="text" 
                  name="addressLineTwo" 
                  id="addressLineTwo" 
                  ref={register} 
               />
            </label>
            <label htmlFor="apartmentNumber">Apartment Number
               <input 
                  type="text" 
                  name="apartmentNumber" 
                  id="apartmentNumber" 
               />
            </label>
            <div className="city-state-zip-wrapper">
               <span>City, State, ZIP</span>
               <div className="input-wrappers">
                  <label htmlFor="city">
                     <input 
                        type="text" 
                        name="city" 
                        id="city" 
                        placeholder="City" 
                        ref={register({ required: true })} 
                     />
                  </label>
                  <label htmlFor="state">
                     <select 
                        name="state" 
                        id="state" 
                        ref={register({ required: true })}
                     >
                        <option value="">State</option>
                        {states.map((single: string, i) => (
                           <option value={single} key={i}>{single}</option>
                        ))}
                     </select>
                  </label>
                  <label htmlFor="zip">
                     <input 
                        type="text" 
                        name="zip" 
                        id="zip" 
                        placeholder="ZIP code" 
                        maxLength={5} 
                        ref={register({ 
                           required: true,
                           pattern: /^\d+$/
                        })} 
                     />
                  </label>
               </div>
            </div>
            <p className="errors">{errors.zip && errors.zip.type === "required" && "Required field"}</p>
            <p className="errors">{errors.zip && errors.zip.type === "pattern" && "Enter valid Zipcode"}</p>

            <label htmlFor="country">Country
               <select 
                  name="country" 
                  id="country" 
                  ref={register({ required: true })}
               >
                  <option value="">- Select One -</option>
                  <option value="unitedStates">United States</option>
               </select>
            </label>
            {errors.country && <p className="errors">Field require</p>}

            <label htmlFor="citizenshipType">Citizenship Type
               <select 
                  name="citizenshipType" 
                  id="citizenshipType" 
                  ref={register({ required: true })}
               >
                  <option value=""></option>
                  <option value="usCitizen">US Citizen</option>
                  <option value="residentAlien">Resident Alien</option>
               </select>
            </label>
            {errors.citizenshipType && <p className="errors">Field require</p>}
            <label htmlFor="primaryPhone">Primary Phone number
               <input 
                  type="tel" 
                  name="primaryPhone" 
                  id="primaryPhone" 
                  maxLength={10}
                  ref={register( { required: true, pattern: /^\d+$/ })} 
               />
            </label>
            <p className="errors">
               {errors.primaryPhone && errors.primaryPhone.type === "required" && "Required field"}
            </p>
            <p className="errors">
               {errors.primaryPhone && errors.primaryPhone.type === "pattern" && "Enter valid phone number"}
            </p>

            <label htmlFor="cellPhone">Cell Phone
               <input 
                  type="tel" 
                  name="cellPhone" 
                  id="cellPhone" 
                  maxLength={10}
                  ref={register( { pattern: /^\d+$/ })} 
               />
            </label>
            <p className="errors">
               {errors.cellPhone && errors.cellPhone.type === "required" && "Required field"}
            </p>
            <p className="errors">
               {errors.cellPhone && errors.cellPhone.type === "pattern" && "Enter valid phone number"}
            </p>
            <label htmlFor="workPhone">Work Phone
               <input 
                  type="text" 
                  name="workPhone" 
                  id="workPhone" 
                  maxLength={10}
                  ref={register( { pattern: /^\d+$/ })} 
               />
            </label>
            <p className="errors">
               {errors.workPhone && errors.workPhone.type === "pattern" && "Enter valid phone number"}
            </p>
            <label htmlFor="driverLicenseNumber">Driver's License Number
               <input 
                  type="text" 
                  name="driverLicenseNumber" 
                  id="driverLicenseNumber" 
                  maxLength={10}
                  ref={register( { required: true, pattern: /^\d+$/ })} 
               />
            </label>
            <p className="errors">
               {errors.driverLicenseNumber && errors.driverLicenseNumber.type === "required" && "Field require"}
            </p>
            <p className="errors">
               {errors.driverLicenseNumber && errors.driverLicenseNumber.type === "pattern" && "Enter valid ID number"}
            </p>

            <label htmlFor="licenseState">state
               <select 
                  name="licenseState" 
                  id="licenseState" 
                  ref={register({ required: true })}
               >
                  <option value="">-Select One-</option>
                  {states.map((single: string, i) => (
                     <option value={single} key={i}>{single}</option>
                  ))}
               </select>
            </label>
            {errors.licenseState && <p className="errors">Field require</p>}

            <label htmlFor="dateIssued">Date Issued 
               <input 
                  type="text" 
                  name="dateIssued" 
                  id="dateIssued" 
                  placeholder="mm/dd/yyyy"
                  maxLength={10}
                  ref={register({ required: true })} 
               />
            </label>
            <p className="errors">{errors.dateIssued && "Field require"}</p>
            <label htmlFor="expirationDate">Expiration Date
               <input 
                  type="text" 
                  name="expirationDate" 
                  id="expirationDate" 
                  placeholder="mm/dd/yyyy"
                  maxLength={10}
                  ref={register({ required: true })} 
               />
            </label>
            <p className="errors">{errors.expirationDate && "Field require"}</p>
            <div className="btn-wrapper">
               <button type="submit">next</button>
            </div>
         </form>
      </section>
   )
}

export default ContactInformation;
