import './App.css';
import { Switch, Route } from "react-router-dom";
import HomePage from './Pages/Homepage/homepage';
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/header";


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
