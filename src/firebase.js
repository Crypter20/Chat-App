import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTZU-p7Zu0Imh8BCDXTNinfXfoWSxUC14",
  authDomain: "whatsapp-clone-b5c93.firebaseapp.com",
  projectId: "whatsapp-clone-b5c93",
  storageBucket: "whatsapp-clone-b5c93.appspot.com",
  messagingSenderId: "523210039344",
  appId: "1:523210039344:web:46fdb23335267d9a188df5",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
