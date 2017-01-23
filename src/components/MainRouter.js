import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import MenuItemGrid from './MenuItemGrid';
import MenuItemContent from './MenuItemContent';

export default class MainRouter extends React.Component {
  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home }/>
          <Route path="/:mealType" component={ MenuItemGrid }/>
          <Route path="/:mealType/:meal" component={ MenuItemContent }/>
        </Route>
      </Router>
    )
  }
}
