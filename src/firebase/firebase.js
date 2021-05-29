import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzZcmRsNwqTpXGLoxX5VwVpDwkL05qXqs",
    authDomain: "italk-de4bf.firebaseapp.com",
    projectId: "italk-de4bf",
    storageBucket: "italk-de4bf.appspot.com",
    messagingSenderId: "148525540740",
    appId: "1:148525540740:web:3f3e994cb9a8c6a039a9d1",
    measurementId: "G-ML2XBEVB42"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;
