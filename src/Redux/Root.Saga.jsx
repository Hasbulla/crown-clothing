import { all } from 'redux-saga/effects';
import { userSagas } from './User/User.Saga';
import { cartSagas } from './Cart/Cart.Saga';
import { shopSagas } from './Shop/Shop.Sagas';

export default function* RootSaga() {
    yield all([shopSagas(), userSagas(), cartSagas()]);
}
