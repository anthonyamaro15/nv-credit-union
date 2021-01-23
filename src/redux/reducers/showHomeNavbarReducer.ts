import { HIDE_HOME_NAVBAR_AND_FOOTER } from '../actions';
import { initialValues } from './initialValues';

export const showHomeNavbarReducer = (state = initialValues, action: { type: any; payload: any; }) => {
      switch(action.type) {
         case HIDE_HOME_NAVBAR_AND_FOOTER:
            return {
               ...state,
               showHomeNavbarAndFooter: action.payload
            }
         default:
            return state;
      }
}
