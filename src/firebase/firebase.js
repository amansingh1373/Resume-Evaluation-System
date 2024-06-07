// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXR6pqpX3iJ6IQsmhWwfBHkbOz7t1yrBg",
  authDomain: "resume-scorer-4f7b0.firebaseapp.com",
  projectId: "resume-scorer-4f7b0",
  storageBucket: "resume-scorer-4f7b0.appspot.com",
  messagingSenderId: "449895981710",
  appId: "1:449895981710:web:4a7a20595fa8c500fedfdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {app,auth};