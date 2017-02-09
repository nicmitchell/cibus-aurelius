import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import Connect from './Connect';
import App from './App';
import Home from './Home';
import MenuGrid from './MenuGrid';
import SingleItem from './SingleItem';

export default class MainRouter extends React.Component {
  render() {
    return(
      <Router history={ history }>
        <Route path="/" component={ App }>
          <IndexRoute component={ Home }/>
          <Route path="/:mealType" component={ MenuGrid }/>
          <Route path="/:mealType/:meal" component={ SingleItem }/>
        </Route>
      </Router>
    )
  }
}
