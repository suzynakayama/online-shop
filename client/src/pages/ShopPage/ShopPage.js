import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
// import {
// 	firestore,
// 	convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shopActions";
// import CollectionsOverviewContainer from "../../components/CollectionsOverview/CollectionsOverview.container";
// import CollectionPageContainer from "../CollectionPage/CollectionPage.container";
import Spinner from "../../components/Spinner/Spinner";

const CollectionsOverviewContainer = lazy(() => import("../../components/CollectionsOverview/CollectionsOverview.container"))
const CollectionPageContainer = lazy(() =>
  import("../CollectionPage/CollectionPage.container")
);

const ShopPage = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner/>}>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);



//# Old One
// class ShopPage extends React.Component {
// 	// state = {
// 	// 	loading: true,
// 	// };

// 	// unsubscribeFromSnapshot = null;

// 	componentDidMount() {
// 		// const { updateCollections } = this.props;
// 		// const collectionRef = firestore.collection("collections");

		
// 		// get this data whenever this code renders or the snapshot updates
// 		// 	collectionRef.onSnapshot(async (snapshot) => {
// 		// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
// 		// 		updateCollections(collectionsMap);
// 		// 		this.setState({ loading: false });
// 		// 	});
// 		// }
			
// 		// using promise
// 	// 	collectionRef.get().then(snapshot => {
// 	// 		const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
// 	// 		updateCollections(collectionsMap);
// 	// 		this.setState({ loading: false });
// 	// 	});
// 		const { fetchCollectionsStart } = this.props;
// 		fetchCollectionsStart();
// 	}
		
// 	render() {
// 		const { match } = this.props;
// 		return (
//       <div className="shop-page">
//         <Route
//           exact
//           path={`${match.path}`}
//           component={CollectionsOverviewContainer}
//         />
//         <Route
//           path={`${match.path}/:collectionId`}
//           component={CollectionPageContainer}
//         />
//       </div>
//     );
// 	}
// }

// const mapDispatchToProps = (dispatch) => ({
//   fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
// });

// export default connect(null, mapDispatchToProps)(ShopPage);
