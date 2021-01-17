import React from 'react';
import { Route } from 'react-router-dom';
import ApplicationDecision from './createAccountForms/ApplicationDecision';
import ContactInformation from './createAccountForms/ContactInformation';
import EmploymentInformation from './createAccountForms/EmploymentInformation';
import FormFooter from './createAccountForms/FormFooter';
import PersonalInformation from './createAccountForms/PersonalInformation';
import CreateAccountNavbar from './CreateAccountNavbar';
import { PrivateComponent } from '../privateRoutes';
import { useSelector } from 'react-redux';

interface AllowProp {
   isAllow: boolean;
   contactInfoComponentAllow: boolean;
   employmentInfoComponentAllow: boolean;
   applicationDecisionComponentAllow: boolean;
}

interface ReducerProps {
   allowComponentReducer: AllowProp
}

const CreateAccountForm = () => {
   const {  
      contactInfoComponentAllow, 
      employmentInfoComponentAllow,
      applicationDecisionComponentAllow
   } = useSelector((state: ReducerProps) => state.allowComponentReducer);

   return (
      <section className="CreateAccount">
         <div className="CreateAccount-wrapper">
            <CreateAccountNavbar />
            <Route path="/open-account/register/personal-information" exact>
               <PersonalInformation />
            </Route>
            <PrivateComponent 
               path="/open-account/register/contact-information" 
               exact
               isAllow={contactInfoComponentAllow}
               component={ContactInformation}
            />
            <PrivateComponent
               path="/open-account/register/employment-information"
               exact
               isAllow={employmentInfoComponentAllow}
               component={EmploymentInformation}
            />
            <PrivateComponent 
               path="/open-account/register/application-decision"
               exact
               isAllow={applicationDecisionComponentAllow}
               component={ApplicationDecision}
            />
            <FormFooter />
         </div>
      </section>
   )
}

export default CreateAccountForm;
