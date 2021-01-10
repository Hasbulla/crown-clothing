import React from "react";
import "./header.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "../Cart-Icon/Cart-Icon";
import { createStructuredSelector } from "reselect";
import { auth } from "../../Firebase/Firebase.utils";
import CartDropdown from "../Cart-Dropdown/Cart-Dropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../Redux/User/User.Selector";
import { selectCartHidden, selectCartItems } from "../../Redux/Cart/Cart.Selectors";


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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);