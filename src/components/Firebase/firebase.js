import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCVHK2sUZ3xS56tkG1a3TdVi3sfVb9qbRs",
  authDomain: "listzorg.firebaseapp.com",
  databaseURL: "https://listzorg.firebaseio.com",
  projectId: "listzorg",
  storageBucket: "listzorg.appspot.com",
  messagingSenderId: "1015340714773",
  appId: "1:1015340714773:web:439bac938f95c8ea46771c"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
