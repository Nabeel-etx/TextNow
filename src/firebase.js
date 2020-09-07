import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCKmVlViSpI0ouW5tpGQmzDyGcInBqcYwg",
    authDomain: "textnow-bea34.firebaseapp.com",
    databaseURL: "https://textnow-bea34.firebaseio.com",
    projectId: "textnow-bea34",
    storageBucket: "textnow-bea34.appspot.com",
    messagingSenderId: "963148744410",
    appId: "1:963148744410:web:40d1738abdd28c6fb2c7e3",
    measurementId: "G-FRX1FHZMXE"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db