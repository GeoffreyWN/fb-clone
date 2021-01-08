import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAo4_QVWQuB5yi9AY_6_GZ628dWgeV4g_c",
    authDomain: "fb-clone-29ac0.firebaseapp.com",
    projectId: "fb-clone-29ac0",
    storageBucket: "fb-clone-29ac0.appspot.com",
    messagingSenderId: "31180417620",
    appId: "1:31180417620:web:803e2530f3643768a05bc1"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;