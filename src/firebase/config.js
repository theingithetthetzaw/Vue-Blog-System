import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCFUsxFK94UAWpnA-N41bNt_L4gKjr-ZO8",
    authDomain: "vue-blod-system.firebaseapp.com",
    projectId: "vue-blod-system",
    storageBucket: "vue-blod-system.appspot.com",
    messagingSenderId: "846977650902",
    appId: "1:846977650902:web:727b387b14c1c1b76e7977"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db=firebase.firestore();

export {db}; 