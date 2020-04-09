import React from "react";
import "./CheckoutItem.styles.scss";
import { connect } from "react-redux";
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from "../../redux/cart/cartActions";

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = item;

	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="checkout-item-name">{name}</span>
			<span className="checkout-item-quantity">
				<div className="arrow" onClick={() => removeItem(item)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(item)}>
					&#10095;
				</div>
			</span>
			<span className="checkout-item-price">$ {price}</span>
			<div className="checkout-item-remove" onClick={() => clearItem(item)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
