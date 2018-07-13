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
      const newState = {...state, ...action.payload }
      return newState;
    case USER_LOG_OUT:
      const newState2 = {...state, ...action.payload};
      return newState2;
    case UPDATE_PARTIES:
      const newState3 = {...state, ...action.payload};
      return newState3;
    default:
      return state;
  }
};

export default rootReducer;
