import React from "react";
// import "./Header.style.scss";
import {
	HeaderContainer,
	LogoContainer,
	// OptionDiv,
	OptionLink,
	OptionsContainer,
} from "./Header.styles";
// import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelectors";

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/contact">CONTACT</OptionLink>
			{currentUser ? (
				// we can, instead of writing a variable with the css and assigning it to 2 styled components, we can use the OptionLink as="div"
				// and it will become a div with the OptionLink styles
				// <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
				<OptionLink as="div" onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

// function will get the user state from store and return as props to the header
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

// HOC that gets 2 functions (mapStateToProps and mapDispatchToProps)
export default connect(mapStateToProps)(Header);

// OLD VERSION USING SCSS
// const Header = ({ currentUser, hidden }) => (
// 	<div className="header">
// 		<Link to="/" className="header__logo">
// 			<Logo />
// 		</Link>
// 		<div className="header__options">
// 			<Link className="header__options--each" to="/shop">
// 				SHOP
// 			</Link>
// 			<Link className="header__options--each" to="/contact">
// 				CONTACT
// 			</Link>
// 			{currentUser ? (
// 				<div className="header__options--each" onClick={() => auth.signOut()}>
// 					SIGN OUT
// 				</div>
// 			) : (
// 				<Link className="header__options--each" to="/signin">
// 					SIGN IN
// 				</Link>
// 			)}
// 			<CartIcon />
// 		</div>
// 		{hidden ? null : <CartDropdown />}
// 	</div>
// );
