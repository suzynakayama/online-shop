import React from "react";
import "./Header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
	<div className="header">
		<Link to="/" className="header__logo">
			<Logo />
		</Link>
		<div className="header__options">
			<Link className="header__options--each" to="/shop">
				SHOP
			</Link>
			<Link className="header__options--each" to="/contact">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="header__options--each" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="header__options--each" to="/signin">
					SIGN IN
				</Link>
			)}
		</div>
	</div>
);

// function will get the user state from store and return as props to the header
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

// HOC that gets 2 functions (mapStateToProps and mapDispatchToProps)
export default connect(mapStateToProps)(Header);
