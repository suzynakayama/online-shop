import React from "react";
import "./CheckoutItem.styles.scss";
import { connect } from "react-redux";
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from "../../redux/cart/cartActions";
import {
	CheckoutItemContainer,
	CheckoutImageContainer,
	CheckoutImage,
	CheckoutItemNamePrice,
	CheckoutItemQuantity,
	CheckoutItemArrow,
	CheckoutItemRemove,
	CheckoutItemValue,
} from "./CheckoutItem.styles";

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = item;

	return (
		<CheckoutItemContainer>
			<CheckoutImageContainer>
				<CheckoutImage src={imageUrl} alt="item" />
			</CheckoutImageContainer>
			<CheckoutItemNamePrice>{name}</CheckoutItemNamePrice>
			<CheckoutItemQuantity>
				<CheckoutItemArrow onClick={() => removeItem(item)}>
					&#10094;
				</CheckoutItemArrow>
				<CheckoutItemValue>{quantity}</CheckoutItemValue>
				<CheckoutItemArrow onClick={() => addItem(item)}>
					&#10095;
				</CheckoutItemArrow>
			</CheckoutItemQuantity>
			<CheckoutItemNamePrice>$ {price}</CheckoutItemNamePrice>
			<CheckoutItemRemove onClick={() => clearItem(item)}>
				&#10005;
			</CheckoutItemRemove>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
