import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

export default class FieldGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: null
    }
  }

  setValidationState = (input) => {
    let isValid = this.state.isValid;
    // Required Text inputs
    if (input.type === 'text' && this.props.inputProps.required) {
      isValid = (!input.value.length) ? 'error' : 'success'
    }
    // Select input
    if (input.type === 'select-one') {
      isValid = (input.value === 'select') ? 'error' : 'success'
    }
    // Image upload
    if (input.type === 'file') {
      isValid = (!input.files.length) ? 'error' : 'success'
    }
    // Optional inputs
    if (!this.props.inputProps.required) {
      isValid = (!input.value.length) ? null : 'success'
    }
    this.setState({ isValid: isValid });
  }

  handleBlur = (e) => {
    this.setValidationState(e.target);
  }

  handleChange = (e) => {
    this.setValidationState(e.target);
    this.props.handleChange(e);
  }

  renderSelect(props, options) {
    return (
      <FormControl { ...props }>
        { 
          Object.keys(options)
            .map((option) => {
              return <option key={ option } value={ option }>{options[option]}</option>
            })
        }
      </FormControl>
    )
  }

  renderInput(props) {
    return <FormControl { ...props } value={ props.value }/>
  }

  render() {
    const props = Object.assign({}, this.props.inputProps);
    const options = Object.assign({}, props.options);
    props.onChange = this.handleChange;
    props.onBlur = this.handleBlur;
    props.value = this.props.value || '';
    delete props.options;

    const showInput = (props, options) => {
      if (props.componentClass === 'select') {
        return ( this.renderSelect(props, options) );
      } else { // text, textarea, and file
        return ( this.renderInput(props) );
      }
    }

    return (
      <FormGroup controlId={ props.name } validationState={ this.state.isValid }>
        <ControlLabel>{ props.label } </ControlLabel>
        { showInput(props, options) }
      </FormGroup>
    )
  }

  static propTypes = {
    inputProps: React.PropTypes.object.isRequired,
    handleChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string
  }
}
