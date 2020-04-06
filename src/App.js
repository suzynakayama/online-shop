import React, { useState, useEffect } from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import { auth } from "./firebase/firebase.utils";

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			console.log(currentUser);
		});
		return () => {
			unsubscribeFromAuth();
		};
	}, [currentUser]);

	// useEffect(() => {
	// 	const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
	// 		if (userAuth) {
	// 			const userRef = await createUserProfileDocument(userAuth);
	// 			userRef.onSnapshot((snapShot) => {
	// 				setUser({
	// 					id: snapShot.id,
	// 					...snapShot.data(),
	// 				});
	// 			});
	// 		} else {
	// 			setUser(userAuth);
	// 			console.log(user);
	// 		}
	// 	});
	// 	return () => {
	// 		unsubscribeFromAuth();
	// 	};
	// }, [user]);

	return (
		<div>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={LoginSignup} />
			</Switch>
		</div>
	);
};

export default App;
