import { userActionTypes } from "./userTypes";

// USER ACTIONS
export const setCurrentUser = (user) => ({
	type: userActionTypes.SET_CURRENT_USER,
	payload: user,
});
