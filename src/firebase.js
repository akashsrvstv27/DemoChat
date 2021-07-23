// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB-Ck6HpcBnKqopFf6cK6E1QRpmiTYW8V8",
    authDomain: "demochat-84888.firebaseapp.com",
    projectId: "demochat-84888",
    storageBucket: "demochat-84888.appspot.com",
    messagingSenderId: "1074685355553",
    appId: "1:1074685355553:web:b453762bc8165fe5d1e560",
    measurementId: "G-Z1SWRF74TN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

export default database;