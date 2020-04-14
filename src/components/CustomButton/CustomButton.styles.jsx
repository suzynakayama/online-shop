import styled, { css } from "styled-components";

const buttonStyles = css`
	background-color: black;
	color: white;
	border: none;
	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: white;
		color: #357ae8;
		border: 1px solid #357ae8;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) return googleSignInStyles;
	if (props.inverted) return invertedButtonStyles;
	return buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	/* height: 45px; */
	letter-spacing: 0.5px;
	line-height: 45px;
	padding: 5px 35px;
	font-size: 15px;
	text-transform: uppercase;
	font: inherit;
	font-weight: bolder;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	${getButtonStyles}
`;
