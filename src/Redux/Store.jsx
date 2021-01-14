import logger from "redux-logger";
import rootReducer from "./Root-Reducer";
import { persistStore } from "redux-persist";
import { createStore, applyMiddleware } from "redux";

const middleWares = [logger];

if (process.env.NODE_ENV === "development") {
    middleWares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
export const persistor = persistStore(store);
export default {store, persistor};