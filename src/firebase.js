// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRSBA7BxxUpMCkx2H6ZZGPbYCsET9NARs",
  authDomain: "react-auth-firebase-email-pass.firebaseapp.com",
  projectId: "react-auth-firebase-email-pass",
  storageBucket: "react-auth-firebase-email-pass.appspot.com",
  messagingSenderId: "935784979039",
  appId: "1:935784979039:web:c099676281ff34570699ea",
  measurementId: "G-52E49W4HFY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;
