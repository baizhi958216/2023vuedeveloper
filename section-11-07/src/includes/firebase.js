import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT5kNloiw7uhhBLdRHezeVNg3QqZDhx1s",
  authDomain: "music-9a6d5.firebaseapp.com",
  projectId: "music-9a6d5",
  storageBucket: "music-9a6d5.appspot.com",
  appId: "1:860898955430:web:145066f681bdd6c1b7e467",
};
const app = initializeApp(firebaseConfig);
const usersCollection = collection(getFirestore(app), "users");

export { getAuth, createUserWithEmailAndPassword, usersCollection, addDoc };
