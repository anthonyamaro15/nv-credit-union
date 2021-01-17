import { 
   APPLICATION_DESICION_COMPONENT_ALLOW, 
   CONTACT_INFO_COMPONENT_ALLOW, 
   EMPLOYMENT_INFO_COMPONENT_ALLOW, 
} from '../actions';
import { initialValues } from './initialValues';

export const allowComponentReducer = (state = initialValues, action: { type: any; payload: any}) => {
   switch(action.type) {
      case CONTACT_INFO_COMPONENT_ALLOW:
         return {
            ...state,
            contactInfoComponentAllow: action.payload
         }
      case EMPLOYMENT_INFO_COMPONENT_ALLOW:
         return {
            ...state,
            employmentInfoComponentAllow: action.payload
         }
      case APPLICATION_DESICION_COMPONENT_ALLOW:
         return {
            ...state,
            applicationDecisionComponentAllow: action.payload
         }
         default:
            return state;
   }
}
