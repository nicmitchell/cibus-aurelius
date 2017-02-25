import React, { Component } from 'react';
import { Grid, Row, Col, Form, Button } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import * as fields from '../data/newFieldProperties';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: true,
      addNewName: this.props.name || null,
      addNewDescription: this.props.desc || null,
      addNewType: this.props.type || '',
      addNewTime: this.props.time || null,
      addNewSide: this.props.side || null,
      addNewImage: this.props.image || null,
      addNewRecipe: this.props.recipe || null,
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
            <FieldGroup inputProps={ fields.addNewName } handleChange={ this.handleChange } value={ this.state.addNewName }/>
            <FieldGroup inputProps={ fields.addNewDescription } handleChange={ this.handleChange } value={ this.state.addNewDescription }/>
            <FieldGroup inputProps={ fields.addNewType } handleChange={ this.handleChange } value={ this.state.addNewType } />
            <FieldGroup inputProps={ fields.addNewTime } handleChange={ this.handleChange } value={ this.state.addNewTime }/>
            <FieldGroup inputProps={ fields.addNewImage } handleChange={ this.handleChange } value={ this.state.addNewImage }/>
            <hr />
            <h3>Optional</h3>
            <FieldGroup inputProps={ fields.addNewSide } handleChange={ this.handleChange } value={ this.state.addNewSide }/>
            <FieldGroup inputProps={ fields.addNewRecipe } handleChange={ this.handleChange } value={ this.state.addNewRecipe }/>
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
