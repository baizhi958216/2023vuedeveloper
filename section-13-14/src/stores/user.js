import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  setDoc,
  doc,
  db,
  updateProfile,
  signInWithEmailAndPassword,
} from "@/includes/firebase";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      const userCred = await createUserWithEmailAndPassword(
        getAuth(),
        values.email,
        values.password
      );

      await setDoc(doc(db, "users", userCred.user.uid), {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      });

      await updateProfile(getAuth().currentUser, {
        displayName: values.name,
      });

      this.userLoggedIn = true;
    },
    async authenticate(values) {
      await signInWithEmailAndPassword(
        getAuth(),
        values.email,
        values.password
      );
      this.userLoggedIn = true;
    },
    async signOut() {
      await getAuth().signOut();
      this.userLoggedIn = false;
    },
  },
});
