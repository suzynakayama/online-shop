import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../CartItem/CartItem";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-dropdown__items">
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
