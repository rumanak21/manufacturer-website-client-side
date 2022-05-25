// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtq-Dr3kpgF7HuYqqVN89HcpqqEusfBxA",
  authDomain: "electric-tools-17384.firebaseapp.com",
  projectId: "electric-tools-17384",
  storageBucket: "electric-tools-17384.appspot.com",
  messagingSenderId: "502788067279",
  appId: "1:502788067279:web:63601de0d90a9446740cba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;