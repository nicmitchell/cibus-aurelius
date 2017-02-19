import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export default database;