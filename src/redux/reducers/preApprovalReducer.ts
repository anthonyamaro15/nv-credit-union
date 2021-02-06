import { initialValues } from './initialValues';
import { PRE_APPROVAL_RESULT } from '../actions';

export const preApprovalReducer = (state = initialValues, action: { type: any; payload: any }) => {
   switch(action.type) {
      case PRE_APPROVAL_RESULT:
         return {
            ...state,
            preApprovalResult: action.payload,
         }
         default:
            return state;
   }
}
