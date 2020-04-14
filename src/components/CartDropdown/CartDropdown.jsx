import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import {
	CartDropdownContainer,
	CartItems,
	CartMessage,
} from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
	const handleClick = () => {
		history.push("/checkout");
		dispatch(toggleCartHidden());
	};

	return (
		// <div className="cart-dropdown">
		// 	<div className="cart-dropdown__items">
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					// <span className="cart-dropdown--msg">Your cart is empty</span>
					<CartMessage>Your cart is empty.</CartMessage>
				)}
			</CartItems>
			{/* </div> */}
			<CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
		</CartDropdownContainer>
		// </div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

// withRouter (HOC) passes the match, history and location props to the component that is being passed. So it needs to be outside.
export default withRouter(connect(mapStateToProps)(CartDropdown));

// If we do not supply a mapDispatchToProps to connect, it will pass a dispatch as a prop to our component, because if we need to make only 1 action it would be too much to write a full mapDispatchToProps just for that.
