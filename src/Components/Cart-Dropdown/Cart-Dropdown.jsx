import React from "react";
import './Cart-Dropdown.scss';
import { connect } from "react-redux";
import CartItem from "../Cart-Item/Cart-Item";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CustomButton from "../Custom-Button/Custom-Button";
import { toggleCartHidden } from "../../Redux/Cart/Cart.Action";
import { selectCartItems } from "../../Redux/Cart/Cart.Selectors";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ? cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} /> )) : <span className="empty-message">Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));