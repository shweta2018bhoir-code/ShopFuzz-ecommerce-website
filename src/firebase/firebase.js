// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLMOVEXkNrdiWJVhv6AiLZFQZhlwaqhS8",
  authDomain: "shopfuzz-79788.firebaseapp.com",
  projectId: "shopfuzz-79788",
  storageBucket: "shopfuzz-79788.firebasestorage.app",
  messagingSenderId: "26055356745",
  appId: "1:26055356745:web:3b313f52cce7d2f6922a98",
  measurementId: "G-BQ2MFPH0NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();