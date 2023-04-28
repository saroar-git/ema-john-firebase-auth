// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhaAjxCNmXfVQrkOCH6CZPjpxseWUBq6Y",
    authDomain: "ema-john-firebase-auth-c8a6e.firebaseapp.com",
    projectId: "ema-john-firebase-auth-c8a6e",
    storageBucket: "ema-john-firebase-auth-c8a6e.appspot.com",
    messagingSenderId: "165241778487",
    appId: "1:165241778487:web:9c59c128e9d79a6d0d2ab2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;