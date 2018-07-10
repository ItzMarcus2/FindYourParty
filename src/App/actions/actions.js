import {
  USER_LOG_IN,
  USER_LOG_OUT,
  UPDATE_PARTIES
} from "../constants/constants";

export const loggingInUser = userRef => ({
  type: USER_LOG_IN,
  payload: { isLoggedIn: true, userRef: userRef }
});

export const loggingOutUser = userRef => ({
  type: USER_LOG_OUT,
  payload: { isLoggedIn: false, userRef: "" }
});

export const updateParties = parties => ({
  type: UPDATE_PARTIES,
  payload: { parties: parties }
});
