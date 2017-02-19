import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Transition from 'react-addons-css-transition-group';
import ItemCard from './ItemCard';

export default class MenuGrid extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     mealType: '',
  //     columns: [],
  //     items: []
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
  //   const nextMealType = nextProps.params.mealType;
  //   const currentMealType = this.state.mealType;

  //   if (nextMealType !== currentMealType) {
  //     this.setState({ 
  //       mealType: nextMealType,
  //       columns: this.getColumns(nextProps.menu[nextMealType]),
  //       items: nextProps.menu[nextMealType]
  //     });
  //   }
  // }

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
                          <ItemCard { ...item } key={ idx } itemKey={ idx } mealType={ mealType }/>
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
