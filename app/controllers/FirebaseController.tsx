// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5lbZeDWRMA1jgMFTQJBsZvcneEV-bdWY",
  authDomain: "next-lms-c2720.firebaseapp.com",
  projectId: "next-lms-c2720",
  storageBucket: "next-lms-c2720.appspot.com",
  messagingSenderId: "288250739359",
  appId: "1:288250739359:web:3514972d4b71fc6f4240aa",
  measurementId: "G-J0TMH1M0YQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth: Auth = getAuth();
