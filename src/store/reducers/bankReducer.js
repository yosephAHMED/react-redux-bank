// Initial State
const initialState = {
  // balance component to track user balance in store
  balance: 0,
};

// Actions Types
const DEPOSIT_FIFTY = 'DEPOSIT_FIFTY';


// Action Creators
export const depositFiftyActionCreator = () => ({
  type: DEPOSIT_FIFTY,
});

// Reducer
const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    // Your cases here
    case DEPOSIT_FIFTY:
      return {
        // we don't want to overrite any data, IMMUTABILITY IS KEY
        // return contains object that is the new state
        // ...state puts whatever state we have into the object
        ...state,
        // we are updating state of balance, so take CURRENT value of balance and add 50
        balance: state.balance + 50,
      }

    default:
      return state;
  }
};

// Exports
export default bankReducer;
