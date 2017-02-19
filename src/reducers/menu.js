// import shortid from 'shortid';

function menu(state = {}, action) { // { type, id, key, value }
  // console.log('menu state', state);
  // console.log('type', action);
  switch(action.type) {
    case 'GET_FIREBASE_VALUES_SUCCESS':
      return {
        ...state,
        ...action.values
      }
    case 'ADD_NEW_MENU_ITEM':
    // Save to Firebase
      // return { 
      //   ...state,
      //   [value.id]: value
      // }
    case 'ADD_NEW_RECIPE':
      return { ...state }
    case 'DELETE_MENU_ITEM':
      return { ...state }
    case 'UPDATE_MENU_ITEM':
      return {
        // ...state,
        // [id]: updateMenuItem(state[id], { [key]: value })
      }
    case 'SAVE_MENU_ITEM':
      return { ...state }
    default: 
      return state
  }
}

function updateMenuItem(item, values) {
  return {
    ...item,
    ...values
  }
}

// function addNewMenuItem(state, id) {
//   return {
//     [id]: Object.assign({}, state.newItem, { id }),
//     newItem: Object.assign({})
//   }
// }

export default menu;