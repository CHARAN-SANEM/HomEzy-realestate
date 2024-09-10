// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Add this line

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "homezy-8c97c.firebaseapp.com",
  projectId: "homezy-8c97c",
  storageBucket: "homezy-8c97c.appspot.com",
  messagingSenderId: "768684182045",
  appId: "1:768684182045:web:7024e827a6aeefd5e494f4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app); // Add this line
