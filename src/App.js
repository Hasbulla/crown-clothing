import React from "react";
import './App.css';
import { connect } from "react-redux";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/header";
import HomePage from './Pages/Homepage/homepage';
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./Pages/Checkout/Checkout";
import { Switch, Route, Redirect} from "react-router-dom";
import { checkUserSession } from "./Redux/User/User.Action";
import { selectCurrentUser } from "./Redux/User/User.Selector";
import SignInAndSignOut from './Pages/SignInAndSignOut/SignInAndSignOut';

class App extends React.Component {
unsubscribeFromAuth = null;

componentDidMount() {
  const { checkUserSession } = this.props;
  checkUserSession();
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignOut />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
