import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
// allow browser to cache our store
import { persistStore } from "redux-persist";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persistent version of our store
export const persistor = persistStore(store);

export default { store, persistStore };
