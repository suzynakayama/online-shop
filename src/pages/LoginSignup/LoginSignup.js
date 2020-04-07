import React from "react";
import "./LoginSignup.style.scss";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

const LoginSignup = () => {
	return (
		<div className="login-signup">
			<Login />
			<Signup />
		</div>
	);
};

export default LoginSignup;
