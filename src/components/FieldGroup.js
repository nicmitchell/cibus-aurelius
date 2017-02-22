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
    if (input.type === 'text' && this.props.required) {
      this.setState({
        isValid: (!input.value.length) ? 'error' : 'success'
      });
    }
    if (input.type === 'select-one') {
      this.setState({
        isValid: (input.value === 'select') ? 'error' : 'success'
      })
    }
  }

  handleBlur = (e) => {
    this.setValidationState(e.target);
  }

  handleChange = (e) => {
    this.setValidationState(e.target);
    this.props.onChange(e);
  }

  render() {
    const name = this.props.name;
    const label = this.props.label;
    const props = this.props;

    const SelectGroup = ({ name, options, ...props }) => {
      return (
        <FormControl 
          inputRef={ (input) => this[name] = input } 
          onBlur={ props.handleBlur } 
          onChange={ props.handleChange }
          { ...props }
        >
        { 
          Object.keys(options).map((option) => (<option key={ option } value={ option }>{options[option]}</option>))
        }
        </FormControl>
      )
    }

    return (
      <FormGroup controlId={ name } validationState={ this.state.isValid }>
        <ControlLabel>{ label } </ControlLabel>
        { 
          (props.type === 'text' || props.type === 'file') &&
            <FormControl 
              inputRef={ (input) => this[name] = input } 
              onChange={ this.handleChange } 
              onBlur={ this.handleBlur }
              { ...props } 
            />
        }
        { 
          props.componentClass === 'select' && 
            <SelectGroup 
              onChange={ this.handleChange } 
              onBlur={ this.handleBlur }
              { ...props } 
            /> 
        }
      </FormGroup>
    )
  }
}
