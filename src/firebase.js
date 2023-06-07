
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB84gsvSdKnfIzrhsHTv-fO3aCIup4L7SY",
    authDomain: "medictime-cb0ef.firebaseapp.com",
    projectId: "medictime-cb0ef",
    storageBucket: "medictime-cb0ef.appspot.com",
    messagingSenderId: "318324349902",
    appId: "1:318324349902:web:e8719c3add71eb64c5a99f"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth};