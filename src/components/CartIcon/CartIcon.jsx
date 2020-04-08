import React from "react";
import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";

const CartIcon = ({ toggleCartHidden }) => {
	return (
		<div className="cart" onClick={toggleCartHidden}>
			<ShoppingIcon className="cart__shopping-icon" />
			<span className="cart__item-count">0</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
