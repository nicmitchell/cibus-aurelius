import database from '../database';

export function addNewMenuItem(item) {
  return { 
    type: 'ADD_NEW_MENU_ITEM',
    value: item
  }
}

export function addNewRecipe(values) {
  return { 
    type: 'ADD_NEW_RECIPE'
  }
}

export function deleteMenuItem(values) {
  return { 
    type: 'DELETE_MENU_ITEM'
  }
}

export function updateMenuItem(values) { // { id, key, value }
  return { 
    type: 'UPDATE_MENU_ITEM',
    values
  }
}

export function fetchAllFromFirebase(ref='/') {
  return (dispatch) => {
    return database.ref(ref).once('value', (snapshot) => {
      const val = snapshot.val();
      dispatch(getFirebaseValuesSuccess(val));
    })
    .catch((error) => {
      console.log('Firebase error:', error);
      dispatch(getFirebaseValuesError(error));
    })
  }
}

export function getFirebaseValuesSuccess(values) {
  return {
    type: 'GET_FIREBASE_VALUES_SUCCESS',
    values
  }
}

export function getFirebaseValuesError(values) {
  return {
    type: 'GET_FIREBASE_VALUES_ERROR',
    values
  }
}
