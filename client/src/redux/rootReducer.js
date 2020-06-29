import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// is the local storage, there is also the sessionStorage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import shopReducer from "./shop/shopReducer";

const persistConfig = {
	key: "root",
	storage,
	// whitelist is an array of the reducers names as strings that we want to persist
	whitelist: ["cart"],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
