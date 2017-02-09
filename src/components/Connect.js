import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';

function mapStateToProps({ menu, newAccount }) {
  return {
    menu
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Connect = connect(mapStateToProps, mapDispatchToProps)(App);

export default Connect;