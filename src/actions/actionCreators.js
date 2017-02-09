export function addNewMenuItem(values) { // {account, email, username, password, notes}
  return { 
    type: 'ADD_NEW_MENU_ITEM'
  }
}

export function addNewRecipe(values) { // {account, email, username, password, notes}
  return { 
    type: 'ADD_NEW_RECIPE'
  }
}

export function deleteMenuItem(values) { // {account, email, username, password, notes}
  return { 
    type: 'DELETE_MENU_ITEM'
  }
}

export function updateMenuItem(values) { // {account, email, username, password, notes}
  return { 
    type: 'UPDATE_MENU_ITEM'
  }
}
