import React from 'react';
import { Grid, Col, Image, Glyphicon, Button } from 'react-bootstrap';
import ItemOptions from './ItemOptions';
import ItemForm from './ItemForm';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';

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
      editorState: EditorState.createEmpty(),
      imageStatus: 'hide',
      showForm: 'hide',
      showItem: 'show',
      editButtonText: 'Edit',
      editButtonClass: this.props.menu.userAuthStatus ? 'show' : 'hide',
      allowEdit: this.props.menu.userAuthStatus,
      ...this.props.menu.currentMenuItem
    }
  }

  componentDidMount() {
    this.translateRecipe(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...nextProps.menu.currentMenuItem });
    if (!nextProps.image) {
      this.setState({ imageStatus: 'hide' });
    } else {
      this.setState({ imageStatus: 'loading' });
    }
    this.translateRecipe(nextProps);
    this.allowEdit(nextProps.menu.userAuthStatus);
  }

  allowEdit = (authStatus) => {
    if (authStatus) {
      this.setState({ editButtonClass: 'show', allowEdit: true });
    } else {
      this.setState({ editButtonClass: 'hide', allowEdit: false });
    }
  }

  translateRecipe = (props) => {
    if (props.menu.currentMenuItem && props.menu.currentMenuItem.recipe) {
      const recipe = htmlToDraft(props.menu.currentMenuItem.recipe);
      const contentState = ContentState.createFromBlockArray(recipe.contentBlocks)
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ editorState });
    }
  }

  imageLoaded = (e) => {
    this.setState({ imageStatus: 'show' });
  }

  toggleEdit = (e) => {
    e && e.preventDefault();
    const showForm = { showForm: 'show', showItem: 'hide', editButtonText: 'Cancel' };
    const showItem = { showForm: 'hide', showItem: 'show', editButtonText: 'Edit' };
    const editState = (this.state.showForm === 'show') ? showItem : showForm;
    this.setState({ ...editState });
  }

  handleSubmit = (item, imageFile) => {
    this.props.saveMenuItem(item, imageFile);
    this.props.router.goBack();
  }

  deleteItem = (id, type) => {
    this.props.deleteMenuItem(id, type);
    this.props.router.goBack();
  }

  render() {
    const imgSrc = this.state.image;
    const EditButton = () => <Button onClick={ (e) => this.toggleEdit(e) } className={ `edit ${ this.state.editButtonClass }` }>{ this.state.editButtonText }</Button>;

    return(
      <Grid className="single">
        <Col className={ `menu-card content ${ this.state.showItem }` }>
          <div className={ `single ${ this.state.imageStatus }` }>
            { this.state.image && <Image responsive src={ imgSrc } onLoad={ (e) => this.imageLoaded(e) }/> }
          </div>
          <div className="bottom">
            <h2 className="">{ this.state.name } <EditButton /></h2>
            <p>{ this.state.desc }</p>
            { this.state.side && <p>Side: { this.state.side } </p>}
            { this.state.time && <p className="prep-time"><Glyphicon glyph="time"/> { this.state.time }</p> }
            { this.state.options && <ItemOptions options={ this.state.options }/> }
            { this.state.recipe && 
              <div>
                <h3>Recipe</h3>
                <div dangerouslySetInnerHTML={{ __html: this.state.recipe }} />
              </div>
            }
          </div>
        </Col>
        <ItemForm 
          state={ this.state } 
          className={ this.state.showForm } 
          handleSubmit={ this.handleSubmit } 
          deleteItem={ this.deleteItem } 
          handleCancel={ this.toggleEdit }
          authStatus={ !!this.state.allowEdit }
        />
      </Grid>
    )
  }

  static propTypes = {
    menu: React.PropTypes.object,
    saveMenuItem: React.PropTypes.func,
    router: React.PropTypes.object.isRequired
  }
}
