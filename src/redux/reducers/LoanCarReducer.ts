import { initialValues } from './initialValues';
import { AUTO_LOAN_APPLICATION } from '../actions';

export const loanCarReducer = (state = initialValues, action: { type: any; payload: any }) => {
   switch(action.type) {
      case AUTO_LOAN_APPLICATION:
         console.log("auto payload", action.payload);
         return {
            ...state,
            autoLoanApplication: action.payload
         }
         default:
            return state;
   }
}
