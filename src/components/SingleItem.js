import React from 'react';
import { Grid, Row, Col, Image, Glyphicon, Button } from 'react-bootstrap';
import ItemOptions from './ItemOptions';
import ItemForm from './ItemForm';

export default class SingleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      desc: '',
      side: '',
      time: '',
      options: '',
      recipe: '',
      imageStatus: 'hide',
      showEdit: 'hide',
      showItem: 'show',
      editButtonText: 'Edit',
      ...this.props.menu.currentMenuItem
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps.menu.currentMenuItem });
    if (!nextProps.image) {
      this.setState({ imageStatus: 'loading' });
    }
  }

  imageLoaded = (e) => {
    this.setState({ imageStatus: 'show' });
  }

  toggleEdit = (e) => {
    e && e.preventDefault();
    const showEdit = { showEdit: 'show', showItem: 'hide', editButtonText: 'Cancel' };
    const showItem = { showEdit: 'hide', showItem: 'show', editButtonText: 'Edit' };
    const editState = (this.state.showEdit === 'show') ? showItem : showEdit;
    this.setState({ ...editState });
  }

  handleSubmit = ({ key, item, imageFile }) => {
    this.props.saveMenuItem(key, item, imageFile);
    this.props.router.goBack();
  }

  render() {
    const imgSrc = (this.state.image) ? `${ this.state.image }-1000.jpg?alt=media` : null;
    return(
      <Grid>
        <Row>
          <Col className={ `menu-card content ${ this.state.showItem }` }>
            <div className={ `single ${ this.state.imageStatus }` }>
              { this.state.image && <Image responsive src={ imgSrc } onLoad={ (e) => this.imageLoaded(e) }/> }
            </div>
            <div className="bottom">
              <h2 className="">{ this.state.name }</h2>
              <p>{ this.state.desc }</p>
              { this.state.side && <p>Side: { this.state.side } </p>}
              { this.state.time && <p className="prep-time"><Glyphicon glyph="time"/> { this.state.time }</p> }
              { this.state.options && <ItemOptions options={ this.state.options }/> }
              { this.state.recipe && 
                <div>
                  <h3>Recipe</h3>
                  { this.state.recipe }
                </div>
              }
            </div>
          </Col>
          <ItemForm state={ this.state } className={ this.state.showEdit } handleSubmit={ this.handleSubmit }/>
        </Row>
        <Button onClick={ (e) => this.toggleEdit(e) } className="edit">{ this.state.editButtonText }</Button>
      </Grid>
    )
  }

  static propTypes = {
    menu: React.PropTypes.object,
    saveMenuItem: React.PropTypes.func,
    router: React.PropTypes.object.isRequired
  }
}
