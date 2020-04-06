import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import LoginSignup from "./pages/LoginSignup/LoginSignup";

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={LoginSignup} />
			</Switch>
		</div>
	);
};

export default App;
