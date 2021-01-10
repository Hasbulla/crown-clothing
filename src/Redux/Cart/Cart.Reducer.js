import CartActionTypes from "./Cart.Types";
import { AddItemToCart, RemoveItemToCart } from "./Cart.Utils";
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
    
            case CartActionTypes.REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: RemoveItemToCart(state.cartItems, action.payload)
                }
    
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state;
    }
}

export default CartReducer;