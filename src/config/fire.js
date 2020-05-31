import * as firebase from "firebase/app";
import "firebase/auth";
import app from "firebase/app";
import 'firebase/database';

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
  class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***

    getCurrentUser = () => this.auth.currentUser?.email

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

}

  const fire = firebase.initializeApp(firebaseConfig);



  export default fire;
