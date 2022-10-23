// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyA96H-RCKygMwTgkofJVlfnofHFgrhzrLs",
    authDomain: "todo-937e0.firebaseapp.com",
    projectId: "todo-937e0",
    storageBucket: "todo-937e0.appspot.com",
    messagingSenderId: "179888380297",
    appId: "1:179888380297:web:d23b249c9ac9e9f9b8a958"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)








