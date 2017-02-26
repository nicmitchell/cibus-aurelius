import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
   return(
    <footer>
      <hr />
      <Grid>
        <Row>
          <Col md={12}>
            <div className="copyright">
              <span className="copyright-year">&copy; { new Date().getFullYear() } Mind Riot</span>
            </div>
          </Col>
        </Row>
      </Grid>
    </footer> 
   )
  }
}
