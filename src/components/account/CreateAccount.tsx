import React from 'react';
import { useForm } from 'react-hook-form';
import { Route } from 'react-router-dom';
import ContactInformation from './createAccountForms/ContactInformation';
import EmploymentInformation from './createAccountForms/EmploymentInformation';
import FormFooter from './createAccountForms/FormFooter';
import PersonalInformation from './createAccountForms/PersonalInformation';
import CreateAccountNavbar from './CreateAccountNavbar';

const CreateAccountForm = () => {
   return (
      <section className="CreateAccount">
         <div className="CreateAccount-wrapper">
            <CreateAccountNavbar />
            <Route path="/open-account/register/personal-information" exact>
               <PersonalInformation />
            </Route>
            <Route path="/open-account/register/contact-information" exact>
               <ContactInformation />
            </Route>
            <Route path="/open-account/register/employment-information" exact>
               <EmploymentInformation />
            </Route>
            <FormFooter />
         </div>
      </section>
   )
}

export default CreateAccountForm;
