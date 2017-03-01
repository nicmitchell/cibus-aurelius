function menu(state = {}, action) {
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
    case 'REMOVE_MENU_ITEM':
      const newState = { ...state };
      delete newState[action.type][action.id];
      return newState;
    case 'UPDATE_MENU_ITEM':
      return {
        ...state,
        [action.id]: updateMenuItem(state[action.id], { [action.key]: action.value })
      }
    case 'SAVE_MENU_ITEM':
      const mealType = action.values.type;
      const id = action.values.id;
      return { 
        ...state,
        [state[mealType][id]]: action.values
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