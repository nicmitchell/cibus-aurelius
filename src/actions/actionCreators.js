import { database, storage } from '../firebase';
const databaseRef = database.ref('/');
const storageRef = storage.ref('/images');

export function addNewItemToFirebase(data, image) {
  return(dispatch) => {
    storageRef.child(`/images/menu/${ data.slug }.jpg`).put(image, { contentType: 'image/jpeg' });
    return databaseRef.child(data.type).push(data)
      .then((ref) => {
        dispatch(addNewMenuItem(ref.getKey(), data));
      })
      .catch((error) => {
        dispatch(pushFirebaseError(error));
      });
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

export function addNewMenuItem(key, values) {
  console.log('adding new menu item', key, values);
  return { 
    type: 'ADD_NEW_MENU_ITEM',
    key: key,
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

export function pushFirebaseSuccess(result) {
  return {
    type: 'PUSH_FIREBASE_SUCCESS',
    values: result
  }
}

export function pushFirebaseError(error) {
  return {
    type: 'PUSH_FIREBASE_ERROR',
    values: error
  }
}
