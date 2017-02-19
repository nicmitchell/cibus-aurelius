function menu(state = {}, action) { // { type, id, key, value }
  switch(action.type) {
    case 'GET_FIREBASE_VALUES_SUCCESS':
      return {
        ...state,
        ...action.values
      }
    // case '@@router/LOCATION_CHANGE':
    //   return {
    //     ...state,
    //     currentMenu: action.payload.pathname.slice(1)
    //   }
    case 'ADD_NEW_MENU_ITEM':
    // Save to Firebase
      return { 
        ...state,
        [action.id]: action.value
      }
    case 'ADD_NEW_RECIPE':
      return { ...state }
    case 'DELETE_MENU_ITEM':
      return { ...state }
    case 'UPDATE_MENU_ITEM':
      return {
        ...state,
        [action.id]: updateMenuItem(state[action.id], { [action.key]: action.value })
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