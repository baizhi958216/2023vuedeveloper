import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  usersCollection,
  addDoc,
} from "@/includes/firebase";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    async register(values) {
      await createUserWithEmailAndPassword(
        getAuth(),
        values.email,
        values.password
      );
      await addDoc(usersCollection, {
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
      });

      this.userLoggedIn = true;
    },
  },
});
