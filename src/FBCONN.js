import firebase from 'firebase';

  // Initialize Firebase
  let config = {
    apiKey: "xxxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxx"
  };
  firebase.initializeApp(config);

  export default firebase;
