import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <section id="stuck_container">
          <div className="container">
            <div className="row">
              <div className="grid_12">
              <h1>
                <a href="index.html">
                  <img src="images/logo.png" alt="Logo alt" />
                </a>
              </h1>  
                <div className="navigation ">
                  <nav>
                    <ul className="sf-menu">
                     <li><a href="index.html">home</a></li>
                     <li className="current"><a href="index-1.html">menu</a></li>
                     <li><a href="index-2.html">reservation</a></li>
                     <li><a href="index-3.html">blog</a></li>
                     <li><a href="index-4.html">contacts</a></li>
                   </ul>
                  </nav>        
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </header>        
    )
  }
}

export default Header;