// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtDmm6iJf4PIZtpJXfRRd8W-XKjuHxhgA",
  authDomain: "sparta-1e178.firebaseapp.com",
  projectId: "sparta-1e178",
  storageBucket: "sparta-1e178.appspot.com",
  messagingSenderId: "916403747858",
  appId: "1:916403747858:web:0b8f305adc6a5709612ccb",
  measurementId: "G-L8YQRNY77F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
