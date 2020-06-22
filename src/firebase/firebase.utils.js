import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyDidPGqHTwWUtGN0IgDFPa-S1wFhfCu_6E",
	authDomain: "online-shop-e04ec.firebaseapp.com",
	databaseURL: "https://online-shop-e04ec.firebaseio.com",
	projectId: "online-shop-e04ec",
	storageBucket: "online-shop-e04ec.appspot.com",
	messagingSenderId: "496392365877",
	appId: "1:496392365877:web:05ae2819e87100b3dbce7c",
	measurementId: "G-H3QPR2RLE9",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	// if user is null, return
	if (!userAuth) return;

	// get the documentSnapshop from firestore
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	// if exists is false, create new User. Else,
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("error creating user", err.message);
		}
	}

	return userRef;
};

// let's add our collections and documents to Firebase database
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	// batch right, batch or group in one call
	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		// not passing the id to the .doc() we let firebase to create a unique id
		const newDocRef = collectionRef.doc();

		// now let's add the value
		batch.set(newDocRef, obj);
	});

	// will set our batch and return a promise that resolve to void (null)
	return await batch.commit();
};

// gets the snapshot object and convert to the way we need the data to be and add the routing property
export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});

	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolve(userAuth)
		}, reject)
	})
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
