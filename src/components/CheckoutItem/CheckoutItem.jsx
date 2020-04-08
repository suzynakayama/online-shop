import React from "react";
import "./CheckoutItem.styles.scss";

const CheckoutItem = ({ item: { name, imageUrl, price, quantity } }) => {
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="checkout-item-name">{name}</span>
			<span className="checkout-item-quantity">{quantity}</span>
			<span className="checkout-item-price">{price}</span>
			<div className="checkout-item-remove">&#10005;</div>
		</div>
	);
};

export default CheckoutItem;
