import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7Sf8FDkN6Vs2L6mM2KQVNcW3p74p2IVs",
  authDomain: "http-coffee.firebaseapp.com",
  projectId: "http-coffee",
  storageBucket: "http-coffee.appspot.com",
  messagingSenderId: "51315625886",
  appId: "1:51315625886:web:d608b2c3a0397ef365d08f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
