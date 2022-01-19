// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBwyvQiQNVZ6WcRceI_HlqphsWBft4j2lo",
//     authDomain: "digiart-a90b0.firebaseapp.com",
//     projectId: "digiart-a90b0",
//     storageBucket: "digiart-a90b0.appspot.com",
//     messagingSenderId: "340517510636",
//     appId: "1:340517510636:web:1a561e0302f6e218b3b4c9",
//     measurementId: "G-07XH1Y1MLH",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDhYJAPsD7tVujtLmMIlHakXVdNkWyc4_Y",
  authDomain: "capstone-e452d.firebaseapp.com",
  projectId: "capstone-e452d",
  storageBucket: "capstone-e452d.appspot.com",
  messagingSenderId: "266376065424",
  appId: "1:266376065424:web:6b16e8c4a856431d7d8315",
  measurementId: "G-BRS5MKJLWX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore();
export const auth = getAuth(app);
// export const storage = getStorage();
export default db;
