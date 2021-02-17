import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ShopPage from './Pages/Shop/Shop';
import Header from './Components/Header/header';
import HomePage from './Pages/Homepage/homepage';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './Pages/Checkout/Checkout';
import { Switch, Route, Redirect } from 'react-router-dom';
import { checkUserSession } from './Redux/User/User.Action';
import { selectCurrentUser } from './Redux/User/User.Selector';
import SignInAndSignOut from './Pages/SignInAndSignOut/SignInAndSignOut';

const App = ({ checkUserSession, currentUser }) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route
                    exact
                    path="/signin"
                    render={() =>
                        currentUser ? <Redirect to="/" /> : <SignInAndSignOut />
                    }
                />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
