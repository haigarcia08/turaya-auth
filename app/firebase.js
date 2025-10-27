// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Wr9IKnvVTki4LmxdCTnFjw13JlIwBDU",
  authDomain: "haidie-auth.firebaseapp.com",
  projectId: "haidie-auth",
  storageBucket: "haidie-auth.firebasestorage.app",
  messagingSenderId: "632369556369",
  appId: "1:632369556369:web:8724bf6784ddd67b100830",
  measurementId: "G-R4MMQMEWHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);