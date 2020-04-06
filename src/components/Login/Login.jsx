import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./Login.styles.scss";
import CustomButton from "../CustomButton/CustomButton";

const Login = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleChange = (evt) => {
		const { value, name } = evt.target;
		setForm({
			[name]: [value],
		});
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		setForm({
			email: "",
			password: "",
		});
	};

	return (
		<div className="login">
			<h2 className="login__title">I already have an account</h2>
			<span>Login with your email and password:</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					id="email"
					label="Email"
					value={form.email}
					handleChange={handleChange}
					required
				/>

				<FormInput
					name="password"
					type="password"
					id="password"
					label="Password"
					value={form.password}
					handleChange={handleChange}
					required
				/>

				<CustomButton type="submit">Sign In</CustomButton>
			</form>
		</div>
	);
};

export default Login;
