import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {

    apiKey: "AIzaSyB71oipDZHeArG2nRRhJqC3eUYqzKlu8tg",
    authDomain: "test-ef11d.firebaseapp.com",
    projectId: "test-ef11d",
    storageBucket: "test-ef11d.appspot.com",
    messagingSenderId: "554474746904",
    appId: "1:554474746904:web:a6605087daeb9dfa8b7f6d"
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export {firebase};