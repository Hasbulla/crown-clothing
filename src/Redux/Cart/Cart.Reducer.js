import CartActionTypes from "./Cart.Types";
const INITIAL_VALUE = {
    hidden: true
}

const CartReducer = (state = INITIAL_VALUE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
    
        default:
            return state;
    }
}

export default CartReducer;