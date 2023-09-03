import { initializeApp } from 'firebase/app';
import { getAuth , GoogleAuthProvider} from "firebase/auth";
import firebase from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore';


/*const firebaseConfig = {
  apiKey: "AIzaSyBOdBzVMt2zl64zUscNIJCUZnrtgdVHV7Y",
  authDomain: "linkedin-dce1b.firebaseapp.com",
  projectId: "linkedin-dce1b",
  storageBucket: "linkedin-dce1b.appspot.com",
  messagingSenderId: "498306376966",
  appId: "1:498306376966:web:105b2afb1f1870b24f6a87",
  measurementId: "G-2QS4Z7EG34"
};*/
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7hjdoNyMi9heBa3b3osJvLFf-kGzZVb0",
  authDomain: "rough-c9761.firebaseapp.com",
  projectId: "rough-c9761",
  storageBucket: "rough-c9761.appspot.com",
  messagingSenderId: "968808449030",
  appId: "1:968808449030:web:0661d4fcbc450625b8ef87",
  measurementId: "G-TRMGRVCSXE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
const db = getFirestore(app);

export {auth , provider , storage , db}; 