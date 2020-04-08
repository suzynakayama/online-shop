import React from "react";
import "./CartItem.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<div className="cart-item">
			<img src={imageUrl} alt="item" />
			<div className="cart-item__details">
				<span className="cart-item__details--name">{name}</span>
				<span className="cart-item__details--price">
					{quantity} x $ {price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
