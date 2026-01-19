import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdVEgc1_dGX2yzuH-54Jm0lqOb53qUcso",
  authDomain: "legassy-cms.firebaseapp.com",
  projectId: "legassy-cms",
  storageBucket: "legassy-cms.firebasestorage.app",
  messagingSenderId: "473132006186",
  appId: "1:473132006186:web:aa7d14e6b7d843bdefbc53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);

export default app;
