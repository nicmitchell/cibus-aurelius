import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
  makeActive(e) {
    e.target.classList.add('click');
  }

  render() {
    return (
      <div className="nolist home">
        <div className="flex-container">
          <Link to="/light" className="flex-item light" onClick={ (e) => this.makeActive(e) }>
            <li>
              <h1>Light Fare</h1>
            </li>
          </Link>
          <Link to="/entree" className="flex-item entree" onClick={ (e) => this.makeActive(e) }>
            <li>
              <h1>Entrees</h1>
            </li>
          </Link>
          <Link to="/dessert" className="flex-item dessert" onClick={ (e) => this.makeActive(e) }>
            <li>
              <h1>Desserts</h1>
            </li>
          </Link>
        </div>
      </div>
    )
  }
}
