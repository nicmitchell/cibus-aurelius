import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();