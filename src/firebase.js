import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.Firebase_API_KEY,
  authDomain: "hello-chat-naim.firebaseapp.com",
  projectId: "hello-chat-naim",
  storageBucket: "hello-chat-naim.appspot.com",
  messagingSenderId: process.env.Firebase_Message_Sender_ID,
  appId: process.env.Firebase_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

