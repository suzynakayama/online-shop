import React, { useState } from "react";
import "./Signup.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/userActions";

const Signup = ({ signUpStart }) => {
  const [form, setForm] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("passwords don't match");
      return;
    }

		signUpStart(form.email, form.password);

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );

      await createUserProfileDocument(user, { displayName: form.displayName });

      setForm({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className="signup">
      <h2 className="signup__title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="signup__form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={form.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (email, password) => dispatch(signUpStart(email, password)),
});

export default connect(null, mapDispatchToProps)(Signup);
