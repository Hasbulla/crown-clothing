export const AddItemToCart = (cartItems, cartItemToAdd) => {
    const IfCartItemExists = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (IfCartItemExists) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}];
    }
}