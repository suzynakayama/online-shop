import React from "react";
import { CustomButtonContainer } from "./CustomButton.styles";
// import "./CustomButton.styles.scss";

const CustomButton = ({
	children,
	// isGoogleSignIn,
	// inverted,
	...props
}) => {
	return (
		<CustomButtonContainer {...props}> {children}</CustomButtonContainer>
		// <button
		// 	className={`${inverted ? "inverted" : ""} ${
		// 		isGoogleSignIn ? "google-sign-in" : ""
		// 	} custom-button`}
		// 	{...otherProps}
		// >
		// 	{children}
		// </button>
	);
};

export default CustomButton;
