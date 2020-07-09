import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shopSelectors";
import WithSpinner from "../../components/WithSpinner/WithSpinner";
import CollectionPage from "./CollectionPage";

const mapStateToProps = createStructuredSelector({
  isLoaded: state => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;