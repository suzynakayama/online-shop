import userActionTypes from "./userTypes";

// USER ACTIONS
export const googleLoginStart = () => ({
  type: userActionTypes.GOOGLE_LOGIN_START
});

export const emailLoginStart = (emailAndPass) => ({
	type: userActionTypes.EMAIL_LOGIN_START,
	payload: emailAndPass
});

export const LoginSuccess = (user) => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const LoginFailure = (error) => ({
  type: userActionTypes.LOGIN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
	type: userActionTypes.CHECK_USER_SESSION
})