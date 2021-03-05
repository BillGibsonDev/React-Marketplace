import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
//components
import Nav from './components/nav.js';
import Home from './components/home.js';
import Footer from './components/footer.js';
import Cart from './pages/cart.js';
import Checkout from './pages/checkout.js';
import Tshirt from './pages/tshirt.js';

//styles
import './styles/styles.scss';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/cart" component={Cart}/>
       <Route path="/checkout" component={Checkout}/>
       <Route path="/tshirt" component={Tshirt}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
