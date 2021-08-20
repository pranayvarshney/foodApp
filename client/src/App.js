
import './App.css';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter, Route } from 'react-router-dom'
import Cartscreen from './screens/Cartscreen';
import Loginscreen from './screens/Loginscreen'
import Registerscreen from './screens/Registerscreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" exact component={Homescreen}></Route>
        <Route path='/cart' exact component={Cartscreen}></Route>
        <Route path='/signin' exact component={Loginscreen}></Route>
        <Route path='/register' exact component={Registerscreen}></Route>
        <Route path='/orders' exact component={OrderScreen}></Route>
      </BrowserRouter>

    </div>
  );
}


export default App;
