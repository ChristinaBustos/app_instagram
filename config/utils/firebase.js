import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth,getReactNativePersistence } from "firebase/auth/react-native";


const firebaseConfig = {
  apiKey: "AIzaSyDODwLOG5nEEvP5_xOVFuFyH_S9IvFNiYA",
  authDomain: "insta-1fb5a.firebaseapp.com",
  projectId: "insta-1fb5a",
  storageBucket: "insta-1fb5a.appspot.com",
  messagingSenderId: "257612812626",
  appId: "1:257612812626:web:e041bb6b1a69bf8d402a8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{persistence: getReactNativePersistence(AsyncStorage)});