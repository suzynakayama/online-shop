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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
