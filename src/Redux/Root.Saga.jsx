import { all } from "redux-saga/effects";
import { fetchCollectionStart } from "./Shop/Shop.Sagas";
import { userSagas } from "./User/User.Saga";

export default function* RootSaga() {
    yield all([
        fetchCollectionStart(),
        userSagas()
    ])
}