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

export const signOutStart = () => ({
	type: userActionTypes.SIGNOUT_START
})

export const signOutSuccess = () => ({
  type: userActionTypes.SIGNOUT_SUCCESS
});

export const signOutFailure = (error) => ({
	type: userActionTypes.SIGNOUT_FAILURE,
	payload: error
});

export const signUpStart = (user) => ({
	type: userActionTypes.SIGNUP_START,
	payload: user
})

export const signUpSuccess = (user) => ({
	type: userActionTypes.SIGNUP_SUCCESS,
	payload: user
})

export const signUpFailure = (error) => ({
	type: userActionTypes.SIGNUP_FAILURE,
	payload: error
})