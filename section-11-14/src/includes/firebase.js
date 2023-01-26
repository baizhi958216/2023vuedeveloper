import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { collection, setDoc, getFirestore, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDT5kNloiw7uhhBLdRHezeVNg3QqZDhx1s",
  authDomain: "music-9a6d5.firebaseapp.com",
  projectId: "music-9a6d5",
  storageBucket: "music-9a6d5.appspot.com",
  appId: "1:860898955430:web:145066f681bdd6c1b7e467",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersCollection = collection(db, "users");

export {
  getAuth,
  createUserWithEmailAndPassword,
  usersCollection,
  setDoc,
  doc,
  db,
  updateProfile,
};
