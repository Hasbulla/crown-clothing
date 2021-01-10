export const AddItemToCart = (cartItems, cartItemToAdd) => {
    const IfCartItemExists = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (IfCartItemExists) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}];
    }
}

export const RemoveItemToCart = (cartItems, cartItemToRemove) => {
    const IfCartItemExists = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (IfCartItemExists.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
}