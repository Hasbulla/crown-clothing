import UserActionTypes from "./User.Types";
import { takeLatest, put, all, call } from "redux-saga/effects";
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from "./User.Action";
import { auth, googleProvider, CreateUserProfileDocument, getCurrentUser } from "../../Firebase/Firebase.utils";

export function* getSnapshotFromUserAuth(userAuth){
    try {
        const userRef = yield CreateUserProfileDocument(userAuth);
        const userSnapShot = yield userRef.get();
        yield put(signInSuccess({ 
            id: userSnapShot.id,
            ...userSnapShot.data()
        }))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* isUserAuthenticated(){
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}


export function* signInWithEmail({payload: {email, password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(isUserAuthenticated), call(signOut)]);
}