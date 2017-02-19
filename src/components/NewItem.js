import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import shortid from 'shortid';

export default class NewItem extends Component {

  addNew = (e) => {
    e.preventDefault();
    const item = {
      id: shortid.generate(),
      name: ReactDOM.findDOMNode(this.addNewName).value,
      desc: ReactDOM.findDOMNode(this.addNewDescription).value,
      time: ReactDOM.findDOMNode(this.addNewTime).value,
      side: ReactDOM.findDOMNode(this.addNewSide).value,
      image: ReactDOM.findDOMNode(this.addNewImage).value, // fake path
      recipe: ReactDOM.findDOMNode(this.addNewRecipe).value
    }

    // send to Firebase
    console.log(item);
    this.props.addNewMenuItem(item);
  }

  handleChange = (e) => {
    e.target.id
  }

  render = () => {
    const FieldGroup = ({ id, label, ...props }) => {
      return (
        <FormGroup controlId={ id }>
          <Col sm={ 1 }>
            <ControlLabel>{ label }</ControlLabel>
          </Col>
          <Col sm={ 11 }>
            { props.componentClass !== 'select' && <FormControl { ...props } ref={ (input) => this[id] = input }/> }
            { props.componentClass === 'select' && <SelectGroup id={ id } options={ props.options }/> }
          </Col>
        </FormGroup>
      )
    }

    const SelectGroup = ({ id, options } ) => {
      return (
        <FormControl componentClass="select" placeholder="entree" ref={ (input) => this[id] = input }>
          { 
            Object.keys(options).map((option) => (<option key={ option } value={ option }>{options[option]}</option>))
          }
        </FormControl>
      )
    }

    const entreeOptions = { 
      entree: 'Entree', 
      light: 'Light Fare', 
      dessert: 'Dessert' 
    };

    return (
      <Grid>
        <Row>
          <Form horizontal onSubmit={ (e) => this.addNew(e) }>
            <FieldGroup name="addNewName" type="text" label="Name" placeholder="Item Name" />
            <FieldGroup name="addNewDescription" type="text" label="Description" placeholder="Description" />
            <FieldGroup name="addNewType" componentClass="select" label="Type" placeholder="Entree" options={ entreeOptions }/>
            <FieldGroup name="addNewTime" type="text" label="Time" placeholder="Time" />
            <FieldGroup name="addNewSide" type="text" label="Side" placeholder="Side" /> { /* Should populate with current dishes */ } 
            <FieldGroup name="addNewImage" type="file" label="Image" />
            <FieldGroup name="addNewRecipe" componentClass="textarea" label="Recipe" placeholder="Recipe" />
            <Col smOffset={ 4 } sm={ 4 }>
              <Button type="submit" block>Add</Button>
            </Col>
          </Form>
        </Row>
        <hr />
      </Grid>
    )
  }
}
