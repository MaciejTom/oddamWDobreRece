import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBKWvxPSjtrBT3hvBTktMqjgwAH50FvQe8",
    authDomain: "oddamwdobrerece-a346e.firebaseapp.com",
    databaseURL: "https://oddamwdobrerece-a346e.firebaseio.com",
    projectId: "oddamwdobrerece-a346e",
    storageBucket: "oddamwdobrerece-a346e.appspot.com",
    messagingSenderId: "680721460671",
    appId: "1:680721460671:web:6e5e4b0ad066579876c50a",
    measurementId: "G-0WDFSCWJ01"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
