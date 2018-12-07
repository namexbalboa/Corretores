import firebase from 'firebase';

  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyCSlfrBnrbJmQClXC410VhpOvPpY28iEpc",
    authDomain: "appimob-f723e.firebaseapp.com",
    databaseURL: "https://appimob-f723e.firebaseio.com",
    projectId: "appimob-f723e",
    storageBucket: "appimob-f723e.appspot.com",
    messagingSenderId: "426777779766"
  };
  firebase.initializeApp(config);

  export default firebase;