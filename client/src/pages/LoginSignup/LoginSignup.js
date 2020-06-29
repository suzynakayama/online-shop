import React from "react";
import "./LoginSignup.style.scss";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";
import { LoginSignupContainer } from "./LoginSignup.styles";

const LoginSignup = () => {
	return (
		// <div className="login-signup">
		<LoginSignupContainer>
			<Login />
			<Signup />
		</LoginSignupContainer>
		// </div>
	);
};

export default LoginSignup;
