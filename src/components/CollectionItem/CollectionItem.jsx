import React from "react";
import "./CollectionItem.styles.scss";

const CollectionItem = ({ id, name, imageUrl, price }) => {
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
		</div>
	);
};

export default CollectionItem;
