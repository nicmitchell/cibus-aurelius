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
              <span id="copyright-year">&copy; { new Date().getFullYear() } Mind Riot</span>
            </div>
          </Col>
        </Row>
      </Grid>
    </footer> 
   )
  }
}

export default Footer;