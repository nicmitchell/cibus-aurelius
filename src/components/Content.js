import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import MenuItem from './MenuItem';

class Content extends React.Component {
  constructor(props){
    super(props);

    let total = props.data.length;
    let columnLength = parseInt(total / 3, 10);
    let remainder = total % 3;
    let column1End = (remainder) ? columnLength + 1 : columnLength;
    let column2End = ((remainder > 1) ? columnLength + 1 : columnLength) * 2;
 
    this.col1 = props.data.slice(0, column1End);
    this.col2 = props.data.slice(column1End, column2End);
    this.col3 = props.data.slice(column2End);

  }
  render() {
    return(
      <Grid>
        <Col md={4}>
          { 
            this.col1.map((item, idx) => {
              return <MenuItem { ...item } key={ idx }/>
            })
          }
        </Col>
        <Col md={4}>
          { 
            this.col2.map((item, idx) => {
              return <MenuItem { ...item } key={ idx }/>
            })
          }
        </Col>
        <Col md={4}>
          { 
            this.col3.map((item, idx) => {
              return <MenuItem { ...item } key={ idx }/>
            })
          }
        </Col>
      </Grid>
    )
  }
}

export default Content;