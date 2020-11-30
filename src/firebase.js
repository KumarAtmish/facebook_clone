import firebase from 'firebase';
//import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_OSSawNBRnFjAfxqwuyqcAfmOxzhKfNk",
    authDomain: "facebook-82489.firebaseapp.com",
    databaseURL: "https://facebook-82489.firebaseio.com",
    projectId: "facebook-82489",
    storageBucket: "facebook-82489.appspot.com",
    messagingSenderId: "1050702749734",
    appId: "1:1050702749734:web:dcf9317362243181e606e7",
    measurementId: "G-HK8CFEJGMP"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };