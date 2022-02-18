// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Jrxsq-7fgFiY0deF8P0OrurardIDzzo",
  authDomain: "ecommer-miniature.firebaseapp.com",
  projectId: "ecommer-miniature",
  storageBucket: "ecommer-miniature.appspot.com",
  messagingSenderId: "253075911347",
  appId: "1:253075911347:web:7ed41e693f987907c8b6c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);