import {
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSucceed,
  signOutFailed, signOutStart,
  signOutSucceed,
  signUpFailed, signUpStart,
} from "./user.actions";
import {AnyAction} from "redux";
import {User} from "./user";


export type UserState = {
    currentUser : User | null,
    error: Error | null,
    isLoading: boolean
}

const INITIAL_STATE : UserState = {
  currentUser: null,
  error: null,
  isLoading: false
}

export const userReducer = (state = INITIAL_STATE, action = {} as AnyAction) => {

   if(signInSucceed.match(action)) {
     return {
       ...state,
       currentUser: action.payload,
       isLoading: false,
     }
   }

    if(signOutSucceed.match(action)){
      return {
        ...state,
        isLoading: false,
        currentUser: null
      }
    }

    if(
        signInFailed.match(action) ||
        signOutFailed.match(action) ||
        signUpFailed.match(action)
    ) {
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    }

    if(
        googleSignInStart.match(action) ||
        emailSignInStart.match(action) ||
        signOutStart.match(action) ||
        signUpStart.match(action)
    ) {
      return {
        ...state,
        isLoading: true
      };
    }

    return state;
}
