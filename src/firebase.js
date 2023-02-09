import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5G8ejEsGft29nMRbDrgLvhBp6X_5iUHo",
  authDomain: "hello-chat-naim.firebaseapp.com",
  projectId: "hello-chat-naim",
  storageBucket: "hello-chat-naim.appspot.com",
  messagingSenderId: "946033554004",
  appId: "1:946033554004:web:4216717e0e84b926be33c1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


