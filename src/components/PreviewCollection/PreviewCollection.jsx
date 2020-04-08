import React from "react";
import "./PreviewCollection.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const PreviewCollection = ({ title, items }) => {
	return (
		<div className="collection">
			<h1 className="collection__title">{title.toUpperCase()}</h1>
			<div className="collection__preview">
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default PreviewCollection;
