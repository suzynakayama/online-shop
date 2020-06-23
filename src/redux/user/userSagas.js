import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './userTypes';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';
import { LoginSuccess, LoginFailure, signOutFailure, signOutSuccess, signUpFailure} from './userActions';

// ---------- Helper Generators -------------
export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(LoginSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (err) {
    yield put(LoginFailure(err))
  }
}

export function* loginWithGoogle() {
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(LoginFailure(err))
  }
}

export function* loginWithEmail({payload: {email, password}}) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put (LoginFailure(err))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth)
  } catch (err) {
    yield put(LoginFailure(err))
  }
}

export function* signUp({payload: {email, password}}) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    
  } catch (err) {
    yield put(signUpFailure(err))
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (err) {
    yield put(signOutFailure(err))
  }
}


// ---------- Main Generators -----------
export function* onGoogleLoginStart() {
  yield takeLatest(userActionTypes.GOOGLE_LOGIN_START, loginWithGoogle)
}

export function* onEmailLoginStart() {
  yield takeLatest(userActionTypes.EMAIL_LOGIN_START, loginWithEmail)
}

export function* onCheckUserSession() {
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onSignOutStart() {
  yield takeLatest(userActionTypes.SIGNOUT_START, signOut)
}

export function* onSignUpStart() {
  yield takeLatest(userActionTypes.SIGNUP_START, signUp)
}

// ----------- Root Sagas -------------
export function* userSagas() {
  yield all([call(onGoogleLoginStart), call(onEmailLoginStart), call(onCheckUserSession), call(onSignOutStart), call(onSignUpStart)]);
}