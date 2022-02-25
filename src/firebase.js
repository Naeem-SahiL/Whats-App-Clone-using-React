// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDikPK4lXs-vAyBTsi1J5JiCgG5j9CGl-8",
    authDomain: "whatsapp-clone-54fba.firebaseapp.com",
    projectId: "whatsapp-clone-54fba",
    storageBucket: "whatsapp-clone-54fba.appspot.com",
    messagingSenderId: "965689797495",
    appId: "1:965689797495:web:1c3b0cfe56c036e8a2cf72",
    measurementId: "G-EKG4J0DNBG"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;