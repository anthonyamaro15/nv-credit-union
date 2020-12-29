import { CREATE_ACCOUNT_USER } from '../actions';
import { initialValues } from './initialValues';

export const createAccountReducer = (state = initialValues, action: { type: any, payload: any}) => {
   switch(action.type) {
      case CREATE_ACCOUNT_USER:
         return {
            ...state,
            createAccount: action.payload
         }
         default:
            return state;
   }
}
