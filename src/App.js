import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";

import ShopPage from "./Pages/Shop/Shop";
import HomePage from './Pages/Homepage/homepage';
import SignInAndSignOut from './Pages/SignInAndSignOut/SignInAndSignOut';
import Header from "./Components/Header/header";
import { auth } from "./Firebase/Firebase.utils";


class App extends React.Component {
constructor() {
  super();
  this.state = {
    currentUser: null
  };
}

unsubscribeFromAuth = null;

componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user });
  });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignOut} />
        </Switch>
      </div>
    );
  }
}

export default App;
