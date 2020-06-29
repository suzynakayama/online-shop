import React from "react";
import "./Checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cartSelectors";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton";
import {
	CheckoutContainer,
	CheckoutHeader,
	CheckoutHeaderBlock,
	CheckoutTotal,
	CheckoutTestWarning,
} from "./Checkout.styles";

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<CheckoutHeaderBlock>
					<span>Product</span>
				</CheckoutHeaderBlock>
				<CheckoutHeaderBlock>
					<span>Description</span>
				</CheckoutHeaderBlock>
				<CheckoutHeaderBlock>
					<span>Quantity</span>
				</CheckoutHeaderBlock>
				<CheckoutHeaderBlock>
					<span>Price</span>
				</CheckoutHeaderBlock>
				<CheckoutHeaderBlock>
					<span>Remove</span>
				</CheckoutHeaderBlock>
			</CheckoutHeader>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} item={item} />
			))}
			<CheckoutTotal>TOTAL: $ {total}</CheckoutTotal>
			<CheckoutTestWarning>
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
			</CheckoutTestWarning>
			<StripeButton price={total} />
		</CheckoutContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);

// const CheckoutPage = ({ cartItems, total }) => {
// 	return (
// 		<div className="checkout">
// 			<div className="checkout__header">
// 				<div className="checkout__header--block">
// 					<span>Product</span>
// 				</div>
// 				<div className="checkout__header--block">
// 					<span>Description</span>
// 				</div>
// 				<div className="checkout__header--block">
// 					<span>Quantity</span>
// 				</div>
// 				<div className="checkout__header--block">
// 					<span>Price</span>
// 				</div>
// 				<div className="checkout__header--block">
// 					<span>Remove</span>
// 				</div>
// 			</div>
// 			{cartItems.map((item) => (
// 				<CheckoutItem key={item.id} item={item} />
// 			))}
// 			<div className="checkout__total">TOTAL: $ {total}</div>
// 			<div className="test-warning">
// 				*Please use the following test credit card for payments*
// 				<br />
// 				4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
// 			</div>
// 			<StripeButton price={total} />
// 		</div>
// 	);
// };
