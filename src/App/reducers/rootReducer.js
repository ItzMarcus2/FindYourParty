import {
  USER_LOG_IN,
  USER_LOG_OUT,
  UPDATE_PARTIES
} from "../constants/constants";

const initialState = {
  isLoggedIn: false,
  userRef: "",
  parties: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOG_IN:
      const newState = [...state, action.payload];
      newState.isLoggedIn = action.payload.isLoggedIn;
      newState.userRef = action.payload.userRef;
      return newState;
    case USER_LOG_OUT:
      const newState2 = [...state, action.payload];
      newState2.isLoggedIn = action.payload.isLoggedIn;
      newState2.userRef = action.payload.userRef;
      return newState2;
    case UPDATE_PARTIES:
      const newState3 = [...state, action.payload];
      newState3.parties = action.payload.parties;
      return newState3;
    default:
      return state;
  }
};

export default rootReducer;
