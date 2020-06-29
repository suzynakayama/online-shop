import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
// allow browser to cache our store
import { persistStore } from "redux-persist";
// redux-thunk
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware()

// const middlewares = [thunk];
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

// persistent version of our store
export const persistor = persistStore(store);

export default { store, persistStore };
