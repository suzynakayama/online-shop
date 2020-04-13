import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	// stripe want the price in cents, so multiply it by 100
	const priceForStripe = price * 100;

	// because we are not using backend now, we are going to use the publishable api key from stripe
	const publishableKey = "pk_test_CoWMKbjppc4VFUlvMDqs8LPn00gtOD6yYA";

	// No backend, so we are just going to log the token and alert the successful payment
	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="MyShop"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
