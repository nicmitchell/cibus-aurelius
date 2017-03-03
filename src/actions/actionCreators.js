import { database, storage } from '../firebase';
const databaseRef = database.ref('/');
const storageRef = storage.ref('/images');

export function addNewMenuItem(item, imageFile) {
  return (dispatch) => {
    if (imageFile) {
      const ext = imageFile.type.split('/')[1];
      storageRef.child(`${ item.slug }.${ ext }`)
        .put(imageFile, { contentType: imageFile.type })
        .then(success => console.log('Firebase push image success', success))
        .catch(error => console.log('Firebase push image error', error));
    }
    item.id = databaseRef.child(item.type).push().getKey();
    return databaseRef.child(item.type).child(item.id).set(item)
      .then((ref) => {
        dispatch(addNewMenuItemToState(item.id, item));
      })
      .catch((error) => {
        dispatch(pushFirebaseError(error));
      });
  }
}
export function saveMenuItem(item, imageFile) {
  return (dispatch) => {
    if (imageFile) {
      const ext = imageFile.type.split('/')[1];
      storageRef.child(`${ item.slug }.${ ext }`)
        .put(imageFile, { contentType: imageFile.type })
        .then((success) => {
          console.log('Firebase push image success', success);
        })
        .catch((error) => { 
          console.log('Firebase push image error', error)
        });
    }
    return databaseRef.child(item.type).child(item.id).set(item)
      .then((ref) => {
        dispatch(saveMenuItemToState(item));
      })
      .catch((error) => {
        dispatch(pushFirebaseError(error));
      });
  }
}

export function deleteMenuItem(id, type) {
  return (dispatch) => {
    return databaseRef.child(type).child(id).remove()
      .then((ref) => {
        dispatch(removeMenuItemFromState({ id, type }));
      })
      .catch((error) => {
        dispatch(pushFirebaseError(error));
      });
  }
}

export function removeMenuItemFromState(values) {
  return { 
    type: 'REMOVE_MENU_ITEM',
    values
  }
}

export function updateMenuItem(values) {
  return { 
    type: 'UPDATE_MENU_ITEM',
    values
  }
}

export function saveMenuItemToState(values) {
  return {
    type: 'SAVE_MENU_ITEM',
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
          item.id = key;
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

export function addUserAuthStatusToState(value) {
  return {
    type: 'USER_AUTH_STATUS',
    value
  }
}
