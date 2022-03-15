import logo from './logo.svg';
import './App.css';
import { Home } from './Home'
import { Portfolio } from './Portfolio';
import { Dividends } from './Dividends'
import { PurchaseHistories } from './PurchaseHistories'
import { Navigation } from './Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          Stock Tracker
        </h3>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/Portfolios' component={Portfolio} />
          <Route path='/Dividends' component={Dividends} />
          <Route path='/PurchaseHistories' component={PurchaseHistories} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;