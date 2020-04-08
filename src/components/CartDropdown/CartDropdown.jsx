import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.styles.scss";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-dropdown__items"></div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;
