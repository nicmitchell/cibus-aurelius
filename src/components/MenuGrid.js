import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from 'react-addons-css-transition-group';
import ItemCard from './ItemCard';
import data from '../data/menu-data';

export default class MenuGrid extends React.Component {
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
                      return (      
                        <Transition key={ idx }
                          transitionName="content"
                          transitionAppear={ true }
                          transitionAppearTimeout={ 1000 }
                          transitionEnter={ true }
                          transitionEnterTimeout={ 1000 }
                          transitionLeaveTimeout={ 1000 }
                          component="div"
                        >
                          <ItemCard { ...item } key={ idx } itemKey={ idx } mealType={ this.state.mealType }/>
                        </Transition>
                      )
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
