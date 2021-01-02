export interface FormCreditCardProps  {
   firstName: string;
   middleName?: string;
   lastName: string;
   ssn: string;
   birthMonth: string;
   birthDay: string;
   birthYear: string;
   memberNumber?: string;
   referenceFirstName?: string;
   referenceLastName?: string;
   referenceEmail?: string;
   referencePhone?: string;
   referenceRelationship?: string;
   citizenship: string;
   contactMethod: string;
   contactEmail: string;
   homePhone?: string;
   cellPhone?: string;
   workPhone?: string;
   address: string;
   zip: string;
   city: string;
   state: string;

   // use different address
   differentAddress?: string;
   differentZip?: string;
   differentCity?: string;
   differentState?: string;

   occupancyStatus: string;
   occupancyYears: string;
   occupancyMonths: string;
   idType: string;
   idNumber: string;
   idState: string;
   expirationMonth: string;
   expirationDay: string;
   expirationYear: string;
   monthlyIncome: string;
   employmentStatus: string;
   // employed
   jobTitle?: string;
   employer?: string;
   employmentYears?: string;
   employmentMonths?: string;
   // unemployed
   previsousJobTitle?: string;
   previousEmploymentYears?: string;
   previousEmploymentMonths?: string;

   //homemaker
   homemakerJobTitle?: string;

   // active military
   militaryJobTitle?: string;
   branchOfService?: string;
   payGragde?: string;
   militaryEmploymentYears?: string;
   militaryEmploymentMonths?: string;

   //selfemployed
   selfJobTitle?: string;
   selfEmployer?: string;
   selfEmploymentYears?: string;
   selfEmploymentMonths?: string;


   monthlyExpenses: string;
   loanType: string;
   hasOneNevadaCreditCard?: string;
   preferredLocation?: string;
   applicationNumber?: number;
}
