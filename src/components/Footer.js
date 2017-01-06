import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
   return(
    <footer id="footer">
      <Grid>
        <Row>
          <Col md={12}>
            <div className="copyright">
              <span className="brand">Menu </span> &copy; <span id="copyright-year"></span>
            </div>
          </Col>
        </Row>
      </Grid>
    </footer> 
   )
  }
}

export default Footer;