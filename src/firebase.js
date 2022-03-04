import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBMgSs2SkEl0L1IJ8d1VWtq62mJwRazGjg",
  authDomain: "ninjo-99ddf.firebaseapp.com",
  databaseURL: "https://ninjo-99ddf-default-rtdb.firebaseio.com",
  projectId: "ninjo-99ddf",
  storageBucket: "ninjo-99ddf.appspot.com",
  messagingSenderId: "980229935860",
  appId: "1:980229935860:web:5d192caac80649a5e1c4a1",
  measurementId: "G-XRQ43Y3MNJ"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

var db = firebaseApp.firestore()

export { db };