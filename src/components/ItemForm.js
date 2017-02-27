import React, { Component } from 'react';
import { Col, Form, Button, Image } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import * as fields from '../data/newFieldProperties';

export default class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.state,
      isDisabled: true,
    }
  }

  handleSubmit(e) {
    e.preventDefault(e);
    const imageFile = this.state.imageFile;
    const key = this.state.key;
    const item = {
      name: this.state.name,
      slug: this.slugify(this.state.name),
      desc: this.state.desc,
      type: this.state.type,
      time: this.state.time,
      image: this.state.image,
      side: this.state.side,
      recipe: this.state.recipe
    }
    this.props.handleSubmit({ key, item, imageFile })
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
    newState[e.target.id] = value;
    this.setState({ ...newState });
    this.checkButtonState();
    this.previewImage(value);
  }

  checkButtonState() {
    const buttonState = Object.keys(fields).every((field) => {
      return (fields[field].required && this.state[field]) || !fields[field].required;
    });
    this.setState({ isDisabled: !buttonState });
  }

  previewImage(file) {
    if (file.constructor === File && file.type.split('/')[0] === 'image') {
      const reader = new FileReader();
      reader.onload = (e) => this.setState ({ image: e.target.result });
      reader.readAsDataURL(file);
      this.setState({ imageFile: file });
    } else {
      // this.showFileError();
    }
  }

  imageLoaded = (e) => {
    this.setState({ imageStatus: 'show' });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps.state });
  }

  render = () => {
    const imgSrc = (this.state.image) ? `${ this.state.image }-1000.jpg?alt=media` : null;
    return (
      <Col className={ `menu-card content ${ this.props.className }` }>
        <div className={ `single ${ this.state.imageStatus }` }>
          { this.state.image && <Image responsive src={ imgSrc } onLoad={ (e) => this.imageLoaded(e) }/> }
        </div>
        <div className="bottom">
          <h2>Add New Menu Item</h2>
          <Form onSubmit={ (e) => this.handleSubmit(e) }>
            <FieldGroup inputProps={ fields.name } handleChange={ this.handleChange } value={ this.state.name }/>
            <FieldGroup inputProps={ fields.desc } handleChange={ this.handleChange } value={ this.state.desc }/>
            <FieldGroup inputProps={ fields.type } handleChange={ this.handleChange } value={ this.state.type }/>
            <FieldGroup inputProps={ fields.time } handleChange={ this.handleChange } value={ this.state.time }/>
            <FieldGroup inputProps={ fields.image } handleChange={ this.handleChange } />
            <hr />
            <h3>Optional</h3>
            <FieldGroup inputProps={ fields.side } handleChange={ this.handleChange } value={ this.state.side }/>
            <FieldGroup inputProps={ fields.recipe } handleChange={ this.handleChange } value={ this.state.recipe }/>
            <Button block type="submit" disabled={ this.state.isDisabled }>Save</Button>
          </Form>
        </div>
      </Col>
    )
  }
}
