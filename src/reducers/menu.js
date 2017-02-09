import shortid from 'shortid';

function menu(state = {}, type) {
  switch(type) {
    case 'ADD_NEW_MENU_ITEM':
      return { ...state }
    case 'ADD_NEW_RECIPE':
      return { ...state }
    case 'DELETE_MENU_ITEM':
      return { ...state }
    case 'UPDATE_MENU_ITEM':
      return { ...state }  
    default: 
      return state
  }
}

export default menu;