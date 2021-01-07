import React from "react";
import "./header.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../Cart-Icon/Cart-Icon";
import { auth } from "../../Firebase/Firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropdown from "../Cart-Dropdown/Cart-Dropdown";


const Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">Shop</Link>
            <Link className="option" to="/shop">Contact</Link>
            {
                currentUser ? (<div className="option" onClick={ () => auth.signOut() }>Sign Out</div>) : (<Link className="option" to="./signin">Sign In</Link>)
            }
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);