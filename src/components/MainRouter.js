import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import Entree from './Entree';
import LightFare from './LightFare';
import Dessert from './Dessert';
import MenuItemContent from './MenuItemContent';

class MainRouter extends React.Component {
  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home }/>
          <Route path="/entree" component={ Entree }/>
          <Route path="/entree/:entree" component={ MenuItemContent }/>
          <Route path="/light" component={ LightFare }/>
          <Route path="/dessert" component={ Dessert }/>
        </Route>
      </Router>
    )
  }
}

export default MainRouter;