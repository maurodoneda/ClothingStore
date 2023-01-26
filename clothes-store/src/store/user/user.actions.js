import {createAction} from "../../utils/reducers/reducers.utils";

export const USER_ACTIONS = {
  CHECK_USER_SESSION : "user/CHECK_USER_SESSION",
  SIGN_IN_WITH_GOOGLE_START: "user/SIGN_IN_WITH_GOOGLE_START",
  SIGN_IN_WITH_EMAIL_START: "user/SIGN_IN_WITH_EMAIL_START",
  SIGN_IN_SUCCEED: "user/SIGN_IN_SUCCEED",
  SIGN_IN_FAILED: "user/SIGN_IN_FAILED",
  SIGN_OUT_START:"user/SIGN_OUT_START",
  SIGN_OUT_FAILED:"user/SIGN_OUT_FAILED",
  SIGN_OUT_SUCCEED:"user/SIGN_OUT_SUCCEED",
  SIGN_UP_START:"user/SIGN_UP_START",
  SIGN_UP_FAILED:"user/SIGN_UP_FAILED",
  SIGN_UP_SUCCEED:"user/SIGN_UP_SUCCEED"
}

export const checkUserSession = () => createAction(USER_ACTIONS.CHECK_USER_SESSION);
export const googleSignInStart = () => createAction(USER_ACTIONS.SIGN_IN_WITH_GOOGLE_START);
export const emailSignInStart = (email, password) => createAction(USER_ACTIONS.SIGN_IN_WITH_EMAIL_START, {email, password});
export const signInSucceed = (user) => createAction(USER_ACTIONS.SIGN_IN_SUCCEED, user);
export const signInFailed = (error) => createAction(USER_ACTIONS.SIGN_IN_SUCCEED, error);
export const signOutStart = () => createAction(USER_ACTIONS.SIGN_OUT_START);
export const signOutSucceed = () => createAction(USER_ACTIONS.SIGN_OUT_SUCCEED);
export const signOutFailed = (error) => createAction(USER_ACTIONS.SIGN_OUT_FAILED, error);
export const signUpStart = (email, password, displayName) => createAction(USER_ACTIONS.SIGN_UP_START, {email, password, displayName});
export const signUpSucceed = (user, additionalDetails) => createAction(USER_ACTIONS.SIGN_UP_SUCCEED, {user, additionalDetails});
export const signUpFailed = (error) => createAction(USER_ACTIONS.SIGN_UP_FAILED, error);
