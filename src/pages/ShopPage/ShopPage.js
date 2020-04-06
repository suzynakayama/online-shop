import React, { useState } from "react";
import SHOP_DATA from "../../data/shop";
import PreviewCollection from "../../components/PreviewCollection/PreviewCollection";

const ShopPage = () => {
	const [collections, setCollections] = useState(SHOP_DATA);

	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

export default ShopPage;
