import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBMgSs2SkEl0L1IJ8d1VWtq62mJwRazGjg",
    authDomain: "campaign-questions.firebaseapp.com",
    projectId: "campaign-questions",
    storageBucket: "campaign-questions.appspot.com",
    messagingSenderId: "980229935860",
    appId: "1:980229935860:web:5d192caac80649a5e1c4a1",
    measurementId: "G-XRQ43Y3MNJ"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

var db = firebaseApp.firestore()

export { db };