import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./User/User.Reducer";
import CartReducer from "./Cart/Cart.Reducer";
import ShopReducer from "./Shop/Shop.Reducer";
import DirectoryReducer from "./Directory/Directory.Reducer";

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['cart']
 }

 const rootReducer = combineReducers({
    user: userReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer
});

export default persistReducer(persistConfig, rootReducer);