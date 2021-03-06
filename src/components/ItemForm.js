import React, { Component } from 'react';
import { Col, Form, Button, Image, Modal, Alert } from 'react-bootstrap';
import FieldGroup from './FieldGroup';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
import * as fields from '../data/newFieldProperties';

export default class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.state,
      title: (this.props.new) ? 'Add New' : 'Edit',
      isDisabled: true,
      showModal: false
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

  handleTextEditorChange = (editorState) => {
    const recipe = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.setState({
      editorState,
      recipe
    });
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
    this.props.deleteItem(id, type);
  }

  renderModal() {
    return (
      <Modal bsSize="small" show={ this.state.showModal } keyboard={ true } onHide={ () => this.setState({ showModal: false }) }>
        <Modal.Header closeButton>
          <Modal.Title>Delete { this.state.name }?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are about to delete <strong>{ this.state.name }</strong>.</p>
          <p>Its deliciousness will be lost forever, and all the children of the world will cry.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={ (e) => this.setState({ showModal: false }) }>Cancel</Button>
          <Button onClick={ (e) => this.deleteItem(e) } bsStyle="danger" className="delete">Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  renderDeleteButton() {
    return (!this.props.new) ? <Button bsStyle="danger" className="delete" onClick={ (e) => this.setState({ showModal: true }) }>Delete</Button> : '';
  }

  renderCancelButton = (e) => {
    return <Button onClick={ (e) => this.props.handleCancel(e) } className="edit">Cancel</Button>;
  }

  render = () => {
    const imgSrc = this.state.imagePreview || this.state.image;
    if (!this.props.authStatus) {
      return (
        <Alert bsStyle="warning" className={ `container ${ this.props.className }` }>
          <h3>You are not authorized to make this change</h3>
        </Alert>
      )
    }

    return (
      <Col className={ `menu-card content ${ this.props.className }` }>
        <div className={ `single ${ this.state.imageStatus }` }>
          <Image responsive src={ imgSrc } onLoad={ (e) => this.imageLoaded(e) }/>
        </div>
        <div className="bottom">
          <h2>{ `${ this.state.title } Menu Item` } { this.renderCancelButton() } { this.renderDeleteButton() }</h2>
          <Form onSubmit={ (e) => this.handleSubmit(e) }>
            <FieldGroup inputProps={ fields.name } handleChange={ this.handleChange } value={ this.state.name }/>
            <FieldGroup inputProps={ fields.desc } handleChange={ this.handleChange } value={ this.state.desc }/>
            <FieldGroup inputProps={ fields.type } handleChange={ this.handleChange } value={ this.state.type }/>
            <FieldGroup inputProps={ fields.time } handleChange={ this.handleChange } value={ this.state.time }/>
            <FieldGroup inputProps={ fields.image } handleChange={ this.handleImageChange }/>
            <hr />
            <h3>Optional</h3>
            <FieldGroup inputProps={ fields.side } handleChange={ this.handleChange } value={ this.state.side }/>
            <FieldGroup inputProps={ fields.recipe } handleChange={ this.handleTextEditorChange } editorState={ this.state.editorState }/>
            <Button block type="submit" disabled={ this.state.isDisabled }>Save</Button>
          </Form>
        </div>
        { this.renderModal() }
      </Col>
    )
  }

  static propTypes = {
    authStatus: React.PropTypes.bool,
    className: React.PropTypes.string.isRequired,
    handleSubmit: React.PropTypes.func.isRequired,
    state: React.PropTypes.object
  }
}
