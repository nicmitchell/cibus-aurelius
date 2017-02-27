import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import Connect from './Connect';
import Home from './Home';
import MenuGrid from './MenuGrid';
import SingleItem from './SingleItem';
import NewItem from './NewItem';

export default class MainRouter extends React.Component {
  render() {
    return(
      <Provider store={ store }>
      <Router history={ history }>
        <Route path="/" component={ Connect }>
          <IndexRoute component={ Home }/>
          <Route path="/new" component={ NewItem }/>
          <Route path="/:mealType" component={ MenuGrid }/>
          <Route path="/:mealType/:meal" component={ SingleItem }/>
        </Route>
      </Router>
      </Provider>
    )
  }
}
