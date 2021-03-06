import { combineReducers } from 'redux';
import { creditCardReducer } from './reducers/CreditCardReducer';
import { createAccountReducer } from './reducers/createAccountReducer';
import { loanCarReducer } from './reducers/LoanCarReducer';
import { allowComponentReducer } from './reducers/allowComponentReducer';
import { showHomeNavbarReducer } from './reducers/showHomeNavbarReducer';
import { preApprovalReducer } from './reducers/preApprovalReducer';

export const rootReducer = combineReducers({
   creditCardReducer,
   createAccountReducer,
   loanCarReducer,
   allowComponentReducer,
   showHomeNavbarReducer,
   preApprovalReducer
});
