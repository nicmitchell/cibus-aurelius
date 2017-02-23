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
    if (input.type === 'text' && this.props.inputProps.required) {
      isValid = (!input.value.length) ? 'error' : 'success'
    }
    if (input.type === 'select-one') {
      isValid = (input.value === 'select') ? 'error' : 'success'
    }
    if (input.type === 'file') {
      isValid = (!input.files.length) ? 'error' : 'success'
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

  render() {
    const props = Object.assign({}, this.props.inputProps);
    const options = Object.assign({}, props.options);
    props.onChange = this.handleChange;
    props.onBlur = this.handleBlur;
    props.value = this.props.value;
    delete props.options;

    return (
      <FormGroup controlId={ props.name } validationState={ this.state.isValid }>
        <ControlLabel>{ props.label } </ControlLabel>
        { 
          (props.type === 'text' || props.type === 'file' || props.componentClass === 'textarea') &&
            <FormControl inputRef={ (input) => this[props.name] = input } { ...props } />
        }
        { 
          props.componentClass === 'select' && 
            <FormControl inputRef={ (input) => this[props.name] = input } { ...props }>
              { 
                Object.keys(options).map((option) => <option key={ option } value={ option }>{options[option]}</option>)
              }
            </FormControl>
        }
      </FormGroup>
    )
  }
}
