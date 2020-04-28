import React from "react";
import CollectionsOverview from "../../components/CollectionsOverview/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage/CollectionPage";
// import {
// 	firestore,
// 	convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shopSelectors";
import { createStructuredSelector } from 'reselect';
import WithSpinner from "../../components/Spinner/Spinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	// state = {
	// 	loading: true,
	// };

	// unsubscribeFromSnapshot = null;

	componentDidMount() {
		// const { updateCollections } = this.props;
		// const collectionRef = firestore.collection("collections");

		
		// get this data whenever this code renders or the snapshot updates
		// 	collectionRef.onSnapshot(async (snapshot) => {
		// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		// 		updateCollections(collectionsMap);
		// 		this.setState({ loading: false });
		// 	});
		// }
			
		// using promise
	// 	collectionRef.get().then(snapshot => {
	// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
	// 		updateCollections(collectionsMap);
	// 		this.setState({ loading: false });
	// 	});
		const { fetchCollectionsStartAsync } = this.props;
		fetchCollectionsStartAsync();
	}
		
	render() {
		const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
		return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
