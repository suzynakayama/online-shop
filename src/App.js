import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={""} />
			</Switch>
		</div>
	);
};

export default App;
