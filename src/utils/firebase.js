// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnlRQrVxs6-Ld1szzWM5Y2DsSYjPq6gu4",
  authDomain: "netflixgpt-e6b5c.firebaseapp.com",
  projectId: "netflixgpt-e6b5c",
  storageBucket: "netflixgpt-e6b5c.appspot.com",
  messagingSenderId: "125798726255",
  appId: "1:125798726255:web:6eb50252b767c7d3bbeb9a",
  measurementId: "G-VR4Q4CCQXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth();
