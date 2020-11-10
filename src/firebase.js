import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDqLJ9VaMh2qDOfGNpAByZzFF-O3SivMYA",
    authDomain: "think-piece-5a2c9.firebaseapp.com",
    databaseURL: "https://think-piece-5a2c9.firebaseio.com",
    projectId: "think-piece-5a2c9",
    storageBucket: "think-piece-5a2c9.appspot.com",
    messagingSenderId: "789396042944",
    appId: "1:789396042944:web:5f1b6919d7dafd4628a925",
    measurementId: "G-54ZPVQ906Y"
  };

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

const settings = { timestampInSnapshots: true };
firestore.settings(settings);

window.firebase = firebase;

export default firebase;