// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkG4R_UM5FS7yyTQoxFjImIyAbrxm0AXM",
  authDomain: "verisart-ct.firebaseapp.com",
  projectId: "verisart-ct",
  storageBucket: "verisart-ct.appspot.com",
  messagingSenderId: "643199186651",
  appId: "1:643199186651:web:207200c30b0fa66ceb7efe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
