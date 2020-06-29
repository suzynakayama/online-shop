import styled from "styled-components";

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 15px;
`;

export const CartItemImg = styled.img`
	width: 30%;
	border: 1px solid var(--clr-dark);
	border-radius: 5px;
`;

export const CartItemDetailsContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;
`;

export const CartItemDetailsName = styled.span`
	font-size: 16px;
`;
