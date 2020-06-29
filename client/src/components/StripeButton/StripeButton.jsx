import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	// stripe want the price in cents, so multiply it by 100
	const priceForStripe = price * 100;

	// because we are not using backend now, we are going to use the publishable api key from stripe
	const publishableKey = "pk_test_CoWMKbjppc4VFUlvMDqs8LPn00gtOD6yYA";

	// No backend, so we are just going to log the token and alert the successful payment
	const onToken = (token) => {
		axios({
			url: 'payment',
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		}).then(res => {
			alert('Payment Successful')
		}).catch(err => {
			console.log('Payment error: ', JSON.parse(err));
			alert('There was an issue with your payment. Please make sure you use the provided credit card below.')
		})
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
