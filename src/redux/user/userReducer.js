import userActionTypes from "./userTypes";

// USER INITIAL STATE
const INITIAL_STATE = {
	currentUser: null,
};

// USER REDUCER
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.LOGIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};
		case userActionTypes.SIGNOUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null
			};
		case userActionTypes.LOGIN_FAILURE:
		case userActionTypes.SIGNUP_FAILURE:
		case userActionTypes.SIGNOUT_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
