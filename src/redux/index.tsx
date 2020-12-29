import { combineReducers } from 'redux';
import { creditCardReducer } from './reducers/CreditCardReducer';
import { createAccountReducer } from './reducers/createAccountReducer';

export const rootReducer = combineReducers({
   creditCardReducer,
   createAccountReducer
});
