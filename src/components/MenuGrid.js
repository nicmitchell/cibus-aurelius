import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ItemCard from './ItemCard';

export default class MenuGrid extends React.Component {
  getColumns = (items = []) => {
    const total = items.length;
    const columnLength = parseInt(total / 3, 10);
    const remainder = total % 3;
    const column1End = (remainder) ? columnLength + 1 : columnLength;
    const column2End = (columnLength * 2) + remainder;

    const col1 = items.slice(0, column1End);
    const col2 = items.slice(column1End, column2End);
    const col3 = items.slice(column2End);

    return [col1, col2, col3];
  }

  render = () => {
    const mealType = this.props.params.mealType;
    return(
      <Grid>
        <Row>
          { 
            this.getColumns(this.props.menu[mealType]).map((column, idx) => {
              return (    
                <Col md={4} sm={6} xs={12} key={ idx }>
                  { 
                    column.map((item, idx) => <ItemCard { ...item } key={ idx } itemKey={ idx } mealType={ mealType } />)
                  }
                </Col>
              )
            })
          }
        </Row>
      </Grid>
    )
  }
}
