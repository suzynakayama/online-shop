import userActionTypes from "./userTypes";

// USER INITIAL STATE
const INITIAL_STATE = {
	currentUser: null,
};

// USER REDUCER
const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.GOOGLE_LOGIN_SUCCESS:
		case userActionTypes.EMAIL_LOGIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};
		case userActionTypes.GOOGLE_LOGIN_FAILURE:
		case userActionTypes.EMAIL_LOGIN_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
