import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelectors';
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionsOverview from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

// Compose let us re-write this deeply nested function in a more readable way.
// compose evaluates from right to left. It is equivalent to: const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;