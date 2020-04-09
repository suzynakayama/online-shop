import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import "./CollectionPage.styles.scss";
import { selectCollection } from "../../redux/shop/shopSelectors";
import { connect } from "react-redux";

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className="collection-page">
			<h2 className="collection-page__title">{title}</h2>
			<div className="collection-page__items">
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
