import { ShopActionTypes } from "./shopTypes";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
})

// Use Redux Thunk to create an async function.
export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection("collections");
		dispatch(fetchCollectionsStart());

		collectionRef.get().then(snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
		}).catch(err => dispatch(fetchCollectionsFailure(err.message)))
	}
}