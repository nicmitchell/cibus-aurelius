import React, { Component } from 'react';
import { Grid, Row, Col, Form, Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import * as fields from '../data/newFieldProperties';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      addNewName: null,
      addNewDescription: null,
      addNewType: '',
      addNewTime: null,
      addNewSide: null,
      addNewImage: null,
      addNewRecipe: null,
    }
  }

  addNew = (e) => {
    e.preventDefault();
    const image = this.state.addNewImage;
    const item = {
      name: this.state.addNewName,
      slug: this.slugify(this.state.addNewName),
      desc: this.state.addNewDescription,
      type: this.state.addNewType,
      time: this.state.addNewTime,
      side: this.state.addNewSide,
      recipe: this.state.addNewRecipe,
    }
    this.props.addNewMenuItem(item, image);
  }

  slugify(name) {
    // Thanks Andrew Stewart 
    // https://andrew.stwrt.ca/posts/js-slugify/ 
    return name.toString().toLowerCase().trim()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/&/g, '-and-')         // Replace & with 'and'
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-');        // Replace multiple - with single -
  }

  handleChange = (e) => {
    const newState = Object.assign({}, this.state);
    const value = (e.target.type === 'file') ? e.target.files[0] : e.target.value;
    newState[e.target.id] = value ;
    this.setState({...newState });
    this.checkButtonState();
  }

  checkButtonState() {
    const buttonState = Object.keys(fields).every((field) => {
      return (fields[field].required && this.state[field]) || !fields[field].required;
    });
    this.setState({ isDisabled: !buttonState });
  }

  render = () => {
    return (
      <Grid>
        <Row>
          <Col xs={ 8 } xsOffset={ 2 }>
          <h2>Add New Menu Item</h2>
          <Form onSubmit={ (e) => this.addNew(e) }>
            <FieldGroup inputProps={ fields.addNewName } handleChange={ this.handleChange } />
            <FieldGroup inputProps={ fields.addNewDescription } handleChange={ this.handleChange } />
            <FieldGroup inputProps={ fields.addNewType } handleChange={ this.handleChange } value={ this.state.addNewType } />
            <FieldGroup inputProps={ fields.addNewTime } handleChange={ this.handleChange } />
            <FieldGroup inputProps={ fields.addNewImage } handleChange={ this.handleChange } />
            <hr />
            <h3>Optional</h3>
            <FieldGroup inputProps={ fields.addNewSide } handleChange={ this.handleChange }/>
            <FieldGroup inputProps={ fields.addNewRecipe } handleChange={ this.handleChange } />
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
