import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: '',
  authDomain: 'react-slack-clone-6e387.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-6e387.firebaseio.com',
  projectId: 'react-slack-clone-6e387',
  storageBucket: 'react-slack-clone-6e387.appspot.com',
  messagingSenderId: '712708512534'
};
firebase.initializeApp(config);

export default firebase;
