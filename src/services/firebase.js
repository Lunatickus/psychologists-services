import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
console.log(import.meta.env.VITE_API_KEY)
console.log(process.env.VITE_API_KEY)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "psychologists-services-34aff.firebaseapp.com",
  databaseURL:
    "https://psychologists-services-34aff-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-services-34aff",
  storageBucket: "psychologists-services-34aff.appspot.com",
  messagingSenderId: "929653984407",
  appId: "1:929653984407:web:9705dd7059f1afc8652dd2",
  measurementId: "G-S514SV57BM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase();
