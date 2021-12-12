// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0gxgGh8zJfd8hvwlddLf2t8gQi961nR8",
  authDomain: "nextjs-firebase-d6057.firebaseapp.com",
  projectId: "nextjs-firebase-d6057",
  storageBucket: "nextjs-firebase-d6057.appspot.com",
  messagingSenderId: "702707209530",
  appId: "1:702707209530:web:c126ca13d630a65b656c03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db, app };
