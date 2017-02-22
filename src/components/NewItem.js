import React, { Component } from 'react';
import { Grid, Row, Col, Form, Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import shortid from 'shortid';
import { storage } from '../firebase';
import * as fields from '../data/newFieldProperties';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.storageRef = storage.ref('/images');
    this.state = {
      isDisabled: true,
      addNewName: null,
      addNewDescription: null,
      addNewType: 'select',
      addNewTime: null,
      addNewSide: null,
      addNewImage: null,
      addNewRecipe: null,
    }
  }

  addNew = (e) => {
    e.preventDefault();
    const item = {
      id: shortid.generate(),
      name: this.state.addNewName.value,
      desc: this.state.addNewDescription.value,
      type: this.state.addNewType.value,
      time: this.state.addNewTime.value,
      side: this.state.addNewSide.value,
      image: this.state.addNewImage.files[0],
      recipe: this.state.addNewRecipe.value,
    }

    console.log(item);
    let file = item.image;
    // send to action handler
    this.props.addNewMenuItem(item);
    this.storageRef.child('/test/test.jpg').put(file, { contentType: 'image/jpeg' });
  }

  handleChange = (e) => {
    const newState = Object.assign({}, this.state);
    newState[e.target.id] = e.target.value;
    this.setState({
      ...newState
    })
  }

  render = () => {
    return (
      <Grid>
        <Row>
          <Col xs={ 8 } xsOffset={ 2 }>
          <h2>Add New Menu Item</h2>
          <Form onSubmit={ (e) => this.addNew(e) }>
            <FieldGroup { ...fields.addNewName } onChange={ this.handleChange } />
            <FieldGroup { ...fields.addNewDescription } onChange={ this.handleChange } />
            <FieldGroup { ...fields.addNewType } onChange={ this.handleChange } value={ this.state.addNewType } />
            <FieldGroup { ...fields.addNewTime } onChange={ this.handleChange } />
            <FieldGroup { ...fields.addNewImage } />
            <hr />
            <h3>Optional</h3>
            <FieldGroup { ...fields.addNewSide } onChange={ this.handleChange }/>
            <FieldGroup { ...fields.addNewSide } onChange={ this.handleChange } />
            <Col smOffset={ 4 } sm={ 4 }>
              <Button type="submit" disabled={ this.state.isDisabled } block >Add</Button>
            </Col>
          </Form>
          </Col>
        </Row>
        <hr />
      </Grid>
    )
  }
}
