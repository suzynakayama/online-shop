import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const CheckoutImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;
`;

export const CheckoutImage = styled.img`
	width: 100%;
	height: 100%;
	border: 1px solid var(--clr-dark);
	border-radius: 5px;
`;

export const CheckoutItemNamePrice = styled.span`
	width: 23%;
`;

export const CheckoutItemQuantity = styled.span`
	width: 23%;
	display: flex;
`;

export const CheckoutItemValue = styled.span`
	margin: 0 10px;
`;

export const CheckoutItemArrow = styled.div`
	cursor: pointer;
`;

export const CheckoutItemPrice = styled.span``;

export const CheckoutItemRemove = styled.div`
	padding-left: 12px;
	cursor: pointer;
`;
