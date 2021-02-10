import ShopActionTypes from "./Shop.Types";
import { takeLatest, call, put } from "redux-saga/effects";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./Shop.Action";
import { firestore, convertCollectionsSnapshotToMap } from "../../Firebase/Firebase.utils";

export function* fetchCollectionAsync(){
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync)
}