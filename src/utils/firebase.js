// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwyvQiQNVZ6WcRceI_HlqphsWBft4j2lo",
  authDomain: "digiart-a90b0.firebaseapp.com",
  projectId: "digiart-a90b0",
  storageBucket: "digiart-a90b0.appspot.com",
  messagingSenderId: "340517510636",
  appId: "1:340517510636:web:1a561e0302f6e218b3b4c9",
  measurementId: "G-07XH1Y1MLH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore();
export const auth = getAuth(app)

export default db
