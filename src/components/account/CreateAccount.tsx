import React from 'react';
import { Route } from 'react-router-dom';
import ApplicationDecision from './createAccountForms/ApplicationDecision';
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
            <Route path="/open-account/register/application-decision" exact>
               <ApplicationDecision />
            </Route>
            <FormFooter />
         </div>
      </section>
   )
}

export default CreateAccountForm;
