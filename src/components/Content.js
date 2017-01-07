import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import MenuItem from './MenuItem';

class Content extends React.Component {
  render() {
    return(
      <Grid>
        <Row>
          { 
            this.props.data.map((item, idx) => {
              return <MenuItem { ...item } key={ idx }/>
            })
          }
        </Row>
      </Grid>
    )
  }
}

export default Content;