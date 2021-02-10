import logger from "redux-logger";
import rootReducer from "./Root-Reducer";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import RootSaga from "./Root.Saga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
sagaMiddleware.run(RootSaga);
export const persistor = persistStore(store);
export default {store, persistor};