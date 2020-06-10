// Imports -- notice combineReducers is destructured since it is not exported as a default
import { combineReducers } from 'redux';

// export default so import does not need to be destructured
import bankReducer from './reducers/bankReducer';

// Initializations
const rootReducer = combineReducers({
  bank: bankReducer,
});

// Exports
export default rootReducer;
