import React from 'react';

class Footer extends React.Component {
  render() {
   return(
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="grid_12">  
            <div className="socials">
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-google-plus"></a>
              <a href="#" className="fa fa-pinterest"></a>
            </div>
            <div className="copyright">
              <span className="brand">Bliss </span> &copy; <span id="copyright-year"></span> |
            </div>
          </div>
        </div>
      </div> 
    </footer> 
   )
  }
}

export default Footer;