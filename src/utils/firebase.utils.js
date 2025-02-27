// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBr-x0sfKfezjnYAzU79Si2weA0DiiL5g",
  authDomain: "farm-machinery-parts-ni.firebaseapp.com",
  projectId: "farm-machinery-parts-ni",
  storageBucket: "farm-machinery-parts-ni.firebasestorage.app",
  messagingSenderId: "827347336614",
  appId: "1:827347336614:web:b339bc9a5fcae9fcd9e367",
  measurementId: "G-CH93LP94ZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth, app}