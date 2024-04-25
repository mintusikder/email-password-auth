// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsMTKcfnicAoVISldNbHEB-tuQIU_17eo",
  authDomain: "email-password-auth-40501.firebaseapp.com",
  projectId: "email-password-auth-40501",
  storageBucket: "email-password-auth-40501.appspot.com",
  messagingSenderId: "1058874611140",
  appId: "1:1058874611140:web:7521796df44d8ac2574091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);
export default auth
