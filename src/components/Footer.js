import React from 'react';

export default class Footer extends React.Component {
  render() {
    return(
      <footer>
        <div className="copyright">
          <div className="copyright-year">&copy; { new Date().getFullYear() } Mind Riot</div>
        </div>
      </footer> 
    )
  }
}
