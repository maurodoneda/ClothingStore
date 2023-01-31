import {Action, ActionWithPayload, createAction, withMatcher} from "../../utils/reducers/reducers.utils";
import {User, USER_ACTIONS, UserSignUp} from "./user";


export type CheckUserSession = Action<USER_ACTIONS.CHECK_USER_SESSION>;
export type GoogleSignInStart = Action<USER_ACTIONS.SIGN_IN_WITH_GOOGLE_START>;
export type EmailSignInStart = ActionWithPayload<USER_ACTIONS.SIGN_IN_WITH_EMAIL_START, {email : string, password : string}>;
export type SignInSucceed = ActionWithPayload<USER_ACTIONS.SIGN_IN_SUCCEED, User>;
export type SignInFailed = ActionWithPayload<USER_ACTIONS.SIGN_IN_FAILED, Error>;
export type SignOutStart = Action<USER_ACTIONS.SIGN_OUT_START>;
export type SignOutSucceed = Action<USER_ACTIONS.SIGN_OUT_SUCCEED>;
export type SignOutFailed = ActionWithPayload<USER_ACTIONS.SIGN_OUT_FAILED, Error>;
export type SignUpStart = ActionWithPayload<USER_ACTIONS.SIGN_UP_START, UserSignUp>;
export type SignUpSucceed = ActionWithPayload<USER_ACTIONS.SIGN_UP_SUCCEED, {user : User, additionalDetails : string[]}>;
export type SignUpFailed = ActionWithPayload<USER_ACTIONS.SIGN_UP_FAILED, Error>;

export const checkUserSession =  withMatcher(() : CheckUserSession => createAction(USER_ACTIONS.CHECK_USER_SESSION));
export const googleSignInStart = withMatcher(() : GoogleSignInStart => createAction(USER_ACTIONS.SIGN_IN_WITH_GOOGLE_START));
export const emailSignInStart = withMatcher((email : string, password : string) : EmailSignInStart => createAction(USER_ACTIONS.SIGN_IN_WITH_EMAIL_START, {email, password}));
export const signInSucceed = withMatcher((user : User) : SignInSucceed => createAction(USER_ACTIONS.SIGN_IN_SUCCEED, user));
export const signInFailed = withMatcher((error : Error) : SignInFailed => createAction(USER_ACTIONS.SIGN_IN_FAILED, error));
export const signOutStart = withMatcher(() : SignOutStart => createAction(USER_ACTIONS.SIGN_OUT_START));
export const signOutSucceed = withMatcher(() : SignOutSucceed => createAction(USER_ACTIONS.SIGN_OUT_SUCCEED));
export const signOutFailed = withMatcher((error : Error) : SignOutFailed => createAction(USER_ACTIONS.SIGN_OUT_FAILED, error));
export const signUpStart = withMatcher((userSignUp : UserSignUp) : SignUpStart => createAction(USER_ACTIONS.SIGN_UP_START, userSignUp));
export const signUpSucceed = withMatcher((user : User, additionalDetails : string[]) : SignUpSucceed => createAction(USER_ACTIONS.SIGN_UP_SUCCEED, {user, additionalDetails}));
export const signUpFailed = withMatcher((error : Error) : SignUpFailed => createAction(USER_ACTIONS.SIGN_UP_FAILED, error));
