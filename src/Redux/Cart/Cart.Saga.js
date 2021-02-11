import { clearCart } from './Cart.Action';
import UserActionTypes from '../User/User.Types';
import { takeLatest, put, all, call } from 'redux-saga/effects';

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}
