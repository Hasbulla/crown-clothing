import React from "react";
import './Cart-Dropdown.scss';
import { connect } from "react-redux";
import CartItem from "../Cart-Item/Cart-Item";
import CustomButton from "../Custom-Button/Custom-Button";

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
        }
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);