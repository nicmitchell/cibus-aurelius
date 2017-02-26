function menu(state = {}, action) { // { type, id, key, value }
  switch(action.type) {
    case 'GET_FIREBASE_VALUES_SUCCESS':
      return {
        ...state,
        ...action.values
      }
    case 'SET_CURRENT_SINGLE_ITEM':
      return {
        ...state,
        currentMenuItem: action.values
      }
    case 'ADD_NEW_MENU_ITEM':
      return { 
        ...state,
        [action.key]: action.values
      }
    case 'DELETE_MENU_ITEM':
      return { ...state }
    case 'UPDATE_MENU_ITEM':
      return {
        ...state,
        [action.id]: updateMenuItem(state[action.id], { [action.key]: action.value })
      }
    case 'SAVE_MENU_ITEM':
      const mealType = action.values.type;
      const key = action.key;
      const item = action.values;
      return { 
        ...state,
        [mealType]: { key: item }
      }
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

export default menu;