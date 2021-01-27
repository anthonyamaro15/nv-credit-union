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
   payGrade?: string;
   militaryEmploymentYears?: string;
   militaryEmploymentMonths?: string;

   //selfemployed
   selfJobTitle?: string;
   selfEmployer?: string;
   selfEmploymentYears?: string;
   selfEmploymentMonths?: string;
   // retired
   retiredJobTitle?: string;
   retiredEmploymentYears?: string;
   retiredEmploymentMonths?: string;

   monthlyExpenses: string;
   loanType: string;
   hasOneNevadaCreditCard?: string;
   preferredLocation?: string;
   applicationNumber?: number;
}

export interface AutoLoanApplicationProps {
   branchLocation: string;
   downPaymentAmount: string;
   estimatedPrice: string;
   knowsMakeAndModel: string;
   loanAmount: string;
   loanTerm: string;
   newOrUse: string;
   purchaseType: string;
   tradeIn: boolean;
   tradeInVehicleType?: string;
   tradeInVehicleCurrentValue?: string;
   tradeInVehicleOweValue?: string;
   tradeInVehicleMake?: string;
   tradeInVehicleModel?: string;
   tradeInVehicleYear?: string;
   tradeInVehicleMonthlyPayment?: string;
   vehicleOweValue?: string;
   vehicleType: string;
   vehicleYear?: string;
   refinanceLoanAmount?: string;
   refinanceVehicleMileage?: string;
   refinanceVehicleValue?: string;
   vehicleMake?: string;
   vehicleModel?: string;
}

export interface UserData {
   firstName: string;
   lastName: string;
   middleName?: string;
   accountNumber: string;
   routingNumber: number;
   email: string;
   addressLineOne: string;
   addressLineTwo?: string;
   apartmentNumber?: string;
   city: string;
   state: string;
   zip: string;
}
