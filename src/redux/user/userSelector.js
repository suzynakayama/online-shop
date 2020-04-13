import { createSelector } from "reselect";

// input selector, get the whole state and returns a slice of it
const selectUser = (state) => state.user;

// because we use createSelector, this is now a memoized selector, it's important because it helps with performance, once the components using the selectors don't need to re-render.
export const selectCurrentUser = createSelector(
	[selectUser], // receives an array of input selectors
	(user) => user.currentUser // and a function that returns the value we want from the selector
);
