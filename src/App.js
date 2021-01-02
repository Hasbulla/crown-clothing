import './App.css';
import { Switch, Route } from "react-router-dom";

import ShopPage from "./Pages/Shop/Shop";
import HomePage from './Pages/Homepage/homepage';
import SignInAndSignOut from './Pages/SignInAndSignOut/SignInAndSignOut';
import Header from "./Components/Header/header";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignOut} />
      </Switch>
    </div>
  );
}

export default App;
