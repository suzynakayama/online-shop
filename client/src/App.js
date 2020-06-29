import React, { useEffect } from "react";
import "./App.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import CheckoutPage from "./pages/Checkout/Checkout";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/userSelector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/userActions";

const App = ({checkUserSession, currentUser}) => {

	useEffect(() => {
		checkUserSession()
	}, [checkUserSession])

		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						exact
						path="/signin"
						render={() =>
							currentUser ? <Redirect to="/" /> : <LoginSignup />
						}
					/>
					<Route exact path="/checkout" component={CheckoutPage} />
				</Switch>
			</div>
		);
	}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


//# Old One
// class App extends React.Component {
// 	unsubscribeFromAuth = null;

// 	componentDidMount() {
		
// 		const { checkUserSession } = this.props;
// 		checkUserSession()
// 	//	// every time our auth state change we set the current user on our state
// 	// 	this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
// 	// 		if (userAuth) {
// 	// 			const userRef = await createUserProfileDocument(userAuth);

// 	// 			// every time the snapShop changes we set the user
// 	// 			userRef.onSnapshot((snapShot) => {
// 	// 				setCurrentUser({
// 	// 					id: snapShot.id,
// 	// 					...snapShot.data(),
// 	// 				});
// 	// 			});
// 	// 		}

// 	// 		setCurrentUser(userAuth);
// 	// 	});
// 	}

// 	componentWillUnmount() {
// 		this.unsubscribeFromAuth();
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<Header />
// 				<Switch>
// 					<Route exact path="/" component={HomePage} />
// 					<Route path="/shop" component={ShopPage} />
// 					<Route
// 						exact
// 						path="/signin"
// 						render={() =>
// 							this.props.currentUser ? <Redirect to="/" /> : <LoginSignup />
// 						}
// 					/>
// 					<Route exact path="/checkout" component={CheckoutPage} />
// 				</Switch>
// 			</div>
// 		);
// 	}
// }

// const mapStateToProps = createStructuredSelector({
// 	currentUser: selectCurrentUser,
// });

// const mapDispatchToProps = dispatch => ({
// 	checkUserSession: () => dispatch(checkUserSession())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);
