import React from "react";
import "./CollectionItem.styles.scss";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection__item">
			<div
				className="collection__item--image"
				style={{ backgroundImage: `url(${imageUrl})` }}
			/>
			<div className="collection__item--footer">
				<span className="collection__item--name">{name}</span>
				<span className="collection__item--price">${price}</span>
			</div>
			<CustomButton
				inverted
				className="custom-button"
				onClick={() => addItem(item)}
			>
				Add To Cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
