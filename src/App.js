import React from "react";
import './App.css';

import { connect } from "react-redux";
import ShopPage from "./Pages/Shop/Shop";
import CheckoutPage from "./Pages/Checkout/Checkout";
import Header from "./Components/Header/header";
import HomePage from './Pages/Homepage/homepage';
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect} from "react-router-dom";
import { setCurrentUser } from "./Redux/User/User.Action";
import { selectCurrentUser } from "./Redux/User/User.Selector";
import SignInAndSignOut from './Pages/SignInAndSignOut/SignInAndSignOut';
import { auth, CreateUserProfileDocument } from "./Firebase/Firebase.utils";


class App extends React.Component {
unsubscribeFromAuth = null;

componentDidMount() {
  const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    CreateUserProfileDocument(userAuth);
    if (userAuth) {
      const userRef = await CreateUserProfileDocument(userAuth);
      userRef.onSnapshot(snapshot => {
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
        });
      });
    }
    setCurrentUser(userAuth);
  });
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
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
