import {USER_ACTIONS} from "./user.actions";


const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false
}

export const userReducer = (state = INITIAL_STATE, action = {}) => {
  const {type, payload} = action;

  switch (type) {
    case USER_ACTIONS.SIGN_IN_SUCCEED:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_ACTIONS.SIGN_OUT_SUCCEED:
      return {
        ...state,
        isLoading: false,
        currentUser: null
      };
    case USER_ACTIONS.SIGN_OUT_FAILED:
    case USER_ACTIONS.SIGN_UP_FAILED:
    case USER_ACTIONS.SIGN_IN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case USER_ACTIONS.SIGN_IN_WITH_GOOGLE_START:
    case USER_ACTIONS.SIGN_IN_WITH_EMAIL_START:
    case USER_ACTIONS.SIGN_OUT_START:
    case USER_ACTIONS.SIGN_UP_START:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
}
