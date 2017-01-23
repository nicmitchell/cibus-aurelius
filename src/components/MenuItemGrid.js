import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MenuItemCard from './MenuItemCard';
import data from '../data/menu-data';

export default class MenuItemGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mealType: this.props.params.mealType,
      columns: this.getColumns(this.props.params.mealType)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.mealType !== this.state.mealType) {
      this.setState({ 
        mealType: nextProps.params.mealType,
        columns: this.getColumns(nextProps.params.mealType) 
      });
    }
  }

  getColumns = (mealType) => {
    const menu = data[mealType];
    const total = menu.length;
    const columnLength = parseInt(total / 3, 10);
    const remainder = total % 3;
    const column1End = (remainder) ? columnLength + 1 : columnLength;
    const column2End = (columnLength * 2) + remainder;

    const col1 = menu.slice(0, column1End);
    const col2 = menu.slice(column1End, column2End);
    const col3 = menu.slice(column2End);

    return [col1, col2, col3];
  }

  render = () => {
    return(
      <Grid key={ this.state.mealType }>
        <Row>
          { 
            this.state.columns.map((column, idx) => {
              return (    
                <Col md={4} sm={6} xs={12} key={ idx }>
                  { 
                    column.map((item, idx) => {
                      return <MenuItemCard { ...item } key={ idx } mealType={ this.state.mealType }/>
                    })
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
