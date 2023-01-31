import {all, call, put, takeLatest} from 'redux-saga/effects'
import {
  emailSignInStart,
  googleSignInStart,
  signInFailed,
  signInSucceed,
  signOutFailed, signOutSucceed, signUpFailed, signUpSucceed,
  USER_ACTIONS
} from "./user.actions";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopUp, signOutUser
} from "../../utils/firebase/firebase.utils";


function* getSnapshotFromUserAuth(userAuth, additionalDetails) {

  try {
    const userSnapshot = yield call(createUserDocFromAuth, userAuth, additionalDetails)
    yield put(signInSucceed({id: userSnapshot.id, ...userSnapshot}))
  } catch (error) {
    yield put(signInFailed(error))
  }
}

function* isUserAuthenticated() {

  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;

    yield call(getSnapshotFromUserAuth, userAuth)

    yield put(signInSucceed(userAuth))
  } catch (error) {
    yield put(signInFailed(error))
  }
}

function* signInWithGoogle(){
  try{
   const {user} = yield call(signInWithGooglePopUp)
    yield call(getSnapshotFromUserAuth, user)
    yield put(signInSucceed(user))
  }catch (error) {
    yield put(signInFailed(error))
  }
}

function* signInWithEmail({payload: {email, password}}){
  try{
    const {user} = yield call(signInAuthUserWithEmailAndPassword, email, password)
    yield call(getSnapshotFromUserAuth, user)
    yield put(signInSucceed(user))
  }catch (error) {
    yield put(signInFailed(error))
  }
}

function* startSignOut(){
  try{
    yield call(signOutUser);
    yield put(signOutSucceed())
  }catch (error){
    yield put(signOutFailed(error))
  }
}

function* startSignUp({payload: {email, password, displayName}}){
  try{
    const {user} = yield call(createAuthUserWithEmailAndPassword, email, password);
    yield put(signUpSucceed(user, {displayName}))
  }catch (error){
    yield put(signUpFailed(error))
  }
}

function* signInAfterSignUp({payload:{user, additionalDetails}}){
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

function* onCheckUserSession() {
  yield takeLatest(USER_ACTIONS.CHECK_USER_SESSION, isUserAuthenticated)
}

function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTIONS.SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)
}

function* onEmailSignInStart() {
  yield takeLatest(USER_ACTIONS.SIGN_IN_WITH_EMAIL_START, signInWithEmail)
}

function* onSignOutStart(){
  yield takeLatest(USER_ACTIONS.SIGN_OUT_START, startSignOut)
}

function* onSignUpStart(){
  yield takeLatest(USER_ACTIONS.SIGN_UP_START, startSignUp)
}

function* onSignUpSuccess(){
  yield takeLatest(USER_ACTIONS.SIGN_UP_SUCCEED, signInAfterSignUp)
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ])
}
