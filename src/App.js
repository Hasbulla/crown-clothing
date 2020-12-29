import './App.css';
import { Route } from "react-router-dom";
import HomePage from './Pages/Homepage/homepage';
import ShopPage from "./Pages/Shop/Shop";


function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      {/* <HomePage/>  */}
    </div>
  );
}

export default App;
