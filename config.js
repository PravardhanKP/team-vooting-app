import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAUQMJIfg_9SP_anw9ivuR6QcZM-Ny37T4",
    authDomain: "fire-data-b605e.firebaseapp.com",
    databaseURL: "https://fire-data-b605e-default-rtdb.firebaseio.com",
    projectId: "fire-data-b605e",
    storageBucket: "fire-data-b605e.appspot.com",
    messagingSenderId: "299168684532",
    appId: "1:299168684532:web:f30e708066aae227c581a1",
    measurementId: "G-TCSHGKWV3G"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();