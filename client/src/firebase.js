// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2-74f5f.firebaseapp.com",
  projectId: "mern-estate-2-74f5f",
  storageBucket: "mern-estate-2-74f5f.appspot.com",
  messagingSenderId: "828674401289",
  appId: "1:828674401289:web:456a081222340646e644d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
