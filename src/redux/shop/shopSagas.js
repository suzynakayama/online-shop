import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ShopActionTypes } from "./shopTypes";
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shopActions';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');            //* get collection ref from firestore
    const snapshot = yield collectionRef.get();                           //* get the snapshot

    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);    //! call is a function that takes the function you want to call as the first parameter and the input you want to pass to the function as the second parameter. And because we are yielding this call, it allows us to defer control of this function execution back to the saga middleware. So we yield this call in case it takes longer than we want. The call method is a method that invokes functions.

    yield put(fetchCollectionsSuccess(collectionsMap))          //! put is the saga effect for creating     actions. Is the way Sagas dispatch actions. It's exactly like dispatch, expect that we need to yield it.
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(                                // takeLatest only runs on the last one (which is the most up to date)
    ShopActionTypes.FETCH_COLLECTIONS_START,       // When the Saga receive this action, it will
    fetchCollectionsAsync                          // fire this function
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}