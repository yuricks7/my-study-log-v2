// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-4D-VZzGptZ3urCD-bUBxXdnpLcrt9yo",
  authDomain: "my-study-log-cd03c.firebaseapp.com",
  projectId: "my-study-log-cd03c",
  storageBucket: "my-study-log-cd03c.firebasestorage.app",
  messagingSenderId: "206852992757",
  appId: "1:206852992757:web:5553e8cd4721cca6181fbc",
  measurementId: "G-8H0X3X9WJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);