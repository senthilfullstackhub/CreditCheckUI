import React from 'react';
import './index.css';
import Home from './Home';
import EligiblePage from './Component/pages/EligiblePage';
import NotEligiblePage from './Component/pages/NotEligiblePage';
import { Route, Switch } from 'react-router-dom';
import NoMatch from './NoMatch';
import Nav from '../src/Component/Nav';

const App = props => {

  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pages/Eligible" component={EligiblePage} />
        <Route path="/pages/NotEligible" component={NotEligiblePage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );

}

export default App;