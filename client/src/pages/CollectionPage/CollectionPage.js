import React from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import "./CollectionPage.styles.scss";
import { selectCollection } from "../../redux/shop/shopSelectors";
import { connect } from "react-redux";
import {
	CollectionPageContainer,
	CollectionPageTitle,
	CollectionPageItems,
} from "./CollectionPage.styles";

const CollectionPage = ({ collection }) => {
	console.log(collection)
	const { title, items } = collection;
	return (
		// <div className="collection-page">
		// 	<h2 className="collection-page__title">{title}</h2>
		// 	<div className="collection-page__items">
		<CollectionPageContainer>
			<CollectionPageTitle>{title}</CollectionPageTitle>
			<CollectionPageItems>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</CollectionPageItems>
		</CollectionPageContainer>
		// 	</div>
		// </div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
