import './App.css';
import { Route } from "react-router-dom";
import HomePage from './Pages/Homepage/homepage';

const HatPage = () => (
  <div>
    <h1>Hat Page</h1>
  </div>
)


const HatPageDetails = (props) => (
  <div>
    {console.log(props)}
    <h1>Hat Page Details</h1>
  </div>
)

function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hat' component={HatPage} />
        <Route path='/hat/:HatID' component={HatPageDetails} />
      {/* <HomePage/>  */}
    </div>
  );
}

export default App;
