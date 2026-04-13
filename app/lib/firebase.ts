import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ktu-hFJpCpGMGD5sExB1GhW7KcBFQSA",
  authDomain: "inigos-booking-system.firebaseapp.com",
  projectId: "inigos-booking-system",
  storageBucket: "inigos-booking-system.appspot.com",
  messagingSenderId: "344719609741",
  appId: "1:344719609741:web:7122100c2a4c698b3b37c4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
