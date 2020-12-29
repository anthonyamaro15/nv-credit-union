import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
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
   driverLincenseNumber: number;
   licenseState: string;
   dateIssued: string;
   expirationDate: string;
}

const ContactInformation = () => {
   const { register, handleSubmit, errors } = useForm<FormProps>();
   const history = useHistory();

   const onSubmit = (values: any) => {
      console.log(values);
      history.push('/open-account/register/contact-information');
   }
   
   return (
      <section className="PersonalInformation">
         <h6>Please enter your contact information in the fields below.</h6>
         {/* <h1>mailing address</h1> */}
         <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="addressLineOne">Address Line 1
               <input type="text" name="addressLineOne" id="addressLineOne" ref={register({ required: true })} />
            </label>
            {errors.addressLineOne && <p className="errors">Field require</p>}
            <label htmlFor="addressLineTwo">Address Line 2
               <input type="text" name="addressLineTwo" id="addressLineTwo" ref={register} />
            </label>
            <label htmlFor="apartmentNumber">Apartment Number
               <input type="text" name="apartmentNumber" id="apartmentNumber" ref={register({ required: true })} />
            </label>
            {errors.apartmentNumber && <p className="errors">Field require</p>}

            <div className="city-state-zip-wrapper">
               <span>City, State, ZIP</span>
               <div className="input-wrappers">
                  <label htmlFor="city">
                     <input type="text" name="city" id="city" placeholder="City" ref={register({ required: true })} />
                  </label>
                  <label htmlFor="state">
                     <select name="state" id="state" ref={register({ required: true })}>
                        <option value="">State</option>
                        {states.map((single: string, i) => (
                           <option value={single} key={i}>{single}</option>
                        ))}
                     </select>
                  </label>
                  <label htmlFor="zip">
                     <input type="text" name="zip" id="zip" placeholder="ZIP code" ref={register({ required: true })} />
                  </label>
               </div>
            </div>
            {errors.city && <p className="errors">Fields require</p>}

            <label htmlFor="country">Country
               <select name="country" id="country" ref={register({ required: true })}>
                  <option value="">- Select One -</option>
                  <option value="unitedStates">United States</option>
               </select>
            </label>
            {errors.country && <p className="errors">Field require</p>}

            <label htmlFor="citizenshipType">Citizenship Type
               <select name="citizenshipType" id="citizenshipType" ref={register({ required: true })}>
                  <option value=""></option>
                  <option value="usCitizen">US Citizen</option>
                  <option value="residentAlien">Resident Alien</option>
               </select>
            </label>
            {errors.citizenshipType && <p className="errors">Field require</p>}
            <label htmlFor="primaryPhone">Primary Phone number
               <input type="text" name="primaryPhone" id="primaryPhone" placeholder="xxx-xxx-xxxx" ref={register({ required: true })} />
            </label>
            {errors.primaryPhone && <p className="errors">Field require</p>}

            <label htmlFor="cellPhone">Cell Phone
               <input type="text" name="cellPhone" id="cellPhone" placeholder="xxx-xxx-xxxx" ref={register({ required: true })} />
            </label>
            {errors.cellPhone && <p className="errors">Field require</p>}

            <label htmlFor="workPhone">Work Phone
               <input type="text" name="workPhone" id="workPhone" placeholder="xxx-xxx-xxxx" ref={register({ required: true })} />
            </label>
            {/* {errors.cellPhone && <p className="errors">Field require</p>} */}


            <label htmlFor="driverLincenseNumber">Driver's License Number
               <input type="text" name="driverLincenseNumber" id="driverLincenseNumber" placeholder="xxx-xxx-xxxx" ref={register({ required: true })} />
            </label>
            {errors.driverLincenseNumber && <p className="errors">Field require</p>}

            <label htmlFor="licenseState">state
               <select name="licenseState" id="licenseState" ref={register({ required: true })}>
                  <option value="">-Select One-</option>
                  {states.map((single: string, i) => (
                     <option value={single} key={i}>{single}</option>
                  ))}
               </select>
            </label>
            {errors.licenseState && <p className="errors">Field require</p>}

            <label htmlFor="dateIssued">Date Issued 
               <input type="text" name="dateIssued" id="dateIssued" ref={register({ required: true })} />
            </label>
            {errors.dateIssued && <p className="errors">Field require</p>}
            <label htmlFor="expirationDate">Expiration Date
               <input type="text" name="expirationDate" id="expirationDate" ref={register({ required: true })} />
            </label>
            {errors.expirationDate && <p className="errors">Field require</p>}

            <div className="btn-wrapper">
               <button type="submit">next</button>
            </div>
         </form>
      </section>
   )
}

export default ContactInformation;
