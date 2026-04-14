// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPdwINYzo9CPvEIt2mqSOUOcNHjIn8VDM",
  authDomain: "tech-startup-a81b7.firebaseapp.com",
  projectId: "tech-startup-a81b7",
  storageBucket: "tech-startup-a81b7.firebasestorage.app",
  messagingSenderId: "732360239615",
  appId: "1:732360239615:web:b1f20e457645dd905ddfca",
  measurementId: "G-GGP0WWH8Q9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;