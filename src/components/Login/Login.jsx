import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import "./Login.styles.scss";
import CustomButton from "../CustomButton/CustomButton";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { googleLoginStart, emailLoginStart } from "../../redux/user/userActions";
import { connect } from "react-redux";

const Login = ({ googleLoginStart, emailLoginStart }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
		
		emailLoginStart(form.email, form.password);

    // try {
    //   await auth.signInWithEmailAndPassword(form.email, form.password);
    //   setForm({
    //     email: "",
    //     password: "",
    //   });
    // } catch (err) {
    //   console.log(err);
    // }														! Not Needed because we are now using Sagas!
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

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleLoginStart} isGoogleSignIn>
            With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleLoginStart: () => dispatch(googleLoginStart()),
  emailLoginStart: (email, password) => dispatch(emailLoginStart({email, password})),
});

export default connect(null, mapDispatchToProps)(Login);
