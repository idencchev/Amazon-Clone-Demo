import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
