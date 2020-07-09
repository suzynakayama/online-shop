import React from "react";
import {
	CartItemDetailsName,
	CartItemDetailsContainer,
	CartItemImg,
	CartItemContainer,
} from "./CartItem.styles";
//import "./CartItem.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<CartItemContainer>
			<CartItemImg src={imageUrl} alt="item" />
			<CartItemDetailsContainer>
				<CartItemDetailsName>{name}</CartItemDetailsName>
				<span className="cart-item__details--price">
					{quantity} x $ {price}
				</span>
			</CartItemDetailsContainer>
		</CartItemContainer>
	);
};

export default React.memo(CartItem);
