import React from "react";
import "./Checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className="checkout">
			<div className="checkout__header">
				<div className="checkout__header--block">
					<span>Product</span>
				</div>
				<div className="checkout__header--block">
					<span>Description</span>
				</div>
				<div className="checkout__header--block">
					<span>Quantity</span>
				</div>
				<div className="checkout__header--block">
					<span>Price</span>
				</div>
				<div className="checkout__header--block">
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} item={item} />
			))}
			<div className="checkout__total">TOTAL: {total}</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
