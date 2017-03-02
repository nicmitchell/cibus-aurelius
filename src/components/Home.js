import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <div className="nolist home">
        <div className="flex-container">
          <Link to="/light" className="flex-item light">
            <li>
              <h1>Light Fare</h1>
            </li>
          </Link>
          <Link to="/entree" className="flex-item entree">
            <li>
              <h1>Entrees</h1>
            </li>
          </Link>
          <Link to="/dessert" className="flex-item dessert">
            <li>
              <h1>Desserts</h1>
            </li>
          </Link>
        </div>
      </div>
    )
  }
}
