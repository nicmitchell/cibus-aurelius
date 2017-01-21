import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import MenuItemCard from './MenuItemCard';

class Content extends React.Component {
  constructor(props){
    super(props);

    const total = props.data.length;
    const columnLength = parseInt(total / 3, 10);
    const remainder = total % 3;
    const column1End = (remainder) ? columnLength + 1 : columnLength;
    const column2End = (columnLength * 2) + remainder;

    const col1 = props.data.slice(0, column1End);
    const col2 = props.data.slice(column1End, column2End);
    const col3 = props.data.slice(column2End);

    this.columns = [col1, col2, col3];
  }
  render() {
    return(
      <Grid>
          { 
            this.columns.map((column, idx) => {
              return (    
                <Col md={4} sm={6} xs={12} key={ idx }>
                  { 
                    column.map((item, idx) => {
                      return <MenuItemCard { ...item } key={ idx }/>
                    })
                  }
                </Col>
              )
            })
          }
      </Grid>
    )
  }
}

export default Content;
