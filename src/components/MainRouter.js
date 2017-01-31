import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import MenuGrid from './MenuGrid';
import SingleItem from './SingleItem';

export default class MainRouter extends React.Component {
  render() {
    return(
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home }/>
          <Route path="/:mealType" component={ MenuGrid }/>
          <Route path="/:mealType/:meal" component={ SingleItem }/>
        </Route>
      </Router>
    )
  }
}
