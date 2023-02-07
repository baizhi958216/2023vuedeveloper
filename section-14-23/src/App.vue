<template>
  <app-header />

  <router-view></router-view>

  <app-player />

  <auth />
</template>
<script>
import AppHeader from "./components/Header.vue";
import Auth from "./components/Auth.vue";
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";
import { getAuth } from "./includes/firebase";
import AppPlayer from "./components/Player.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    Auth,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (getAuth().currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>
