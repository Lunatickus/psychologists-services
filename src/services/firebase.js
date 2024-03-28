import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM58xCHiU9ld_fIMWuIfFZ5XtW-vizgTs",
  authDomain: "psychologists-services-34aff.firebaseapp.com",
  projectId: "psychologists-services-34aff",
  storageBucket: "psychologists-services-34aff.appspot.com",
  messagingSenderId: "929653984407",
  appId: "1:929653984407:web:9705dd7059f1afc8652dd2",
  measurementId: "G-S514SV57BM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
