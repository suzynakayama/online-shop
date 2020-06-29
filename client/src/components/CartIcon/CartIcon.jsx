import React from "react";
import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart" onClick={toggleCartHidden}>
			<ShoppingIcon className="cart__shopping-icon" />
			<span className="cart__item-count">{itemCount}</span>
		</div>
	);
};

// selector, pull slice of state and compute a new value based on the state. When state changes, it will be reloaded and repaint the DOM. We will use a library called Reselect to memoize the slice of state we are using here and only repaints the DOM if it changes.
const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
