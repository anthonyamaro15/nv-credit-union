import { combineReducers } from 'redux';
import { creditCardReducer } from './reducers/CreditCardReducer';
import { createAccountReducer } from './reducers/createAccountReducer';
import { loanCarReducer } from './reducers/LoanCarReducer';

export const rootReducer = combineReducers({
   creditCardReducer,
   createAccountReducer,
   loanCarReducer
});
