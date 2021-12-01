import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAOnXonjk6SHoEW3ZulOOaQDNVgJzxyRgY",
    authDomain: "e-ride-e9e60.firebaseapp.com",
    projectId: "e-ride-e9e60",
    storageBucket: "e-ride-e9e60.appspot.com",
    messagingSenderId: "510778591793",
    appId: "1:510778591793:web:4963d8ab43496d429ca310"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


