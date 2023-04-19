// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKrGOuGhXz0Zu8lOlOe1PQtKCdPAxjHys",
  authDomain: "thebobaway.firebaseapp.com",
  projectId: "thebobaway",
  storageBucket: "thebobaway.appspot.com",
  messagingSenderId: "364591982281",
  appId: "1:364591982281:web:d2f18cc6f5650fb5508f18",
  measurementId: "G-MN7VBGQRSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);