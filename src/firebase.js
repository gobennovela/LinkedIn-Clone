import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC807FRnlC8BCx1DZK8kKZyJfDVntDQ0Zs",
    authDomain: "linkedin-clone-ben.firebaseapp.com",
    projectId: "linkedin-clone-ben",
    storageBucket: "linkedin-clone-ben.appspot.com",
    messagingSenderId: "863555807585",
    appId: "1:863555807585:web:1ba5a748632201948b3d20"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();


  export {db, auth};