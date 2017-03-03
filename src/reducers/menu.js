function menu(state = {}, action) {
  if ('GET_FIREBASE_VALUES_SUCCESS' === action.type) {
    return {
      ...state,
      ...action.values
    }
  }
  if ('SET_CURRENT_SINGLE_ITEM' === action.type) {
    return {
      ...state,
      currentMenuItem: action.values
    }
  }
  if ('ADD_NEW_MENU_ITEM' === action.type) {
    const mealType = action.values.type;
    const id = action.values.id;
    const newState = { ...state }
    newState[mealType][id] = action.values;
    return newState;
  }
  if ('REMOVE_MENU_ITEM' === action.type) {
    const mealType = action.values.type;
    const id = action.values.id;
    const newState = { ...state };
    delete newState[mealType][id];
    return newState;
  }
  if ('UPDATE_MENU_ITEM' === action.type) {
    return {
      ...state,
      [action.id]: updateMenuItem(state[action.id], { [action.key]: action.value })
    }
  }
  if ('SAVE_MENU_ITEM' === action.type) {
    const mealType = action.values.type;
    const id = action.values.id;
    return { 
      ...state,
      [state[mealType][id]]: action.values
    }
  }
  if('USER_AUTH_STATUS' === action.type) {
    return {
      ...state,
      userAuthStatus: action.value
    }
  }
  return state;
}

function updateMenuItem(item, values) {
  return {
    ...item,
    ...values
  }
}

export default menu;