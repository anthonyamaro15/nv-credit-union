import { initialValues } from './initialValues';
import { CREDIT_CARD_APPLICATION } from '../actions';

export const creditCardReducer = (state = initialValues, action: { type: any; payload: any }) => {
   switch(action.type) {
      case CREDIT_CARD_APPLICATION:
         return {
            ...state,
            creditCardApplication: action.payload,
         }
         default:
            return state;
   }
}
