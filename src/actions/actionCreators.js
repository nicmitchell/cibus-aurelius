import { database, storage } from '../firebase';
const databaseRef = database.ref('/');
const storageRef = storage.ref('/images');

export function addNewItem(data, image) {
  return (dispatch) => {
    if (image && typeof image !== 'string') {
      storageRef.child(`/images/menu/${ data.slug }.jpg`).put(image, { contentType: image.type });
    }
    return databaseRef.child(data.type).push(data)
      .then((ref) => {
        dispatch(addNewMenuItemToState(ref.getKey(), data));
      })
      .catch((error) => {
        dispatch(pushFirebaseError(error));
      });
  }
}

export function saveMenuItem(key, data, image) {
  return (dispatch) => {
    if (image && typeof image !== 'string') {
      storageRef.child(`/images/menu/${ data.slug }.jpg`).put(image, { contentType: image.type });
    }
    return databaseRef.child(`${ data.type }/${ key }`).set(data)
      .then((ref) => {
        dispatch(saveMenuItemToState(key, data));
      })
      .catch((error) => {
        dispatch(pushFirebaseError(error));
      });
  }
}

export function deleteMenuItem(values) {
  return { 
    type: 'DELETE_MENU_ITEM'
  }
}

export function updateMenuItem(values) {
  return { 
    type: 'UPDATE_MENU_ITEM',
    values
  }
}

export function saveMenuItemToState(key, values, type) {
  return {
    type: 'SAVE_MENU_ITEM',
    key: key,
    values
  }
}

export function addNewMenuItemToState(key, values) {
  return { 
    type: 'ADD_NEW_MENU_ITEM',
    key: key,
    values
  }
}

export function setCurrentSingleItem(values) {
  return {
    type: 'SET_CURRENT_SINGLE_ITEM',
    values
  }
}

export function fetchAllFromFirebase(ref='/') {
  return (dispatch) => {
    return database.ref(ref).once('value')
      .then((snapshot) => {
        const val = snapshot.val();
        dispatch(getFirebaseValuesSuccess(val));
      }, (error) => {
        console.log('Firebase error:', error);
        dispatch(getFirebaseValuesError(error));
      });
  };
}

export function findCurrentMenuItem({ meal, mealType }) {
  return (dispatch, getState) => {
    if (meal) {
      const menu = getState().menu[mealType];
      Object.keys(menu).forEach((key) => {
        const item = menu[key];
        if (item.slug === meal) {
          item.key = key;
          dispatch(setCurrentSingleItem(item));
        }
      }, this);
    } 
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
