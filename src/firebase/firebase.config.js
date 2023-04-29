// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8rHKdn9c5OnvlpbxrkyUDrxHSHnPphJQ",
  authDomain: "recap-auth-firebase-tailwind.firebaseapp.com",
  projectId: "recap-auth-firebase-tailwind",
  storageBucket: "recap-auth-firebase-tailwind.appspot.com",
  messagingSenderId: "318891534579",
  appId: "1:318891534579:web:62ec1b22b74ab6946daf86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;