import React from "react";
import './Cart-Dropdown.scss';
import CustomButton from "../Custom-Button/Custom-Button";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    </div>
)

export default CartDropdown;