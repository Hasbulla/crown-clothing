import CartActionTypes from "./Cart.Types";
import { AddItemToCart } from "./Cart.Utils";
const INITIAL_VALUE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
    
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: AddItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default CartReducer;