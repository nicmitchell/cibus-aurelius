import React, { Component } from 'react';
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import shortid from 'shortid';
import { storage } from '../firebase';

export default class NewItem extends Component {
  constructor(props) {
    super(props);
    this.storageRef = storage.ref('/images');
  }

  addNew = (e) => {
    e.preventDefault();
    const item = {
      id: shortid.generate(),
      name: this.addNewName.value,
      desc: this.addNewDescription.value,
      time: this.addNewTime.value,
      side: this.addNewSide.value,
      image: this.addNewImage.files[0],
      recipe: this.addNewRecipe.value,
    }

    console.log(item);
    let file = item.image;
    // send to Firebase
    this.props.addNewMenuItem(item);
    this.storageRef.child('/test/test.jpg').put(file, { contentType: 'image/jpeg' });
  }

  handleChange = (e) => {
    // e.target.id
  }

  render = () => {
    const FieldGroup = ({ name, label, ...props }) => {
      return (
        <FormGroup controlId={ name }>
          <Col sm={ 1 }>
            <ControlLabel>{ label }</ControlLabel>
          </Col>
          <Col sm={ 11 }>
            { props.componentClass !== 'select' && <FormControl { ...props } inputRef={ (input) => this[name] = input }/> }
            { props.componentClass === 'select' && <SelectGroup name={ name } options={ props.options }/> }
          </Col>
        </FormGroup>
      )
    }

    const SelectGroup = ({ name, options } ) => {
      return (
        <FormControl componentClass="select" placeholder="entree" inputRef={ (input) => this[name] = input }>
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
