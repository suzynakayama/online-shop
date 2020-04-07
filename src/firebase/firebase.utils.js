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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
