import React, { Component } from 'react';
import { Col, Form, Button, Image } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import * as fields from '../data/newFieldProperties';

export default class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.state,
      title: (this.props.new) ? 'Add New' : 'Edit',
      isDisabled: true,
    }
  }

  handleSubmit(e) {
    e.preventDefault(e);
    const imageFile = this.state.imageFile;
    const slug = this.slugify(this.state.name);
    const item = {
      id: this.state.id,
      slug: slug,
      name: this.state.name,
      desc: this.state.desc,
      type: this.state.type,
      time: this.state.time,
      image: (imageFile) ? this.formatImageURL(slug) : '',
      side: this.state.side || '',
      recipe: this.state.recipe || ''
    }
    this.props.handleSubmit(item, imageFile)
  }

  formatImageURL(slug) {
    const ext = this.state.imageFile.type.split('/')[1];
    return `${ process.env.REACT_APP_FIREBASE_IMAGE_BASE_URL }${ slug }.${ ext }?alt=media`;
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
    const value = e.target.value;
    newState[e.target.id] = value;
    this.setState({ ...newState });
    this.checkButtonState();
  }

  handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile.constructor === File && imageFile.type.split('/')[0] === 'image') {
      this.previewImage(imageFile);
      this.setState({
        imageFile: imageFile
      });
    } else {
      this.showFileError();
    }
    this.checkButtonState();
  }

  showFileError = () => {
    // show inline error
  }

  checkButtonState() {
    const buttonState = Object.keys(fields).every((field) => {
      return (fields[field].required && this.state[field]) || !fields[field].required;
    });
    this.setState({ isDisabled: !buttonState });
  }

  previewImage = (file) => {
    const reader = new FileReader();
    const setState = (image) => {
      this.setState({ 
        imagePreview: image
      });
    };
    reader.onload = (e) => {
      setState(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  imageLoaded = (e) => {
    this.setState({ imageStatus: 'show' });
  }

  componentWillReceiveProps(nextProps) {
    const image = (nextProps.state && nextProps.state.image) ? nextProps.state.image : undefined;
    this.setState({ 
      ...nextProps.state, 
      image: image
    });
  }

  deleteItem() {
    const id = this.state.id;
    const type = this.state.type;
    this.props.deleteMenuItem(id, type);
  }

  render = () => {
    const imgSrc = this.state.imagePreview || this.state.image;
    return (
      <Col className={ `menu-card content ${ this.props.className }` }>
        <div className={ `single ${ this.state.imageStatus }` }>
          { this.state.image && <Image responsive src={ imgSrc } onLoad={ (e) => this.imageLoaded(e) }/> }
        </div>
        
        <div className="bottom">
          <h2>{ `${ this.state.title } Menu Item` }<Button onClick={ (e) => this.props.deleteMenuItem(this.state.id, this.state.type) } bsStyle="danger" className='delete'>Delete</Button></h2>
          <Form onSubmit={ (e) => this.handleSubmit(e) }>
            <FieldGroup inputProps={ fields.name } handleChange={ this.handleChange } value={ this.state.name }/>
            <FieldGroup inputProps={ fields.desc } handleChange={ this.handleChange } value={ this.state.desc }/>
            <FieldGroup inputProps={ fields.type } handleChange={ this.handleChange } value={ this.state.type }/>
            <FieldGroup inputProps={ fields.time } handleChange={ this.handleChange } value={ this.state.time }/>
            <FieldGroup inputProps={ fields.image } handleChange={ this.handleImageChange }/>
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

  static propTypes = {
    className: React.PropTypes.string,
    handleSubmit: React.PropTypes.func.isRequired,
    state: React.PropTypes.object
  }
}
