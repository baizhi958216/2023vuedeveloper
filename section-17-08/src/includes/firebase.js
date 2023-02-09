import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  setDoc,
  getFirestore,
  doc,
  addDoc,
  getDocs,
  where,
  query,
  updateDoc,
  deleteDoc,
  getDoc,
  limit,
  orderBy,
  startAfter,
  enableIndexedDbPersistence,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDT5kNloiw7uhhBLdRHezeVNg3QqZDhx1s",
  authDomain: "music-9a6d5.firebaseapp.com",
  projectId: "music-9a6d5",
  storageBucket: "music-9a6d5.appspot.com",
  appId: "1:860898955430:web:145066f681bdd6c1b7e467",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

/*  
  Unable to authenticate
  Storage is limited
  Unable to upload files
*/
enableIndexedDbPersistence(db).catch((err) => {
  console.log(`Firebase persistence error ${err.code}`);
});

const usersCollection = collection(db, "users");
const songsCollection = collection(db, "songs");
const commentsCollection = collection(db, "comments");

export {
  getAuth,
  createUserWithEmailAndPassword,
  usersCollection,
  setDoc,
  doc,
  db,
  updateProfile,
  signInWithEmailAndPassword,
  storage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
  songsCollection,
  addDoc,
  where,
  query,
  getDocs,
  updateDoc,
  deleteObject,
  deleteDoc,
  getDoc,
  limit,
  orderBy,
  startAfter,
  commentsCollection,
};
