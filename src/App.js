import React from "react";
import './App.css';

import { connect } from "react-redux";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/header";
import HomePage from './Pages/Homepage/homepage';
import { Switch, Route, Redirect} from "react-router-dom";
import SignInAndSignOut from './Pages/SignInAndSignOut/SignInAndSignOut';
import { auth, CreateUserProfileDocument } from "./Firebase/Firebase.utils";
import { setCurrentUser } from "./Redux/User/User.Action";


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
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndSignOut />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
