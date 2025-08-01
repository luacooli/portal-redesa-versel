// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBJpcdVLGnGEX-cW5y46zDJtNy6_FGMpLU",
  authDomain: "portal-redesa.firebaseapp.com",
  projectId: "portal-redesa",
  storageBucket: "portal-redesa.firebasestorage.app",
  messagingSenderId: "1031316363351",
  appId: "1:1031316363351:web:ce86d433ace48fbea8eb12",
  measurementId: "G-GTPGT49QCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);