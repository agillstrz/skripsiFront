// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMTQO_nC3BWBJBkTl2CT0P0YKFPWkljMI",
  authDomain: "kujangschool.firebaseapp.com",
  projectId: "kujangschool",
  storageBucket: "kujangschool.appspot.com",
  messagingSenderId: "16173842090",
  appId: "1:16173842090:web:c5ec8f88c86205f195dad3",
  measurementId: "G-NY5JH74ERZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
